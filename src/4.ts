class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    console.log(`getting signature ${this.signature}`);
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    console.log(`getting key ${this.key}`);
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  public tenants: Person[] = [];

  constructor(public key: Key) {}

  public abstract openDoor(key: Key);

  public comeIn(person: Person): void {
    if (this.door) {
      console.log(`adding ${person} to tenants`);
      this.tenants.push(person);
    } else {
      console.log('the door is closed');
    }
  }
}

class MyHouse extends House {
  public openDoor(enteredKey: Key) {
    if (enteredKey === this.key) {
      console.log('the door is open');
      this.door = true;
    } else {
      console.log('invalid key, the door is closed');
    }
  }
}

const key = new Key();
key.getSignature();

const person = new Person(key);
person.getKey();

const house = new MyHouse(key);
house.openDoor(key);
house.comeIn(person);

export {};
