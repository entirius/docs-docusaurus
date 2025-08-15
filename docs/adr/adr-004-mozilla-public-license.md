---
sidebar_position: 4
---

# ADR-004: Mozilla Public License for Codebase

## Status
**Status**: Accepted  
**Date**: 2025-06-23  
**Authors**: Development Team  
**Reviewers**: Piotr Brzozowski

## Context

Entirius is positioned as an open-source e-commerce AI platform that needs to balance open-source principles with commercial viability. The choice of software license directly impacts:
- Community adoption and contributions
- Commercial use and monetization strategies
- Legal obligations for users and contributors
- Integration capabilities with other software
- Long-term sustainability of the project

Key considerations:
- Open-source e-commerce platform targeting businesses
- Need for community-driven development
- Commercial services and support model planned
- Integration with various third-party systems
- Modular architecture requiring flexible licensing ([ADR-001](./adr-001-modular-monolith))
- Balance between openness and protecting core innovations

## Considered Options

### Option 1: MIT License
- **Description**: Permissive license allowing unrestricted use, modification, and distribution
- **Pros**: 
  - Maximum adoption potential due to minimal restrictions
  - Compatible with all other licenses
  - Simple and well-understood
  - Encourages commercial adoption
  - No copyleft requirements
- **Cons**:
  - No protection against proprietary forks
  - Contributors' improvements may not benefit the community
  - No guarantee of reciprocal contributions
  - Potential for large corporations to create competing closed-source versions
- **Impact on system**: Maximizes adoption but reduces control over derivative works

### Option 2: GNU GPL v3
- **Description**: Strong copyleft license requiring derivative works to be open-source
- **Pros**: 
  - Ensures all derivatives remain open-source
  - Strong community protection
  - Prevents proprietary forks
  - Patent protection clauses
  - Guarantees continued openness
- **Cons**:
  - Restrictive for commercial integrations
  - May discourage business adoption
  - Incompatible with many proprietary systems
  - Complex compliance requirements
  - Potential barrier to enterprise adoption
- **Impact on system**: Strong protection but may limit commercial viability

### Option 3: Apache License 2.0
- **Description**: Permissive license with patent protection and attribution requirements
- **Pros**: 
  - Patent protection for users
  - Permissive like MIT but with legal protections
  - Well-suited for enterprise adoption
  - Clear contribution guidelines
  - Compatible with most licenses
- **Cons**:
  - No copyleft protection
  - Allows proprietary forks
  - More complex than MIT
  - No guarantee of reciprocal contributions
- **Impact on system**: Good balance but lacks copyleft benefits

### Option 4: Mozilla Public License 2.0 (MPL)
- **Description**: Weak copyleft license requiring modifications to licensed files to remain open-source
- **Pros**: 
  - File-level copyleft protects core improvements
  - Allows proprietary additions and integrations
  - Business-friendly for commercial use
  - Encourages contribution of improvements
  - Compatible with GPL and other licenses
  - Balances openness with commercial viability
- **Cons**:
  - More complex than permissive licenses
  - Less familiar to some developers
  - Compliance requires careful file management
  - Weaker protection than full GPL
- **Impact on system**: Optimal balance for modular architecture and commercial strategy

## Decision

**Chosen option**: Mozilla Public License 2.0 (MPL)

**Rationale**: 
Mozilla Public License 2.0 is the optimal choice for Entirius because:

- **Balanced approach**: Provides copyleft protection for core files while allowing proprietary extensions
- **Modular compatibility**: Works well with modular monolith architecture where modules can have different licensing needs
- **Commercial viability**: Enables commercial services and proprietary integrations without full GPL restrictions
- **Community protection**: Ensures improvements to core files benefit the entire community
- **Enterprise adoption**: More acceptable to businesses than strong copyleft licenses
- **Innovation protection**: Prevents complete proprietary forks while allowing commercial innovation
- **Integration flexibility**: Compatible with various third-party components and services
- **Legal clarity**: Well-defined file-level copyleft reduces compliance complexity

## Consequences

### Positive
- **Community contributions** - Core improvements must be shared back to the project
- **Commercial adoption** - Businesses can build proprietary features on top of the platform
- **Legal protection** - Clear licensing terms reduce legal risks for users and contributors
- **Innovation encouragement** - Allows proprietary modules while protecting core platform
- **Enterprise acceptance** - More palatable to enterprise users than GPL
- **Competitive advantage** - Prevents complete proprietary forks while enabling commercial differentiation
- **Ecosystem growth** - Encourages both open-source and commercial ecosystem development

### Negative
- **Compliance complexity** - Requires careful tracking of file-level licensing
- **Legal education** - Team and contributors need understanding of MPL requirements
- **Documentation overhead** - Need clear guidelines for contributors and users
- **Mixed licensing** - Different parts of the system may have different licenses

### Neutral
- **License compatibility** - Need to verify compatibility with all dependencies
- **Community education** - Less familiar license may require explanation to contributors

## Success Metrics

- **Legal compliance**: 100% of source files have proper license headers
- **Community understanding**: Clear licensing documentation with zero ambiguity
- **Contributor adoption**: Contributors understand and accept MPL requirements
- **Commercial clarity**: Business users understand their rights and obligations
- **Ecosystem health**: Balance of open-source and commercial contributions
- **Legal risk**: Zero licensing disputes or compliance issues

## Related ADRs

- [ADR-001](./adr-001-modular-monolith): Modular architecture supports file-level copyleft approach
- [ADR-002](./adr-002-openapi-django-rest-framework): API licensing considerations for integrations
- [ADR-003](./adr-003-react-nextjs-frontend): Frontend licensing compatibility

## References

- [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)
- [MPL 2.0 FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/)
- [Choose a License Guide](https://choosealicense.com/)
- [OSI Approved Licenses](https://opensource.org/licenses/)
- [License Compatibility Chart](https://www.gnu.org/licenses/license-list.html)

---

*This ADR establishes the licensing foundation for Entirius. All code contributions must comply with MPL 2.0 requirements and maintain proper license headers.*
