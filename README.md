# Web Store Capstone Project

## Overview

This project is a React-based web store application designed to showcase the practical application of React, JSX, and JavaScript concepts. The web store features a user registration and login system, a product display page, and a cart page where users can manage their purchases. The project includes state management using Redux and various interactive and visually appealing components.

## Features

1. **Create React App**: The application was bootstrapped using Create React App.
   
2. **Interactive Components**: The app includes at least four different types of attractively styled components that respond to user interactions. React-Bootstrap was used for styling alongside custom CSS.
   
3. **User Registration**: Users can register by entering the following details:
   - First name
   - Surname
   - Username
   - Email address
   - Password
   Input validation ensures that only valid email addresses and strong passwords are accepted.
   
4. **User Login**: Registered users can log in by entering their username. The username is stored in a state and displayed in the header component.
   
5. **Persistent Header**: The header component includes a navigation menu and is displayed at the top of the page across all URLs.

6. **Main Components**:
   - **Landing Page**: The home page of the web store.
   - **Product Page**: Displays a list of items available for purchase, allowing users to add them to their cart.
   - **Cart Page**: Shows the selected items, total cost, and allows the user to select a shipping method.
   
7. **Dynamic Rendering**: Several components are rendered using the `array.map()` method, each with a unique key.

8. **State Management**: User interactions modify the state of components. Redux is used for managing the global state.

9. **Cart Functionality**: Items added by the user are stored in a "cart" state, which is used to display the user's selections and calculate the total cost on the cart page.

10. **Shipping Options**: Users can select a shipping method and request help to get information about the shipping options.

11. **Attractive UI**: The user interface is designed to be intuitive and visually appealing.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   https://github.com/Kurtney21/hdev-web-store.git

2. **Navigate to the Project Directory**:
   ```bash
   cd web-store

3. **Install Dependencies**:
   ```bash
   npm install

4. **Start Application**:
   ```bash
   npm start
   
