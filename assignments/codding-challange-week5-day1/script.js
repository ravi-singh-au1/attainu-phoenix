'use strict';


var printCities = function(cities){
    for(var i=0;i<cities.length;i++){
        
        if(cities[i].state == 'Maharashtra' || cities[i].state == 'Gujarat'){
            console.log(cities[i].name)    
        }
    }
}

var loadContent = function() {
    
    // Create an ajax object
    var request = new XMLHttpRequest();

// Open a connect to a URL
    request.open("get", "cities.json");
 // Send the request to the server resource.  
 
request.send();
   

 request.onreadystatechange = function(data) {
        if(request.readyState == 4 && request.status == 200) {
            var cities = JSON.parse(request.responseText)
           
            

        }
    }; 
};

var button = document.getElementById("loadButton");
button.addEventListener("click", loadContent);