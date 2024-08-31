// Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP):
// Este principio establece que las clases derivadas deben poder sustituir a sus clases base sin alterar el comportamiento esperado del programa.
// En otras palabras, los objetos de una subclase deben poder usarse en lugar de los objetos de la clase base sin que el código que los usa tenga que conocer las diferencias.
class Employee {
  constructor(public name: string, public baseSalary: number) {}

  calculateBonus(): number {
    return this.baseSalary * 0.1; // 10% bonus for general employees
  }
}

class FullTimeEmployee extends Employee {
  constructor(name: string, baseSalary: number) {
    super(name, baseSalary);
  }

  // Full-time employees get a higher bonus
  calculateBonus(): number {
    return this.baseSalary * 0.2; // 20% bonus for full-time employees
  }
}

class PartTimeEmployee extends Employee {
  constructor(name: string, baseSalary: number) {
    super(name, baseSalary);
  }

  // Part-time employees get a lower bonus
  calculateBonus(): number {
    return this.baseSalary * 0.05; // 5% bonus for part-time employees
  }
}

function printEmployeeBonus(employee: Employee): void {
  console.log(
    `${employee.name} will receive a bonus of $${employee.calculateBonus()}`
  );
}

const fullTime = new FullTimeEmployee("Alice", 100000);
const partTime = new PartTimeEmployee("Bob", 50000);

printEmployeeBonus(fullTime); // Alice will receive a bonus of $20000
printEmployeeBonus(partTime); // Bob will receive a bonus of $2500
