# 🚀 NestJS Learning - Lesson 1

Welcome to Lesson 1 of my NestJS journey! This lesson covers setting up the project using the NestJS CLI, understanding the default folder structure, working with **Controllers** and **Services**, diving into database management with **TypeORM**, and implementing request **Validation**.

---

## 📚 What I Learned

1. **NestJS Architecture**: NestJS follows a modular structure using Controllers, Services, and Modules.
2. **Controllers**: Responsible for handling incoming **HTTP requests** and returning responses to the client.
3. **Services**: Responsible for **business logic**, data retrieval, and heavy lifting, keeping controllers clean and lightweight.
4. **Dependency Injection**: Injecting services into controllers using constructor injection.
5. **Generating Resources**: Learned how to generate a `module.ts`, `service.ts`, and `controller.ts` by building a "Cats" feature. 
6. **TypeORM Integration**: Learned how to configure and use TypeORM to connect the NestJS application to a database.
7. **Entities**: Understood how to create TypeORM entities to define database tables and schemas using TypeScript classes and decorators.
8. **Validation**: Learned how to validate incoming request data using **Data Transfer Objects (DTOs)**, `class-validator`, and NestJS's built-in `ValidationPipe`.

---

## 🛠️ Essential CLI Commands

| Action | Command | Description |
| :--- | :--- | :--- |
| **New Project** | `nest new project-name` | Scaffolds a new NestJS application. |
| **Create Module** | `nest g module <name>` | Generates a new module (e.g., `nest g module cats`). |
| **Create Controller** | `nest g controller <name>` | Generates a controller with a test file. |
| **Create Service** | `nest g service <name>` | Generates a service provider with a test file. |
| **Create Resource** | `nest g resource <name>` | Generates a full CRUD boilerplate (Module, Controller, Service). |
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
└── cats/                 # Newly generated Cats feature module
    ├── cats.module.ts    # Ties the cat controller and service together
    ├── cats.controller.ts# Handles /cats routes
    ├── cats.service.ts   # Cat-related business logic
    ├── dto/
    │   └── create-cat.dto.ts # Data Transfer Object for request validation
    └── entities/
        └── cat.entity.ts # TypeORM Entity for the database table