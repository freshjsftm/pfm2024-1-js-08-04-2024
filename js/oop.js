// успадкування
// інкапсуляція
// абстракція
// поліморфізм

//abstract class
class Figura {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  getArea() {
    throw new Error('method abstract class');
  }
  getPerimetr() {
    throw new Error('method abstract class');
  }
}

class Triangular extends Figura {
  constructor(sideA, sideB, angleAB) {
    super('Triangular');
    //перевірки
    this._sideA = sideA;
    this._sideB = sideB;
    this._angleAB = angleAB;
  }
  get sideA() {
    return this._sideA;
  }
  get sideB() {
    return this._sideB;
  }
  get angleAB() {
    return this._angleAB;
  }
  getArea() {
    return (
      (this._sideA * this._sideB * Math.sin(this._angleAB * (180 / Math.PI))) /
      2
    );
  }
}

class Circle extends Figura {
  constructor(radius) {
    super('Circle');
    //перевірка
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  getArea() {
    return this._radius ** 2 * Math.PI;
  }
}

const triang1 = new Triangular(3, 4, 45);
const circle1 = new Circle(10);

console.log(triang1.name);

const getAreaFigure = (figure) => {
  if (figure instanceof Figura) {
    return figure.getArea();
  }
  throw new TypeError('must be Figura');
};

console.log(getAreaFigure(triang1));
console.log(getAreaFigure(circle1));
//console.log(getAreaFigure({}));
