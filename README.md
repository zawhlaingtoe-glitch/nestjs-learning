# 🚀 NestJS Learning - Lesson 1

Welcome to Lesson 1 of my NestJS journey! This lesson covers setting up the project using the NestJS CLI, understanding the default folder structure, working with **Controllers** and **Services**, diving into database management with **TypeORM**, and implementing request **Validation** and **CRUD resources**.

---

## 📚 What I Learned

1. **NestJS Architecture**: NestJS follows a modular structure using Controllers, Services, and Modules.
2. **Controllers**: Responsible for handling incoming **HTTP requests** and returning responses to the client.
3. **Services**: Responsible for **business logic**, data retrieval, and heavy lifting, keeping controllers clean and lightweight.
4. **Dependency Injection**: Injecting services into controllers using constructor injection.
5. **Generating Resources**: Learned how to generate a complete boilerplate for a feature using `nest g resource <name>`.
6. **TypeORM Integration**: Learned how to configure and use TypeORM to connect the NestJS application to a database.
7. **Entities**: Understood how to create TypeORM entities to define database tables and schemas using TypeScript classes and decorators.
8. **Validation**: Learned how to validate incoming request data using **Data Transfer Objects (DTOs)**, `class-validator`, and NestJS's built-in `ValidationPipe`.
9. **CRUD Resources & Repositories**: Implemented full CRUD operations using TypeORM `Repository` patterns, handled asynchronous workflows with `Promises` (`async/await`), and built robust error handling (`BadRequestException`, `NotFoundException`, `InternalServerErrorException`).

---

## 🛠️ Essential CLI Commands

| Action | Command | Description |
| :--- | :--- | :--- |
| **New Project** | `nest new project-name` | Scaffolds a new NestJS application. |
| **Create Module** | `nest g module <name>` | Generates a new module (e.g., `nest g module cats`). |
| **Create Controller** | `nest g controller <name>` | Generates a controller with a test file. |
| **Create Service** | `nest g service <name>` | Generates a service provider with a test file. |
| **Create Resource** | `nest g resource <name>` | Generates a full CRUD boilerplate (e.g., `nest g resource users`). |
| **Start Server** | `npm run start:dev` | Starts the app in watch mode (auto-reloads on changes). |

---

## 📁 Project Folder Overview

```text
src/
├── app.controller.ts     # Routes requests to the service
├── app.controller.spec.ts# Unit tests for the controller
├── app.module.ts         # Root module of the application
├── app.service.ts        # Business logic provider
├── main.ts               # Entry point (bootstrap the Nest application)
├── users/                # Generated Users CRUD feature module
│   ├── users.module.ts   # Ties the user controller, service, and TypeORM entity together
│   ├── users.controller.ts # Handles /users CRUD routes
│   ├── users.service.ts   # User-related business logic & database repository calls
│   ├── dto/
│   │   ├── create-user.dto.ts # DTO for validating new user creation
│   │   └── update-user.dto.ts # DTO for updating existing users
│   └── entities/
│       └── user.entity.ts # TypeORM Entity for the users database table
└── profile/              # Generated Profile feature module linked via One-to-One
    ├── profile.module.ts
    ├── profile.controller.ts
    ├── profile.service.ts
    └── entities/
        └── profile.entity.ts # TypeORM Entity for profiles (One-to-One with User)