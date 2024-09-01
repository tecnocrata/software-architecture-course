class UserService {
  public RegisterUser(useer: User): void {
    // Lógica de registro de usuarios
  }
}

class EmailService {
  public SendWelcomeEmail(user: User): void {
    // Lógica de envío de correo electrónico de bienvenida
  }
}

class User {
  public Name: string;
  public Email: string;
  public Password: string;
}
