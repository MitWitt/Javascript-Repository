// Exercise 1: Basic DOM Manipulation
// Button 1
function changeHeading() {
    // Select the first h1 element on the page (the "Workshop 4" heading)
    const heading = document.querySelector('h1');
    
    // Change its content to "Modified Heading!"
    heading.textContent = "Modified Heading!";
}

// Button 2
function secondButton() {
    // Select the second h2 element (heading for "Exercise 2")
    const heading = document.querySelectorAll('h2')[1];
    /* const heading = document.querySelector('h2:nth-of-type(2)'); */ 
    
    // Modify its style
    heading.style.fontSize = "30px";       // Change font size
    heading.style.fontStyle = "italic";    // Change font style to italic
    heading.style.color = "red";           // Change text color to red
    heading.style.backgroundColor = "yellow"; // Change background color to yellow
}

// Button 3
function thirdButton() {
    // Select the fourth <p> element on the page
    const paragraphs = document.querySelectorAll('p');
    const fourthParagraph = paragraphs[3]; // Index starts at 0, so [3] is the 4th <p>

    // Create a new <p> element with italic "Lorem ipsum" text
    const newParagraph = document.createElement('p');
    const loremText = document.createElement('em'); // Use <em> for italic text
    loremText.textContent = '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit..."';
    newParagraph.appendChild(loremText);

    // Create an image element for the logo
    const logo = document.createElement('img');
    logo.src = 'https://example.com/logo.png'; // Replace with the actual logo URL
    logo.alt = 'Logo';
    logo.width = 100; // Adjust size as needed

    // Append the image after the text in the new paragraph
    newParagraph.appendChild(logo);

    // Insert the new paragraph after the 4th <p> on the page
    fourthParagraph.after(newParagraph);

    // Change the background color of the entire page
    document.body.style.backgroundColor = 'lightblue'; // Adjust color as needed
}




// Exercise 2: DOM Traversing using ID's and classes
// Checkbox 1
function hideMe() {
    // Select the element with the ID "me"
    const element = document.getElementById('me');
    
    // Change the display property to "none" to hide the element
    element.style.display = 'none';
}

// Checkbox 2
function showMe() {
    // Select the element with the ID "me"
    const element = document.getElementById('me');
    
    // Change the display property to "block" to make the element visible again
    element.style.display = 'block';
}

// Checkbox 3
function changeSurprise() {
    // Valitaan kaikki elementit, joilla on class "surprise"
    const elements = document.getElementsByClassName('surprise');
    
    // Käydään läpi kaikki valitut elementit ja muutetaan fonttikoko
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = '20px';
    }
}




// Exercise 3: Images and pulldowns
// Näytä valinta
function showChoice() {
    // Hakee alasvetovalikon elementin
    const selectElement = document.getElementById('mySelect');
    
    // Saa käyttäjän valinnan
    const selectedValue = selectElement.value;
    
    // Näyttää alert-ikkunan käyttäjän valinnalla
    alert('You selected: ' + selectedValue);
}

// Lisää reunus
function addBorder() {
    // Hakee kuvan elementin ID:n avulla
    const image = document.getElementById('carimage');
    
    // Lisää värillisen reunuksen kuvaan
    image.style.border = '5px solid red';
}

function removeBorder() {
    // Hakee kuvan elementin ID:n avulla
    const image = document.getElementById('carimage');
    
    // Poistaa reunuksen
    image.style.border = 'none';
}

// Kuva valikoima
function changeImage() {
    const selectElement = document.getElementById('mySelect');
    const carImage = document.getElementById('carimage');
    
    const selectedCar = selectElement.value;
    
    if (selectedCar === "BMW") {
        carImage.src = "https://cdn.motor1.com/images/mgl/P3ggK2/s1/2025-bmw-2-series-gran-coupe-rendering.jpg"; 
    } else if (selectedCar === "Audi") {
        carImage.src = "https://assets.apu.fi/vqd9tl2q3uk2/1BGNGLyzq8kK6627SWYt6i/8a1d2dea7611845347238ff94c67a44e/Audi_A4_Avant_g-tron_-kaasuauto_2a7tP.jpg?w=3840&q=75";
    } else if (selectedCar === "Mercedes") {
        carImage.src = "https://moottori.fi/wp-content/uploads/2018/02/Mercedes-Benz_A_2018-1-1328x747.jpg";
    } else if (selectedCar === "Volvo") {
        carImage.src = "https://www.topgear.com/sites/default/files/2023/06/286145_Volvo_V90_Recharge_Plug-in_Hybrid_T6_AWD_Inscription.jpg";
    }
}




