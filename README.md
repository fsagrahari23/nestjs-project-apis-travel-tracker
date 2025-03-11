# Secure Destination Management API

A robust, secure API built using **NestJS**, **TypeScript**, **Prisma**, **PostgreSQL**, **PassportJS**, and **JWT**. This project implements comprehensive authentication and authorization to ensure that only authenticated users can access sensitive routes.

## Tech Stack

- **NestJS**: A scalable, modular framework for building efficient server-side applications.
- **TypeScript**: Provides strong typing and modern JavaScript features.
- **Prisma**: A modern ORM that simplifies interactions with a PostgreSQL database.
- **PostgreSQL**: A reliable, open-source relational database.
- **PassportJS**: Middleware for implementing flexible authentication strategies.
- **JWT (JSON Web Tokens)**: Secures API endpoints via stateless, token-based authentication.

## Features

- **User Authentication & Authorization**
  - **Registration**: New users can register via the `/auth/register` endpoint.
  - **Login**: Registered users log in through the `/auth/login` endpoint and receive a JWT token.
  - **Route Protection**: Uses PassportJS with a JWT strategy to guard endpoints, ensuring only authenticated users can access protected resources.

- **Destination Management**
  - **Add Destination**: Create a new destination using the `/destination/add` endpoint.
  - **Retrieve Destinations**:
    - **All Destinations**: Fetch all destinations with `/destination/all`.
    - **Single Destination**: Get details for a specific destination via `/destination/:id`.
  - **Update Destination**: Modify destination details with the `/destination/:id` (PATCH) endpoint.
  - **Delete Destination**: Remove a destination using the `/destination/:id` (DELETE) endpoint.

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- PostgreSQL
- Basic familiarity with JWT and PassportJS for authentication

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

npm install

Create a .env file in the project root with the following keys:

DATABASE_URL=postgresql://user:password@localhost:5432/yourdbname
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600s


npx prisma migrate dev

npm run start:dev

# Detailed Overview
### Authentication with PassportJS and JWT
## PassportJS Integration:
PassportJS is utilized to manage authentication strategies. In this project, it is paired with a JWT strategy that validates the token on each request, ensuring secure access control for protected routes.

## JWT-Based Stateless Authentication:
Once a user logs in, a JWT token is generated and returned. This token must be included in the header of subsequent requests, allowing the server to authenticate requests without maintaining session state. This method scales efficiently and minimizes server overhead.

## Implementation Highlights:

Auth Module: Manages user registration and login.
JWT Strategy: Validates token authenticity and extracts user data from the payload.
Route Guards: Implemented via NestJS guards, these ensure that only requests containing a valid JWT can access sensitive endpoints.
Destination Module
CRUD Operations:
The Destination Module provides endpoints for creating, reading, updating, and deleting destination records. This module is designed with clear separation of concerns and robust error handling.

## Endpoints Overview:

POST /destination/add: Allows authenticated users to add new destinations.
GET /destination/all: Retrieves a list of all destinations.
GET /destination/:id: Fetches details of a specific destination.
PATCH /destination/:id: Enables updates to destination information.
DELETE /destination/:id: Permits the deletion of a destination record.
Contributing
Contributions are highly welcome! Please open an issue or submit a pull request with improvements or bug fixes.


