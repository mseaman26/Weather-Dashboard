$(document).ready(function(){
    var apiKay = "76e3a7084f08e874515947d6a36a78d5"
    var citySearchDiv = document.getElementById("city-search-div")

    function displayCities(){
        for(var i = 0;i<5;i++){
            var city = document.createElement ("div")
            city.setAttribute("class", "city")
            citySearchDiv.appendChild(city)
        }
    }


//=====================================================================================
displayCities()

})