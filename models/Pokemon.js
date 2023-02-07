// @ts-check
export default class Pokemon {
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

  /**
   *
   * @param {string} answer the answer chosen by the player
   */

  guess (answer) {
    if (this.getQuestion().correctAnswer(answer)) {
      this.score++
    }
    this.questionIndex++
  }

  /**
   *
   * @returns {boolean} Return true or false
   */

  isEnded () {
    return this.questions.length === this.questionIndex
  }
}
