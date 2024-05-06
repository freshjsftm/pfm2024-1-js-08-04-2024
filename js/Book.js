class Book {
  constructor(title, author, genre, yearCreate) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.yearCreate = yearCreate;
  }
  getInfo(){
    return `"${this.title}" ${this.author} (${this.genre}) ${this.yearCreate}`;
  }
}

const book = new Book('It','King','horor',1980);
