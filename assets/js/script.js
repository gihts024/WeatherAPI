let uname = document.querySelector("#uname");
let city = uname.value;
let citySearched = JSON.parse(localStorage.getItem('cityHistory'));
let cityEntered = document.querySelector('#displayCity');
let newCity= localStorage.getItem("city");
let weatherDiplay= document.querySelector('#weatherInfo');
let weatherForecast= document.querySelector('#weatherForecast');
var todaysForecast = document.getElementById("#todaysForecast");

 // We now create variables that will be parsed by Json
 let cityName = document.getElementById("#currentCity");
 let weatherPicUsed = document.getElementsByClassName("#iconUsed");
 let tempNow = document.querySelectorAll("currentTemp");
  let windNow = document.getElementsByClassName("#currentWind");
 let humidityNow = document.getElementsByClassName("currentHumidity");
 var day = moment().format('MMMM Do YYYY, h:mm:ss a');



function send() {
    localStorage.setItem ("city", uname.value);
    console.log(uname.value);
    // citySearched.push(uname.value);
    // localStorage.setItem('cityHistory'), JSON.stringify(citySearched)
    // rendercitySearched();
  };
  
  // Display city Name and Date
//   cityEntered.textContent=newCity;
  console.log(newCity);

  forecastElements ();
  // Lets create a display element that has the date, cityname, temp, window and humidity paragraphs
function forecastElements () {
    
    // Lets put these elements created in a class called todaysForecast
        $("#currentDay").text(day);
        $("#todaysForecast").append(weatherPicUsed);
        $("#todaysForecast").append(+cityName);
        $("#todaysForecast").append(+tempNow);
        $("#todaysForecast").append(+windNow);
        $("#todaysForecast").append(+humidityNow);
}


  // Lets run the city search
function dayForecast(){
    let city = uname.value;
   
    
    var MyKey = `https://api.openweathermap.org/data/2.5/weather?q=` + city + '&appid=5260028c18f47a380a6846e434146f55';
  
  // Return the days forecat
    $.ajax({
      url: MyKey,
      method: 'GET',
    }).then(function (response) {
      console.log('Ajax Reponse \n-------------');
      console.log(response);
        $('#currentCity').append(response.name);
        console.log(response.name);
        $("#currentTemp").append(+(Math.round(((response.main.temp)-273)* 9/5 + 32)*100)/100) + "°F";
        console.log(response.main.temp);
        $("#currentWind").append(response.wind.speed);
        $("#currentHumidity").append(response.main.humidity);
        return response.json;
    });
    
  };

//   dayForecast();
 

// 5 days fore cast function
function fiveForecast () {
    let city = uname.value;
   
  
    var forCast= `https://api.openweathermap.org/data/2.5/forecast?q=`+ city +`&cnt=5&appid=5260028c18f47a380a6846e434146f55`;  
  $.ajax({
    url: forCast,
    method: 'GET',
  }).then(function (response) {
    console.log('Ajax Reponse \n-------------');
let forecastEls = document.querySelectorAll(".weatherForecast");
    for (i=0; i<5; i++) {
      // let weatherIcon = document.createElement("img");
      // forecastEls[i].append(weatherIcon);
  
      let foreCastDate = document.createElement('p');
      foreCastDate.innerHTML = (response.list[i].dt_txt);
      forecastEls[i].append(foreCastDate);
     console.log(response.list[i].dt_txt);
     
     let tempNow =  document.createElement("p");
     tempNow.innerHTML= "Temp: " +(Math.round(((response.list[i].main.temp)-273)* 9/5 + 32)*100)/100 + "°F";
    //  tempNow.innerHTML = "Temp: " + k2f(response.data.list[forecastIndex].main.temp) + " &#176F";
     forecastEls[i].append(tempNow);
     console.log('success');
     console.log +(Math.round(((response.list[i].main.temp)-273)* 9/5 + 32)*100)/100;
     let windNow = document.createElement("p");
     windNow.innerHTML= "Wind:" + (response.list[i].wind.speed);
     forecastEls[i].append(windNow);
     console.log(response.list[i].wind.speed);
     let humidityNow = document.createElement("p");
     humidityNow.innerHTML= "Humid:" + (response.list[i].main.humidity);
     forecastEls[i].append(humidityNow);
     console.log(response.list[i].main.humidity);

    }
    
    console.log(response.city.name);
    console.log(response);
    return response.json;
  });
  }
  let cityList = document.querySelectorAll("#cityHistory");
  let searchHistory = document.createElement('p');
  for (i=0; i= newCity.length; i++) {
    localStorage.getItem("city", uname.value);
    searchHistory.innerHTML = uname.value
    searchHistory[i].append(cityList);
  
  };
  