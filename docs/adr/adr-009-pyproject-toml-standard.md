---
sidebar_position: 9
---

# ADR-009: pyproject.toml Standard for Python Projects

## Status
**Status**: Accepted  
**Date**: 2025-07-10  
**Authors**: Piotr Brzozowski  
**Reviewers**: Piotr Brzozowski  

## Context

The Entirius project consists of multiple Python components including Django services, Python modules, and Python libraries. 
Currently, these projects use different approaches for dependency management and project configuration:

- Some projects use `setup.py` for package configuration
- Others use `requirements.txt` for dependency management
- Configuration is scattered across multiple files (`setup.py`, `setup.cfg`, `requirements.txt`, `Pipfile`, etc.)

Python's ecosystem has evolved toward standardization around `pyproject.toml` (PEP 518, PEP 621) as the unified configuration file for Python projects. This standard provides:

- **Centralized configuration** - Single file for all project metadata
- **Tool compatibility** - Supported by modern Python tools (pip, UV, setuptools, etc.)
- **Standardization** - Official Python packaging standard
- **Better dependency management** - Clear separation of runtime, development, and optional dependencies

## Considered Options

### Adopt pyproject.toml Standard
- **Description**: Migrate all Python projects to use `pyproject.toml` as the primary configuration file
- **Pros**: 
  - Modern Python packaging standard (PEP 518, PEP 621)
  - Single file for all project configuration
  - Better tool integration and compatibility
  - Consistent dependency management
  - Future-proof approach aligned with Python ecosystem
  - Excellent support in UV package manager (per ADR-007)
- **Cons**:
  - Migration effort for existing projects
  - Learning curve for team members
  - Some legacy tools may not support it
- **Impact on system**: Standardizes configuration across all Python projects

## Decision

**Chosen option**: Option 1 - Adopt pyproject.toml Standard

**Rationale**: 
pyproject.toml is the official modern standard for Python project configuration and aligns perfectly with our technology choices:

- **UV Integration**: UV (per ADR-007) has excellent pyproject.toml support
- **Modern Standard**: PEP 518 and PEP 621 establish pyproject.toml as the official approach
- **Tool Unification**: Single file for setuptools, black, pytest, mypy, and other tool configurations
- **Dependency Management**: Clear separation of runtime, development, and optional dependencies
- **Future-Proof**: Aligned with Python ecosystem direction

**Standard Configuration Structure:**
```toml
[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"

[project]
name = "entirius-service-example"
version = "1.0.0"
description = "Description of the project"
authors = [{name = "Piotr Brzozowski", email = "piotr.brzozowski@entirius.com"}]
license = {text = "MPL-2.0"}
readme = "README.md"
requires-python = ">=3.11"
dependencies = [
    "django>=5.0",
    "djangorestframework>=3.14",
]

[project.optional-dependencies]
dev = [
    "black>=23.0",
    "pytest>=7.0",
    "mypy>=1.0",
    "ruff>=0.1.0",
]
test = [
    "pytest>=7.0",
    "pytest-django>=4.5",
    "coverage>=7.0",
]

[project.urls]
Homepage = "https://github.com/entirius/entirius-service-example"
Documentation = "https://docs.entirius.com"
Repository = "https://github.com/entirius/entirius-service-example"
Issues = "https://github.com/entirius/entirius-service-example/issues"

[tool.black]
line-length = 88
target-version = ['py311']

[tool.pytest.ini_options]
DJANGO_SETTINGS_MODULE = "main.settings.testing"
python_files = ["tests.py", "test_*.py", "*_tests.py"]

[tool.mypy]
python_version = "3.11"
warn_return_any = true
warn_unused_configs = true

[tool.ruff]
line-length = 88
target-version = "py311"
```

## Consequences

### Positive
- **Standardized configuration** across all Python projects
- **Better tool integration** with modern Python development tools
- **Simplified dependency management** with clear separation of concerns
- **Future-proof approach** aligned with Python ecosystem direction
- **Excellent UV compatibility** supporting our package manager choice
- **Single source of truth** for project metadata and configuration

### Negative
- **Migration effort** required for existing projects
- **Learning curve** for team members unfamiliar with pyproject.toml
- **Potential compatibility issues** with very old tools (though minimal)
- **Initial setup time** for converting existing projects

### Neutral
- **Tool configuration consolidation** - all tools configured in one file
- **Documentation updates** needed to reflect new standard
- **CI/CD pipeline updates** to leverage pyproject.toml configurations

## Success Metrics

- All new Python projects use pyproject.toml
- Existing projects successfully migrated without breaking functionality
- Development tools (black, pytest, mypy) configuration consolidated
- UV package manager integration works seamlessly
- Documentation accurately reflects the new standard
- CI/CD pipelines successfully use pyproject.toml configurations

## Related ADRs

- [ADR-007](./adr-007-uv-python-package-manager.md): UV Python Package Manager - pyproject.toml has excellent UV support
- [ADR-008](./adr-008-github-repository-naming-conventions.md): GitHub Repository Naming Conventions - establishes project types that need standardized configuration

## References

- [PEP 518 - Specifying Minimum Build System Requirements](https://peps.python.org/pep-0518/)
- [PEP 621 - Storing project metadata in pyproject.toml](https://peps.python.org/pep-0621/)
- [PyPA pyproject.toml Specification](https://packaging.python.org/en/latest/specifications/pyproject-toml/)
- [UV pyproject.toml Support](https://docs.astral.sh/uv/concepts/projects/)
- [Setuptools pyproject.toml Guide](https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html)

---

*This ADR was created using the standard Entirius template. To create a new ADR, copy this template and fill in all sections.*
