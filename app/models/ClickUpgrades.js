export default class ClickUpgrades {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.quantity = data.quantity || 0
    this.multiplier = data.multiplier
  }
}