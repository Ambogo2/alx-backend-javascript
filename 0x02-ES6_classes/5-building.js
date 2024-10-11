export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    console.log(this.#evacuationWarningMessage());
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    (this._sqft = value);
  }

  #evacuationWarningMessage() {
    return 'Hello'
  }

}
