import pandas as pd
import requests
from bs4 import BeautifulSoup

qb_url = 'https://www.pro-football-reference.com/years/2021/passing.htm'

# Send a GET request to the qb_url
qb_res = requests.get(qb_url)

# Parse the HTML content using BeautifulSoup
qb_soup = BeautifulSoup(qb_res.content, 'html.parser')

# Find the table containing QB stats
qb_stats = qb_soup.find(name='table', attrs={'id': 'passing'})

# Creating a list of dictionaries to then convert into a Pandas DataFrame
qb_stats_list = []

for row in qb_stats.find_all('tr')[1:]:  # Exclude the first 'tr' since it's the table's title head
    player = {}
    columns = row.find_all('td')  # Get all <td> elements in the row
    
    if len(columns) >= 31:  # Check if the row has enough columns
        player['Name'] = columns[1].find('a').text.strip() if columns[1].find('a') else 'Not Listed'
        player['Team'] = columns[2].find('a').text.strip() if columns[2].find('a') else 'Not Listed'
        player['Age'] = columns[3].text.strip()
        player['Pass Yards'] = columns[11].text.strip()
        player['Comp %'] = columns[10].text.strip()
        player['Passing TDs'] = columns[12].text.strip()
        player['Ints'] = columns[13].text.strip()
        player['Int %'] = columns[14].text.strip()
        player['Succ &'] = columns[16].text.strip()
        player['Passer Rating'] = columns[24].text.strip()
        player['QBR'] = columns[25].text.strip()
        player['4th Qtr Comebacks'] = columns[29].text.strip()
        player['Game Winning Drives'] = columns[30].text.strip()
    else:
        # Handle cases where the row does not have enough columns
        player = {'Name': 'Not Listed', 'Team': 'Not Listed', 'Age': 'Not Listed',
                  'Pass Yards': 'Not Listed', 'Comp %': 'Not Listed',
                  'Passing TDs': 'Not Listed', 'Ints': 'Not Listed', 'Int %': 'Not Listed',
                  'Succ &': 'Not Listed', 'Passer Rating': 'Not Listed', 'QBR': 'Not Listed',
                  '4th Qtr Comebacks': 'Not Listed', 'Game Winning Drives': 'Not Listed'}
    
    qb_stats_list.append(player)

# Convert the list of dictionaries into a DataFrame
qb_df = pd.DataFrame(qb_stats_list)
print(qb_df)