---
sidebar_position: 10
---

# ADR-010: Ruff as Standard Python Linter and Formatter

## Status
**Status**: Proposed  
**Date**: 2025-07-10  
**Authors**: Piotr Brzozowski  
**Reviewers**: TBD

## Context

The Entirius project consists of multiple Python components (Django services, modules, libraries) that require consistent code quality tools. 

**Ruff Overview:**
Ruff is an extremely fast Python linter and code formatter written in Rust that can replace multiple Python tools:

- **Speed**: 10-100x faster than traditional Python tools
- **Comprehensive**: Combines functionality of flake8, isort, pyupgrade, and more
- **Modern**: Built-in support for pyproject.toml configuration
- **Drop-in replacement**: Compatible with existing tool configurations
- **Active development**: Rapidly evolving with strong community support

**Current Tool Performance Comparison:**
- **Traditional stack**: flake8 + black + isort (~30-60 seconds on large codebase)
- **Ruff**: All-in-one linting and formatting (~2-5 seconds on same codebase)

## Considered Options

### Option 1: Adopt Ruff as Primary Linter and Formatter
- **Description**: Replace multiple tools (flake8, black, isort, pyupgrade) with Ruff for all Python projects
- **Pros**: 
  - **Extreme performance**: 10-100x faster than traditional tools
  - **Unified toolchain**: Single tool for linting and formatting
  - **Modern configuration**: Native pyproject.toml support
  - **Comprehensive rule set**: 800+ built-in rules covering multiple tools
  - **Easy migration**: Compatible with existing configurations
  - **Excellent IDE support**: Growing PyCharm, VS Code integration
  - **Future-proof**: Active development and growing adoption
- **Cons**:
  - **Newer tool**: Less mature than black/flake8 (though rapidly evolving)
  - **Migration effort**: Updating existing configurations
  - **Learning curve**: New rule names and configuration syntax
- **Impact on system**: Significantly faster CI/CD, simplified toolchain, reduced dependencies

### Option 2: Keep Traditional Tool Stack
- **Description**: Continue using black + flake8 + isort + pyupgrade separately
- **Pros**: 
  - **Mature tools**: Well-established with known behavior
  - **No migration needed**: Existing configurations work
  - **Familiar to team**: Everyone knows these tools
- **Cons**:
  - **Slow performance**: Significantly slower than Ruff
  - **Multiple dependencies**: Complex toolchain maintenance
  - **Configuration complexity**: Multiple config files to maintain
  - **CI/CD overhead**: Multiple tool executions slow down pipelines
- **Impact on system**: Maintains current performance limitations

### Option 3: Gradual Migration
- **Description**: Adopt Ruff for new projects, migrate existing projects gradually
- **Pros**: 
  - **Reduced risk**: Gradual transition
  - **Learning opportunity**: Team can adapt slowly
- **Cons**:
  - **Inconsistent toolchain**: Different projects use different tools
  - **Maintenance overhead**: Supporting both old and new approaches
  - **Delayed benefits**: Slower adoption of performance improvements
- **Impact on system**: Mixed toolchain creates complexity

## Decision

**Chosen option**: Option 1 - Adopt Ruff as Primary Linter and Formatter

**Rationale**: 
Ruff provides compelling advantages that align with our platform goals:

- **Performance**: 10-100x speed improvement directly impacts developer productivity and CI/CD efficiency
- **Simplification**: Single tool reduces complexity and maintenance overhead
- **Modern standards**: Native pyproject.toml support aligns with ADR-009
- **Comprehensive coverage**: Replaces multiple tools with better rule coverage
- **Industry direction**: Growing adoption by major Python projects (FastAPI, Pydantic, etc.)

**Standard Configuration for Entirius Projects:**

```toml
[tool.ruff]
line-length = 88
target-version = "py311"
src = ["src", "apps"]  # Adjust based on project structure

[tool.ruff.lint]
select = [
    "E",   # pycodestyle errors
    "W",   # pycodestyle warnings
    "F",   # Pyflakes
    "I",   # isort
    "B",   # flake8-bugbear
    "C4",  # flake8-comprehensions
    "UP",  # pyupgrade
    "DJ",  # flake8-django (for Django projects)
    "S",   # flake8-bandit (security)
]
ignore = [
    "E501",  # Line too long (handled by formatter)
]

[tool.ruff.lint.per-file-ignores]
"__init__.py" = ["F401"]  # Allow unused imports in __init__.py
"settings/*.py" = ["F405", "F403"]  # Django settings imports
"*/migrations/*.py" = ["E501"]  # Long lines in migrations

[tool.ruff.format]
quote-style = "double"
indent-style = "space"
skip-magic-trailing-comma = false
line-ending = "auto"

[tool.ruff.lint.isort]
known-first-party = ["entirius", "apps"]
```

