// Exercise 1: Parsing XML data
function parseData() {
    var quotes = document.getElementsByTagName("quotes");
    for (var i = 0; i < quotes.length; i++) {
        var quoteText = quotes[i].getElementsByTagName("quote")[0].textContent;
        var authorText = quotes[i].getElementsByTagName("author")[0].textContent;
        console.log("Quote: " + quoteText);
        console.log("Author: " + authorText);
    }
}

// Exercise 2: AJAX call to an XML file
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
        }
    }
}

// Exercise 3: Parsing the XML
function loadAndParseXML() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "famous-quotes.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            var quotes = xmlDoc.getElementsByTagName("quotes");
            var tableData = "<table><tr><th>Quote</th><th>Author</th></tr>";

            for (var i = 0; i < quotes.length; i++) {
                var quoteText = quotes[i].getElementsByTagName("quote")[0].childNodes[0].nodeValue;
                var authorText = quotes[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                
                tableData += "<tr><td>" + quoteText + "</td><td>" + authorText + "</td></tr>";
            }

            tableData += "</table>";
            document.getElementById("tabledata").innerHTML = tableData;
        }
    }
}

// Exercise 4: AJAX call to a live newsfeed
function loadAndParseNews(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            var items = xmlDoc.getElementsByTagName("item"); // Tarkista XML-rakenne
            var newsList = "<ul>";

            for (var i = 0; i < items.length; i++) {
                var title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                var link = items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                
                newsList += "<li><a href='" + link + "' target='_blank'>" + title + "</a></li>";
            }

            newsList += "</ul>";
            document.getElementById("news-list").innerHTML = newsList; // Lisää uutiset listaan
        }
    }
}

