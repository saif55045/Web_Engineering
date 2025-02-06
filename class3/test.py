import requests
from bs4 import BeautifulSoup
import csv

# Base URL of the website
BASE_URL = "https://papers.nips.cc"

# Function to scrape the main page and get paper links
def get_paper_links(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Find all paper links (adjust the selector as needed)
    paper_links = []
    for link in soup.select("a[href^='/paper/']"):
        paper_links.append(BASE_URL + link["href"])
    
    return paper_links

# Function to scrape individual paper pages
def scrape_paper_page(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Extract title
    title = soup.find("h4", class_="title").text.strip()
    
    # Extract authors
    authors = [author.text.strip() for author in soup.select(".authors a")]
    
    # Extract abstract (adjust the selector as needed)
    abstract = soup.find("p", class_="abstract").text.strip()
    
    return {
        "title": title,
        "authors": authors,
        "abstract": abstract,
        "url": url
    }

# Main function to scrape the website
def scrape_nips_website():
    main_url = "https://papers.nips.cc/"
    paper_links = get_paper_links(main_url)
    
    # Scrape each paper page
    papers_data = []
    for link in paper_links:
        print(f"Scraping {link}...")
        paper_data = scrape_paper_page(link)
        papers_data.append(paper_data)
    
    # Save data to a CSV file
    with open("nips_papers.csv", "w", newline="", encoding="utf-8") as csvfile:
        fieldnames = ["title", "authors", "abstract", "url"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for paper in papers_data:
            writer.writerow(paper)
    
    print("Scraping completed. Data saved to 'nips_papers.csv'.")

# Run the scraper
scrape_nips_website()