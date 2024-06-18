# E-Commerce Website

This project is a simple e-commerce website built with React, Redux, Node.js, and SQLite with Sequelize ORM. The application displays various products categorized by their respective categories, allows users to add them to the cart, and proceed to checkout by collecting basic user information.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Additional Notes](#additional-notes)

## Technologies

- **Frontend:** React, Redux Toolkit, React Router
- **Backend:** Node.js, Express.js
- **Database:** SQLite with Sequelize ORM
- **Styling:** Tailwind CSS
- **Notifications:** react-hot-toast

## Installation

### Prerequisites

- Node.js

### Steps

1. **Clone the repository:**

```bash
git clone <repository-url>
cd e-commerce-website
```

2. **Install dependencies:**
```bash
npm install
npm run install:client
npm run install:server
```

3. **Start the development servers:**
```bash
npm run dev
```

## Usage

1. Navigate to the homepage to view a list of products categorized by their respective categories.
2. Click on "Add to Cart" to add products to your cart.
3. Click on "Checkout" to proceed to the checkout page.
4. Fill in the required user details (name and email) and place the order.
5. A toast notification will confirm the order placement, and you'll be redirected to the homepage.

## Features

- Display products categorized by their respective categories (Chairs, Tables, Dining tops).
- Add products to the cart.
- View the cart and proceed to checkout.
- Collect essential user details during checkout.
- Store user and product details in the database.
- Save order items into their respective category tables.
- Use react-hot-toast for notifications.

## Additional Notes

- Ensure that the backend server and database are running before starting the frontend development server.
- Customize the database connection settings in the backend server configuration as needed.
- This project uses React Redux Toolkit for state management and react-hot-toast for notifications.
