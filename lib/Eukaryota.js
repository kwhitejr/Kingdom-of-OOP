import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing {
  constructor (name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(value) {
    this._heterotroph = value;
  }

  get autotroph() {
    if (this._heterotroph === true) {
      return false;
    }
    if (this._heterotroph === false) {
      return true;
    }
  }

  set autotroph(value) {
    if (value === true) {
      this._heterotroph = false;
    }
    if (value === false) {
      this._heterotroph = true;
    }
  }
}

