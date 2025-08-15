---
sidebar_position: 13
---

# ADR-013: Hatchling Build Backend

## Status
**Status**: Accepted  
**Date**: 2025-08-15  
**Authors**: Piotr Brzozowski  
**Reviewers**: Architecture Team

## Context

The Entirius project is a modern e-commerce AI platform built from the ground up with contemporary Python development practices. With our adoption of UV package manager and pyproject.toml standard (ADR-007, ADR-009), we need to select a modern Python build backend that aligns with our commitment to performance, simplicity, and modern standards.

Python packaging has evolved significantly with PEP 517/518, introducing pluggable build backends. The build backend is responsible for:
- Converting source code into distributable packages (wheels, sdists)  
- Handling project metadata and dependencies
- Managing build-time dependencies
- Supporting modern packaging standards

Traditional build systems like setuptools, while widely used, represent older approaches with several limitations:
- Complex configuration across multiple files
- Slow build performance
- Legacy cruft and backwards compatibility overhead
- Inconsistent behavior across environments
- Limited support for modern Python features

As a greenfield project, Entirius requires a build backend that provides:
- Exceptional build performance from day one
- Modern, clean configuration via pyproject.toml
- Full compatibility with PEP 517/518 standards
- Minimal configuration complexity
- Strong integration with our UV-based workflow

## Considered Options

### Option 1: setuptools (Traditional)
- **Description**: Use setuptools as the build backend with pyproject.toml configuration
- **Pros**: 
  - Most widely used and established
  - Maximum ecosystem compatibility
  - Extensive documentation and community knowledge
  - Well-tested across many environments
- **Cons**:
  - Slower build performance
  - Complex configuration options
  - Legacy cruft and overhead
  - Inconsistent behavior between versions
  - Heavy build-time dependencies
- **Impact on system**: Accepts legacy build performance and complexity

### Option 2: Flit
- **Description**: Adopt Flit as a simple, lightweight build backend
- **Pros**: 
  - Minimal configuration required
  - Fast and simple builds
  - Good for pure Python packages
  - Clean pyproject.toml integration
- **Cons**:
  - Limited support for complex build requirements
  - Less suitable for C extensions or complex builds
  - Smaller ecosystem and community
  - Limited customization options
- **Impact on system**: Works well for simple packages but may be limiting for complex projects

### Option 3: Hatchling
- **Description**: Adopt Hatchling as the modern, high-performance build backend
- **Pros**: 
  - Extremely fast build performance
  - Modern design built for pyproject.toml from ground up
  - Rich plugin system for extensibility
  - Clean, intuitive configuration
  - Excellent support for modern Python packaging standards
  - Active development by PyPA (Python Packaging Authority)
  - Built-in support for version management
  - Strong integration with modern tooling ecosystem
- **Cons**:
  - Relatively newer (though mature and stable)
  - Team learning curve for advanced features
  - Smaller community compared to setuptools
- **Impact on system**: Establishes modern, high-performance build workflow from project inception

## Decision

**Chosen option**: Option 3 - Hatchling Build Backend

**Rationale**: 
Hatchling perfectly aligns with Entirius's commitment to modern, high-performance Python development practices. As a greenfield project, we can adopt the best contemporary tooling from the start. Key decision factors:

- **Performance**: Significantly faster builds compared to setuptools, improving developer productivity
- **Modern design**: Built specifically for pyproject.toml and PEP 517/518 from the ground up
- **Simplicity**: Clean configuration with sensible defaults, reducing complexity
- **Extensibility**: Rich plugin system allows customization when needed
- **Standards compliance**: Full support for modern Python packaging standards
- **Ecosystem integration**: Excellent compatibility with UV package manager and modern tooling
- **Future-proof**: Actively maintained by PyPA, representing the future of Python packaging
- **Version management**: Built-in dynamic versioning capabilities

## Consequences

### Positive
- Fast, efficient build process improving developer experience
- Modern pyproject.toml-native configuration with minimal setup
- Clean, maintainable build configuration
- Excellent integration with UV package manager workflow  
- Built-in support for dynamic versioning and metadata
- Plugin system enables customization for complex requirements
- Represents current best practices in Python packaging
- Reduces build complexity compared to setuptools

### Negative  
- Team needs to learn Hatchling-specific configuration patterns
- Smaller community compared to setuptools for troubleshooting
- Some edge cases may require plugin development
- Initial setup effort for advanced configuration patterns

### Neutral
- Fully compatible with PEP 517/518 and modern Python packaging ecosystem
- Establishes consistent modern build workflow across all Python projects
- Sets foundation for adopting future Python packaging improvements

## Implementation Plan

- **Create Hatchling templates** for different project types (services, modules, utilities)
- **Update CI/CD workflows** in GitHub Actions for Hatchling builds
- **Update developer documentation** with Hatchling usage instructions

## Success Metrics

### Implementation Success
- **100% compliance**: All new Python packages use Hatchling build backend
- **Template adoption**: Standardized Hatchling configurations across project types
- **Build performance**: Demonstrate improved build speeds compared to traditional approaches
- **Team competency**: All Python developers trained on Hatchling configuration

### Operational Excellence
- **CI/CD optimization**: All Python package builds use Hatchling with proper caching
- **Build reliability**: Consistent, reproducible builds across all environments
- **Quality assurance**: Zero critical build issues in production environments
- **Documentation completeness**: Comprehensive Hatchling guidelines and troubleshooting resources

### Developer Experience
- **Build speed improvement**: Faster package building and distribution workflow
- **Configuration simplicity**: Reduced complexity in package configuration
- **Integration quality**: Seamless integration with UV and modern Python tooling
- **Developer satisfaction**: Positive feedback on Hatchling adoption and workflows

## Related ADRs

- [ADR-007](./adr-007-uv-python-package-manager): UV package manager provides the foundation for modern Python tooling
- [ADR-009](./adr-009-pyproject-toml-standard): pyproject.toml standard provides the configuration foundation for Hatchling
- [ADR-001](./adr-001-modular-monolith): Modular architecture benefits from consistent, fast package building

## References

- [Hatchling Documentation](https://hatch.pypa.io/latest/plugins/builder/wheel/)
- [PEP 517 - A build-system independent format for source trees](https://peps.python.org/pep-0517/)
- [PEP 518 - Specifying Minimum Build System Requirements](https://peps.python.org/pep-0518/)
- [Python Packaging User Guide - Build Backends](https://packaging.python.org/en/latest/specifications/build-backend/)
- [Hatchling GitHub Repository](https://github.com/pypa/hatch/tree/master/backend)

---

*This ADR was created using the standard Entirius template. To create a new ADR, copy this template and fill in all sections.*
