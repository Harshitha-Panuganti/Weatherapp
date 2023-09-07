let locationInput = document.getElementById("location-input");
let btnEle = document.getElementById("btn"); 
let tempValueEle = document.getElementById("temp-value"); 
let weatherDescEle = document.getElementById("weather-desc");
let locationEl = document.getElementById("location");

btnEle.onclick=function(){ 
const apikey = '729dbfa9b144aec0157a50298f55f56e'; 
  if(locationInput.value === ""){
        alert("Enter a some location")
  }
  else{
        loc = locationInput.value
   url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`       
   fetch(url).then(res => res.json()) 
   .then(data => {
        console.log(data)
        const {name} = data
        const {feels_like}=data.main 
        const {description}=data.weather[0] 
        tempValueEle.textContent=Math.floor(feels_like-273) 
        weatherDescEle.textContent=description 
        locationEl.textContent=name 
   })
   .catch(err => {
      alert("Enter valid location")
   })
   locationInput.value=""
}
} 