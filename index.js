const baseUrl = 'https://pokeapi.co/api/v2/pokemon-species/'
const pokemonName = document.getElementById("pokemon-name")
const getPokemonButton = document.getElementById("get-pokemon-button")
getPokemonButton.addEventListener('click', getPokeName)

function updateNameHeading(name) {
  pokemonName.innerText = name
}

async function getPokeName() {
  pokemonName.innerText = "...loading"
  let response = await fetch(baseUrl + 1);
  let data = await response.json()
  const name = data.name
  updateNameHeading(name)
}

