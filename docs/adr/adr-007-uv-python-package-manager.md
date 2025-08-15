---
sidebar_position: 7
---

# ADR-007: UV Python Package Manager

## Status
**Status**: Accepted  
**Date**: 2025-07-02  
**Authors**: Development Team  
**Reviewers**: Architecture Team

## Context

The Entirius project is a modern e-commerce AI platform designed from the ground up with contemporary development practices. As a modern project, we adopt current Python packaging standards using pyproject.toml and modern dependency management. Traditional approaches with legacy requirements.txt files and pip/venv have several limitations:

- Slow dependency resolution and installation times
- Dependency conflict resolution challenges
- Multiple tool ecosystem (pip, venv, pipenv, poetry) creating complexity
- Lack of modern dependency locking mechanisms
- Poor performance with large dependency trees
- Limited cross-platform consistency
- Outdated requirements.txt format without rich metadata support

As a modern project built with performance and developer experience in mind, Entirius requires a state-of-the-art Python package management solution that can:
- Deliver exceptional development workflow speed from day one
- Provide superior dependency resolution capabilities
- Support modern Python packaging standards (PEP 517/518)
- Use pyproject.toml for unified project configuration
- Minimize complexity in development environment setup
- Support efficient local development and CI/CD pipelines

## Considered Options

### Option 1: Adopt traditional pip + venv + requirements.txt
- **Description**: Use the legacy approach with pip, venv, and requirements.txt files for dependency management
- **Pros**: 
  - Well-established and widely known
  - Part of Python standard library
  - Maximum compatibility
  - No learning curve for team
- **Cons**:
  - Slow dependency resolution and installation
  - Poor dependency conflict resolution
  - Manual dependency locking process
  - Multiple tools to manage
  - Outdated requirements.txt format lacks metadata
  - No built-in support for modern packaging standards
- **Impact on system**: Would require accepting slower development workflows and legacy file formats

### Option 2: Poetry
- **Description**: Adopt Poetry as the Python package and dependency manager with pyproject.toml
- **Pros**: 
  - Integrated dependency management and virtual environments
  - Automatic dependency locking (poetry.lock)
  - Uses modern pyproject.toml standard
  - Good dependency resolution
  - Popular in Python community
- **Cons**:
  - Still relatively slow compared to modern alternatives
  - Complex pyproject.toml configuration for advanced use cases
  - Occasional dependency resolution issues
  - Heavier runtime requirements
- **Impact on system**: Establishes modern pyproject.toml-based workflow but with slower performance

### Option 3: UV
- **Description**: Adopt Astral's UV as the primary Python package manager with pyproject.toml
- **Pros**: 
  - Extremely fast (10-100x faster than pip)
  - Native pyproject.toml support (PEP 517/518)
  - Written in Rust for performance
  - Modern dependency management with uv.lock
  - Unified tool for multiple package management tasks
  - Superior dependency resolution
  - Active development by Astral (creators of Ruff)
  - First-class support for modern Python packaging standards
- **Cons**:
  - Relatively new tool (less mature ecosystem)
  - Team learning curve
  - Potential compatibility issues with edge cases
- **Impact on system**: Establishes modern pyproject.toml-based workflow with exceptional performance from project inception

## Decision

**Chosen option**: Option 3 - UV Python Package Manager

**Rationale**: 
UV aligns perfectly with Entirius's commitment to modern, high-performance development practices. As a greenfield project, we can adopt best-in-class tooling from the start. Key decision factors:

- **Performance**: 10-100x faster installation times will dramatically improve developer productivity
- **Modern standards**: Native support for pyproject.toml and modern Python packaging (PEP 517/518)
- **Unified tooling**: Single tool replacing pip, venv, pip-tools with superior performance
- **Future-proof**: Backed by Astral, the company behind Ruff, showing commitment to Python tooling excellence
- **Modern foundation**: Establishes cutting-edge development practices with pyproject.toml from project inception
- **Advanced dependency management**: Modern uv.lock files providing deterministic builds
- **CI/CD benefits**: Faster builds and deployments with modern dependency resolution

## Consequences

### Positive
- Dramatically faster dependency installation (10-100x improvement)
- Modern pyproject.toml-based configuration from project start
- Unified tool reducing complexity in development workflow
- Superior dependency resolution with uv.lock for deterministic builds
- Faster CI/CD pipeline execution
- Native support for Python packaging standards (PEP 517/518)
- Eliminates need for legacy requirements.txt files
- Better developer experience with modern tooling

### Negative
- Team needs to learn UV-specific commands and workflows
- Potential edge case compatibility issues with complex dependencies
- Dependency on relatively new tool (though backed by reputable company)
- Initial setup effort for pyproject.toml configuration

### Neutral
- Native pyproject.toml support aligns with modern Python packaging standards
- Establishes consistent modern workflow across all project components
- Sets foundation for future Python packaging evolution

## Implementation Plan

This plan establishes UV as the mandatory standard for all new Python projects in the Entirius organization.

- **Mandate UV for all new Python projects** - No exceptions for greenfield development
- Install UV on all development machines, CI/CD systems, and production environments
- Create standardized `pyproject.toml` templates for different project types:
  - Django services template
  - Python modules template  
  - CLI tools template
  - Library packages template

## Success Metrics

### Implementation Success
- **100% compliance**: All new Python projects use UV and pyproject.toml (no exceptions)
- **Template adoption**: Standardized pyproject.toml templates used across all project types
- **Infrastructure readiness**: UV installed and configured on 100% of development and deployment environments
- **Team competency**: All Python developers trained and certified on UV workflows

### Operational Excellence  
- **CI/CD optimization**: All Python project pipelines use UV with proper caching strategies
- **Developer experience**: Reduced project setup time through standardized UV workflows  
- **Quality assurance**: Zero critical compatibility issues with UV in production environments
- **Documentation completeness**: Comprehensive UV guidelines and troubleshooting resources available

### Performance and Adoption
- **Dependency installation speed**: Demonstrate 10-50x performance improvement over traditional tools
- **Developer satisfaction**: Positive feedback on UV adoption and workflow improvements
- **Compliance monitoring**: Automated tracking of UV usage across all new Python projects
- **Continuous improvement**: Regular optimization of templates and workflows based on team feedback

## Related ADRs

- [ADR-002](./adr-002-openapi-django-rest-framework): Django backend uses Python package management
- [ADR-001](./adr-001-modular-monolith): Modular architecture benefits from faster dependency management

## References

- [UV Documentation](https://docs.astral.sh/uv/)
- [UV GitHub Repository](https://github.com/astral-sh/uv)
- [Astral Blog: UV Announcement](https://astral.sh/blog/uv)
- [Python Packaging User Guide](https://packaging.python.org/)
- [UV Performance Benchmarks](https://github.com/astral-sh/uv#benchmarks)

---

*This ADR was created using the standard Entirius template. To create a new ADR, copy this template and fill in all sections.*
