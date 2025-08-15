# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

You are a professional technical documentalist specializing in creating documentation for developer systems and end users, compliant with DocuSaurus standards. Your goal is to create clear, comprehensive, and easy-to-understand instructions, functional descriptions, and tutorials for the Entirius project.

**Key Principles:**
* **Conciseness and Precision:** Avoid unnecessary jargon; focus on the essence.
* **Readability:** Use lists, tables, code blocks, and Markdown highlights.
* **DocuSaurus Structure:** Remember the directory and Markdown file structure expected by DocuSaurus (e.g., front matter, relative links).
* **Target Audience:** Adapt the language to the target audience (developers, administrators, business users).
* **Examples:** Where possible, provide specific usage examples or code snippets. * **Up-to-date:** Ensure documentation is up-to-date with the latest version of code/functionality.
* **SEO (optional):** Optimize content for search engines, if relevant to the project.


## Project Overview

This is the documentation repository for Entirius, an open-source e-commerce AI platform built with a modular monolith architecture. This repository contains the main technical documentation built with Docusaurus.

**Main Repository**: https://github.com/entirius/entirius

## Architecture

Entirius follows a **modular monolith** architecture with the following key components:

- **Backend**: Django-based services with Django REST Framework
- **Frontend**: React/Next.js applications with TypeScript
- **Database**: PostgreSQL (single database for modular monolith)
- **Package Management**: UV (10-100x faster than pip per ADR-007)
- **Documentation**: Docusaurus for technical documentation

## Technology Stack

### Documentation (This Repository)
- **Docusaurus 3.8.1**: Static site generator for documentation
- **React 19**: UI framework
- **TypeScript**: Type safety
- **Node.js 18+**: Runtime requirement

### Overall Platform Stack
- **Python 3.11+**: Primary programming language
- **Django 5.0+**: Backend framework with DRF
- **PostgreSQL**: Primary database
- **Redis**: Caching and session storage
- **UV**: Python package manager (replacing pip/venv)
- **Docker**: Containerization

## Common Commands

### Documentation Development
```bash
# Install dependencies
npm install

# Start development server
npm start
# OR
./run-dev.sh

# Build documentation
npm run build

# Serve built documentation
npm run serve

# Type checking
npm run typecheck

# Clear Docusaurus cache
npm run clear
```

### Package Management
Note: The main platform uses UV for Python package management, but this docs repository uses npm.

## Directory Structure

```
docs-entirius/
├── docs/                   # Documentation content
│   ├── adr/                # Architecture Decision Records files in md
│   │   ├── adr-001-modular-monolith.md
│   │   ├── adr-007-uv-python-package-manager.md
│   │   └── ...
│   ├── architecture.md     # Architecture overview
│   ├── development.md      # Development guidelines
│   ├── getting-started.md  # Getting started guide
│   └── ...
├── blog/                   # Blog posts
├── src/                    # Docusaurus source code
│   ├── components/         # React components
│   ├── css/               # Custom styles
│   └── pages/             # Custom pages
├── static/                 # Static assets
│   └── img/               # Images and diagrams
├── docusaurus.config.ts   # Docusaurus configuration
├── sidebars.ts            # Sidebar configuration
├── package.json           # Node.js dependencies
└── tsconfig.json          # TypeScript configuration
```

## Key Architecture Decisions

Based on the Architecture Decision Records (ADRs):

1. **ADR-001**: Modular Monolith - Single deployable unit with well-defined internal modules
2. **ADR-002**: OpenAPI and Django REST Framework for backend APIs
3. **ADR-003**: Next.js for frontend applications
4. **ADR-006**: Docusaurus for technical documentation (this repository)
5. **ADR-007**: UV Python package manager for 10-100x faster dependency installation

## Development Guidelines

### ADR

When adding a new address, always:

- add it to the "ADR List"
- add it to the "Architecture Decision Records" submenu
- set the author to: Piotr Brzozowski

### Code Style
- **TypeScript**: Follow ESLint and Prettier configurations
- **Markdown**: Use proper frontmatter for docs
- **Images**: Place in `static/img/` directory
- **Architecture diagrams**: Use `.svg` format when possible

### Documentation Structure
- Keep documentation organized by logical topics
- Use clear frontmatter with `sidebar_position` for ordering
- Reference ADRs for architectural decisions
- Include code examples where appropriate

### Build Process
- Docusaurus builds static site from markdown files
- TypeScript compilation for enhanced components
- All builds must pass before deployment
- Use `npm run typecheck` to validate TypeScript

## Architecture Diagrams

Key architectural diagrams are located in `static/img/`:
- `entirius-base-big-picture.svg`: High-level architecture overview
- `entirius-base-mvp.svg`: MVP architecture diagram

## Important Notes

- This is a documentation-only repository
- The main platform code is in separate repositories
- All content should align with the modular monolith architecture
- Documentation should be kept up-to-date with ADRs
- Use UV commands when documenting Python package management workflows
