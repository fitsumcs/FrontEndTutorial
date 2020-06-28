// Socer 

// fetch("https://free-football-soccer-videos1.p.rapidapi.com/v1/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "free-football-soccer-videos1.p.rapidapi.com",
// 		"x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then(data=>{console.log(data)})
// .catch(err => {
// 	console.log(err);
// });

// fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
// 		"x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then(data=>{console.log(data.titles)})
// .catch(err => {
// 	console.log(err);
// });

// covid 19
// fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
// 		"x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then(data=>{console.log(data)})
// .catch(err => {
// 	console.log(err);
// });

// food 
// fetch("https://recipe-puppy.p.rapidapi.com/?p=20", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
// 		"x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then(data=>{console.log(data)})
// .catch(err => {
// 	console.log(err);
// });

// fetch("https://seatgeek-seatgeekcom.p.rapidapi.com/events", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "seatgeek-seatgeekcom.p.rapidapi.com",
// 		"x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

// Holidays 
// fetch("https://calendarific.com/api/v2/countries?api_key=8f16f6ef4437a3f80433f3a133a3f31156f22d0f", {
// })
// .then(response => {
// 	return response.json();
// })
// .then(data=>{console.log(data)})
// .catch(err => {
// 	console.log(err);
// });

// fetch("https://password-generator.p.rapidapi.com/v1/password?Symbols=0&Uppercase=1&Length=8&ExcludeSimilar=1&Numbers=1&Lowercase=1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "password-generator.p.rapidapi.com",
// 		"x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
// 	}
// })
// .then(response => {
// 	console.log(response.text());
// })
// .catch(err => {
// 	console.log(err);
// });

fetch("https://currency26.p.rapidapi.com/list", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency26.p.rapidapi.com",
		"x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
	}
})
.then(response => {
	return response.json();
})
.then(data=>{console.log(data)})
.catch(err => {
	console.log(err);
});