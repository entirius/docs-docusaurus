---
sidebar_position: 5
---

# ADR-005: GitHub as Code Repository

## Status
**Status**: Accepted  
**Date**: 2025-06-23  
**Authors**: Development Team  
**Reviewers**: Piotr Brzozowski

## Context

Entirius requires a robust version control and code management platform to support the development of both backend and frontend components. The platform must facilitate:
- Source code version control and collaboration
- Bug tracking and issue management
- Project management and workflow coordination
- CI/CD pipeline integration
- Community engagement and contributions
- Code review processes
- Release management
- Integration with development tools and services

Key considerations:
- Open-source project requiring public visibility ([ADR-004](./adr-004-mozilla-public-license))
- Modular monolith architecture with multiple components ([ADR-001](./adr-001-modular-monolith))
- Django backend and Next.js frontend requiring coordinated development
- Small development team with plans for community contributions
- Need for professional project management features
- Integration with documentation and deployment workflows

## Considered Options

### Option 1: GitHub
- **Description**: Use GitHub as the primary platform for version control, issue tracking, and project management
- **Pros**: 
  - Industry standard for open-source projects
  - Excellent community engagement features
  - Integrated CI/CD with GitHub Actions
  - Advanced project management tools (Projects, Issues, Discussions)
  - Comprehensive bug tracking with GitHub Issues
  - Issue templates and automated workflows
  - Strong integration ecosystem
  - Built-in security features (Dependabot, CodeQL)
  - Free for open-source projects
  - Excellent documentation hosting (GitHub Pages)
  - Native Git integration with advanced features
- **Cons**:
  - Microsoft-owned platform (vendor lock-in)
  - Limited customization compared to self-hosted solutions
  - Pricing can be expensive for private repos at scale
  - Some features require paid plans
- **Impact on system**: Seamless integration with modern development workflows

### Option 2: GitLab
- **Description**: Use GitLab for version control and integrated DevOps platform
- **Pros**: 
  - Complete DevOps platform in one tool
  - Excellent CI/CD capabilities
  - Can be self-hosted for complete control
  - Integrated project management
  - Strong security features
  - Good open-source offering
- **Cons**:
  - Less community adoption than GitHub
  - Steeper learning curve for team
  - Self-hosted option requires infrastructure management
  - Smaller ecosystem of integrations
  - Less visibility for open-source projects
- **Impact on system**: More control but potentially reduced community engagement

### Option 3: Bitbucket
- **Description**: Use Atlassian Bitbucket for version control with Jira integration
- **Pros**: 
  - Excellent integration with Atlassian tools (Jira, Confluence)
  - Good CI/CD with Bitbucket Pipelines
  - Competitive pricing for small teams
  - Strong enterprise features
- **Cons**:
  - Less popular for open-source projects
  - Smaller community and ecosystem
  - Limited free tier features
  - Less visibility than GitHub for recruitment
  - Fewer integrations with third-party tools
- **Impact on system**: Good for enterprise but limits open-source community growth

### Option 4: Self-hosted Git (Gitea/Forgejo)
- **Description**: Self-host lightweight Git service like Gitea or Forgejo
- **Pros**: 
  - Complete control over infrastructure and data
  - No vendor lock-in
  - Lightweight and fast
  - Cost-effective for private repositories
  - Open-source solutions available
- **Cons**:
  - Requires infrastructure management and maintenance
  - Limited community features compared to GitHub
  - Smaller ecosystem of integrations
  - No built-in advanced security features
  - Reduced visibility for open-source project
  - Additional operational overhead
- **Impact on system**: Maximum control but increased operational complexity

## Decision

**Chosen option**: GitHub

**Rationale**: 
GitHub is the optimal choice for Entirius code management because:

