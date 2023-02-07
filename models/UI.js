export default class UI {
  constructor () {}

  /**
   *
   * @param {Object[]} pokemons Array of objects with pokemons
   */
  fillNav (pokemons) {
    const nav = document.getElementById('nav-list')
    pokemons.forEach(({ name, id }) => {
      const span = document.createElement('span')
      span.classList.add('element')
      span.setAttribute('id', id + 1)
      const div = document.createElement('div')
      div.innerText = name
      span.appendChild(div)
      nav.appendChild(span)
    })
  }

  fillInput (pokemons) {
    const dataList = document.getElementById('pokemons')
    pokemons.forEach(({ name, id }) => {
      const opt = document.createElement('option')
      opt.setAttribute('value', name)
      opt.dataset.pokemonId = id + 1
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
    img.src = imgUrl
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
   * @param {string[]} choices All choices for the actual question
   * @param {function} callback function to execute if a button is clicked
   */
  showSubGrid (choices, callback) {
    const containerChoices = document.getElementById('choices')
    this.cleanElement(containerChoices)
    choices.forEach(choice => {
      const button = document.createElement('button')
      button.setAttribute('class', 'button')
      button.innerText = choice
      button.addEventListener('click', () => callback(choice))

      containerChoices.appendChild(button)
    })
  }

  /**
   *
   * @param {object} container the element container for the buttons
   */

  cleanElement (container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }
  }

  /**
   *
   * @param {number} score the final score
   */

  showScore (score) {
    const quizzEndHTML = `
      <h1>Result</h1>
      <h2>Your score: ${score}</h2>
    `
    const element = document.getElementById('quizz')
    element.innerHTML = quizzEndHTML
  }

  /**
   *
   * @param {number} currentIndex the current index of the quizz
   * @param {number} total the total number of questions
   */

  showProgress (currentIndex, total) {
    const element = document.getElementById('progress')

    element.innerText = `Question ${currentIndex} of ${total}`
  }
}
