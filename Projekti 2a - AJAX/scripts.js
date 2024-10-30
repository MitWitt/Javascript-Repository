// Varmistetaan että DOM on ladattu ennen kuin skripti alkaa toimia
document.addEventListener('DOMContentLoaded', () => {
    loadTheaters();

    document.getElementById('theaterSelect').addEventListener('change', (event) => {
        const theaterId = event.target.value;
        loadMovies(theaterId);
    });
});


// loadTheaters funktio hakee teatterit ja lisää ne valintalistalle
async function loadTheaters() {
    const response = await fetch('http://www.finnkino.fi/xml/TheatreAreas/');
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'application/xml');
    const theaters = xml.getElementsByTagName('TheatreArea');
    const theaterSelect = document.getElementById('theaterSelect');

    Array.from(theaters).forEach(theater => {
        const option = document.createElement('option');
        option.value = theater.getElementsByTagName('ID')[0].textContent;
        option.textContent = theater.getElementsByTagName('Name')[0].textContent;
        theaterSelect.appendChild(option);
    });
}

// loadMovies funktio hakee elokuvat valitusta teatterista
async function loadMovies(theaterId) {
    const response = await fetch(`http://www.finnkino.fi/xml/Schedule/?area=${theaterId}`);
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'application/xml');
    const shows = xml.getElementsByTagName('Show');
    const moviesContainer = document.getElementById('moviesContainer');
    moviesContainer.innerHTML = ''; // Tyhjennetään aikaisemmat elokuvat

    Array.from(shows).forEach(show => {
        const title = show.getElementsByTagName('Title')[0].textContent;
        const time = show.getElementsByTagName('dttmShowStart')[0].textContent;
        const image = show.getElementsByTagName('EventSmallImagePortrait')[0].textContent;
    
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <img src="${image}" alt="${title}">
            <h3>${title.toUpperCase()}</h3>
            <p>${formatDateTime(time)}</p> <!-- Käytä formatDateTime-funktiota -->
            <div class="button-container">
                <button class="showtime-button">Valitse näytös</button>
            </div>
        `;
        moviesContainer.appendChild(movieDiv);
    });
}

// formatDateTime funktio muotoilee kellonajan siten että näkyy vain tunnit ja minuutit
function formatDateTime(timeString) {
    const date = new Date(timeString);
    const formattedDate = date.toLocaleDateString('fi-FI'); // Suomalainen päivämäärämuoto
    const hours = String(date.getHours()).padStart(2, '0'); // Varmista, että tunti on kahta merkkiä
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Varmista, että minuutti on kahta merkkiä
    return `${formattedDate} klo ${hours}:${minutes}`; // Palauttaa muotoillun päivämäärän ja kellonajan
}