- **Community visibility**: GitHub is the de facto standard for open-source projects, maximizing discoverability
- **Developer familiarity**: Most developers are familiar with GitHub workflows and tools
- **Integrated ecosystem**: Seamless integration with development tools, CI/CD, and documentation
- **Project management**: Advanced features like GitHub Projects, Issues, and Discussions support project coordination
- **Security features**: Built-in dependency scanning, security advisories, and vulnerability management
- **CI/CD integration**: GitHub Actions provides powerful automation for both backend and frontend
- **Cost effectiveness**: Free for open-source projects with generous limits
- **Documentation integration**: GitHub Pages and wiki features support project documentation
- **Community engagement**: Features like Discussions, Sponsors, and community profiles enhance project growth
- **Professional credibility**: GitHub presence is essential for developer recruitment and partnerships

## Consequences

### Positive
- **Maximum visibility** - GitHub provides the best platform for open-source project discovery
- **Developer attraction** - Familiar platform encourages contributions from the developer community
- **Integrated workflows** - Single platform for code, issues, documentation, and CI/CD
- **Effective bug tracking** - GitHub Issues provides comprehensive bug management with templates, labels, and automation
- **Professional appearance** - GitHub presence enhances project credibility and recruitment
- **Advanced automation** - GitHub Actions enables sophisticated CI/CD workflows
- **Security management** - Built-in security scanning and vulnerability management
- **Community features** - Discussions, wikis, and project pages support community building
- **Cost efficiency** - Free for open-source with premium features included

### Negative
- **Vendor dependency** - Reliance on Microsoft-owned platform
- **Limited customization** - Cannot customize platform features beyond available options
- **Basic bug tracking workflow** - Less sophisticated than dedicated tools like Jira for complex workflows
- **Potential future costs** - Advanced features may require paid plans as project grows
- **Data location** - Code and metadata stored on external platform

### Neutral
- **Learning curve** - Team needs to master GitHub-specific features and workflows
- **Backup strategy** - Should maintain independent backups of critical project data

## Implementation Plan

1. **Phase 1: Repository Setup**
   - Create GitHub organization for Entirius project
   - Set up repositories for backend and frontend components
   - Configure repository settings, permissions, and branch protection
   - Establish naming conventions and repository structure

2. **Phase 2: Workflow Configuration**
   - Set up GitHub Actions for CI/CD pipelines
   - Configure automated testing for backend and frontend
   - Implement code quality checks and security scanning
   - Set up deployment workflows

3. **Phase 3: Project Management Setup**
   - Configure GitHub Projects for project planning
   - Set up issue templates and labels
   - Create contribution guidelines and code of conduct
   - Configure GitHub Discussions for community engagement

4. **Phase 4: Community Preparation**
   - Create comprehensive README files
   - Set up project documentation
   - Configure GitHub Pages for project website
   - Establish maintainer guidelines and governance

## Success Metrics

- **Repository activity**: Regular commits and pull requests from team and community
- **Community engagement**: Active issues, discussions, and community contributions
- **Bug tracking effectiveness**: Average issue resolution time < 7 days for bugs
- **CI/CD effectiveness**: Automated testing and deployment success rates > 95%
- **Security posture**: Zero high-severity vulnerabilities in main branches
- **Documentation quality**: Comprehensive documentation with regular updates
- **Project visibility**: Growing number of stars, forks, and community interest

## Related ADRs

- [ADR-001](./adr-001-modular-monolith): Repository structure supports modular monolith organization
- [ADR-002](./adr-002-openapi-django-rest-framework): CI/CD integration with Django backend workflows
- [ADR-003](./adr-003-react-nextjs-frontend): Frontend deployment and testing automation
- [ADR-004](./adr-004-mozilla-public-license): GitHub supports MPL license management and compliance

## References

- [GitHub Documentation](https://docs.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Community Guidelines](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines)
- [Open Source Guides](https://opensource.guide/)
- [GitHub Security Features](https://github.com/features/security)

---

*This ADR establishes GitHub as the central platform for Entirius development. All code management, collaboration, and community engagement should utilize GitHub features and best practices.*