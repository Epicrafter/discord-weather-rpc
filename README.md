<h1>Weather RPC<h1>

# Requirements
1. [Node.JS](https://nodejs.org/en/) installed on your machine
2. A Code Editor such as VSCode, Atom etc
3. A Discord Rich Presence Application ([How to register a Discord Rich Presence Application?](#Create-a-Discord-Application))
4. A **Visual Crossing** API key ([How to get one?](#Getting-a-Visual-Crossing-key))

# Create-a-Discord-Application
1. Go to your [Discord Developers site](https://discord.com/developers/applications), login or sign up
2. Create a new Application
3. Copy your **APPLICATION ID** and store it somewhere safe, we will use it later

# Getting-a-Visual-Crossing-key
1. Navigate to the [Visual Crossing Website](https://www.visualcrossing.com/weather/weather-data-services#/editDataDefinition)
2. If you haven't got an account yet, sign up then login
3. When you have reached [this URL](https://www.visualcrossing.com/weather/weather-data-services#/editDataDefinition), click on **Weather API**
4. You will find your **API key** in the **Additional Parameters** section, copy it and store it somewhere safe
Note: If you are using the free plan, your are limited to 1000 requests per day

# Setup
1. If you haven't already done so, download or clone this repository
2. Open the `settings.json` file either on Notepad or a code editor
3. Paste in your **APPLICATION ID** and **API key** in the correct gaps
4. Fill in the location field (e.g. Paris) and choose the unit you want to use (metric/us)
3. Save the file

# Setting up the Icons
1. Go to your [Discord Developers site](https://discord.com/developers/applications) and select your application
2. Go to the **Rich Presence** section
3. Click on **Add Images**, navigate to the **Images** folder located in this folder and select all the images
4. Save the changes

# How to get Weather RPC running
1. Open the `setup.bat` file and follow the instructions 
2. Open the `run.bat` file
