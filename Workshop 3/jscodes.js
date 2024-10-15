// EXERCISE 1
// Funktion button1
function handlebutton1Click() {
    const currentDate = new Date();
    alert('You clicked me!\nCurrent date: '+ currentDate);
}
// Funktion button2
function handlebutton2Click() {
    const table = document.getElementById("example"); // Hakee taulukon elementin
    if (table.style.display === "none") {
        table.style.display = "table"; // Näyttää taulukon
    } else {
        table.style.display = "none"; // Piilottaa taulukon, jos se on näkyvissä
    }
}
// Funktion button3
function handlebutton3Click() {
    if (navigator.geolocation) {
        // Hakee käyttäjän sijainnin
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
    // Näyttää sijainnin koordinaatit
    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        alert("Latitude: " + latitude + "\nLongitude: " + longitude);
    }
        // Näyttää virheen, jos geolokaation haku epäonnistuu
        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.");
                    break;
            }
        }
// Add event listeners to each button
document.getElementById('button1').onclick = handlebutton1Click;
document.getElementById('button2').onclick = handlebutton2Click;
document.getElementById('button3').onclick = handlebutton3Click;




// EXERCISE 2
// Funktion hiiren siirtoon otsikon päälle
function handleMouseOver() {
    console.log("Stepped over by a mouse!");
}
// Funktion hiiren siirtoon otsikon ulkopuolelle
function handleMouseOut() {
    alert("Bye bye mouse!");
}
// Hakee "Exercise 2" -otsikon ja lisää tapahtumakuuntelijat
const exercise2Heading = document.querySelector("h2:nth-of-type(2)");
exercise2Heading.onmouseover = handleMouseOver;
exercise2Heading.onmouseout = handleMouseOut;




// EXERCISE 3
// Funktion textarea-fokuksen käsittelyyn
function handleTextareaFocus() {
    const textarea = document.getElementById("textdata");
    textarea.style.backgroundColor = "#f0f8ff"; 
    const message = document.getElementById("message");
    message.textContent = "Please fill in the form with proper data.";
}

// Funktion näppäinpainallusten laskemiseen
let keypressCount = 0; // Alustetaan laskuri

// Funktion näppäinpainallusten laskemiseen, myös Backspace huomioidaan
function handleTextareaKeydown(event) {
    const charCount = document.getElementById("charcount");

    // Tarkistetaan, jos näppäin ei ole 'Backspace'
    if (event.key !== "Backspace") {
        keypressCount++; // Lisätään laskuriin yksi jokaisesta näppäimestä
    } else if (keypressCount > 0) {
        keypressCount--; // Vähennetään yksi, jos painetaan Backspace ja laskuri ei ole nolla
    }

    charCount.textContent = "Keypresses: " + keypressCount;
}

// Funktion textarea-tarkistamiseen ennen lähettämistä
function handleFormSubmit(event) {
    event.preventDefault(); // Estetään oletustoiminto (lomakkeen lähettäminen)

    const textareaValue = document.getElementById("textdata").value;
    if (textareaValue.trim() === "") {
        alert("The textarea is empty. Please provide some data.");
    } else {
        alert("Form submitted successfully!");
    }
}

// Lisää tapahtumakuuntelijat textareaan ja lomakenapille
const textarea = document.getElementById("textdata");
textarea.onfocus = handleTextareaFocus;
textarea.onkeydown = handleTextareaKeydown;

const formButton = document.querySelector("form button");
formButton.onclick = handleFormSubmit;



// EXERCISE 4
document.getElementById('coordinates').addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    console.log(`X: ${x}, Y: ${y}`); // Käytä backtickejä template literalissa
    document.getElementById('coordinates').innerHTML = `X: ${x}, Y: ${y}`; // Käytä backtickejä template literalissa
});
