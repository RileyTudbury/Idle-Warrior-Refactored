import ClickUpgrades from "../models/ClickUpgrades.js"

let _clickPower
let _honor = 0


let _sword = new ClickUpgrades({ name: "sword", price: 10, quantity: 0, multiplier: 5 })

let _enchantment = new ClickUpgrades({ name: "enchantment", price: 500, quantity: 0, multiplier: 5 })


export default class GameService {
  constructor() {
    console.log("Game service works!")
  }

  clickTotal() {
    _clickPower = 1 + _sword.quantity + (_enchantment.quantity * _enchantment.multiplier
    )
    return _clickPower
  }

  fight() {
    console.log("Linked up maybe")
    // this.clickTotal()
    // _honor += _clickPower
    _honor++
    console.log(_honor)

  }

  Honor() {
    console.log(_honor)
    return _honor
  }

  get Sword() {
    return new ClickUpgrades(_sword)
  }

  get Enchantment() {
    return new ClickUpgrades(_enchantment)
  }
}