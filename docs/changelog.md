---
sidebar_position: 7
---

# Changelog

All notable changes to Entirius will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New Docusaurus documentation site
- Comprehensive API documentation
- Getting started guide
- Development guidelines

### Changed
- Improved project structure
- Enhanced module organization

### Fixed
- Documentation inconsistencies
- Code formatting issues

## [0.1.0] - 2025-07-08

### Added
- Initial release of Entirius platform
- Entirius Backend service with Django
- Entirius PIM module for product management
- Entirius Config module for configuration
- Basic API endpoints for products, categories, attributes
- Django admin interface
- PostgreSQL database support
- Docker containerization
- GitHub Actions CI/CD pipeline

### Features
- **Product Information Management (PIM)**
  - Product creation and management
  - Attribute system with flexible types
  - Category hierarchies
  - Feature sets and product features
  - Image management with thumbnails
  - Pricing support

- **Backend Services**
  - RESTful API with Django REST Framework
  - JWT authentication
  - OpenAPI documentation
  - Admin interface
  - Database migrations

- **Developer Experience**
  - Comprehensive test suite
  - Code formatting with Black
  - Type checking with mypy
  - Documentation with Mintlify
  - Development environment setup

### Architecture
- Modular monolith design
- Django-based backend
- PostgreSQL database
- Docker deployment
- GitHub-based development workflow

### Documentation
- Architecture Decision Records (ADRs)
- API reference documentation
- Development setup guides
- Module documentation

## Technical Details

### Supported Python Versions
- Python 3.9+
- Django 5.0+
- PostgreSQL 12+

### Dependencies
- Django REST Framework
- PostgreSQL adapter (psycopg2)
- Pillow for image processing
- pytest for testing
- Black for code formatting

### Known Issues
- None reported in this release

## Migration Notes

This is the initial release, so no migration is required.

## Contributors

Thank you to all contributors who helped with this release:

- Entirius Team
- Community contributors
- Beta testers and early adopters

## Support

For support and questions:
- GitHub Issues: https://github.com/entirius/entirius/issues
- Discussions: https://github.com/entirius/entirius/discussions
- Documentation: https://docs.entirius.com

---

## Future Releases

### Planned for v0.2.0
- Frontend applications with React/Next.js
- AI agent integration
- Enhanced API features
- Performance optimizations
- Additional modules

### Planned for v0.3.0
- Multi-tenancy support
- Advanced analytics
- Mobile applications
- Third-party integrations

Stay tuned for updates and new features!