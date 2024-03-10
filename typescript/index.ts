class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  constructor(public name: string = 'dog') {
    super(name);
  }

  bark(): void {
    console.log('Woof! Woof!');
  }
}

const myDog = new Dog('Buddy');
myDog.move(10);
