# Login-Register-App

This project implements a user authentication feature with login and registration forms using React. The forms handle user inputs with basic front-end validation and include styling for a clean and modern look.

## Objective

Develop a feature that includes both a user login and registration form. The implementation should handle user inputs, provide basic front-end validation, and allow users to switch between login and registration forms.

## Requirements

### 1. Create an HTML Form

#### Login Form:
- **Fields:** Username and Password.
- **Button:** Submit the form.
- **Link:** Switch to the registration form if the user does not have an account.

#### Registration Form:
- **Fields:** Username, Email and Password.
- **Button:** Submit the form.
- **Link:** Switch to the login form if the user already has an account.

### 2. CSS Styling
- Style the forms for a clean and modern look.
- Ensure that only one form (either login or registration) is visible at a time.

### 3. JavaScript Functionality
- Implement functionality to redirect/toggle between the login and registration forms.
- Handle form submission with basic validation (e.g., checking that fields are not empty).

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/KritiOmar20/Login-Register-App.git
   cd login-register-app

2. **Install Dependencies**

   ```bash
   npm install

3. **Start the Development Server**

   ```bash
   npm run dev

The React application will be available at your server.

**Usage**
1. Visit the Application

Open http://localhost:5173 in your browser.

2. Register a New Account

Use the registration form to create a new account. Ensure all fields are filled before submitting.

3. Log In

After registering, use the login form to authenticate with the credentials you provided during registration.

4. Switch Forms

Use the provided links to switch between the login and registration forms.
