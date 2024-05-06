const GENRES = ['comedy', 'drama', 'horor'];
//GENRES.includes(value) === false -> throw

class Book {
  #title;
  #author;
  #genre;
  #yearCreate;
  constructor(title, author, genre, yearCreate) {
    this.title = title; //рядок мінімум 2 літери
    this.author = author; //рядок мінімум 3 літери
    this.genre = genre; //рядок один з переліку ['comedy','drama','horor']
    this.yearCreate = yearCreate; //ціле додатнє число
  }
  get title() {
    this.#title;
  }
  set title(value) {
    if (typeof value !== 'string') {
      throw new TypeError('value must be string');
    }
    if (value.trim().length < 2) {
      throw new RangeError('length must be >= 2');
    }
    this.#title = value;
  }
  get yearCreate() {
    return this.#yearCreate;
  }
  set yearCreate(value) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be number');
    }
    if (value <= 0 || Number.isInteger(value) === false) {
      throw new RangeError('must be positive integer');
    }
    this.#yearCreate = value;
  }
  getInfo() {
    return `"${this.#title}" ${this.author} (${this.genre}) ${this.#yearCreate}`;
  }
  get info() {
    return `"${this.#title}" ${this.author} (${this.genre}) ${this.#yearCreate}`;
  }
}

const book = new Book('It', 'King', 'horor', 1980);
console.log(book);
console.log(book.getInfo());
console.log(book.info);
