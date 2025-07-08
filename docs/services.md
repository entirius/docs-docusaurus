---
sidebar_position: 5
---

# Services

Entirius services provide the core infrastructure and APIs for your e-commerce platform.

## Available Services

### Entirius Backend

**Location**: `services/entirius-backend/`

The main backend service built with Django and Django REST Framework.

#### Key Features

- **RESTful API**: Complete API for all platform functionality
- **Authentication**: User management and JWT token authentication
- **Admin Interface**: Django admin for content management
- **Database**: PostgreSQL with optimized queries
- **OpenAPI**: Auto-generated API documentation

#### Technology Stack

- **Django 5.0+**: Web framework
- **Django REST Framework**: API framework
- **PostgreSQL**: Database
- **Redis**: Caching and session storage
- **Celery**: Background task processing

#### API Endpoints

The backend provides comprehensive APIs for:

- Product management (`/api/pim/products/`)
- Category management (`/api/pim/categories/`)
- Attribute management (`/api/pim/attributes/`)
- Feature management (`/api/pim/features/`)
- User authentication (`/api/auth/`)

#### Configuration

Key settings in `main/settings.py`:

```python
# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'entirius',
        'USER': 'entirius_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# REST Framework
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
}
```

## Service Development

### Running the Backend Service

```bash
cd services/entirius-backend

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

### Adding New Endpoints

1. Create views in your app's `views.py`
2. Add URL patterns in `urls.py`
3. Register with the main URL configuration
4. Add tests for your endpoints

Example:

```python
# views.py
from rest_framework import viewsets
from .models import YourModel
from .serializers import YourModelSerializer

class YourModelViewSet(viewsets.ModelViewSet):
    queryset = YourModel.objects.all()
    serializer_class = YourModelSerializer
```

### Database Migrations

```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Check migration status
python manage.py showmigrations
```

## Service Architecture

### Request Flow

1. **Client Request**: Frontend or API client makes request
2. **URL Routing**: Django routes to appropriate view
3. **Authentication**: Verify user credentials
4. **Business Logic**: Process request in view/serializer
5. **Database**: Query/update data through Django ORM
6. **Response**: Return JSON response to client

### Database Schema

The backend uses PostgreSQL with these key tables:

- **Products**: Core product information
- **Categories**: Product categorization
- **Attributes**: Product attributes and values
- **Features**: Product features and feature sets
- **Users**: Authentication and user management

## Deployment

### Docker Deployment

```bash
# Build image
docker build -t entirius-backend .

# Run container
docker run -p 8000:8000 entirius-backend
```

### Environment Variables

Configure these environment variables for production:

```bash
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:password@host:port/database
DEBUG=False
ALLOWED_HOSTS=your-domain.com
```

## Monitoring

### Health Checks

The backend provides health check endpoints:

- `/health/` - Basic health check
- `/health/db/` - Database connectivity
- `/health/cache/` - Cache connectivity

### Logging

Configure logging in `settings.py`:

```python
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': 'INFO',
            'class': 'logging.FileHandler',
            'filename': 'entirius.log',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file'],
            'level': 'INFO',
            'propagate': True,
        },
    },
}
```

## Need Help?

- Check the [API Documentation](./api-introduction)
- Review [Development](./development) guidelines
- See [Getting Started](./getting-started) for setup instructions