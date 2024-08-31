// Principio de Inversión de Dependencias (Dependency Inversion Principle - DIP):
//El DIP establece que los módulos de alto nivel no deberían depender de módulos de bajo nivel. Ambos deben depender de abstracciones (interfaces o clases abstractas).
//Además, las abstracciones no deberían depender de los detalles. Los detalles deberían depender de las abstracciones.
interface IStorage {
  save(content: string): void;
}

class FileStorage implements IStorage {
  save(content: string): void {
    // Lógica de almacenamiento en archivos
    console.log("Saving content to a file...");
  }
}

class CloudStorage implements IStorage {
  save(content: string): void {
    // Lógica de almacenamiento en la nube
    console.log("Saving content to the cloud...");
  }
}

class ContentService {
  private storage: IStorage;

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  saveContent(content: string): void {
    this.storage.save(content);
  }
}

const fileStorage = new FileStorage();
const cloudStorage = new CloudStorage();

const contentServiceWithFile = new ContentService(fileStorage);
contentServiceWithFile.saveContent("Content to be saved to file"); // Output: Saving content to a file...

const contentServiceWithCloud = new ContentService(cloudStorage);
contentServiceWithCloud.saveContent("Content to be saved to cloud"); // Output: Saving content to the cloud...
