import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main documentation sidebar
  docsSidebar: [
    'index',
    'getting-started',
    'business-scenarios',
    'mvp-onepager',
  ],

  // API Reference sidebar
  apiSidebar: [
    'api-introduction',
  ],

  // Development sidebar
  developmentSidebar: [
    'development',
    'architecture',
    'modules',
    'services',
    {
      type: 'category',
      label: 'Architecture Decision Records',
      link: {
        type: 'doc',
        id: 'adr/index',
      },
      items: [
        'adr/adr-001-modular-monolith',
        'adr/adr-002-openapi-django-rest-framework',
        'adr/adr-003-react-nextjs-frontend',
        'adr/adr-004-mozilla-public-license',
        'adr/adr-005-github-code-management',
        'adr/adr-006-docusaurus-documentation-platform',
        'adr/adr-007-uv-python-package-manager',
        'adr/adr-008-github-repository-naming-conventions',
        'adr/adr-009-pyproject-toml-standard',
        'adr/adr-010-ruff-python-linter',
        'adr/adr-template',
      ],
    },
    'changelog',
  ],
};

export default sidebars;
