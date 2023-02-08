import { getAllPokemons, getPokemon } from './data/data.js'
import UI from './models/UI.js'

document.addEventListener('DOMContentLoaded', async () => {
  const $ = selector => document.querySelector(selector)

  const ui = new UI()
  const allPokemons = await getAllPokemons()
  ui.fillNav(allPokemons)
  ui.fillInput(allPokemons)
  let pokemon = await getPokemon('bulbasaur')
  ui.renderPokedex(pokemon)

  const nav = document.querySelectorAll('.list span')
  nav.forEach(span => {
    span.addEventListener('click', async () => {
      pokemon = await getPokemon(span.textContent)
      ui.renderPokedex(pokemon)
    })
  })

  const next = $('.next')
  const back = $('.back')

  next.addEventListener('click', async () => {
    const nextPokemon = await getPokemon(pokemon.nextPokemon(allPokemons))
    ui.renderPokedex(nextPokemon)
  })

  back.addEventListener('click', async () => {
    const backPokemon = await getPokemon(pokemon.backPokemon(allPokemons))
    ui.renderPokedex(backPokemon)
  })
})
