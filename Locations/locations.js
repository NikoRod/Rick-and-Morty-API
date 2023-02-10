"use strict"

// SECTION: CONTENT

function getLocations(done) {

    const results = fetch("https://rickandmortyapi.com/api/location");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getLocations(data => {

    data.results.forEach(location => {

        const article = document.createRange().createContextualFragment(`
        
            <article>

                <h2>${location.name}</h2>

                <h4>Type: ${location.type}</h4> 
                <h4>Dimension: ${location.dimension}</h4>
                
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