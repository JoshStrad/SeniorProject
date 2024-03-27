import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

okc_url = (f'https://www.basketball-reference.com/teams/OKC/2023.html')

# The requests library can send a GET request to the okc_url
okc_res = requests.get(okc_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
okc_soup = BeautifulSoup(okc_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
okc_per_game = okc_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
okc_stats = []

for row in okc_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    okc_stats.append(player)

df = pd.DataFrame(okc_stats)
print(df)


lal_url = (f'https://www.basketball-reference.com/teams/LAL/2023.html')

# The requests library can send a GET request to the lal_url
lal_res = requests.get(lal_url)

# BeautifulSoup library parses the content of an HTML document, in this case  lal_res
lal_soup = BeautifulSoup(lal_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
lal_per_game = lal_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
lal_stats = []

for row in lal_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    okc_stats.append(player)

pd.DataFrame(lal_stats)




gsw_url = (f'https://www.basketball-reference.com/teams/GSW/2023.html')

# The requests library can send a GET request to the okc_url
gsw_res = requests.get(gsw_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
gsw_soup = BeautifulSoup(gsw_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
gsw_per_game = gsw_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
gsw_stats = []

for row in gsw_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    gsw_stats.append(player)

pd.DataFrame(gsw_stats)




phx_url = (f'https://www.basketball-reference.com/teams/PHX/2023.html')

# The requests library can send a GET request to the okc_url
phx_res = requests.get(phx_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
phx_soup = BeautifulSoup(phx_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
phx_per_game = phx_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
phx_stats = []

for row in phx_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    phx_stats.append(player)

pd.DataFrame(phx_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

lac_url = (f'https://www.basketball-reference.com/teams/LAC/2023.html')

# The requests library can send a GET request to the okc_url
lac_res = requests.get(lac_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
lac_soup = BeautifulSoup(lac_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
lac_per_game = lac_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
lac_stats = []

for row in lac_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    lac_stats.append(player)

pd.DataFrame(lac_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

den_url = (f'https://www.basketball-reference.com/teams/DEN/2023.html')

# The requests library can send a GET request to the okc_url
den_res = requests.get(den_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
den_soup = BeautifulSoup(den_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
den_per_game = den_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
den_stats = []

for row in den_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    den_stats.append(player)

pd.DataFrame(den_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

min_url = (f'https://www.basketball-reference.com/teams/MIN/2023.html')

# The requests library can send a GET request to the okc_url
min_res = requests.get(min_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
min_soup = BeautifulSoup(min_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
min_per_game = min_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
min_stats = []

for row in okc_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    min_stats.append(player)

pd.DataFrame(min_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

nop_url = (f'https://www.basketball-reference.com/teams/NOP/2023.html')

# The requests library can send a GET request to the okc_url
nop_res = requests.get(nop_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
nop_soup = BeautifulSoup(nop_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
nop_per_game = nop_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
nop_stats = []

for row in okc_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    nop_stats.append(player)

pd.DataFrame(okc_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

sac_url = (f'https://www.basketball-reference.com/teams/SAC/2023.html')

# The requests library can send a GET request to the okc_url
sac_res = requests.get(sac_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
sac_soup = BeautifulSoup(sac_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
sac_per_game = sac_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
sac_stats = []

for row in okc_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    sac_stats.append(player)

pd.DataFrame(sac_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

dal_url = (f'https://www.basketball-reference.com/teams/DAL/2023.html')

# The requests library can send a GET request to the okc_url
dal_res = requests.get(dal_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
dal_soup = BeautifulSoup(dal_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
dal_per_game = dal_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
dal_stats = []

for row in dal_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    dal_stats.append(player)

pd.DataFrame(dal_stats)




import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

hou_url = (f'https://www.basketball-reference.com/teams/HOU/2023.html')

# The requests library can send a GET request to the okc_url
hou_res = requests.get(hou_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
hou_soup = BeautifulSoup(hou_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
hou_per_game = hou_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
hou_stats = []

for row in hou_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    hou_stats.append(player)

pd.DataFrame(hou_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

uta_url = (f'https://www.basketball-reference.com/teams/UTA/2023.html')

# The requests library can send a GET request to the okc_url
uta_res = requests.get(uta_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
uta_soup = BeautifulSoup(uta_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
uta_per_game = uta_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
uta_stats = []

for row in uta_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    uta_stats.append(player)

pd.DataFrame(uta_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

mem_url = (f'https://www.basketball-reference.com/teams/MEM/2023.html')

# The requests library can send a GET request to the okc_url
mem_res = requests.get(mem_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
mem_soup = BeautifulSoup(mem_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
mem_per_game = mem_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
mem_stats = []

for row in mem_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    mem_stats.append(player)

pd.DataFrame(mem_stats)




import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

por_url = (f'https://www.basketball-reference.com/teams/POR/2023.html')

# The requests library can send a GET request to the okc_url
por_res = requests.get(por_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
por_soup = BeautifulSoup(por_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
por_per_game = por_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
por_stats = []

for row in por_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    por_stats.append(player)

pd.DataFrame(por_stats)




import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

sas_url = (f'https://www.basketball-reference.com/teams/SAS/2023.html')

# The requests library can send a GET request to the okc_url
sas_res = requests.get(sas_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
sas_soup = BeautifulSoup(sas_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
sas_per_game = sas_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
sas_stats = []

for row in sas_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    sas_stats.append(player)

pd.DataFrame(sas_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

bos_url = (f'https://www.basketball-reference.com/teams/BOS/2023.html')

# The requests library can send a GET request to the okc_url
bos_res = requests.get(bos_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
bos_soup = BeautifulSoup(bos_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
bos_per_game = bos_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
bos_stats = []

for row in bos_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    bos_stats.append(player)

pd.DataFrame(bos_stats)




import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

mil_url = (f'https://www.basketball-reference.com/teams/MIL/2023.html')

# The requests library can send a GET request to the okc_url
mil_res = requests.get(mil_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
mil_soup = BeautifulSoup(mil_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
mil_per_game = mil_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
mil_stats = []

for row in mil_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    mil_stats.append(player)

pd.DataFrame(mil_stats)




import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

cle_url = (f'https://www.basketball-reference.com/teams/CLE/2023.html')

# The requests library can send a GET request to the okc_url
cle_res = requests.get(cle_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
cle_soup = BeautifulSoup(cle_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
cle_per_game = cle_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
cle_stats = []

for row in cle_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    cle_stats.append(player)

pd.DataFrame(cle_stats)




import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

nyk_url = (f'https://www.basketball-reference.com/teams/NYK/2023.html')

# The requests library can send a GET request to the okc_url
nyk_res = requests.get(nyk_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
nyk_soup = BeautifulSoup(nyk_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
nyk_per_game = nyk_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
nyk_stats = []

for row in nyk_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    nyk_stats.append(player)

pd.DataFrame(nyk_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

orl_url = (f'https://www.basketball-reference.com/teams/ORL/2023.html')

# The requests library can send a GET request to the okc_url
orl_res = requests.get(orl_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
orl_soup = BeautifulSoup(orl_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
orl_per_game = orl_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
orl_stats = []

for row in orl_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    orl_stats.append(player)

pd.DataFrame(orl_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

ind_url = (f'https://www.basketball-reference.com/teams/IND/2023.html')

# The requests library can send a GET request to the okc_url
ind_res = requests.get(ind_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
ind_soup = BeautifulSoup(ind_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
ind_per_game = ind_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
ind_stats = []

for row in ind_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    ind_stats.append(player)

pd.DataFrame(ind_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

mia_url = (f'https://www.basketball-reference.com/teams/MIA/2023.html')

# The requests library can send a GET request to the okc_url
mia_res = requests.get(mia_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
mia_soup = BeautifulSoup(mia_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
mia_per_game = mia_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
mia_stats = []

for row in mia_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    mia_stats.append(player)

pd.DataFrame(mia_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

phi_url = (f'https://www.basketball-reference.com/teams/PHI/2023.html')

# The requests library can send a GET request to the okc_url
phi_res = requests.get(phi_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
phi_soup = BeautifulSoup(phi_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
phi_per_game = phi_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
phi_stats = []

for row in phi_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    phi_stats.append(player)

pd.DataFrame(phi_stats)




import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

chi_url = (f'https://www.basketball-reference.com/teams/CHI/2023.html')

# The requests library can send a GET request to the okc_url
chi_res = requests.get(chi_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
chi_soup = BeautifulSoup(chi_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
chi_per_game = chi_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
chi_stats = []

for row in chi_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    chi_stats.append(player)

pd.DataFrame(chi_stats)




import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

atl_url = (f'https://www.basketball-reference.com/teams/ATL/2023.html')

# The requests library can send a GET request to the okc_url
atl_res = requests.get(atl_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
atl_soup = BeautifulSoup(atl_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
atl_per_game = atl_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
atl_stats = []

for row in atl_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    atl_stats.append(player)

pd.DataFrame(atl_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

bkn_url = (f'https://www.basketball-reference.com/teams/BKN/2023.html')

# The requests library can send a GET request to the okc_url
bkn_res = requests.get(bkn_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
bkn_soup = BeautifulSoup(bkn_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
bkn_per_game = bkn_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
bkn_stats = []

for row in bkn_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    bkn_stats.append(player)

pd.DataFrame(bkn_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

tor_url = (f'https://www.basketball-reference.com/teams/TOR/2023.html')

# The requests library can send a GET request to the okc_url
tor_res = requests.get(tor_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
tor_soup = BeautifulSoup(tor_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
tor_per_game = tor_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
tor_stats = []

for row in tor_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    tor_stats.append(player)

pd.DataFrame(tor_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

cha_url = (f'https://www.basketball-reference.com/teams/CHO/2023.html')

# The requests library can send a GET request to the okc_url
cha_res = requests.get(cha_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
cha_soup = BeautifulSoup(cha_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
cha_per_game = cha_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
cha_stats = []

for row in cha_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    cha_stats.append(player)

pd.DataFrame(cha_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

wsh_url = (f'https://www.basketball-reference.com/teams/WSH/2023.html')

# The requests library can send a GET request to the okc_url
wsh_res = requests.get(wsh_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
wsh_soup = BeautifulSoup(wsh_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
wsh_per_game = wsh_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
wsh_stats = []

for row in wsh_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    wsh_stats.append(player)

pd.DataFrame(wsh_stats)



import pandas as pd
import requests
from bs4 import BeautifulSoup
import re

det_url = (f'https://www.basketball-reference.com/teams/okc/2023.html')

# The requests library can send a GET request to the okc_url
det_res = requests.get(det_url)

# BeautifulSoup library parses the content of an HTML document, in this case  okc_res
det_soup = BeautifulSoup(det_res.content, 'lxml')

# BeautifulSoup's .find() method searches for a tag and specified attributes, 
# returning the first match 
det_per_game = det_soup.find(name = 'table', attrs = {'id' : 'per_game'})

# Creating a list of dictionaries to then convert into a Pandas Dataframe
det_stats = []

for row in det_per_game.find_all('tr')[1:]:  # Excluding the first 'tr', since that's the table's title head

    player = {}
    player['Name'] = row.find('a').text.strip()
    player['Age'] = row.find('td', {'data-stat' : 'age'}).text
    player['College'] = row.find('td')
    player['Min PG'] = row.find('td', {'data-stat' : 'mp_per_g'}).text
    player['Field Goal %'] = row.find('td', {'data-stat' : 'fg_pct'}).text
    player['Rebounds PG'] = row.find('td', {'data-stat' : 'trb_per_g'}).text
    player['Assists PG'] = row.find('td', {'data-stat' : 'ast_per_g'}).text
    player['Steals PG'] = row.find('td', {'data-stat' : 'stl_per_g'}).text
    player['Blocks PG'] = row.find('td', {'data-stat' : 'blk_per_g'}).text
    player['Turnovers PG'] = row.find('td', {'data-stat' : 'tov_per_g'}).text
    player['Points PG'] = row.find('td', {'data-stat' : 'pts_per_g'}).text
    
    player_url = ('https://www.basketball-reference.com/' + row.find('a').attrs['href'])
    player_rest = requests.get(player_url)
    player_soup = BeautifulSoup(player_rest.content, 'lxml')
    player_info = player_soup.find(name = 'div', attrs = {'itemtype' : 'https://schema.org/Person'})

    player_links= []
    for link in player_info.find_all('a'):
        player_links.append(link.get('href'))

    if 'twitter' in player_links[1]:
        player['Twitter Handle'] = player_links[1].replace('https://twitter.com/', '')
    else:
        player['Twitter Handle'] = 'Not Listed'

    s = str(player_info.find_all('p'))

    weight = re.search('\"weight\">(.*)lb</span>', s)
    position = re.search('Position:\n  </strong>\n (.*)\n\n', s)
    height = re.search('\"height\">(.*)</span>,\xa0<span itemprop="weight', s)
   
    det_stats.append(player)

pd.DataFrame(det_stats)
