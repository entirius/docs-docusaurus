---
sidebar_position: 2
---

# Getting Started

Welcome to Entirius! This guide will help you get started with the platform.

## What You'll Need

- **Node.js** version 18 or above
- **Python** 3.9 or above
- **PostgreSQL** database
- **Docker** (optional but recommended)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/entirius/entirius.git
cd entirius
```

### 2. Backend Setup

Navigate to the backend service:

```bash
cd services/entirius-backend
```

Install dependencies using UV (modern Python package manager):

```bash
# Install UV first if not already installed
curl -LsSf https://astral.sh/uv/install.sh | sh

# Create virtual environment and install dependencies
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
uv sync
```

### 3. Database Setup

Create a PostgreSQL database and configure your settings:

```bash
python manage.py migrate
python manage.py createsuperuser
```

### 4. Start the Development Server

```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000`.

## Next Steps

- Explore the [Development](./development) guide
- Check out available [Modules](./modules)
- Learn about [Services](./services)
- Read the [API Documentation](./api-introduction)

## Need Help?

If you encounter any issues:

1. Check our [GitHub Issues](https://github.com/entirius/entirius/issues)
2. Review the [Development](./development) documentation
3. Join our community discussions

Happy building with Entirius!