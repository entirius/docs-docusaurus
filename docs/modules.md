---
sidebar_position: 4
---

# Modules

Entirius modules are reusable components that provide specific functionality to your e-commerce platform.

## Available Modules

### Entirius PIM (Product Information Management)

**Location**: `modules/entirius-pim/`

The PIM module provides comprehensive product data management:

- **Product Management**: Create, update, and organize products
- **Attribute System**: Flexible product attributes and properties
- **Category Management**: Hierarchical product categorization
- **Feature Sets**: Group related product features
- **Image Management**: Product images with automatic thumbnails
- **Pricing**: Product pricing and currency support

#### Key Features

- Django-based models and admin interface
- RESTful API endpoints
- Automatic thumbnail generation
- Product linking and relationships
- Configurable product types (simple, configurable, bundle)

#### Usage

```python
from django_pim.models import Product, Attribute, Category

# Create a product
product = Product.objects.create(
    name="Example Product",
    sku="PROD-001",
    description="Product description"
)

# Add attributes
attribute = Attribute.objects.create(
    name="Color",
    attribute_type="text"
)
```

### Entirius Config

**Location**: `modules/entirius-config/`

Configuration management module for system settings and preferences.

- **System Configuration**: Global platform settings
- **Feature Flags**: Enable/disable features dynamically
- **API Configuration**: External service integrations
- **Localization**: Multi-language support settings

## Module Development

### Creating a New Module

1. Create a new directory in `modules/`
2. Follow the Django app structure
3. Include a `setup.py` for package management
4. Add comprehensive tests
5. Document your module's API

### Module Structure

```
modules/your-module/
├── setup.py
├── README.md
├── src/
│   └── your_module/
│       ├── __init__.py
│       ├── models.py
│       ├── views.py
│       ├── admin.py
│       └── tests/
└── docs/
```

### Integration Guidelines

- Follow Django app conventions
- Use Django REST Framework for APIs
- Include proper migration files
- Add admin interface support
- Write comprehensive tests

## Installation

Modules are installed as Python packages:

```bash
cd modules/entirius-pim
pip install -e .
```

Add to your Django `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    # ... other apps
    'django_pim',
    'entirius_config',
]
```

## Configuration

Each module may require specific configuration in your Django settings:

```python
# PIM Configuration
PIM_SETTINGS = {
    'THUMBNAIL_SIZES': [(100, 100), (200, 200), (400, 400)],
    'DEFAULT_CURRENCY': 'USD',
    'AUTO_GENERATE_SLUGS': True,
}
```

## API Access

Modules expose their functionality through REST APIs:

```bash
# Get products
GET /api/pim/products/

# Create a product
POST /api/pim/products/
{
    "name": "New Product",
    "sku": "NEW-001",
    "description": "Product description"
}
```

## Need Help?

- Check the module-specific README files
- Review the [API Documentation](./api-introduction)
- See [Development](./development) for contribution guidelines