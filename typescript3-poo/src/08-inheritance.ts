//Clase padre
export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

//Clase Hijo
export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name); //llama al constructor padre y solo de aqui se puede llamar
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'nico');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log("Owner:",cheis.owner);
