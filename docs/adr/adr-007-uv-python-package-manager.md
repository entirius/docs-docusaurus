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

The Entirius project currently uses traditional Python package management tools (pip, venv, requirements.txt files) for dependency management and virtual environment creation. While functional, these tools have several limitations:

- Slow dependency resolution and installation times
- Dependency conflict resolution challenges
- Multiple tool ecosystem (pip, venv, pipenv, poetry) creating complexity
- Lack of modern dependency locking mechanisms
- Poor performance with large dependency trees
- Limited cross-platform consistency

The project needs a faster, more reliable Python package management solution that can:
- Significantly improve development workflow speed
- Provide better dependency resolution
- Maintain compatibility with existing Python ecosystem
- Reduce complexity in development environment setup
- Support both local development and CI/CD pipelines

## Considered Options

### Option 1: Continue with pip + venv
- **Description**: Maintain current approach using pip for package management and venv for virtual environments
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
- **Impact on system**: No changes required

### Option 2: Poetry
- **Description**: Adopt Poetry as the Python package and dependency manager
- **Pros**: 
  - Integrated dependency management and virtual environments
  - Automatic dependency locking (poetry.lock)
  - Good dependency resolution
  - Popular in Python community
- **Cons**:
  - Still relatively slow compared to modern alternatives
  - Additional complexity with pyproject.toml configuration
  - Occasional dependency resolution issues
  - Heavier runtime requirements
- **Impact on system**: Requires migration of requirements files to pyproject.toml

### Option 3: UV
- **Description**: Adopt Astral's UV as the primary Python package manager and virtual environment tool
- **Pros**: 
  - Extremely fast (10-100x faster than pip)
  - Drop-in replacement for pip, venv, and other tools
  - Written in Rust for performance
  - Compatible with existing requirements.txt and pyproject.toml
  - Unified tool for multiple package management tasks
  - Strong dependency resolution
  - Active development by Astral (creators of Ruff)
- **Cons**:
  - Relatively new tool (less mature ecosystem)
  - Team learning curve
  - Potential compatibility issues with edge cases
- **Impact on system**: Minimal changes to existing workflow, mostly performance improvements

## Decision

**Chosen option**: Option 3 - UV Python Package Manager

**Rationale**: 
UV provides significant performance improvements while maintaining compatibility with our existing toolchain. Key decision factors:

- **Performance**: 10-100x faster installation times will dramatically improve developer productivity
- **Compatibility**: Drop-in replacement for existing tools with minimal migration effort
- **Unified tooling**: Replaces multiple tools (pip, venv, pip-tools) with a single fast solution
- **Future-proof**: Backed by Astral, the company behind Ruff, showing commitment to Python tooling excellence
- **Risk mitigation**: Can be adopted incrementally and easily reverted if issues arise
- **CI/CD benefits**: Faster builds and deployments due to improved dependency installation speed

## Consequences

### Positive
- Dramatically faster dependency installation (10-100x improvement)
- Improved developer experience with faster environment setup
- Unified tool reducing complexity in development workflow
- Better dependency resolution and conflict handling
- Faster CI/CD pipeline execution
- Reduced context switching between different package management tools
- Compatible with existing Python ecosystem and standards

### Negative
- Team needs to learn UV-specific commands and workflows
- Potential edge case compatibility issues with complex dependencies
- Dependency on relatively new tool (though backed by reputable company)
- May require updates to documentation and development guides
- Initial migration effort for existing projects

### Neutral
- Maintains compatibility with existing requirements.txt and pyproject.toml files
- Can coexist with traditional tools during transition period
- Follows Python packaging standards and conventions

## Implementation Plan

1. **Phase 1: Backend Service Migration (Week 1)**
   - Install UV on development machines and CI/CD systems
   - Update Entirius Backend CLAUDE.md with UV commands
   - Test UV with existing requirements files
   - Update Docker configurations to use UV
   - Responsible parties: Backend Team
   - Timeframe: 1 week

2. **Phase 2: Documentation and Training (Week 2)**
   - Create UV usage documentation
   - Update development setup guides
   - Team training sessions on UV commands
   - Update onboarding documentation
   - Responsible parties: DevOps and Documentation Team
   - Timeframe: 1 week

3. **Phase 3: CI/CD Integration (Week 3)**
   - Update GitHub Actions to use UV
   - Benchmark performance improvements
   - Update deployment scripts
   - Monitor for any compatibility issues
   - Responsible parties: DevOps Team
   - Timeframe: 1 week

4. **Phase 4: Full Adoption (Week 4)**
   - Migrate all Python projects to UV
   - Remove legacy pip commands from documentation
   - Establish UV as standard tool
   - Performance monitoring and optimization
   - Responsible parties: All Development Teams
   - Timeframe: 1 week

## Success Metrics

- Dependency installation time reduction of at least 50%
- Successful migration of all Python projects without functionality loss
- Developer satisfaction improvement in environment setup
- CI/CD build time reduction of at least 30%
- Zero critical compatibility issues after 30 days of usage
- 100% team adoption within 1 month

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