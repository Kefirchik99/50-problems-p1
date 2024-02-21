document.getElementById("getWeatherButton").addEventListener("click", function () {

    var cityName = document.getElementById("cityInput").value;

    if (cityName === "") {
        alert("Please enter a city name");
        return;
    }

    var apiKey = "___";  //API GOES HERE 
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;


    fetch(queryURL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data); 
            const tempCelsius = (data.main.temp - 273.15).toFixed(1);  
            const weatherDescription = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const cityNameDisplay = data.name;
            document.getElementById("cityName").textContent = "City: " + cityNameDisplay;
            document.getElementById("temperature").textContent = "Temperature: " + tempCelsius + "°C";
            document.getElementById("humidity").textContent = "Humidity: " + humidity + "%";
            document.getElementById("windSpeed").textContent = "Wind Speed: " + windSpeed + " m/s";
            document.getElementById("weatherImage").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            document.getElementById("weatherImage").style.display = "block";  
        })
})
    .catch(function (error) {
        console.error('Error fetching data:', error);
        alert("Failed to fetch weather data. Please try again.");
    });

