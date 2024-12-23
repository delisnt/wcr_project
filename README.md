# Angular Authentication App

This project is an Angular-based authentication application designed to handle user login and registration functionalities. Below, you'll find details about the dependencies used, the directory structure, and the reasons for their inclusion in the project.

---

## Table of Contents
1. [Dependencies](#dependencies)
2. [Project Structure](#project-structure)
3. [Usage](#usage)
4. [Installation](#installation)
5. [License](#license)

---

## Dependencies

### Core Dependencies
- **`@angular/core`**: Provides the core functionality of Angular, including components, directives, and services.
- **`@angular/router`**: Used for managing application routes and navigation.
- **`@angular/forms`**: Enables template-driven and reactive forms for handling user input and validation.

### HTTP and API Communication
- **`@angular/common/http`**: Provides the `HttpClient` module to make HTTP requests to the backend API.

### UI Dependencies
- **`@angular/material`**: A UI library that offers pre-built components like buttons, tabs, inputs, and icons to enhance the user interface.
  - **`MatInputModule`**: For creating styled input fields.
  - **`MatTabsModule`**: For creating tabbed navigation.
  - **`MatButtonModule`**: For styled buttons.
  - **`MatIconModule`**: For using Material Design icons in the UI.

### Environment Management
- **Custom Environment Files**: Used to store sensitive data like API keys (`environment.ts` and `environment.prod.ts`).

### Development Dependencies
- **`rxjs`**: Reactive programming library used for handling asynchronous events and HTTP responses.
- **`typescript`**: Ensures type safety and better developer experience.

### Why These Dependencies?
1. **Angular Material**: Simplifies UI development with a consistent and responsive design.
2. **HttpClient**: Facilitates easy communication with the backend API for login and registration.
3. **FormsModule**: Enables efficient form handling for user input and validation.
4. **Environment Files**: Ensures separation of configuration for development and production.

---

## Project Structure

