$(document).ready(function(){
    var CurrentWeatherMapURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
    var GeoCodingURL = "http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}"
    var apiKay = "76e3a7084f08e874515947d6a36a78d5"
    var cityListDiv = document.getElementById("city-list-div")
    var city = "London"
    function displayCities(){
        for(var i = 0;i<5;i++){
            var city = document.createElement ("div")
            city.setAttribute("class", "city")
            cityListDiv.appendChild(city)
        }
    }
   
    //var latAndLon = getLatandLon(city)

    function getWeatherData(city){
        console.log("hello")
        fetch("http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid="+apiKay)
            .then(function (response) {
                //console.log(response.json())
                return response.json()
            })
            .then(function(data){
                var lat = data[0].lat  
                var lon = data[0].lon
                console.log([lat, lon])
                fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKay)
                console.log(data[0].name)
            })
        
    }
    // function getWeatherData(city){
    //     var latAndLon = getLatandLon(city)
    //     console.log(latAndLon)
    //     fetch("https://api.openweathermap.org/data/2.5/weather?lat="+latAndLon[0]+"&"+latAndLon[1]+"={lon}&appid=76e3a7084f08e874515947d6a36a78d5")
    //     .then(function(response){
    //         return response.json()
    //     })
    //     .then(function(data){
    //         console.log(data)
    //     })
    // }

//===================================Event Listener==================================================
document.getElementById("sumbit-button").addEventListener("click", function(event){
    event.preventDefault()
    getWeatherData(city)
})



//=====================================================================================
displayCities()
})

   