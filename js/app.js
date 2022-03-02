const api_key = `08ecb79e0a524a5fc6da150d99f4a34c`;


const searchCity = () => {
    const city = document.getElementById('search-box').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayWeatherData(data));
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};


const displayWeatherData = temp => {
    setInnerText('city-name', temp.name);
    setInnerText('temp', temp.main.temp);
    setInnerText('status', temp.weather[0].main);
    setInnerText('description', temp.weather[0].description);
    console.log(temp);
    //set weather icon

    const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon-img');
    imgIcon.setAttribute('src', url);
};