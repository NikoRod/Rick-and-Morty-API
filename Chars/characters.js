"use strict"

// SECTION: CONTENT

function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {

    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(`
        
            <article>

                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>

                <h2>${personaje.name}</h2>

                <h4>Gender: ${personaje.gender}</h4> 
                <h4>Specie: ${personaje.species}</h4>
                <h4>Status: ${personaje.status}</h4>
                
            </article>
            
        `);

        const main = document.querySelector('.main');

        main.append(article);
    });
});

// SECTION: SHIP BTN

let shipBtn = document.querySelector('.ship');

const goToTop = () => {
    
    window.scroll({
        top: 0,
        behavior:'smooth'
      }); 

}

shipBtn.addEventListener("click", goToTop);

const shipVisible = () => {
    
    if(scrollY > 200) {
        shipBtn.classList.add('visible');
    }
    else {
        shipBtn.classList.remove('visible');
    }

}

window.addEventListener("scroll", shipVisible);