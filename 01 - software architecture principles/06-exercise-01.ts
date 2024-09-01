// Imagina que estás trabajando en un proyecto que maneja la gestión de pedidos en una tienda en línea.
// Tienes el siguiente código que gestiona la creación de pedidos, el cálculo de impuestos y el envío de notificaciones a los clientes.
// Sin embargo, el código presenta algunos problemas que podrían complicar su mantenimiento y extensión.

class Order {
  constructor(
    public orderId: string,
    public amount: number,
    public customerEmail: string
  ) {}

  calculateTax(country: string): number {
    if (country === "US") {
      return this.amount * 0.07; // 7% tax in the US
    } else if (country === "EU") {
      return this.amount * 0.2; // 20% tax in the EU
    } else {
      return this.amount * 0.15; // 15% default tax
    }
  }

  sendEmailNotification(): void {
    // Lógica para enviar un email al cliente
    console.log(
      `Sending email to ${this.customerEmail} for order ${this.orderId}`
    );
  }

  saveToFile(): void {
    const fs = require("fs");
    fs.writeFileSync(
      `${this.orderId}.txt`,
      `Order ID: ${this.orderId}, Amount: ${this.amount}`
    );
    console.log(`Order ${this.orderId} saved to file.`);
  }
}

class OrderService {
  createOrder(
    orderId: string,
    amount: number,
    customerEmail: string,
    country: string
  ): void {
    const order = new Order(orderId, amount, customerEmail);
    const tax = order.calculateTax(country);
    console.log(`Order Total with Tax: ${order.amount + tax}`);
    order.sendEmailNotification();
    order.saveToFile();
  }
}

// Ejecución del código
const orderService = new OrderService();
orderService.createOrder("12345", 100, "customer@example.com", "US");
