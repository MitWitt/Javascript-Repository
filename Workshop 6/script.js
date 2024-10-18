// Exercise 1: Parsing XML data
//
function parseData() {
    // Haetaan kaikki <quotes> elementit XML:stä
    var quotes = document.getElementsByTagName("quotes");
    
    // Silmukka, joka käy läpi jokaisen <quotes> elementin
    for (var i = 0; i < quotes.length; i++) {
        // Haetaan <quote> ja <author> elementit nykyisestä <quotes> elementistä
        var quoteText = quotes[i].getElementsByTagName("quote")[0].textContent;
        var authorText = quotes[i].getElementsByTagName("author")[0].textContent;
        
        // Tulostetaan lainaus ja kirjoittaja konsoliin
        console.log("Quote: " + quoteText);
        console.log("Author: " + authorText);
    }
}


// Exercise 2: AJAX call to an XML file
//
function loadXMLDoc() {
    // Luo AJAX-objekti
    var xmlhttp = new XMLHttpRequest();

    // Muuta tämä rivi käyttämään CORS-välimiespalvelinta
    xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // Etsi quotes-div ja lisää tulokset siihen
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
        }
    }
}


