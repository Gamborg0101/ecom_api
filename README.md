# User API – Platform-Ready Project

A Node.js API designed with **platform and operational readiness** in mind — featuring Docker containerization, logging, error handling, and health monitoring. Built as a project to demonstrate **stable and maintainable platform services**.

---

## ✨ Features

- 🧑‍💻 **CRUD for Users** – Create, read, update, and delete user records.
- 🔧 **Error handling** – Global error handler with logging for robust operation.
- 📊 **Logging & observability** – Logs request method, URL, status code, and response time. Supports persistent log files via Docker volume.
- 🩺 **Healthcheck endpoint** – `/health` endpoint for monitoring service status.
- 🐳 **Dockerized** – Runs in a container for consistent deployment and environment isolation.
- ⚡ **Validation** – Input validation for POST requests to ensure data integrity.

---

## 🛠️ Tech Stack

| Layer      | Technology                  |
| ---------- | --------------------------- |
| Framework  | Express.js                  |
| Language   | JavaScript (Node.js 18)     |
| Templating | EJS                         |
| Database   | PostgreSQL (optional)       |
| Container  | Docker + Docker Compose     |
| Logging    | Built-in + persistent files |

---

## 🚀 Getting Started

1. **Clone & Install**

```bash
git clone https://github.com/Gamborg0101/user-api.git
cd user-api
npm install

### Run with Docker
docker compose up --build

### Run locally (without Docker)
npm run nodemon server.js
```

2. See application in action

- Open your browser and visit [http://localhost:3000/users](http://localhost:3000/users) to see the user list.
- Create a new user via [http://localhost:3000/users/new](http://localhost:3000/users/new) and test form submission.
- View individual users via [http://localhost:3000/users/:id](http://localhost:3000/users/0) (replace `:id` with a user index).
- Check service health at [http://localhost:3000/health](http://localhost:3000/health) to verify the API is running.
- Inspect logs in `./logs/api.log` (if running via Docker volume) to see request tracking and errors.
- Try simulating errors (e.g., submitting empty `firstName`) to see error handling in action.
