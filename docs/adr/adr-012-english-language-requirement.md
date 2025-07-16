---
sidebar_position: 12
---

# ADR-012: English Language Requirement for Code and Documentation

## Status
**Status**: Accepted  
**Date**: 2025-07-16  
**Authors**: Piotr Brzozowski  
**Reviewers**: Development Team

## Context

As an open-source project with global ambitions, Entirius needs to establish a clear language policy for all code-related content. This includes source code, comments, documentation, commit messages, and all technical communication. The project aims to build an inclusive, accessible, and maintainable codebase that can be understood by developers worldwide.

Currently, the project has mixed language usage across different components, which creates barriers to:
- Code review and collaboration
- Onboarding new international contributors
- Knowledge sharing and documentation consistency
- Maintaining code quality standards
- Building a global developer community

## Considered Options

### Option 1: English-only for all code-related content
- **Description**: Enforce English language for all code, comments, documentation, commit messages, and technical communication
- **Pros**: 
  - Universal accessibility for international developers
  - Consistency across the entire codebase
  - Better tooling support (IDEs, linters, spell checkers)
  - Easier code review process
  - Industry standard practice for open-source projects
- **Cons**:
  - May create initial barriers for non-English speaking contributors
  - Requires translation of existing non-English content
- **Impact on system**: Requires systematic review and translation of existing content

### Option 2: Multi-language approach with translations
- **Description**: Allow multiple languages but maintain English translations for all content
- **Pros**: 
  - More inclusive for diverse contributors
  - Preserves existing multilingual content
- **Cons**:
  - High maintenance overhead
  - Inconsistency between language versions
  - Complex workflow for contributors
  - Potential for outdated translations
- **Impact on system**: Significant complexity in documentation and review processes

### Option 3: Mixed approach with English preference
- **Description**: Prefer English but allow other languages in specific contexts
- **Pros**: 
  - Flexibility for contributors
  - Gradual migration path
- **Cons**:
  - Inconsistent codebase
  - Unclear guidelines for contributors
  - Partial accessibility for international developers
- **Impact on system**: Continued fragmentation of language usage

## Decision

**Chosen option**: English-only for all code-related content

**Rationale**: 
This decision aligns with industry best practices for open-source projects and ensures maximum accessibility for the global developer community. English serves as the lingua franca of software development, making it the natural choice for an international open-source project. The benefits of consistency, accessibility, and maintainability outweigh the temporary challenges of migration.

Key decision criteria:
- **Global accessibility**: English is the most widely understood language in the tech industry
- **Industry standard**: Most successful open-source projects use English exclusively
- **Tooling support**: Better IDE support, spell checking, and automated documentation tools
- **Maintainability**: Single language reduces complexity in reviews and maintenance
- **Community building**: Enables participation from developers worldwide

## Consequences

### Positive
- Improved accessibility for international contributors
- Consistent codebase language across all components
- Better integration with development tools and IDEs
- Simplified code review process
- Enhanced documentation quality and consistency
- Stronger foundation for building global developer community
- Alignment with open-source industry standards

### Negative
- Initial effort required to translate existing non-English content
- Potential temporary barrier for some contributors unfamiliar with English
- Need for team training on English technical writing best practices

### Neutral
- Requires establishing English proficiency guidelines for contributors
- May need to provide resources for English technical writing


## Success Metrics

- 100% of new code contributions use English language
- All existing non-English content translated within 2 months
- Code review process includes language compliance checks
- Documentation consistency score improved by 90%
- Increased international contributor participation by 25% within 6 months
- Zero language-related barriers reported in contributor feedback

## Related ADRs

- [ADR-004](./adr-004-mozilla-public-license.md): Mozilla Public License - supports global open-source community
- [ADR-005](./adr-005-github-code-management.md): GitHub Code Management - aligns with GitHub's international user base
- [ADR-006](./adr-006-docusaurus-documentation-platform.md): Docusaurus Documentation Platform - supports internationalization

## References

- [Open Source Guide: Building Welcoming Communities](https://opensource.guide/building-community/)
- [GitHub Documentation: Writing Good Commit Messages](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits)
- [Google Developer Documentation Style Guide](https://developers.google.com/style)
- [Mozilla Open Source Documentation](https://mozilla.github.io/open-leadership-training-series/)

---

*This ADR establishes the foundation for building an inclusive, globally accessible open-source project through consistent English language usage.*
