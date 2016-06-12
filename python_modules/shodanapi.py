#coding: utf-8

''' This is a basic API request script which was written 
in Python3.5 for contacting a database and getting the count
of the might vulnerable "bugs" for sending it to the Node.js backend'''

import json
from sys import argv

import aiohttp
import asyncio

city = argv[1]
query = "city:'{}'".format(city)
apiKey = "lBHY1f9tprscJ6L8EFCtbxhhga7z3Mxj"

countUrl = "https://api.shodan.io/shodan/host/count?key={}&query={}".format(apiKey, query)

async def apiRequest(url):
	async with aiohttp.get(url) as response:
		return await response.json()

async def jsonParse():
	jsonCount = await apiRequest(countUrl)
	count = jsonCount["total"]

	jsonDump = ({"city":city, "total":count})

	jsondict = json.dumps(jsonDump, sort_keys=True)

	print(jsondict) #output is for the communication betweenn Python and shodan.js


loop = asyncio.get_event_loop()
loop.run_until_complete(jsonParse())