# **Día 3: Architectural Patterns en Aplicaciones Modernas**

# **Objetivo de la Clase:**

- Introducir y analizar diferentes patrones arquitectónicos, desde los más simples hasta los más complejos.
- Establecer las diferencias entre patrones orientados a aplicaciones simples y distribuidas.
- Enfatizar la implementación práctica de los **Twelve-Factor Apps** en la aplicación **NestJS** que se ha estado desarrollando.

---

## **Temario para las 2 Horas de Clase:**

### **1. Introducción a los Patrones de Arquitectura (10 minutos)**

- **Temas a cubrir:**

  - ¿Qué es un patrón arquitectónico y por qué es importante?
  - Diferencia entre arquitectura monolítica, distribuida, y serverless.

- **Objetivo:** Entender cómo elegir el patrón correcto puede afectar la escalabilidad, mantenimiento, y complejidad del sistema.

### **2. Clasificación y Complejidad de los Patrones Arquitectónicos (15 minutos)**

- **Orden de complejidad (de menor a mayor):**

  - **Monolithic Apps** (Aplicaciones Monolíticas): Aplicaciones simples, todo en un solo bloque.
  - **MVC** (Model-View-Controller): Aplicaciones web simples, separación de lógica y vistas.
  - **SOA** (Service-Oriented Architecture): Comunicación basada en servicios (menor énfasis en esta clase).
  - **Serverless**: Despliegue sin servidores gestionados, autoescalado.
  - **Twelve-Factor Apps**: Prácticas para crear aplicaciones resilientes, escalables y de fácil mantenimiento (estrella del día).
  - **Microservices**: Pequeños servicios independientes, fuertemente orientados a aplicaciones distribuidas.
  - **Event-Driven**: Comunicación basada en eventos asincrónicos.
  - **Message Queues and Streams**: Comunicación con colas y flujos de datos en tiempo real.
  - **CQRS** (Command Query Responsibility Segregation): Separación de comandos (mutaciones) y consultas (lecturas).
  - **Service Mesh**: Comunicación gestionada entre microservicios, manejo de redes y seguridad.
  - **Event Sourcing**: Almacenar eventos como fuente de verdad en lugar de solo el estado actual.

- **Objetivo:** Que los estudiantes comprendan cómo la complejidad aumenta desde una aplicación monolítica hasta arquitecturas distribuidas con microservicios y eventos.

### **3. Patrones Orientados a Aplicaciones Simples vs. Distribuidas (10 minutos)**

- **Patrones para Aplicaciones Simples:**

  - **Monolithic Apps**
  - **MVC**
  - **SOA** (en algunos casos)
  - **Twelve-Factor Apps** (puede escalar a aplicaciones distribuidas, pero también es útil para aplicaciones monolíticas modernas)

- **Patrones para Aplicaciones Distribuidas:**

  - **Microservices**
  - **Event-Driven**
  - **Message Queues and Streams**
  - **CQRS**
  - **Service Mesh**
  - **Event Sourcing**
  - **Serverless**

- **Objetivo:** Entender cuándo es adecuado utilizar cada patrón dependiendo de la escala y complejidad de la aplicación.

### **4. Profundización en Twelve-Factor Apps (60 minutos)**

**El tema principal del día 3.**

- **Temas a cubrir:**
  - ¿Qué son las Twelve-Factor Apps? Principios para diseñar aplicaciones modernas, escalables y mantenibles.
  - Relación con arquitecturas como microservicios y aplicaciones monolíticas modernas.
  - Repaso rápido de cada factor.

**Implementación en la aplicación NestJS:**
Cada uno de los **12 factores** se relacionará con el proyecto NestJS. Ejemplos prácticos serán implementados y discutidos.

1. **Codebase:**
   - Uso de un único repositorio para el código y buenas prácticas con Git.
2. **Dependencies:**

   - Gestión de dependencias con `package.json` y `npm`. Evitar dependencias globales.
   - **Práctica:** Revisión del archivo `package.json` en NestJS.

3. **Config:**

   - Separación de la configuración del código. Uso de variables de entorno.
   - **Práctica:** Implementar `dotenv` para la configuración en NestJS.

4. **Backing services:**

   - Tratar los servicios externos (bases de datos, colas de mensajes) como recursos adjuntos.
   - **Práctica:** Configuración de una base de datos (SQLite en local y PostgreSQL en producción).

5. **Build, release, run:**

   - Separación de las etapas de construcción, lanzamiento y ejecución.
   - **Práctica:** Configuración de scripts de despliegue en NestJS.

6. **Processes:**

   - La aplicación debe ser ejecutada en uno o más procesos sin estado.
   - **Práctica:** Ejecutar múltiples instancias del servicio de NestJS en Docker.

7. **Port binding:**

   - La aplicación debe exponerse en un puerto.
   - **Práctica:** Configuración del servidor HTTP en NestJS para utilizar variables de entorno en los puertos.

8. **Concurrency:**

   - Diseño de aplicaciones para escalar mediante la clonación de procesos.
   - **Práctica:** Escalar la aplicación en Docker con múltiples réplicas.

9. **Disposability:**

   - Capacidad para iniciarse y detenerse rápidamente.
   - **Práctica:** Configurar manejo de señales para detener el servidor de NestJS correctamente.

10. **Dev/prod parity:**

    - Mantener paridad entre entornos de desarrollo, pruebas y producción.
    - **Práctica:** Uso de Docker para igualar los entornos de desarrollo y producción.

11. **Logs:**

    - Tratar los logs como flujos de eventos.
    - **Práctica:** Configurar NestJS para enviar logs a una salida estándar (STDOUT) y un sistema de logs centralizado.

12. **Admin processes:**
    - Ejecutar tareas administrativas como procesos de una sola vez.
    - **Práctica:** Ejecutar tareas administrativas en NestJS, como migraciones de base de datos con Prisma.

- **Objetivo:** Que los estudiantes implementen de manera práctica los **Twelve-Factor Apps** en el proyecto NestJS para que sea una aplicación moderna, escalable y lista para producción.

### **5. Revisión Rápida de Patrones Clave Distribuidos (15 minutos)**

- **Patrones a repasar:**
  - **CQRS:** Separación de consultas y comandos, mejora en sistemas de alto rendimiento.
  - **Event Sourcing:** Almacenar cada cambio en el sistema como un evento inmutable.
  - **Service Mesh:** Gestión de la comunicación entre microservicios.
  - **Serverless:** Desplegar funciones y servicios sin gestionar servidores.
  - **Event-Driven y Message Queues:** Cómo usar eventos y colas de mensajes en arquitecturas distribuidas.

**Práctica rápida:**

- Mostrar cómo se integra un patrón **Event-Driven** usando RabbitMQ en NestJS.

### **6. Conclusión y Tareas (5 minutos)**

- **Resumen:** Discusión de los patrones arquitectónicos más importantes.
- **Tarea:** Mejorar la aplicación NestJS implementando al menos 3 de los **12 factores** restantes que no fueron cubiertos en clase.

---

### **Resumen de la Clase:**

La clase se divide en una introducción teórica a los patrones arquitectónicos, seguida de una parte práctica enfocada en implementar los **Twelve-Factor Apps** en un proyecto de **NestJS**. Los estudiantes tendrán la oportunidad de aplicar de manera real estos principios, haciendo que sus aplicaciones sean más robustas, escalables y mantenibles en producción.
