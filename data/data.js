import Pokemon from '../models/Pokemon.js'

/**
   *
   * @param {number} id Id of pokemon
   * @returns
   */
export function getPokemon (id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
      const { sprites, name, height, id, weight, types, stats, abilities } = data
      const { other: { 'official-artwork': { front_default: img } } } = sprites
      return new Pokemon(id, name, height, weight, types, stats, abilities, img)
    })
}
