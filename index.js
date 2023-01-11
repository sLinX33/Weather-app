const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b0de5cfe9mshf411bde44fedd5fp13bb99jsn0a5cb11cd495',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let randomCountry = 'Kathmandu';
let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${randomCountry}`;

fetch(url, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)

	cloud_pct.innerHTML = response.cloud_pct 
	feels_like.innerHTML = response.feels_like
	humidity.innerHTML = response.humidity
	max_temp.innerHTML = response.max_temp
	min_temp.innerHTML = response.min_temp
	sunrise.innerHTML = response.sunrise
	sunset.innerHTML = response.sunset
	temp.innerHTML = response.temp
	wind_degrees.innerHTML = response.wind_degrees
	wind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err))

