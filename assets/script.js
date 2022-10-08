$(document).ready(function(){
    var CurrentWeatherMapURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
    var GeoCodingURL = "http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}"
    var apiKay = "76e3a7084f08e874515947d6a36a78d5"
    var cityListDiv = document.getElementById("city-list-div")
    var currentCityInput = "London"
    var displayedCities = JSON.parse(localStorage.getItem("displayed-cities"))
    if(displayedCities ==null){
        displayedCities = []
    }
    displayCities()

    function displayCities(){
        for(var i = 0;i<displayedCities.length;i++){
            var city = document.createElement ("div")
            city.setAttribute("class", "city")
            city.innerHTML = displayedCities[i]
            cityListDiv.appendChild(city)
        }
    }
   
    //var latAndLon = getLatandLon(city)

    function getWeatherData(){
        currentCityInput = document.getElementById("input-city").value
        console.log(currentCityInput)
        fetch("http://api.openweathermap.org/geo/1.0/direct?q="+currentCityInput+"&limit=5&appid="+apiKay)
            .then(function (response) {
                //console.log(response.json())
                return response.json()
            })
            .then(function(data){
                //get latitude and longitude from geo
                var lat = data[0].lat  
                var lon = data[0].lon
                console.log([lat, lon])
                //get weather info based on lat and lon
                fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKay)
                .then(function (response){
                    return response.json()
                })
                .then(function(data){

                    function displayIcon(icon){
                        console.log("icon function")
                        var iconURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
                        var iconEl = document.createElement("img")
                        iconEl.setAttribute("src", iconURL)
                        document.getElementById("current-weather-div").innerHTML = ""
                        document.getElementById("current-weather-div").appendChild(iconEl)
                    }
                    console.log(data)
                    console.log(data.name)
                    //update list of cities
                    displayedCities.push(currentCityInput)
                    console.log(displayedCities)
                    localStorage.setItem("displayed-cities", JSON.stringify(displayedCities))
                    cityListDiv.innerHTML = ""
                    displayCities()
                    console.log(data.weather[0].icon)
                    displayIcon(data.weather[0].icon)
            })
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
    getWeatherData()
})



//=====================================================================================
//displayCities()
})

   