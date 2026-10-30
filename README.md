this is demo for dummy-main branchs
# TodoPro - Full Stack Todo Management Application

TodoPro is a full-stack Todo Management Application built using:

- ASP.NET Core 8 Web API
- Entity Framework Core 8
- MySQL
- JWT Authentication
- React (Vite)
- Axios
- Bootstrap 5

Users can:

- Register an account
- Login using JWT Authentication
- Create todos
- View todos
- Mark todos as completed
- Delete todos
- Logout securely

---

# Project Architecture

```text
TodoPro
│
├── Backend
│   ├── ASP.NET Core 8 Web API
│   ├── Entity Framework Core
│   ├── JWT Authentication
│   └── MySQL Database
│
└── Frontend
    ├── React + Vite
    ├── Axios
    ├── Bootstrap 5
    └── React Router
```

---

# Features

## Authentication

- User Registration
- User Login
- JWT Token Authentication
- Protected API Routes
- Secure Password Hashing using BCrypt

## Todo Management

- Add Todo
- List Todos
- Complete Todo
- Delete Todo
- User-specific Todo Data

---

# Technologies Used

## Backend

- ASP.NET Core 8
- Entity Framework Core 8
- Pomelo MySQL Provider
- JWT Bearer Authentication
- BCrypt.Net

## Frontend

- React
- Vite
- Axios
- React Router DOM
- Bootstrap 5

## Database

- MySQL

---

# Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/TodoPro.git
```

Navigate into the project:

```bash
cd TodoPro
```

---

# Backend Setup

Navigate to Backend project:

```bash
cd Backend/TodoApp
```

Restore packages:

```bash
dotnet restore
```

---

# Create MySQL Database

Open MySQL Workbench and run:

```sql
CREATE DATABASE TodoDb;
```

---

# Configure Database Connection

Open:

```text
Backend/TodoApp/appsettings.json
```

Update:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "server=localhost;database=TodoDb;user=root;password=YOUR_PASSWORD"
  }
}
```

Replace:

```text
YOUR_PASSWORD
```

with your MySQL password.

---

# Configure JWT Settings

Inside:

```json
"Jwt": {
  "Key": "YourSuperSecretKey",
  "Issuer": "TodoApi",
  "Audience": "TodoUsers"
}
```

You can keep these values or change them.

---

# Create Database Tables

Open Package Manager Console:

```powershell
Update-Database
```

Or:

```bash
dotnet ef database update
```

---

# Run Backend

```bash
dotnet run
```

Swagger will be available at:

```text
https://localhost:7205/swagger
```

(Port may differ on your machine.)

---

# Frontend Setup

Navigate to frontend