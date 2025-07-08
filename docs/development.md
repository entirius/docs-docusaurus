---
sidebar_position: 3
---

# Development

Learn how to contribute to and extend Entirius.

## Architecture Overview

Entirius follows a **modular monolith** architecture that provides:

- **Scalability**: Start small and grow your platform
- **Maintainability**: Clear separation of concerns
- **Flexibility**: Mix and match components as needed
- **Consistency**: Shared infrastructure and patterns

## Key Technologies

### Backend
- **Django**: Web framework with Django REST Framework
- **PostgreSQL**: Primary database
- **Python 3.9+**: Programming language
- **OpenAPI**: API documentation and schema validation

### Frontend
- **React**: UI library
- **Next.js**: Full-stack framework
- **TypeScript**: Type safety and developer experience

### Development Tools
- **Docker**: Containerization
- **GitHub Actions**: CI/CD pipeline
- **pytest**: Testing framework

## Project Structure

```
entirius/
├── services/
│   └── entirius-backend/     # Django backend service
├── modules/
│   ├── entirius-pim/         # Product Information Management
│   └── entirius-config/      # Configuration management
├── docs-entirius/            # Documentation (this site)
└── docs-entirius-mintlify/   # Legacy documentation
```

## Development Workflow

1. **Fork the repository** on GitHub
2. **Create a feature branch** from `main`
3. **Make your changes** following our coding standards
4. **Run tests** to ensure everything works
5. **Submit a pull request** with a clear description

## Running Tests

```bash
# Backend tests
cd services/entirius-backend
python -m pytest

# Frontend tests (when available)
cd frontend-app
npm test
```

## Code Style

We follow these conventions:

- **Python**: PEP 8 with Black formatting
- **JavaScript/TypeScript**: ESLint with Prettier
- **Commit messages**: Conventional Commits format

## Contributing

We welcome contributions! Please:

1. Read our [Code of Conduct](https://github.com/entirius/entirius/blob/main/CODE_OF_CONDUCT.md)
2. Check existing [Issues](https://github.com/entirius/entirius/issues)
3. Follow the development workflow above

## Local Development Setup

For detailed local development setup, see [Getting Started](./getting-started).

## Need Help?

- Join our [GitHub Discussions](https://github.com/entirius/entirius/discussions)
- Check the [API Documentation](./api-introduction)
- Review existing [Issues](https://github.com/entirius/entirius/issues)