---
sidebar_position: 6
---

# API Introduction

Welcome to the Entirius API documentation. This guide will help you get started with our RESTful API.

## Overview

The Entirius API provides programmatic access to all platform functionality, including:

- **Product Management**: Create, read, update, and delete products
- **Category Management**: Organize products in hierarchical categories
- **Attribute Management**: Define and manage product attributes
- **Feature Management**: Configure product features and feature sets
- **User Authentication**: Secure access with JWT tokens

## Base URL

All API requests should be made to:

```
https://api.entirius.com/api/v1/
```

For local development:

```
http://localhost:8000/api/
```

## Authentication

The Entirius API uses JWT (JSON Web Token) authentication. To authenticate:

1. **Obtain a token** by posting credentials to `/api/auth/login/`
2. **Include the token** in the `Authorization` header of subsequent requests

### Getting a Token

```bash
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "your_username",
    "password": "your_password"
  }'
```

Response:
```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "user": {
    "id": 1,
    "username": "your_username",
    "email": "user@example.com"
  }
}
```

### Using the Token

Include the token in the `Authorization` header:

```bash
curl -H "Authorization: Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." \
  http://localhost:8000/api/pim/products/
```

## Content Types

The API accepts and returns JSON. Always include the `Content-Type` header:

```
Content-Type: application/json
```

## Common Response Format

All API responses follow a consistent format:

### Success Response

```json
{
  "count": 25,
  "next": "http://localhost:8000/api/pim/products/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "Example Product",
      "sku": "PROD-001",
      "description": "Product description",
      "created_at": "2025-07-08T10:00:00Z",
      "updated_at": "2025-07-08T10:00:00Z"
    }
  ]
}
```

### Error Response

```json
{
  "error": "Invalid request",
  "details": {
    "name": ["This field is required."],
    "sku": ["Product with this SKU already exists."]
  }
}
```

## HTTP Status Codes

The API uses standard HTTP status codes:

- **200**: Success
- **201**: Created
- **204**: No Content (successful deletion)
- **400**: Bad Request
- **401**: Unauthorized
- **403**: Forbidden
- **404**: Not Found
- **500**: Internal Server Error

## Pagination

List endpoints support pagination with these parameters:

- `page`: Page number (default: 1)
- `page_size`: Items per page (default: 20, max: 100)

Example:
```bash
curl "http://localhost:8000/api/pim/products/?page=2&page_size=10"
```

## Filtering and Searching

Many endpoints support filtering and searching:

### Filtering
```bash
curl "http://localhost:8000/api/pim/products/?category=electronics&price_min=100"
```

### Searching
```bash
curl "http://localhost:8000/api/pim/products/?search=laptop"
```

### Ordering
```bash
curl "http://localhost:8000/api/pim/products/?ordering=-created_at"
```

## Key Endpoints

### Products
- `GET /api/pim/products/` - List products
- `POST /api/pim/products/` - Create product
- `GET /api/pim/products/{id}/` - Get product
- `PUT /api/pim/products/{id}/` - Update product
- `DELETE /api/pim/products/{id}/` - Delete product

### Categories
- `GET /api/pim/categories/` - List categories
- `POST /api/pim/categories/` - Create category
- `GET /api/pim/categories/{id}/` - Get category
- `PUT /api/pim/categories/{id}/` - Update category

### Attributes
- `GET /api/pim/attributes/` - List attributes
- `POST /api/pim/attributes/` - Create attribute
- `GET /api/pim/attributes/{id}/` - Get attribute

### Features
- `GET /api/pim/features/` - List features
- `POST /api/pim/features/` - Create feature
- `GET /api/pim/feature-sets/` - List feature sets

## OpenAPI Documentation

Interactive API documentation is available at:

- **Swagger UI**: `http://localhost:8000/api/docs/`
- **ReDoc**: `http://localhost:8000/api/redoc/`
- **OpenAPI Schema**: `http://localhost:8000/api/schema/`

## Rate Limiting

The API implements rate limiting to ensure fair usage:

- **Development**: 1000 requests per hour per IP
- **Production**: 100 requests per minute per authenticated user

Rate limit headers are included in responses:
- `X-RateLimit-Limit`: Request limit
- `X-RateLimit-Remaining`: Remaining requests
- `X-RateLimit-Reset`: Reset time

## Error Handling

Always check the HTTP status code and handle errors appropriately:

```javascript
fetch('/api/pim/products/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token your-token-here'
  },
  body: JSON.stringify(productData)
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## SDKs and Libraries

While we don't provide official SDKs yet, the API works with any HTTP client:

- **JavaScript**: fetch, axios, or any HTTP library
- **Python**: requests, httpx
- **cURL**: Command line testing
- **Postman**: API testing and documentation

## Need Help?

- Check the [Getting Started](./getting-started) guide
- Review [Development](./development) documentation
- Browse [GitHub Issues](https://github.com/entirius/entirius/issues)
- Join our [Discussions](https://github.com/entirius/entirius/discussions)

## Next Steps

1. Set up your development environment
2. Obtain an API token
3. Try the example requests above
4. Explore the interactive documentation
5. Start building your application!