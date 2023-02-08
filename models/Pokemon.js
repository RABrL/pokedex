// @ts-check
export default class Pokemon {
  actualPokemon
  /**
   *
   * @param {number} id Id number of pokemon
   * @param {string} name Name of pokemon
   * @param {number} height Heigth of pokemon
   * @param {number} weight Weight of pokemon
   * @param {array} types Types of pokemon
   * @param {array} stats Stats of pokemon
   * @param {array} abilities Abilities of pokemon
   * @param {string} img  ImgUrl of pokemon
   */
  constructor (id, name, height, weight, types, stats, abilities, img) {
    this.id = id
    this.name = name
    this.height = height
    this.weight = weight
    this.types = types
    this.stats = stats
    this.abilities = abilities
    this.img = img
  }

  setActualPokemon (name) {
    this.actualPokemon = name
  }

  /**
   *
   * @param {String[]} allPokemons array of all name's pokemons
   */

  nextPokemon (allPokemons) {
    const index = allPokemons.indexOf(this.actualPokemon) + 1
    this.setActualPokemon(allPokemons[index])
    return allPokemons[index]
  }

  /**
   *
   * @param {String[]} allPokemons array of all name's pokemons
   */

  backPokemon (allPokemons) {
    const index = allPokemons.indexOf(this.actualPokemon) - 1
    this.setActualPokemon(allPokemons[index])
    return allPokemons[index]
  }

  isLastPokemon () {
    return this.id === 10271
  }

  isFirstPokemon () {
    return this.id === 1
  }
}
