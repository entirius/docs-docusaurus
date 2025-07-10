---
sidebar_position: 10
---

# Architecture Decision Records

Architecture Decision Records (ADRs) document the key architectural decisions made in the Entirius project. 
Each ADR captures the context, options considered, decision made, and consequences.

## ADR List

| Number | Title | Status | Date | Author |
|--------|-------|--------|------|---------|
| [ADR-001](./adr-001-modular-monolith) | Modular Monolith Architecture | Accepted | 2025-06-17 | Piotr Brzozowski |
| [ADR-002](./adr-002-openapi-django-rest-framework) | Django Rest Framework with Pydantic and OpenAPI | Accepted | 2025-06-19 | Development Team |
| [ADR-003](./adr-003-react-nextjs-frontend) | Next.js for Frontend Applications | Accepted | 2025-06-23 | Development Team |
| [ADR-004](./adr-004-mozilla-public-license) | Mozilla Public License for Codebase | Accepted | 2025-06-23 | Development Team |
| [ADR-005](./adr-005-github-code-management) | GitHub as Code Repository | Accepted | 2025-06-23 | Development Team |
| [ADR-006](./adr-006-docusaurus-documentation-platform) | Docusaurus for Technical Documentation | Accepted | 2025-06-23 | Development Team |
| [ADR-007](./adr-007-uv-python-package-manager) | UV Python Package Manager | Accepted | 2025-06-23 | Development Team |
| [ADR-008](./adr-008-github-repository-naming-conventions) | GitHub Repository Naming Conventions | Proposed | 2025-07-10 | Piotr Brzozowski |
| [Template](./adr-template) | ADR Template | Template | - | System |

*This list will be updated as new ADRs are added to the project*

---

## What are ADRs?

ADRs are documents that describe key architectural decisions made in the project. Each ADR contains:

- **Context** - situation requiring a decision
- **Considered options** - alternative solutions evaluated
- **Decision** - chosen solution with detailed rationale
- **Consequences** - positive, negative, and neutral effects

## Why Use ADRs?

- **Knowledge preservation** - Capture reasoning behind decisions
- **Team alignment** - Ensure everyone understands architectural choices
- **Decision tracking** - Maintain history of architectural evolution
- **Onboarding** - Help new team members understand system design
- **Review process** - Enable structured decision-making

## How to Create ADRs

1. **Copy the template** - Use the [ADR template](./adr-template) as starting point
2. **Assign number** - Use sequential numbering (ADR-001, ADR-002, etc.)
3. **Fill all sections** - Complete context, options, decision, and consequences
4. **Team review** - Conduct thorough review with stakeholders
5. **Update status** - Mark as "Accepted" when approved
6. **Update list** - Add to the ADR list above

## ADR Template

Use the standardized [ADR Template](./adr-template) for all new Architecture Decision Records.

## ADR Process

### Proposal Phase
1. Identify need for architectural decision
2. Create ADR draft using template
3. Research and document options
4. Assign initial status: "Proposed"

### Review Phase
1. Share with relevant stakeholders
2. Collect feedback and iterate
3. Conduct architecture review meeting
4. Address concerns and questions

### Decision Phase
1. Make final decision based on review
2. Update ADR with final rationale
3. Set status to "Accepted" or "Rejected"
4. Communicate decision to team

### Implementation Phase
1. Execute implementation plan
2. Monitor success metrics
3. Update ADR if significant changes occur
4. Create new ADR if decision needs revision

## ADR Status Types

- **Proposed** - Under consideration, not yet decided
- **Accepted** - Approved and being implemented
- **Rejected** - Considered but not chosen
- **Deprecated** - No longer applicable
- **Superseded** - Replaced by newer ADR

## Best Practices

- **Be specific** - Focus on concrete architectural decisions
- **Include alternatives** - Document why other options were rejected
- **Update regularly** - Keep ADRs current as system evolves
- **Link related ADRs** - Show relationships between decisions
- **Use clear language** - Write for future team members
- **Include diagrams** - Visual aids help explain complex decisions
