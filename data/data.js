import Pokemon from '../models/Pokemon.js'

/**
   *
   * @param {number} id Id of pokemon
   * @returns
   */
export function getPokemon (name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json())
    .then(data => {
      const cleanedData = cleanData(data)
      const { id, name, height, weight, nameTypes: types, cleanedStats: stats, nameAbilities: abilities, img } = cleanedData
      const pokemon = new Pokemon(id, name, height, weight, types, stats, abilities, img)
      pokemon.setActualPokemon(name)
      return pokemon
    })
}

function cleanData (data) {
  const { sprites, name, height, id, weight, types, stats, abilities } = data
  const { other: { 'official-artwork': { front_default: img } } } = sprites
  const nameTypes = types.map(({ type: { name } }) => name)
  const cleanedStats = stats.map(({ base_stat: value, stat: { name } }) => {
    return {
      name,
      value
    }
  })
  const nameAbilities = abilities.map(({ ability: { name } }) => name)
  return {
    id,
    name,
    height,
    weight,
    nameTypes,
    cleanedStats,
    nameAbilities,
    img
  }
}

export async function getAllPokemons () {
  return await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279')
    .then(res => res.json())
    .then(data => data.results.map(({ name }) => name))
}
