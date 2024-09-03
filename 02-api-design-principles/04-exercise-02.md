# Ejercicio para el Estudiante

Este ejercicio está diseñado para que el estudiante practique la ampliación del esquema de la base de datos utilizando Prisma en un proyecto NestJS. También se espera que cree nuevos endpoints en la API y uno de ellos implemente HATEOAS.

## **Parte 1: Ampliar el Esquema con Nuevas Tablas**

**Agregar dos nuevas tablas al esquema:**

- **Comment:** Para manejar los comentarios en las publicaciones (`posts`).
- **Category:** Para clasificar las publicaciones (`posts`) en categorías.

**Actualiza tu esquema Prisma como sigue:**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id Int @id @default(autoincrement())
  name String
  email String @unique
  password String
  posts Post[]

  @@map("users")
}

model Post {
  id Int @id @default(autoincrement())
  title String
  content String
  userId Int @map("user_id")
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  comments Comment[]
  categories PostCategory[]

  @@map("posts")
}

model Comment {
  id Int @id @default(autoincrement())
  content String
  postId Int @map("post_id")
  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)

  @@map("comments")
}

model Category {
  id Int @id @default(autoincrement())
  name String @unique
  posts PostCategory[]

  @@map("categories")
}

model PostCategory {
  postId Int @map("post_id")
  categoryId Int @map("category_id")
  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)
  category Category @relation(fields: [categoryId], references: [id], onDelete: Cascade)

  @@id([postId, categoryId])
  @@map("post_categories")
}
```

**Explicación:**

- **Comment:** Tabla para almacenar comentarios en las publicaciones.
- **Category:** Tabla para manejar las categorías de las publicaciones.
- **PostCategory:** Tabla intermedia para la relación muchos a muchos entre `Post` y `Category`.

## **Parte 2: Crear Endpoints Adicionales**

**Crear 4 nuevos endpoints en la API:**

- **Endpoint 1: Crear un comentario en una publicación.**

  - **HTTP Method:** `POST`
  - **URL:** `/posts/{postId}/comments`
  - **Descripción:** Este endpoint crea un nuevo comentario en una publicación específica.

- **Endpoint 2: Obtener todos los comentarios de una publicación.**

  - **HTTP Method:** `GET`
  - **URL:** `/posts/{postId}/comments`
  - **Descripción:** Este endpoint devuelve todos los comentarios asociados a una publicación específica.

- **Endpoint 3: Crear una nueva categoría.**

  - **HTTP Method:** `POST`
  - **URL:** `/categories`
  - **Descripción:** Este endpoint permite crear una nueva categoría para clasificar publicaciones.

- **Endpoint 4: Asignar una categoría a una publicación.**
  - **HTTP Method:** `POST`
  - **URL:** `/posts/{postId}/categories`
  - **Descripción:** Este endpoint asigna una categoría existente a una publicación específica.

## **Parte 3: Crear un Endpoint usando HATEOAS**

**Crear un quinto endpoint que implemente HATEOAS:**

- **Endpoint 5: Obtener detalles de una publicación con enlaces a comentarios y categorías.**
  - **HTTP Method:** `GET`
  - **URL:** `/posts/{postId}`
  - **Descripción:** Este endpoint devuelve los detalles de una publicación específica e incluye enlaces HATEOAS para acceder a los comentarios y categorías asociados a la publicación.

**Ejemplo de Respuesta JSON con HATEOAS:**

```json
{
  "id": 1,
  "title": "First Post",
  "content": "This is the content of the first post.",
  "userId": 1,
  "_links": {
    "self": { "href": "/posts/1" },
    "comments": { "href": "/posts/1/comments" },
    "categories": { "href": "/posts/1/categories" },
    "user": { "href": "/users/1" }
  }
}
```

### **Implementación de los Endpoints en NestJS**

#### **Endpoint 1: Crear un comentario en una publicación**

```typescript
@Post(':postId/comments')
createComment(
  @Param('postId') postId: string,
  @Body() createCommentDto: CreateCommentDto,
) {
  return this.postsService.createComment(postId, createCommentDto);
}
```

#### **Endpoint 2: Obtener todos los comentarios de una publicación**

```typescript
@Get(':postId/comments')
getComments(@Param('postId') postId: string) {
  return this.postsService.getComments(postId);
}
```

#### **Endpoint 3: Crear una nueva categoría**

```typescript
@Post('/categories')
createCategory(@Body() createCategoryDto: CreateCategoryDto) {
  return this.categoriesService.createCategory(createCategoryDto);
}
```

#### **Endpoint 4: Asignar una categoría a una publicación**

```typescript
@Post(':postId/categories')
assignCategoryToPost(
  @Param('postId') postId: string,
  @Body() assignCategoryDto: AssignCategoryDto,
) {
  return this.postsService.assignCategoryToPost(postId, assignCategoryDto);
}
```

#### **Endpoint 5: Obtener detalles de una publicación con HATEOAS**

```typescript
@Get(':postId')
getPostWithHATEOAS(@Param('postId') postId: string) {
  const post = this.postsService.getPost(postId);
  return {
    ...post,
    _links: {
      self: { href: `/posts/${postId}` },
      comments: { href: `/posts/${postId}/comments` },
      categories: { href: `/posts/${postId}/categories` },
      user: { href: `/users/${post.userId}` },
    },
  };
}
```

### **Tarea:**

1. Implementa los modelos Prisma, realiza la migración y asegúrate de que las tablas se creen correctamente en tu base de datos.
2. Crea los servicios y controladores en NestJS para manejar las operaciones relacionadas con los nuevos modelos y endpoints.
3. Implementa HATEOAS en el quinto endpoint para que los clientes puedan navegar dinámicamente por los recursos relacionados.

---

## **Recursos Adicionales:**

- [What is REST?: REST API Tutorial (restfulapi.net)](https://restfulapi.net/)
- [JSON:API — A specification for building APIs in JSON (jsonapi.org)](https://jsonapi.org/)
