# WCR Project

## Overview
This project is built with Angular and leverages various tools and libraries to create a responsive, dynamic, and visually appealing web application. It includes server-side rendering (SSR), Material Design components, and 3D graphics integration using Three.js and Spline.

---

## Dependencies

### Core Angular Packages
- **`@angular/animations`**: Enables animation capabilities in the application.
- **`@angular/cdk`**: Component Dev Kit for foundational utilities and custom component development.
- **`@angular/common`**: Provides commonly used services, pipes, and directives.
- **`@angular/core`**: The core library for building Angular applications.
- **`@angular/forms`**: Supports both template-driven and reactive forms.
- **`@angular/material`**: Implements Material Design components for UI development.
- **`@angular/platform-browser`**: Facilitates running Angular applications in a web browser.
- **`@angular/platform-browser-dynamic`**: Supports Just-In-Time (JIT) compilation during development.
- **`@angular/router`**: Enables routing and navigation.

### Server-Side Rendering (SSR)
- **`@angular/ssr`**: Provides tools for server-side rendering using Angular Universal.
- **`@angular/platform-server`**: Allows Angular applications to be rendered on the server.

### Utility Libraries
- **`rxjs`**: A library for reactive programming and handling asynchronous data streams.
- **`zone.js`**: Provides an execution context for Angular's change detection mechanism.
- **`tslib`**: Reduces code duplication by providing TypeScript helpers.

### 3D Graphics and Spline Integration
- **`three`**: A library for creating 3D graphics in the browser.
- **`@splinetool/runtime`**: A runtime library for embedding and interacting with Spline 3D scenes.

### Backend and Express
- **`express`**: A web framework used for server-side functionality, including SSR and APIs.

### Development Tools
- **`@angular-devkit/build-angular`**: Tools for building Angular projects.
- **`@angular/cli`**: Angular Command Line Interface for project generation and management.
- **`typescript`**: TypeScript compiler for writing type-safe code.
- **`karma`**: A test runner for unit testing.
- **`jasmine-core`**: A testing framework used with Karma.
- **`karma-chrome-launcher`**: Runs tests in a Chrome browser.
- **`karma-coverage`**: Generates code coverage reports.
- **`karma-jasmine`**: Adapter for using Jasmine with Karma.
- **`karma-jasmine-html-reporter`**: Displays test results in the browser.

---

## Project Structure

```plaintext
wcr-project/
│
├── src/
│   ├── app/                  # Main application folder
│   │   ├── components/       # Reusable components
│   │   ├── services/         # Shared services like AuthService
│   │   ├── app.module.ts     # Main Angular module
│   │   ├── app.component.ts  # Root component
│   ├── assets/               # Static assets like images and styles
│   ├── environments/         # Environment-specific configurations
│   ├── main.ts               # Application entry point for the client
│   ├── main-server.ts        # Entry point for server-side rendering
│   ├── server.ts             # Node.js server for SSR
│   ├── styles.css            # Global CSS styles
│   └── index.html            # Application entry point
│
├── dist/                     # Compiled application files
├── node_modules/             # Installed dependencies
├── angular.json              # Angular CLI configuration
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
└── tsconfig.json             # TypeScript configuration
```



## Sources and References

This project was developed using a combination of resources to ensure the implementation followed best practices and industry standards. The following sources were referenced:

1. **ChatGPT**  
   Used for generating code snippets, debugging, and explanations of Angular concepts and best practices.

2. **Udemy Course on Angular**  
   Provided foundational knowledge and practical examples that helped me building the forms.

3. **Angular Documentation**  
   The official Angular documentation was a primary reference for understanding framework features and API usage.  
   [Angular Documentation](https://angular.io/docs)

4. **Spline Documentation**  
   Used to integrate and interact with 3D models and scenes using the Spline runtime library.  
   [Spline Documentation](https://docs.spline.design)

5. **Stack Overflow**  
   Consulted for troubleshooting and resolving specific implementation challenges.  
   [Stack Overflow](https://stackoverflow.com)

6. **Material Design Documentation**  
   Referenced for implementing UI components and ensuring consistency with Material Design guidelines.  
   [Material Design Documentation](https://m2.material.io)
