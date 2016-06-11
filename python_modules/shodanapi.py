#coding: utf-8

import json
from sys import argv

import aiohttp
import asyncio

city = "Ulm" #argv[2]
query = "city:{} country:DE".format(city)
apiKey = "lBHY1f9tprscJ6L8EFCtbxhhga7z3Mxj"

countUrl = "https://api.shodan.io/shodan/host/count?key={}&query={}".format(apiKey, query)

async def apiRequest(url):
	async with aiohttp.get(url) as response:
		return await response.json()

async def main():
	jsonCount = await apiRequest(countUrl)
	count = jsonCount["total"]

	jsonDump = ({"city":city, "total":count})

	jsondict = json.dumps(jsonDump, sort_keys=True)

	print(jsondict)


loop = asyncio.get_event_loop()
loop.run_until_complete(main())

