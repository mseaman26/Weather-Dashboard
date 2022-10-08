$(document).ready(function(){

    var apiKay = "76e3a7084f08e874515947d6a36a78d5"
    var cityListDiv = document.getElementById("city-list-div")

    function displayCities(){
        for(var i = 0;i<5;i++){
            var city = document.createElement ("div")
            city.setAttribute("class", "city")
            cityListDiv.appendChild(city)
        }
    }


    function getWeatherData(city){
        console.log("hello")
        fetch("http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=76e3a7084f08e874515947d6a36a78d5")
            .then(function (response) {
                
                return response.json()
            })
            .then(function(data){
                var lat = data[0].lat  
                var lon = data[0].lon
                console.log([lat, lon])
            })
    }
//===================================Event Listener==================================================
document.getElementById("sumbit-button").addEventListener("click", function(event){
    getWeatherData("London")
})



//=====================================================================================
displayCities()
})