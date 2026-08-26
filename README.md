<img width="1801" height="926" alt="Screenshot 2026-08-25 231910" src="https://github.com/user-attachments/assets/24f986dd-0e16-4832-82f9-71988173b3fe" />

**Weather App**

just a small weather app i built for fun. type a city and it shows you the current weather, or hit "use my location" and it'll try to figure out where you are automatically.

live here: https://damn-anish.github.io/weather-app/

**FEATURES**

 search any city and get current temp, wind speed, and conditions
 "use my location" button for instant weather without typing
 shows a row of nearby cities you can tap through
 works on phone and desktop

**Built with**

plain HTML/CSS/JS, no frameworks, no build step
[open-meteo](https://open-meteo.com/) for weather + geocoding (free, no api key needed)
bigdatacloud's reverse geocode api to turn your coordinates into a city name

## known issues

1. geolocation is kinda finicky. it needs https + browser permission + your OS location services all working together, so it doesn't always succeed
2. if you open the link inside WhatsApp/Instagram's built in browser, Chrome blocks the location popup completely (some tapjacking protection thing on android). open it in your actual browser instead if "use my location" isn't doing anything
3. if geolocation fails for any reason just search your city manually, that always works





## todo / ideas

- fallback to ip based location if gps fails
- 5 day forecast maybe
- dark mode toggle

built by anish. feel free to fork it or steal the code, it's nothing fancy.


 If you like this project, feel free to star the repository :)
