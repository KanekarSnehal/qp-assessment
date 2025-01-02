# Grocery Booking API

A **NestJS** application to manage grocery booking operations, providing APIs for admin and user roles. It supports viewing, managing, and booking groceries and is containerized using Docker for ease of deployment and scaling.

## Features

### Admin Responsibilities
- Add new grocery items to the system.
- View existing grocery items.
- Remove grocery items from the system.
- Update details (e.g., name, price) of existing grocery items.
- Manage inventory levels of grocery items.

### User Responsibilities
- View the list of available grocery items.
- Book multiple grocery items in a single order.

## Tech Stack
- **NestJS**: Backend framework.
- **Sequelize**: ORM for database interactions.
- **MySQL**: Relational database.
- **Docker**: Containerization.
- **TypeScript**: For type safety and scalability.

## Prerequisites
- **Node.js** (v18.x or higher)
- **Docker** (for containerization)
- **MySQL** (if running outside Docker)

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd grocery-booking-api
```

### 2. Install Dependencies
```bash 
npm install
```

### 3. Environment Variables
```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=grocery
PORT=3000
```
### 4. Run the Application
```bash
npm run start
```
The API will be available at http://localhost:3000

## Using Docker
### 1. Build the Docker image:
```bash
docker-compose build
```
### 2. Start the containers
```bash
docker-compose up
```
The API will be available at http://localhost:3000

## API Endpoints
### Admin Endpoints

| Method | Endpoint                    | Description                              |
|--------|-----------------------------|------------------------------------------|
| POST   | `/api/admin/groceries`       | Add a new grocery item                   |
| GET    | `/api/admin/groceries`       | View all grocery items                   |
| PATCH  | `/api/admin/groceries/:id`   | Update grocery item details              |
| DELETE | `/api/admin/groceries/:id`   | Remove a grocery item                    |

### User Endpoints
| Method | Endpoint                    | Description                              |
|--------|-----------------------------|------------------------------------------|
| GET    | `/api/user/groceries`        | View all available grocery items         |
| POST   | `/api/user/orders`           | Create an order with multiple grocery items |
