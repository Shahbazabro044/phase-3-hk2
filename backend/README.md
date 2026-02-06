# Todo Application Backend

This is a FastAPI backend for the Todo application with user authentication and todo management features.

## Features

- User registration and authentication (JWT-based)
- Todo CRUD operations (Create, Read, Update, Delete)
- Secure password hashing
- Role-based access control
- RESTful API design
- SQLite database (can be configured for PostgreSQL/MySQL)

## Prerequisites

- Python 3.8+
- pip (Python package installer)

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` as needed (especially `SECRET_KEY`)

## Running the Application

### Method 1: Direct Python execution
```bash
python main.py
```

### Method 2: Using Uvicorn
```bash
uvicorn main:app --reload
```

### Method 3: Using the startup script
On Windows:
```bash
start.bat
```

On Linux/Mac:
```bash
chmod +x start.sh
./start.sh
```

The application will be available at `http://localhost:8000`

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and get JWT token
- `GET /auth/me` - Get current user info

### Todos
- `GET /todos/` - Get all todos for current user
- `GET /todos/{id}` - Get a specific todo
- `POST /todos/` - Create a new todo
- `PUT /todos/{id}` - Update a specific todo
- `DELETE /todos/{id}` - Delete a specific todo

## Frontend Integration

The backend is configured with CORS to allow requests from the frontend. By default, it allows all origins for development purposes. In production, you should specify your frontend URL in the `allow_origins` list in `main.py`.

## Database

The application uses SQLAlchemy ORM and supports SQLite by default. You can switch to PostgreSQL or MySQL by changing the `DATABASE_URL` in the `.env` file:

- SQLite: `sqlite:///./todo_app.db`
- PostgreSQL: `postgresql://user:password@localhost/dbname`
- MySQL: `mysql+pymysql://user:password@localhost/dbname`

## Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Protected endpoints requiring valid tokens
- Input validation using Pydantic models

## Development

- The application uses FastAPI's automatic API documentation at `/docs` and `/redoc`
- Hot reloading is enabled with `--reload` flag