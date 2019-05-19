'use strict';



var update = function(data){
    var x= document.getElementById("div");
    x.innerHTML = "";
    for(var k=0;k<data.RelatedTopics.length;k++){
        var result;
        
        if(data.RelatedTopics[k].FirstURL != undefined){
             result = data.RelatedTopics[k].FirstURL;
        }
        
        
        if(!result){
            continue;
        }
        var a = document.createElement("a");
        var newLine = document.createElement("br")
        var linkText = document.createTextNode(data.RelatedTopics[k].Text);
        a.appendChild(linkText);
    
        a.href = data.RelatedTopics[k].FirstURL;
        
        x.append(a);

      x.append(newLine);

    }
}

 function load(){
    console.log("Search Button clicked")
    var query = document.getElementById("searchBox").value;
    var url = "https://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1";
    console.log(url)
    var request = new XMLHttpRequest();
    request.open("get",url);
    request.send();
    request.onreadystatechange = function(data){
        if(request.readyState == 4 && request.status == 200){
            var jsonData = JSON.parse(request.responseText);
            update(jsonData);
        }
    }
    
}
document.getElementById("button").addEventListener("click",load);