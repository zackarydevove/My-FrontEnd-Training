let weather = { 
    apiKey: "8b056cc4938d7e9a8c51a5162df93618",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".degree").innerText = temp + " °C";
        document.querySelector(".weather").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".info").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".input").value);
    }
};

document.querySelector(".button").addEventListener("click", function () {
    weather.search();
});

weather.fetchWeather("Paris");
