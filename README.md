# 🚀 NestJS Learning - Lesson 1

Welcome to Lesson 1 of my NestJS journey! This lesson covers setting up the project using the NestJS CLI, understanding the default folder structure, and working with **Controllers** and **Services**.

---

## 📚 What I Learned

1. **NestJS Architecture**: NestJS follows a modular structure using Controllers, Services, and Modules.
2. **Controllers**: Responsible for handling incoming **HTTP requests** and returning responses to the client.
3. **Services**: Responsible for **business logic**, data retrieval, and heavy lifting, keeping controllers clean and lightweight.
4. **Dependency Injection**: Injecting services into controllers using constructor injection.

---

## 🛠️ Essential CLI Commands

| Action | Command | Description |
| :--- | :--- | :--- |
| **New Project** | `nest new project-name` | Scaffolds a new NestJS application. |
| **Create Controller** | `nest g controller <name>` | Generates a controller with a test file. |
| **Create Service** | `nest g service <name>` | Generates a service provider with a test file. |
| **Start Server** | `npm run start:dev` | Starts the app in watch mode (auto-reloads on changes). |

---

## 📁 Project Folder Overview

```text
src/
├── app.controller.ts     # Routes requests to the service
├── app.controller.spec.ts# Unit tests for the controller
├── app.module.ts         # Root module of the application
├── app.service.ts        # Business logic provider
└── main.ts               # Entry point (bootstrap the Nest application)