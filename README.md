# DHL Shipping Label Server-Side App

## Overview

This server-side application is built with Node.js and Express to handle the generation of DHL shipping labels. It uses MySQL for data storage and logs, and it communicates with the DHL API to validate addresses and print shipping labels.

## Project Structure

```
/server
  /config
    config.js
    db.js
  /controllers
    authController.js
    orderController.js
    dhlController.js
  /middlewares
    authMiddleware.js
  /models
    Order.js
    Log.js
  /routes
    authRoutes.js
    orderRoutes.js
    dhlRoutes.js
  /utilities
    dhlAPI.js
  .env
  app.js
  package.json
```

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/lentmiien/dhl-api-server.git
   cd dhl-api-server
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add the following variables:

   ```ini
   JWT_SECRET=your_jwt_secret
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_db_password
   DB_NAME=shipping
   ```

4. **Start the server**:
   ```sh
   npm start
   ```

## Usage

### Endpoints

### Authentication:

- **POST `/api/auth/login`**: User login to receive JWT token
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password"
    }
    ```

### Orders:

- **POST `/api/orders/upload-csv`**: Upload CSV file of orders for validation and storage
  - Headers:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
  - Request Body: Form-data (with a CSV file)

### DHL:

- **POST `/api/dhl/generate-label/:orderId`**: Generate DHL label for the specified order
  - Headers:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
  - URL Parameters:
    ```json
    {
      "orderId": "<order_id>"
    }
    ```

## Middleware

### Authentication Middleware

- Authenticates user requests and allows access only if a valid JWT token is provided.

### Models

#### Order Model

- Handles CRUD operations for orders.

#### Log Model

- Handles CRUD operations for logs.

## Utilities

#### DHL API Wrapper

- Provides methods to interact with the DHL API for checking available services and generating labels.

## Notes

- Ensure that HTTPS is used for secure communication.
- Sanitize all inputs to protect against SQL injection and other security vulnerabilities.
- Handle errors properly and return relevant status codes and error messages.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
