document.write("<strong>Tämä tulee JavaScriptistä ja on lihavoitua tekstiä</strong><cite> ja tämä teksti on kursivoituna. Katso alla huikea kuva!</cite>")

var images =[
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
    ];

var randomIndex = Math.floor(Math.random() * images.length);
document.write('<img src="' + images[randomIndex] + '" alt="Random Image">');

function repeatingText(text) {
    const body = document.body;
    const container = document.createElement('div');

    for (let i = 0; i < 50; i++) {
        const p = document.createElement('p');
        p.textContent = text;
        container.appendChild(p);
    }

    body.appendChild(container);
}

// Example usage
repeatingText('Tämä teksti tulee 50 kertaa.');