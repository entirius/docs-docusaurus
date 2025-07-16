---
sidebar_position: 8
---

# ADR-008: GitHub Repository Naming Conventions

## Status
**Status**: Accepted  
**Date**: 2025-07-10  
**Authors**: Piotr Brzozowski  
**Reviewers**: Piotr Brzozowski 

## Context

The Entirius project is growing with multiple repositories for different components (services, modules, tools). We need to establish consistent naming conventions for GitHub repositories to maintain clarity, discoverability, and organizational structure as the project scales.

Clear naming conventions will help:
- Improve discoverability of repositories
- Establish clear categorization of components
- Support automated tooling and CI/CD processes
- Maintain consistency across the organization

**Technology Stack Considerations:**
The Entirius platform uses different technology stacks for different types of services:
- **Frontend Services**: PWA applications built with Node.js/React for user interfaces
- **Django Services**: Django-based services (Python) for API endpoints and business logic
- **Django Modules**: Django modules that extend the modular monolith architecture
- **Python Libs**: Python lib modules
- **Tools**: Various utility applications that may use different technologies based on their purpose

This diversity in technology stacks makes consistent naming even more important for:
- Distinguishing between different service types at a glance
- Enabling technology-specific CI/CD pipelines based on repository names
- Supporting different deployment strategies for Django vs Node.js services
- Facilitating team specialization (backend vs frontend developers)


## Decision

**Prefixed Naming with Component Type**

The naming convention will be:

- **Frontend PWA Services**: `entirius-pwa-[name]` (e.g., `entirius-pwa-cynthia`, `entirius-pwa-admin`)
- **Django Services**: `entirius-service-[name]` (e.g., `entirius-service-backend`, `entirius-service-auth`)
- **Django Modules**: `entirius-django-[name]` (e.g., `entirius-django-pim`, `entirius-django-checkout`)
- **Python Libs**: `entirius-pylib-[name]` (e.g., `entirius-pylib-paypal-sdk`, `entirius-pylib-process-logger`)
- **Tools**: `entirius-tool-[name]` (e.g., `entirius-tool-csv-wizard`, `entirius-tool-image-resizer`)
- **Documentation**: `entirius-docs-[name]` (e.g., `entirius-docs-api`, `entirius-docs-user`)

**Special cases**:
- Main platform documentation repository: `entirius-docs`

**Technology Stack Integration:**
The naming convention explicitly supports our multi-technology approach:
- Django services can be easily identified and have appropriate Python-based CI/CD pipelines
- Node.js/PWA applications can be distinguished and receive JavaScript-based tooling
- Mixed-technology tools can be categorized appropriately regardless of their implementation
- Repository names provide immediate context about expected deployment and development workflows

This approach supports our modular monolith architecture while maintaining clear boundaries between different types of components and their underlying technologies.

## Consequences

### Positive
- Clear categorization of repositories by component type
- Improved discoverability and searchability
- Supports automated tooling and CI/CD processes
- Consistent naming across the organization
- Easy to onboard new team members with predictable naming

### Negative
- Longer repository names
- Requires migration of existing repositories
- May require updates to documentation and references
- Initial setup effort for implementing the convention

### Neutral
- GitHub organization will need to maintain naming convention guidelines
- Repository descriptions should complement the naming convention

## Related ADRs

- [ADR-001](./adr-001-modular-monolith.md): Modular Monolith Architecture - establishes the component types that need naming conventions
- [ADR-005](./adr-005-github-code-management.md): GitHub as Code Repository - establishes GitHub as the platform for these naming conventions

## References

- [GitHub Repository Naming Best Practices](https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories)
- [Semantic Naming Conventions](https://semver.org/)
- [Project Organization Guidelines](../development.md)


