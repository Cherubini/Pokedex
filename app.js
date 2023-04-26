console.log(' hello pikapika');

let actualPage;

loadNextPage();















// DISPLAY POKEMON
function displayPokemonOnPage(){
    const pokemonContainer= document.getElementById('pokemon-container')

    pokemonContainer.innerHTML='';

    for (let i = 0; i < actualPage.results.length; i++) {
        const pokemon = actualPage.results[i];

 
    const section = document.createElement('section');
    const sectionNode = document.createTextNode(pokemon.name);

    pokemonContainer.appendChild(section);
    section.appendChild(sectionNode);
}
}
//--- Prev & Next Pages---
function loadNextPage(){
    Pokeservice.getNextPokemon(actualPage).then(pokemon =>{
        actualPage=pokemon;
        console.log(actualPage);
        displayPokemonOnPage();
    })
}

function loadPreviousPage() {
    Pokeservice.getPreviousPokemon(actualPage)
    .then(pokemonPage => {
        actualPage= pokemonPage;
        console.log(actualPage);
        displayPokemonOnPage();
    })
}