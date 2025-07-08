# Architecture

This section contains documentation of the Entirius system architecture, including Architecture Decision Records (ADRs) and general design principles.

## Architecture Decision Records (ADR)

Architecture Decision Records document key architectural decisions made in the Entirius project. They provide context, rationale, and consequences for important technical choices.

For detailed information about ADRs, including templates and processes, see the [ADR section](adr/index.md).

## Architectural Principles

### General principles
- **Modularity** - system consists of independent modules
- **Scalability** - architecture supports load growth
- **Maintainability** - code is easy to maintain and develop
- **Security First** - security is a priority

### Architectural patterns
- **Modular Monolith** - single deployable unit with well-defined internal modules
- **Event-Driven** - asynchronous communication through events
- **API-First** - RESTful APIs with OpenAPI documentation

## Architecture Diagrams

### High-level Architecture
![Entirius Architecture Overview](/img/entirius-base-big-picture.svg)

### MVP Architecture
![Entirius MVP Architecture](/img/entirius-base-mvp.svg)

## Technologies

### Backend
- **Python 3** - primary programming language
- **Django** - web framework with Django REST Framework
- **PostgreSQL** - relational database
- **Redis** - caching and session storage
- **Celery** - task queue for background processing

### Frontend
- **React** - UI framework
- **TypeScript** - programming language
- **Next.js** - full-stack framework with SSR/SSG capabilities

### Infrastructure
- **Docker** - containerization
- **GitHub Actions** - CI/CD pipeline
- **UV** - Python package manager

## Related Documentation

- [ADR Index](adr/index.md) - Complete list of Architecture Decision Records
- [Development](development.md) - Technical development documentation
- [Services](services.md) - Available services documentation
- [Modules](modules.md) - System modules documentation
