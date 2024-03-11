class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
  ) {}

  display() {
    console.log(
      `Product: ${this.id}, Price: ${this.price}, Description: ${this.description}`,
    );
  }
}

class Book extends Product {
  constructor(
    id: string,
    price: number,
    description: string,
    public author: string,
    public title: string,
  ) {
    super(id, price, description);
  }

  display() {
    super.display();
    console.log(`Author: ${this.author}, Title: ${this.title}`);
  }
}

class Eletronic extends Product {
  constructor(
    id: string,
    price: number,
    description: string,
    public brand: string,
    public model: string,
  ) {
    super(id, price, description);
  }

  display() {
    super.display();
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

const book = new Book('1', 29.9, 'A great book', 'John Doe', 'The Book');
book.display();

const eletronic = new Eletronic(
  '2',
  59.9,
  'A great eletronic',
  'Apple',
  'iPhone 12',
);
eletronic.display();
