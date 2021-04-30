const baseUrl = 'https://pokeapi.co/api/v2/'
const pokemonName = document.getElementById("pokemon-name")
const getPokemonButton = document.getElementById("get-pokemon-button")
getPokemonButton.addEventListener('click', getPokeName)

//grab the search input element
const searchElement = document.getElementById("search-input")

function updateNameHeading(name) {
  pokemonName.innerText = name
}

async function getPokeName() {
  pokemonName.innerText = "...loading"
  const searchTerm = searchElement.value
  try {
    let response = await fetch(`${baseUrl}pokemon/${searchTerm}`);
    let data = await response.json()
    const name = data.name
    updateNameHeading(name)
  } catch (error) {
    updateNameHeading('Pokemon not found')
  }

  
  
}