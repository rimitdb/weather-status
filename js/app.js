const api_key = `08ecb79e0a524a5fc6da150d99f4a34c`;


const searchCity = () => {
    const city = document.getElementById('search-box');
    const searchText = city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=${api_key}`;
    const errorMessage = document.getElementById('error-message');
    if (searchText == '') {
        errorMessage.style.display = 'block';
        city.value = '';
    } else {
        fetch(url)
            .then(res => res.json())
            .then(data => displayWeatherData(data));
        errorMessage.style.display = 'none';
    }

};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};


const displayWeatherData = temp => {
    const errorMessage2 = document.getElementById('error-message2');
    console.log(temp);
    if (temp.cod == 404) {
        errorMessage2.style.display = 'block';
    } else {
        setInnerText('city-name', temp.name);
        setInnerText('temp', temp.main.temp);
        setInnerText('status', temp.weather[0].main);
        setInnerText('description', temp.weather[0].description);

        //set weather icon
        const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
        const imgIcon = document.getElementById('icon-img');
        imgIcon.setAttribute('src', url);
        errorMessage2.style.display = 'none';
    }


};