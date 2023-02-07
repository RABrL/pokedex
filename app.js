import { getPokemon } from './data/data.js'
import UI from './models/UI.js'

let actualPokemon

document.addEventListener('DOMContentLoaded', async () => {
  const ui = new UI()
  await getAllPokemons(ui)
  const nav = document.querySelectorAll('.list span')

  nav.forEach(span => {
    span.addEventListener('click', async () => {
      actualPokemon = await getPokemon(span.id)
      ui.showPicture(actualPokemon.img, actualPokemon.name)
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
}

function main () {
  const ui = new UI()
  renderPokemon(ui)
}
main()
