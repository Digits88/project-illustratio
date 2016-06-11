#coding: utf-8

import json
from sys import argv

import aiohttp
import asyncio

query = argv[2]


apiKey = "lBHY1f9tprscJ6L8EFCtbxhhga7z3Mxj"

countUrl = "https://api.shodan.io/shodan/host/count?key={}&query={}".format(apiKey, query)
searchUrl = "https://api.shodan.io/shodan/host/search?key={}&query={}".format(apiKey, query)

async def apiRequest(url):
	async with aiohttp.get(url) as response:
		return await response.json()

count = 1
ip = 1
location = 1
product = 1
version = 1

jsonDump = {
		"count": count,
		"results": [{"ip": ip,"location": location, "product":product, "version":version}]}

async def main():
	jsonCount = await apiRequest(countUrl)
	count = jsonCount["total"]

	jsonSearch = await apiRequest(searchUrl)

	jsonDump = {
	"count": count,
	"results": []
	}

	for match in jsonSearch["matches"]:
		ip = match["ip_str"]
		location = match["location"]["city"]

		try:
			product = match["product"]
		except:
			product = "None" #"there was no product \o/"

		try:
			version = match["version"]
		except:
			version = "None" #"No version found \o/"

		if location == None:
			location = "None" #"there was no city \o/"

		jsonDump["results"].append({"ip": ip,"location": location, "product":product, "version":version})

	jsondict = json.dumps(jsonDump, sort_keys=True)

	print(jsondict)


loop = asyncio.get_event_loop()
loop.run_until_complete(main())

