// Principio de Abierto/Cerrado (Open/Closed Principle): Este principio establece que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.
// En otras palabras, una entidad de software debe poder extenderse para agregar nuevas funcionalidades sin tener que modificar su código fuente.
abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
