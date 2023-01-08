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
	.then(response => console.log(response))
	.catch(err => console.error(err))




