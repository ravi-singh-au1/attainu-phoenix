'use strict';

var BOOKS = [];

var searchBook = function(language) {
    var resultArray = [];
    for(var i = 0; i < BOOKS.length; i++) {
        if(BOOKS[i].language == language) {
           resultArray.push(i);
        }
    }
    return resultArray;
};

var populateSelect = function() {

    // Get the element in the code
    // Iterate through all the books and create <option> element in each iteration
    // with the current language of the book.

    var selectLanguage = document.getElementById("selectLanguage");
    var languagesUsed = [];

    for(var i = 0; i < BOOKS.length; i++) {
        var language = BOOKS[i].language;

        if(languagesUsed.indexOf(language) != -1) {
            continue;
        }

        languagesUsed.push(language);

        // <option value="English">English</option>
        // The below code create the above HTML element

        var option = document.createElement("option");
        option.innerText = language;
        option.value = language;

        selectLanguage.appendChild( option );
    }

};


var loadData = function() {
    var request = new XMLHttpRequest();
    request.open("get", "books.json");
    request.send();

    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            BOOKS = JSON.parse(request.responseText);
            populateSelect();
        }
        
    };
};loadData();

var createTableRow = function(position) {
    var book = BOOKS[position];

    var tbody = document.getElementById("tbody");

    var tr = document.createElement("tr");
    tbody.appendChild( tr );
    
    var title = document.createElement("td");
    title.innerText = book.title;
    tr.append( title );

    var author = document.createElement("td");
    author.innerText = book.author;
    tr.append( author );

    var country = document.createElement("td");
    country.innerText = book.country;
    tr.append( country );
      
    var pages = document.createElement("td");
    pages.innerText = book.pages;
    tr.append( pages );

    var link = document.createElement("td");
    link.innerText = book.link;
    tr.append( link );
    
    var imageLink = document.createElement("td");
    imageLink.innerText = book.imageLink;
    tr.append( imageLink );


    var year = document.createElement("td");
    year.innerText = book.year;
    tr.append( year );


 

};

var selectLanguage = document.getElementById("selectLanguage");
selectLanguage.addEventListener("change", function() {

    var language = document.getElementById("selectLanguage").value;

    var bookResults =  searchBook(language);

    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for(var i = 0; i < bookResults.length; i++) {
        createTableRow( bookResults[i] );
    }

});


// Start things by loading the AJAX data.
