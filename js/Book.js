class Book {
  /**
   *
   * @param {*} title
   * @param {*} author
   * @param {*} genre
   * @param {*} yearCreate
   */
  constructor(title, author, genre, yearCreate) {
    this.title = title; //рядок мінімум 2 літери
    this.author = author; //рядок мінімум 3 літери
    this.genre = genre; //рядок один з переліку ['comedy','drama','horor']
    this.yearCreate = yearCreate; //ціле додатнє число
  }
  static GENRES = ['comedy', 'drama', 'horor', 'fantasy'];
  get genre() {
    return this._genre;
  }
  set genre(value) {
    if (typeof value !== 'string') {
      throw new TypeError('value must be string');
    }
    if (Book.GENRES.includes(value) === false) {
      throw new RangeError('genre not exists');
    }
    this._genre = value;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value !== 'string') {
      throw new TypeError('value must be string');
    }
    if (value.trim().length < 2) {
      throw new RangeError('length must be >= 2');
    }
    this._title = value;
  }
  get yearCreate() {
    return this._yearCreate;
  }
  set yearCreate(value) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be number');
    }
    if (value <= 0 || Number.isInteger(value) === false) {
      throw new RangeError('must be positive integer');
    }
    this._yearCreate = value;
  }
  /**
   *
   * @returns
   */
  getInfo() {
    return `"${this._title}" ${this.author} (${this.genre}) ${this._yearCreate}`;
  }
  get info() {
    return `"${this._title}" ${this.author} (${this.genre}) ${this._yearCreate}`;
  }
}

const book = new Book('It', 'King', 'horor', 1980);
// console.log(book);
// console.log(book.getInfo());
// console.log(book.info);
