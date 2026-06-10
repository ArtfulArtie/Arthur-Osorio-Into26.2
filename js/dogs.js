
const API_KEY = 'live_IneKyFRCtPiSqRiX2Rnwoaftc5aJIq5rQpHfvskRut1Grvr5TVaoLgTuKXbghbFl';
const randomDogButton = document.querySelector('#random-dog-btn');
const dogBreedsButton = document.querySelector('#breeds-button')
const dogResults = document.querySelector('#dog-results');

randomDogButton.addEventListener("click", function() {
    fetch('https://api.thedogapi.com/v1/images/search')
    .then( response => response.json())
    .then( data => {
        console.log(data);
        dogResults.innerHTML = '';

        const dogImage = document.createElement('img');
        const imageUrl = data[0].url ;
        dogImage.src = imageUrl;
        dogResults.appendChild(dogImage);
    })
    .catch(error => {
        console.log(error);
    });
});

const randomCatButton = document.querySelector('#random-cat-btn');
randomCatButton.addEventListener("click", function() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then( response => response.json())
    .then( data => {
        console.log(data);
        dogResults.innerHTML = '';

        const catImage = document.createElement('img');
        const imageUrl = data[0].url ;
        catImage.src = imageUrl;
        dogResults.appendChild(catImage);
    })
    .catch(error => {
        console.log(error);
    });
});


dogBreedsButton.addEventListener("click", function() {
    fetch('https://api.thedogapi.com/v1/breeds', {
        headers: {
            'x-api-key' : API_KEY
        }
    })
    .then( response => response.json())
    .then( data => {
        console.log(data);
        dogResults.innerHTML = '';

        const breedSection = document.querySelector('#dog-results');
        const breedList = document.createElement('ul');

        const randomStart = Math.floor(Math.random() * (data.length - 20))

            for(let i= randomStart ; i < randomStart + 20 ; i++){
                let breed = document.createElement('li');
                breed.innerText= data[i].name;
                breedList.appendChild(breed);
            }
            breedSection.appendChild(breedList)
})
.catch(error => {
    const errorMessage = document.createElement('p');
    errorMessage.innerText = 'Unable to load dog breeds at this time';
    dogResults.innerHTML = '';
    dogResults.appendChild(errorMessage);
    console.log(error);
    });
});