import GameService from "../services/GameService.js"


// Private

let _gameService = new GameService
let _honor = _gameService.Honor()
let _sword = _gameService.Sword
let _enchantment = _gameService.Enchantment

function _draw() {
  document.getElementById('honor-status').innerText = _honor.toString()

  document.getElementById('sword-upgrades').innerText = `${_sword.quantity}`
  document.getElementById('sword-bonus').innerText = `${_sword.quantity}`
  document.getElementById('sword-price').innerText = `${Math.trunc(_sword.price)}`

  document.getElementById('enchant-upgrades').innerText = `${_enchantment.quantity}`
  document.getElementById('enchant-price').innerText = `${Math.trunc(_enchantment.price)}`
  document.getElementById('enchant-bonus').innerText = `${Math.trunc(_enchantment.quantity * _enchantment.multiplier)}`


  // document.getElementById('butler-upgrades').innerText = `${butler.quantity}`
  // document.getElementById('butler-price').innerText = `${Math.trunc(butler.price)}`
  // document.getElementById('butler-bonus').innerText = `${Math.trunc(butler.quantity * butler.multiplier)}`

  // document.getElementById('merc-upgrades').innerText = `${merc.quantity}`
  // document.getElementById('merc-price').innerText = `${Math.trunc(merc.price)}`
  // document.getElementById('merc-bonus').innerText = `${Math.trunc(merc.multiplier * merc.quantity)}`



}


// Public
export default class GameController {
  constructor() {
    console.log("The controller works")
    _draw()
  }

  fight() {
    _gameService.fight()
    _draw()

  }



}