## PyCharm Integration Analysis

**Current PyCharm Support Status (2025):**

### Available Integration Options:

1. **Third-Party Plugin**: 
   - **Ruff Plugin** by koxudaxi available on JetBrains Marketplace
   - **Features**: Code inspection, formatting integration (Ctrl+Alt+L), quick fixes
   - **Pro Feature**: Experimental ruff-lsp support for enhanced functionality
   - **Installation**: Preferences → Plugins → Marketplace → Search "Ruff"

2. **External Tool Configuration**:
   - **Setup**: Preferences → Tools → External Tools → Add Ruff
   - **Benefits**: Direct integration with PyCharm menus and shortcuts
   - **Flexibility**: Custom macros for context-dependent arguments

3. **File Watcher Integration**:
   - **Real-time**: Automatic formatting/linting on file save
   - **Configuration**: Preferences → Tools → File Watchers

### Recommended PyCharm Setup:

```bash
# External Tool Configuration
Name: Ruff Check
Program: ruff
Arguments: check $ProjectFileDir$
Working Directory: $ProjectFileDir$

Name: Ruff Format
Program: ruff
Arguments: format $ProjectFileDir$
Working Directory: $ProjectFileDir$
```

**IDE Support Assessment:**
- **Current**: Good support via third-party plugin and external tools
- **Future**: Growing official support (issue #10102 tracks official plugin development)
- **Usability**: Comparable to traditional tools with better performance
- **Team adoption**: Smooth transition with proper configuration

## Consequences

### Positive
- **Dramatic performance improvement**: 10-100x faster linting and formatting
- **Simplified development workflow**: Single command replaces multiple tools
- **Reduced CI/CD time**: Faster code quality checks in pipelines
- **Better developer experience**: Near-instant feedback on code issues
- **Unified configuration**: Single pyproject.toml section for all code quality
- **Comprehensive rule coverage**: More thorough code analysis than previous stack
- **Future-proof choice**: Modern tool with active development

### Negative
- **Migration effort**: Updating existing project configurations
- **Learning curve**: New rule names and configuration options
- **Tool stability**: Newer tool may have occasional breaking changes
- **Team training**: Developers need to learn new commands and options

### Neutral
- **IDE integration**: Requires plugin installation but provides good functionality
- **Rule customization**: May need to adjust rule sets for team preferences
- **Documentation updates**: All project documentation needs Ruff command updates

## Success Metrics

- **Performance**: CI/CD code quality checks run 5-10x faster
- **Developer satisfaction**: Improved development experience with faster feedback
- **Tool consolidation**: Reduced from 4-5 tools to 1 tool for code quality
- **Configuration consistency**: All projects use standardized Ruff configuration
- **IDE integration**: Team successfully uses Ruff in PyCharm with good experience
- **Migration completion**: All Python projects successfully converted to Ruff

## Related ADRs

- [ADR-007](./adr-007-uv-python-package-manager.md): UV Python Package Manager - Ruff integrates excellently with UV
- [ADR-009](./adr-009-pyproject-toml-standard.md): pyproject.toml Standard - Ruff has native pyproject.toml support

## References

- [Ruff Official Documentation](https://docs.astral.sh/ruff/)
- [Ruff PyCharm Integration Guide](https://docs.astral.sh/ruff/editors/setup/)
- [Ruff PyCharm Plugin](https://plugins.jetbrains.com/plugin/20574-ruff)
- [Ruff Performance Benchmarks](https://github.com/astral-sh/ruff#benchmarks)
- [Ruff Rule Reference](https://docs.astral.sh/ruff/rules/)
- [PyCharm External Tools Documentation](https://www.jetbrains.com/help/pycharm/configuring-third-party-tools.html)

---

*This ADR was created using the standard Entirius template. To create a new ADR, copy this template and fill in all sections.*
