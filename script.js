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

   
    { name: "Chennai", country: "India", lat: 13.0827, lon: 80.2707 },
    { name: "Bengaluru", country: "India", lat: 12.9716, lon: 77.5946 },
    { name: "Hyderabad", country: "India", lat: 17.3850, lon: 78.4867 },
    { name: "Mumbai", country: "India", lat: 19.0760, lon: 72.8777 },
    { name: "Delhi", country: "India", lat: 28.6139, lon: 77.2090 },
    { name: "Kolkata", country: "India", lat: 22.5726, lon: 88.3639 },
    { name: "Pune", country: "India", lat: 18.5204, lon: 73.8567 },
    { name: "Ahmedabad", country: "India", lat: 23.0225, lon: 72.5714 },
    { name: "Jaipur", country: "India", lat: 26.9124, lon: 75.7873 },
    { name: "Coimbatore", country: "India", lat: 11.0168, lon: 76.9558 },
    { name: "Kochi", country: "India", lat: 9.9312, lon: 76.2673 },
    { name: "Visakhapatnam", country: "India", lat: 17.6868, lon: 83.2185 },
    { name: "Madurai", country: "India", lat: 9.9252, lon: 78.1198 },
    { name: "Nagpur", country: "India", lat: 21.1458, lon: 79.0882 },
    { name: "Lucknow", country: "India", lat: 26.8467, lon: 80.9462 },

    
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
    { name: "Rutland", country: "USA", lat: 43.6106, lon: -72.9726 },
    { name: "New York", country: "USA", lat: 40.7128, lon: -74.0060 },
    { name: "Boston", country: "USA", lat: 42.3601, lon: -71.0589 },
    { name: "Chicago", country: "USA", lat: 41.8781, lon: -87.6298 },
    { name: "Los Angeles", country: "USA", lat: 34.0522, lon: -118.2437 },
    { name: "San Francisco", country: "USA", lat: 37.7749, lon: -122.4194 },
    { name: "Seattle", country: "USA", lat: 47.6062, lon: -122.3321 },
    { name: "Miami", country: "USA", lat: 25.7617, lon: -80.1918 },
    { name: "Austin", country: "USA", lat: 30.2672, lon: -97.7431 },
    { name: "Denver", country: "USA", lat: 39.7392, lon: -104.9903 },
    { name: "Washington D.C.", country: "USA", lat: 38.9072, lon: -77.0369 },

    
    { name: "London", country: "UK", lat: 51.5074, lon: -0.1278 },
    { name: "Manchester", country: "UK", lat: 53.4808, lon: -2.2426 },
    { name: "Birmingham", country: "UK", lat: 52.4862, lon: -1.8904 },
    { name: "Edinburgh", country: "UK", lat: 55.9533, lon: -3.1883 },
    { name: "Glasgow", country: "UK", lat: 55.8642, lon: -4.2518 },
    { name: "Liverpool", country: "UK", lat: 53.4084, lon: -2.9916 },
    { name: "Leeds", country: "UK", lat: 53.8008, lon: -1.5491 },
    { name: "Bristol", country: "UK", lat: 51.4545, lon: -2.5879 },
    { name: "Sheffield", country: "UK", lat: 53.3811, lon: -1.4701 },
    { name: "Sheffield", country: "UK", lat: 53.3811, lon: -1.4701 },
    { name: "Newcastle upon Tyne", country: "UK", lat: 54.9783, lon: -1.6178 },
    { name: "Nottingham", country: "UK", lat: 52.9548, lon: -1.1581 },
    { name: "Leicester", country: "UK", lat: 52.6369, lon: -1.1398 },
    { name: "Cardiff", country: "UK", lat: 51.4816, lon: -3.1791 },
    { name: "Belfast", country: "UK", lat: 54.5973, lon: -5.9301 },
    { name: "Southampton", country: "UK", lat: 50.9097, lon: -1.4044 },
    { name: "Oxford", country: "UK", lat: 51.7520, lon: -1.2577 },
    { name: "Cambridge", country: "UK", lat: 52.2053, lon: 0.1218 },
    { name: "Aberdeen", country: "UK", lat: 57.1497, lon: -2.0943 },
    
    { name: "Paris", country: "France", lat: 48.8566, lon: 2.3522 },
    { name: "Berlin", country: "Germany", lat: 52.5200, lon: 13.4050 },
    { name: "Madrid", country: "Spain", lat: 40.4168, lon: -3.7038 },
    { name: "Rome", country: "Italy", lat: 41.9028, lon: 12.4964 },
    { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lon: 4.9041 },
    { name: "Vienna", country: "Austria", lat: 48.2082, lon: 16.3738 },
    { name: "Zurich", country: "Switzerland", lat: 47.3769, lon: 8.5417 },
    { name: "Dublin", country: "Ireland", lat: 53.3498, lon: -6.2603 },
    { name: "Lisbon", country: "Portugal", lat: 38.7223, lon: -9.1393 },
    { name: "Stockholm", country: "Sweden", lat: 59.3293, lon: 18.0686 },

    
    { name: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503 },
    { name: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198 },
    { name: "Dubai", country: "UAE", lat: 25.2048, lon: 55.2708 },
    { name: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093 },
    { name: "Toronto", country: "Canada", lat: 43.6511, lon: -79.3470 },
    { name: "Bangkok", country: "Thailand", lat: 13.7563, lon: 100.5018 }

];




const resultDiv = document.getElementById("result");
const nearbyDiv = document.getElementById("nearby");



window.addEventListener("DOMContentLoaded", () => {

    useMyLocation(true);

});



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
                    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                );
                if (!rev.ok) throw new Error(`Reverse geocode failed: ${rev.status}`);
                const revData = await rev.json();



                const cityName = revData.city || revData.locality || revData.principalSubdivision;

                  if (cityName) {
                    placeName = `${cityName}, ${revData.countryName}`;
                  }


            } catch (error) {
                console.log("Couldn't get place name", error);
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

                resultDiv.innerHTML = ' <div>Enter a city or tap "Use My Location" to get started.</div>';

                return;
            }


            switch (error.code) {

                case error.PERMISSION_DENIED:
                    resultDiv.innerHTML =
                        "Location access denied. You can still search for a city.";
                    break;

                case error.POSITION_UNAVAILABLE:
                    resultDiv.innerHTML =
                        "Couldn't detect your location (device or network issue). Please search for your city instead.";
                    break;

                case error.TIMEOUT:
                    resultDiv.innerHTML =
                        "Location request timed out. Try again or search manually.";
                    break;

                default:
                    resultDiv.innerHTML =
                        "Couldn't get your location. Please search for your city instead.";

            }

        },

        { timeout: 10000, maximumAge: 60000, enableHighAccuracy: false }

    );

}

async function showWeather(lat, lon, label) {

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
