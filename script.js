// Mapping Open-Meteo weather codes
const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snowfall",
    73: "Moderate snowfall",
    75: "Heavy snowfall",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Heavy rain showers",
    95: "Thunderstorm"
};
const nearbyCities = [

    {
        name: "Chennai",
        country: "India",
        lat: 13.0827,
        lon: 80.2707
    },

    {
        name: "Bengaluru",
        country: "India",
        lat: 12.9716,
        lon: 77.5946
    },

    {
        name: "Hyderabad",
        country: "India",
        lat: 17.3850,
        lon: 78.4867
    },

    {
        name: "Mumbai",
        country: "India",
        lat: 19.0760,
        lon: 72.8777
    },

    {
        name: "Delhi",
        country: "India",
        lat: 28.6139,
        lon: 77.2090
    },

   

    { name: "Burlington", country: "USA", lat: 44.4759, lon: -73.2121 },
    { name: "South Burlington", country: "USA", lat: 44.4670, lon: -73.1710 },
    { name: "Essex Junction", country: "USA", lat: 44.4906, lon: -73.1101 },
    { name: "Winooski", country: "USA", lat: 44.4919, lon: -73.1849 },
    { name: "Colchester", country: "USA", lat: 44.5434, lon: -73.1698 },
    { name: "Williston", country: "USA", lat: 44.4359, lon: -73.0879 },
    { name: "Richmond", country: "USA", lat: 44.3987, lon: -72.9959 },
    { name: "Hinesburg", country: "USA", lat: 44.3298, lon: -73.1090 },
    { name: "Charlotte", country: "USA", lat: 44.3095, lon: -73.2379 },
    { name: "Vergennes", country: "USA", lat: 44.1670, lon: -73.2523 },
    { name: "Milton", country: "USA", lat: 44.6387, lon: -73.1179 },
    { name: "Jericho", country: "USA", lat: 44.4956, lon: -72.9962 },
    { name: "Underhill", country: "USA", lat: 44.5262, lon: -72.8901 },
    { name: "St. Albans", country: "USA", lat: 44.8106, lon: -73.0818 },
    { name: "Montpelier", country: "USA", lat: 44.2601, lon: -72.5754 },
    { name: "Middlebury", country: "USA", lat: 44.0153, lon: -73.1673 },
    { name: "Waterbury", country: "USA", lat: 44.3378, lon: -72.7565 },
    { name: "Barre", country: "USA", lat: 44.1970, lon: -72.5020 },
    { name: "Plattsburgh", country: "USA", lat: 44.6995, lon: -73.4529 },
    { name: "Rutland", country: "USA", lat: 43.6106, lon: -72.9726 }

];
        




const resultDiv = document.getElementById("result");
const nearbyDiv = document.getElementById("nearby");



window.addEventListener("DOMContentLoaded", () => {

    useMyLocation(true);

});


// Calculate distance between two places
function haversineKm(lat1, lon1, lat2, lon2) {

    const toRad = (deg) => deg * Math.PI / 180;

    const R = 6371;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;

    return R * 2 * Math.asin(Math.sqrt(a));

}


// Find nearest cities
function getNearestCities(lat, lon, count = 5) {

    return nearbyCities
        .map((city) => ({

            ...city,

            distance: haversineKm(
                lat,
                lon,
                city.lat,
                city.lon
            )

        }))

        .sort((a, b) => a.distance - b.distance)

        .filter((city) => city.distance > 5)

        .slice(0, count);

}


// Show nearby cities
function renderNearbyFeed(lat, lon) {

    const cities = getNearestCities(lat, lon);

    if (cities.length === 0) {

        nearbyDiv.innerHTML = "";

        return;
    }


    nearbyDiv.innerHTML =
        '<div class="nearby-header">Nearby Cities</div>';


    const list = document.createElement("div");

    list.className = "nearby-list";


    cities.forEach((city, i) => {

        const chip = document.createElement("button");

        chip.className = "city-chip";

        chip.style.animationDelay = `${i * 0.3}s`;

        chip.textContent =
            `${city.name}, ${city.country}`;


        chip.onclick = () => {

            showWeather(
                city.lat,
                city.lon,
                `${city.name}, ${city.country}`
            );

        };


        list.appendChild(chip);

    });


    nearbyDiv.appendChild(list);

}


// Search weather using city name
async function getWeather() {

    const city =
        document
            .getElementById("city")
            .value
            .trim();


    if (!city) {

        resultDiv.innerHTML =
            "Enter a city name bro!";

        return;
    }


    resultDiv.innerHTML =
        "Loading...";


    try {

        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );


        const geoData =
            await geoRes.json();


        if (
            !geoData.results ||
            geoData.results.length === 0
        ) {

            resultDiv.innerHTML =
                "There ain't no city with that name bro!";

            return;
        }


        const place =
            geoData.results[0];


        await showWeather(
            place.latitude,
            place.longitude,
            `${place.name}, ${place.country}`
        );


    } catch (error) {

        console.error(error);

        resultDiv.innerHTML =
            "Something went wrong fetching the weather :(";

    }

}


// Get user's location
function useMyLocation(silent = false) {

    if (!navigator.geolocation) {

        if (!silent) {

            resultDiv.innerHTML =
                "Your browser doesn't support geolocation.";

        }

        return;
    }


    resultDiv.innerHTML =
        silent
            ? "Finding your location..."
            : "Locating you...";


    navigator.geolocation.getCurrentPosition(

        async (position) => {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            let placeName =
                "Your Location";


            try {

                const rev = await fetch(
                    `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}&count=1`
                );


                const revData =
                    await rev.json();


                if (
                    revData.results &&
                    revData.results.length > 0
                ) {

                    const place =
                        revData.results[0];


                    placeName =
                        `${place.name}, ${place.country || ""}`;

                }

            } catch (error) {

                console.log(
                    "Couldn't get place name"
                );

            }


            await showWeather(
                latitude,
                longitude,
                placeName
            );


            renderNearbyFeed(
                latitude,
                longitude
            );

        },


        (error) => {

            if (silent) {

                resultDiv.innerHTML = "";

                return;
            }


            if (
                error.code ===
                error.PERMISSION_DENIED
            ) {

                resultDiv.innerHTML =
                    "Location access denied. You can still search for a city.";

            } else {

                resultDiv.innerHTML =
                    "Couldn't get your location.";

            }

        }

    );

}async function showWeather(lat, lon, label) {

    resultDiv.innerHTML = "Loading...";

    const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );

    const weatherData = await weatherRes.json();

    const current = weatherData.current_weather;

    const description =
        weatherCodes[current.weathercode] || "unknown";

    resultDiv.innerHTML = `
       <div class="temp">${current.temperature}&deg;C</div>
       <div>${description}</div>
       <div>Wind: ${current.windspeed} km/h</div>
       <div class="place">${label}</div>
    `;
}