// Exercise 4: Moving things around
// Move
function moveImage() {
    const carImage = document.getElementById('carimage');
    
    // Saadaan nykyiset arvot
    let currentLeft = parseInt(carImage.style.left) || 0;
    let currentTop = parseInt(carImage.style.top) || 0;
    
    // Siirretään kuvaa
    carImage.style.left = (currentLeft - 200) + 'px'; // 200px vasemmalle
    carImage.style.top = (currentTop + 500) + 'px'; // 500px alas
}

// Animate
let position = 0; // Alkuperäinen sijainti
let direction = 1; // 1 tarkoittaa oikealle, -1 tarkoittaa vasemmalle

function doMove() {
    const carImage = document.getElementById('carimage');

    // Muutetaan sijaintia
    position += 5 * direction; // Liikutaan 5px suuntaan

    // Tarkistetaan, onko kuva saavuttanut reunan
    if (position > window.innerWidth - carImage.width || position < 0) {
        direction *= -1; // Vaihdetaan suuntaa
    }

    // Päivitetään kuvan sijainti
    carImage.style.left = position + 'px';
}

// Fade out
function fadeOut() {
    const carImage = document.getElementById('carimage');
    let opacity = 1; // Alkuperäinen läpinäkyvyys

    const fade = () => {
        if (opacity <= 0) {
            carImage.style.display = 'none'; // Piilotetaan kuva, kun se on täysin läpinäkyvä
        } else {
            opacity -= 0.01; // Vähennetään läpinäkyvyyttä
            carImage.style.opacity = opacity; // Päivitetään kuvan läpinäkyvyys
            setTimeout(fade, 20); // Kutsutaan fade-funktiota uudelleen 100 ms kuluttua
        }
    };

    fade(); // Aloitetaan fade-toiminto
}

// Remove
function remove() {
    const carImage = document.getElementById('carimage');
    carImage.remove(); // Poistetaan kuva DOM:ista
}




// Exercise 5: Tables
// Lisää rivejä
function insertRows() {
    const tableBody = document.querySelector('#data tbody'); // Valitaan taulukon body
    const newRow = document.createElement('tr'); // Luodaan uusi rivi (tr)

    // Luodaan kolme uutta solua (td) ja asetetaan niihin arvot
    const nameCell = document.createElement('td');
    nameCell.textContent = 'Uusi Nimi'; // Aseta haluamasi arvo
    const positionCell = document.createElement('td');
    positionCell.textContent = 'Uusi Tehtävä'; // Aseta haluamasi arvo
    const salaryCell = document.createElement('td');
    salaryCell.textContent = '€50,000'; // Aseta haluamasi arvo

    // Lisätään solut riviin
    newRow.appendChild(nameCell);
    newRow.appendChild(positionCell);
    newRow.appendChild(salaryCell);

    // Lisätään uusi rivi taulukkoon
    tableBody.appendChild(newRow);
}

// Tekstikentät käyttöön
function insertRows() {
    const tableBody = document.querySelector('#data tbody'); // Valitaan taulukon body
    const newRow = document.createElement('tr'); // Luodaan uusi rivi (tr)

    // Luetaan käyttäjän syöttämät tiedot tekstikentistä
    const name = document.getElementById('textfield').value; // Nimi
    const position = document.getElementById('textfield2').value; // Tehtävä
    const salary = document.getElementById('textfield3').value; // Palkka

    // Luodaan kolme uutta solua (td) ja asetetaan niihin arvot
    const nameCell = document.createElement('td');
    nameCell.textContent = name; // Aseta käyttäjän syöttämä nimi
    const positionCell = document.createElement('td');
    positionCell.textContent = position; // Aseta käyttäjän syöttämä tehtävä
    const salaryCell = document.createElement('td');
    salaryCell.textContent = salary; // Aseta käyttäjän syöttämä palkka

    // Lisätään solut riviin
    newRow.appendChild(nameCell);
    newRow.appendChild(positionCell);
    newRow.appendChild(salaryCell);

    // Lisätään uusi rivi taulukkoon
    tableBody.appendChild(newRow);

    // Tyhjennetään tekstikentät rivin lisäämisen jälkeen
    document.getElementById('textfield').value = '';
    document.getElementById('textfield2').value = '';
    document.getElementById('textfield3').value = '';
}
