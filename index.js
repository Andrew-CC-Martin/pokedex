// set the API base URL
const baseUrl = "https://pokeapi.co/api/v2/"

// grab the pokemon name element
const pokemonName = document.getElementById("pokemon-name")

// Grab the search bar element
const searchButton = document.getElementById("get-pokemon-button")
// add click event listener to for search pokemon
searchButton.addEventListener("click", searchPokemon)

// grab the text-input element
const searchInput = document.getElementById("text-input")
/**
 * add event listener - will enable button if search has data
 * will disable button if search empty
 */
searchInput.addEventListener("input", () => {
  if (searchInput.checkValidity()) {
    searchButton.disabled = false
  } else {
    searchButton.disabled = true
  }
})

function updateNameHeading(name) {
  pokemonName.innerText = name
}

async function searchPokemon() {
  pokemonName.innerText = "...loading"
  const searchValue = searchInput.value

  try {
    const response = await fetch(`${baseUrl}pokemon/${searchValue}`);
    const data = await response.json()
    updateNameHeading(data.name)
  } catch (_error) {
    updateNameHeading("Uh oh, search failed")
  }
}

