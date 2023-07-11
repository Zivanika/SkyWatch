const apiKey="9409b119a7e6c90c3603f31f43b6f89d"; 
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    var searchbox=document.querySelector(".search input");
    let sbtn=document.getElementById("sbtn");
    const searchbtn=document.querySelector(".search button")
    const weatherIcon=document.querySelector(".weather-icon");
    async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    if(data.weather[0].main=="Clouds"){
       weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
      weatherIcon.src="clear.png";
    }  
    else if(data.weather[0].main=="Rain"){
      weatherIcon.src="rain.png";
    }  
    else if(data.weather[0].main=="Mist"){
      weatherIcon.src="mist.png";
    }  
    else if(data.weather[0].main=="Drizzle"){
      weatherIcon.src="drizzle.png";
    }  
    else if(data.weather[0].main=="Snow"){
      weatherIcon.src="snow.png";
    }  
  }
    searchbtn.addEventListener("click",()=>{
      checkWeather(searchbox.value);
    })
    // searchbox.addEventListener("keyup",()=>{
    //     checkWeather(searchbox.value);
    // })
    // var input = document.getElementById("user");
    searchbox.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("sbtn").click();
    }
});
