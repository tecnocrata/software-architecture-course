# Implementación Práctica en NestJS (40 minutos)\*\*

**Contexto:**
Vamos a implementar una API RESTful utilizando NestJS para manejar operaciones sobre una entidad de usuario (`User`). Esta API incluirá las operaciones básicas de CRUD (Create, Read, Update, Delete).

**Estructura del Proyecto:**

- **Módulos:** El módulo `UserModule` manejará todas las operaciones relacionadas con usuarios.
- **Controladores:** El `UserController` gestionará las rutas y operaciones HTTP.
- **Servicios:** El `UserService` encapsulará la lógica de negocio relacionada con usuarios.

**Código de Ejemplo:**

1. **Definición del Módulo y Controlador:**

```typescript
// user.module.ts
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

```typescript
// user.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./user.dto";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get(":id")
  getUserById(@Param("id") id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(":id")
  updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(":id")
  deleteUser(@Param("id") id: string) {
    return this.userService.remove(id);
  }
}
```

2.**Servicio para Manejar la Lógica de Negocio:**

```typescript
// user.service.ts
import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./user.dto";

@Injectable()
export class UserService {
  private users = [];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    const newUser = { id: Date.now().toString(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      return this.users[userIndex];
    }
    return null;
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      const deletedUser = this.users.splice(userIndex, 1);
      return deletedUser;
    }
    return null;
  }
}
```

3.**Data Transfer Objects (DTOs):**

```typescript
// user.dto.ts
export class CreateUserDto {
  readonly name: string;
  readonly email: string;
}

export class UpdateUserDto {
  readonly name?: string;
  readonly email?: string;
}
```

**Discusión y Ejercicio:**

- **Discusión:** Cómo el diseño de esta API en NestJS se alinea con las mejores prácticas de REST.
- **Ejercicio:** Extender la API para manejar operaciones adicionales (e.g., búsqueda de usuarios por email, paginación, etc.).

---
