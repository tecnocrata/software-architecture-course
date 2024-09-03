# **Clase 2: Diseño y Arquitectura de APIs**

## **Objetivo de la Clase:**

- Entender los principios fundamentales del diseño de APIs RESTful.
- Analizar cómo se aplica el estilo REST en la creación de APIs utilizando NestJS.
- Explorar buenas prácticas, convenciones y estándares comunes en el diseño de APIs.
- Implementar un ejemplo práctico de una API en NestJS, aplicando los principios discutidos.

---

### **1. Introducción a REST y su Importancia (15 minutos)**

**Temas a cubrir:**

- **Diferencia entre REST y SOAP:**

  - REST es un estilo arquitectónico; SOAP es un protocolo.
  - REST se basa en estándares como HTTP, URI, JSON, y XML.
  - Importancia de la flexibilidad de REST frente a la rigidez de SOAP.

- **Historia y origen de REST:**
  - Roy Fielding y su tesis "Architectural Styles and the Design of Network-based Software Architectures".
  - Relevancia de su trabajo y cómo ha influido en el diseño moderno de APIs.

**Discusión:**

- ¿Por qué es importante seguir las buenas prácticas en el diseño de APIs RESTful?
- ¿Qué desafíos comunes enfrentan los desarrolladores al diseñar APIs RESTful?

---

**Swagger** y la **especificación OpenAPI 3.x** están estrechamente relacionados, pero son conceptos distintos que a menudo se utilizan de manera complementaria en el desarrollo de APIs. A continuación, se explica la diferencia y la relación entre ambos.

### **Swagger**

- **Origen:** Swagger comenzó como un conjunto de herramientas y especificaciones creadas por la empresa SmartBear para diseñar, construir, documentar y consumir APIs RESTful. Fue inicialmente lanzado en 2011 y rápidamente se convirtió en una solución popular para el desarrollo de APIs.
- **Componentes:**

  - **Swagger Specification:** Era el formato original para describir las APIs RESTful en un formato legible tanto por humanos como por máquinas. Las versiones anteriores a OpenAPI 3.x (como Swagger 2.0) se referían a esta especificación como "Swagger Specification".
  - **Swagger UI:** Una interfaz de usuario que permite a los desarrolladores y consumidores de APIs explorar y probar una API de manera interactiva.
  - **Swagger Editor:** Una herramienta basada en la web para editar archivos de especificación Swagger/OpenAPI.
  - **Swagger Codegen:** Una herramienta que genera código cliente, servidor y documentación a partir de una especificación Swagger/OpenAPI.

- **Evolución:** Swagger evolucionó y fue donado a la **OpenAPI Initiative** en 2015, una organización bajo la Linux Foundation. A partir de este momento, la especificación Swagger fue renombrada a **OpenAPI Specification** (OAS).

### **OpenAPI Specification (OAS) 3.x**

- **Definición:** OpenAPI Specification (OAS) es un estándar de la industria para describir APIs RESTful. Es un formato que permite a los desarrolladores definir los puntos finales de la API, sus métodos HTTP, parámetros, tipos de datos, respuestas, seguridad, entre otros aspectos.

- **Versiones:** La versión OpenAPI 3.x es una evolución de la especificación Swagger 2.0, con mejoras significativas en la estructura, flexibilidad y capacidad de descripción de las APIs. La versión 3.x introdujo una serie de cambios y nuevas funcionalidades que no estaban presentes en Swagger 2.0.

- **Independencia de Swagger:** Aunque Swagger sigue siendo una colección de herramientas populares para trabajar con OpenAPI, la especificación OpenAPI es independiente de las herramientas Swagger. De hecho, OpenAPI puede ser utilizada con otras herramientas no relacionadas con Swagger para generar documentación, pruebas, y clientes o servidores de APIs.

### **Relación entre Swagger y OpenAPI 3.x**

- **Origen Común:** Swagger fue el precursor de lo que hoy conocemos como la especificación OpenAPI. La especificación Swagger 2.0 se convirtió en la base para OpenAPI 3.x.

- **Herramientas de Swagger con OpenAPI 3.x:**
  - Las herramientas de Swagger, como **Swagger UI**, **Swagger Editor** y **Swagger Codegen**, soportan la especificación OpenAPI 3.x. Esto significa que puedes usar OpenAPI 3.x para definir tu API y luego utilizar las herramientas de Swagger para visualizarla, editarla, y generar código.
- **Uso Común:** En la práctica, cuando los desarrolladores hablan de "Swagger", a menudo se refieren a las herramientas que utilizan la especificación OpenAPI para generar documentación interactiva y otras funcionalidades. Sin embargo, es importante recordar que Swagger como especificación se ha renombrado y evolucionado en OpenAPI.

### **Resumen**

- **Swagger** es un conjunto de herramientas que facilita el desarrollo, la documentación, y la prueba de APIs RESTful. También fue el nombre original de la especificación para describir APIs, que hoy en día se conoce como **OpenAPI**.
- **OpenAPI Specification (OAS)** es la evolución de la especificación Swagger. OpenAPI 3.x es la versión moderna de esta especificación, que proporciona un estándar para describir APIs RESTful de manera detallada y estructurada.
- **Relación:** Swagger y OpenAPI están intrínsecamente conectados, ya que Swagger fue el precursor de OpenAPI. Las herramientas Swagger siguen siendo compatibles y se utilizan ampliamente con la especificación OpenAPI 3.x.
