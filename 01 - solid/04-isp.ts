// Principio de Segregación de Interfaces (Interface Segregation Principle - ISP):
// Este principio establece que una clase no debe verse obligada a implementar interfaces que no utiliza. En otras palabras, las interfaces deben ser específicas para cada cliente.

interface TheDocument {
  title: string;
  content: string;
  author?: string; // Opcional, puede que algunos documentos no necesiten autor

  // Puedes agregar más propiedades según sea necesario
}

interface IPrinter {
  print(document: TheDocument): void;
}

interface IScanner {
  scan(document: TheDocument): void;
}

class Printer implements IPrinter {
  print(document: TheDocument): void {
    // Lógica de impresión
    console.log("Printing document...");
  }
}

class Scanner implements IScanner {
  scan(document: TheDocument): void {
    // Lógica de escaneo
    console.log("Scanning document...");
  }
}

class MultiFunctionDevice implements IPrinter, IScanner {
  private printer: IPrinter;
  private scanner: IScanner;

  constructor(printer: IPrinter, scanner: IScanner) {
    this.printer = printer;
    this.scanner = scanner;
  }

  print(document: TheDocument): void {
    this.printer.print(document);
  }

  scan(document: TheDocument): void {
    this.scanner.scan(document);
  }
}
const myDocument: TheDocument = {
  title: "My First TheDocument",
  content: "This is the content of the document.",
  author: "John Doe",
};

const printer = new Printer();
printer.print(myDocument); // Imprimirá "Printing document..."

const scanner = new Scanner();
scanner.scan(myDocument); // Escaneará "Scanning document..."
