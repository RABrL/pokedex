import Pokemon from './Pokemon.js'

export default class UI {
  constructor () {}

  /**
   *
   * @param {string[]} pokemons Array of all name's pokemons
   */
  fillNav (pokemons) {
    const nav = document.getElementById('nav-list')
    pokemons.forEach(name => {
      const span = document.createElement('span')
      span.classList.add('element')
      const div = document.createElement('div')
      div.innerText = name
      span.appendChild(div)
      nav.appendChild(span)
    })
  }

  fillInput (pokemons) {
    const dataList = document.getElementById('pokemons')
    pokemons.forEach(name => {
      const opt = document.createElement('option')
      opt.setAttribute('value', name)
      dataList.appendChild(opt)
    })
  }

  /**
   *
   * @param {strin} imgUrl Pokeon image url to render
   * @param {string} name Name Pokemon
   */
  showPicture (imgUrl, name) {
    const img = document.getElementById('picture')
    img.src = imgUrl ?? './assets/notfound.svg'
    img.alt = name
  }

  /**
   *
   * @param {string} type Type of pokemon
   */

  showEmoji (type) {
    const img = document.getElementById('emoji')
    img.src = `./assets/icons/${type}.svg`
    img.alt = type
  }

  /**
   *
   * @param {Pokemon} pokemon Object type pokemon
   */
  showSubGrid (pokemon) {
    const $ = selector => document.querySelector(selector)
    const [mainType, secondType] = pokemon.types

    this.showEmoji(mainType)
    $('.type').innerHTML = `${mainType}${secondType ? ' - <small>' + secondType + '</small>' : ''}`
    $('.name').innerText = pokemon.name.replaceAll('-', ' ')
    $('.details').children[0].lastElementChild.innerText = pokemon.height + 'M'
    $('.details').children[1].lastElementChild.innerText = pokemon.weight + 'KG'
    $('.details').children[2].lastElementChild.innerText = pokemon.abilities.join(' - ')
  }

  /**
   *
   * @param {Object[]} stats Array of objects with the name and base_stat of stat
   */

  showStats (stats) {
    const $ = selector => document.querySelectorAll(selector)
    const bars = $('.inside')
    const bases = $('.base')
    for (let i = 0; i < stats.length; i++) {
      const { name, value } = stats[i]
      bases[i].innerText = stats[i].value
      bars[i].setAttribute('style', `width: ${this.getStatWidth(name, value)}`)
    }
  }

  getStatWidth (name, value) {
    const maxStats = {
      hp: 255,
      attack: 190,
      defense: 250,
      'special-attack': 194,
      'special-defense': 250,
      speed: 200
    }
    return (value / maxStats[name]) * 100 + '%'
  }

  /**
   *
   * @param {numb} id Number id of pokemon
   */

  showId (id) {
    const numberLength = id.toString().length
    if (numberLength < 3) id = '0'.repeat(3 - numberLength) + id

    document.querySelector('.number').innerText = `#${id}`
  }

  /**
   *
   * @param {Pokemon} pokemon  Pokemon object
   */

  showNextArrow (pokemon) {
    pokemon.isLastPokemon()
      ? document.querySelector('.next').style.display = 'none'
      : document.querySelector('.next').style.display = 'block'
  }

  showBackArrow (pokemon) {
    pokemon.isFirstPokemon()
      ? document.querySelector('.back').style.display = 'none'
      : document.querySelector('.back').style.display = 'block'
  }

  /**
   *
   * @param {Pokemon} pokemon Pokemon Object
   */

  renderPokedex (pokemon) {
    this.showBackArrow(pokemon)
    this.showNextArrow(pokemon)
    this.showPicture(pokemon.img, pokemon.name)
    this.showSubGrid(pokemon)
    this.showStats(pokemon.stats)
    this.showId(pokemon.id)
  }
}
