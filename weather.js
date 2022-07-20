let weather={
API_KEY:'da8b1f76444c71933958faa793bd7418',
fetchWeather:function(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
         +city+
         "&units=metric&appid="
         + this.API_KEY
    )
    .then((response) => response.json())
    .then((data)=>this.displayWeather(data)); 
    },
displayWeather:function(data)
{ const {name}=data;
  const {temp,humidity}= data.main;
  const {icon,description}=data.weather[0];
  const {speed}=data.wind;
  console.log(name,temp,humidity,icon,description,speed);
  
  document.querySelector(".city-name").innerHTML="Weather in "+name;
  document.querySelector(".temperature").innerHTML=temp + "°C";
  document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".weather-conditions").innerHTML= description ;
  document.querySelector(".humidity").innerHTML= "Humidity:"+humidity + "%";
  document.querySelector(".wind-speed").innerHTML="Wind Speed:"+ speed + "Km/hr";
  document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name +"')"
},
  search:function()
 {
  this.fetchWeather(document.querySelector(".input").value);
 }

};
document.querySelector(".search-button").addEventListener("click",function(){
 weather.search();
})
document.querySelector(".search-button").addEventListener("keyup",function(e){
  if(e.key=="Enter")
   {
    weather.search();
   }
 })
weather.fetchWeather("delhi");
document.querySelector("#search").addEventListener("submit",function(e)
{
  e.preventDefault();
})