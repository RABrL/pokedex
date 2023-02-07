import { getPokemon } from './data/data.js'
import UI from './models/UI.js'

document.addEventListener('DOMContentLoaded', async () => {
  await getAllPokemons(new UI())
  const nav = document.querySelectorAll('.list span')

  nav.forEach(span => {
    span.addEventListener('click', async () => {
      const id = span.id
      const pokemon = await getPokemon(id)
      console.log(pokemon)
    })
  })
})

async function getAllPokemons (ui) {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279')
    .then(res => res.json())
    .then(data => {
      return data.results.map(({ name }, id) => {
        return { name, id }
      })
    })
  ui.fillNav(pokemons)
  ui.fillInput(pokemons)
}

async function renderPokemon (ui) {
  const pokemon = await getPokemon(1)
}

function main () {
  const ui = new UI()
  renderPokemon(ui)
}
main()
