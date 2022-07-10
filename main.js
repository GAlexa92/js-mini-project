const url = "https://rickandmortyapi.com/api/character/?page=1";
fetch(url)
    .then(response => response.json())
    .then(characters => getSomething(characters.results));


function getSomething(characters) {
    let charactersCard = document.querySelector('.container');
    charactersCard.innerHTML = '';
    for (let i = 0; i < characters.length; i++) {

        let date = formatDate(characters[i].created)

        charactersCard.innerHTML += '<div class="card">' +
            '<div class="card__header">' +
            `<img class="card__image" src=${characters[i].image}>` +
            '</div>' +
            '<div class="card__body">' +
            '<span class="tag tag-blue">' + characters[i].status + '</span>' +
            '<h4><span>Name:</span> ' + characters[i].name + '</h4>' +
            '<p><b>Created:</b> ' + date + '</p>' +
            '</div>' +
            '<div class="card__footer">' +
            '<div class="user">' +
            '<p><b>Species:</b> ' + characters[i].species + '</p>' +
            '<p><b>Gender:</b> ' + characters[i].gender + '</p>' +
            '<p><b>Origin:</b> ' + characters[i].origin.name + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
}

function getCharacterByStatus(status) {
    const url = 'https://rickandmortyapi.com/api/character/?page=1&status=' + status;
    fetch(url)
        .then(response => response.json())
        .then(alive => getSomething(alive.results));
}

function formatDate(rawDate) {
    let dateInFormat = new Date(rawDate);
    return dateInFormat.toLocaleString("ru-RU");
}



