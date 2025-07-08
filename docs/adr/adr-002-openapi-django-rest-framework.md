---
sidebar_position: 2
---

# ADR-002: Django Rest Framework with Pydantic and OpenAPI

## Status
**Status**: Accepted  
**Date**: 2025-06-23  
**Authors**: Development Team  
**Reviewers**: Piotr Brzozowski 

## Context

Entirius backend requires a robust API framework to serve the e-commerce platform's functionality. The system needs to:
- Provide RESTful APIs for frontend applications and external integrations
- Maintain comprehensive API documentation
- Support API versioning and evolution
- Enable automated testing and validation
- Integrate seamlessly with the Django-based modular monolith architecture

Key technical requirements:
- Django as the primary backend api framework (aligned with [ADR-001](./adr-001-modular-monolith))
- Strong type safety and runtime validation for API contracts
- Python 3 ecosystem compatibility with modern type hints
- PostgreSQL database integration
- Auto-generated API documentation with rich schemas
- API schema validation with detailed error messages
- Support for authentication and permissions
- Consistent error handling and response formatting

## Considered Options

### Option 1: Django Rest Framework (DRF) with Pydantic and OpenAPI
- **Description**: Use Django Rest Framework enhanced with Pydantic for validation and OpenAPI 3.0 specification for documentation
- **Pros**: 
  - Native Django integration with enhanced type safety
  - Mature DRF ecosystem with extensive community support
  - Pydantic provides strong type hints and runtime validation
  - Rich OpenAPI schemas with detailed validation rules
  - Auto-generated OpenAPI schema via drf-spectacular with Pydantic integration
  - Excellent documentation and learning resources
  - Supports ViewSets, Generic Views, and custom API views
  - Built-in browsable API for development
  - Comprehensive error handling with detailed validation messages
  - Self-documenting code through Pydantic models
- **Cons**:
  - Django-specific, not framework agnostic
  - Additional learning curve for Pydantic concepts
  - Some complexity in bridging Pydantic models with Django ORM
  - Additional dependency for Pydantic validation
- **Impact on system**: Enhanced type safety, better API documentation, improved developer experience

### Option 2: FastAPI
- **Description**: Use FastAPI framework with automatic OpenAPI generation
- **Pros**: 
  - Native OpenAPI 3.0 support
  - Automatic API documentation
  - High performance (async support)
  - Modern Python type hints integration
  - Built-in data validation
- **Cons**:
  - Requires separate framework alongside Django
  - Additional complexity in modular monolith
  - Different ORM integration patterns
  - Less mature Django ecosystem integration
- **Impact on system**: Would require dual framework approach, complicating the monolith architecture

### Option 3: Django with Manual API Documentation
- **Description**: Build REST APIs using Django views with manually maintained API documentation
- **Pros**: 
  - Full control over API design
  - No additional dependencies
  - Simple Django integration
- **Cons**:
  - Manual documentation maintenance overhead
  - No automatic schema validation
  - Prone to documentation drift
  - Limited API tooling support
  - No standardized API specification
- **Impact on system**: Higher maintenance burden, potential documentation inconsistencies

## Decision

**Chosen option**: Django Rest Framework with Pydantic and OpenAPI

**Rationale**: 
Django Rest Framework enhanced with Pydantic validation and OpenAPI specification is the optimal choice because:

- **Architecture alignment**: Perfect fit with Django-based modular monolith ([ADR-001](./adr-001-modular-monolith))
- **Type safety enhancement**: Pydantic provides compile-time and runtime type validation
- **Ecosystem maturity**: Proven DRF solution enhanced with modern Pydantic validation
- **Documentation automation**: Rich OpenAPI schemas with Pydantic model integration
- **Developer experience**: Enhanced IDE support with type hints and comprehensive tooling
- **API standardization**: OpenAPI 3.0 with detailed validation schemas
- **Integration capabilities**: Native Django integration with enhanced validation patterns
- **Future-proofing**: Modern Python typing ecosystem alignment
- **Error handling**: Consistent, detailed validation error messages
- **Code maintainability**: Self-documenting models with clear API contracts

## Consequences

### Positive
- **Type-safe API development** - Pydantic models provide compile-time and runtime type checking
- **Rich API documentation** - OpenAPI schemas with detailed validation rules and examples
- **Enhanced developer experience** - Better IDE support, autocomplete, and error detection
- **Consistent validation** - Declarative validation rules across all API endpoints
- **Better API governance** - Strong typing prevents API contract violations
- **External tool integration** - OpenAPI enables advanced code generation and testing tools
- **Client SDK generation** - Type-safe client library generation for various languages
- **API versioning support** - Built-in patterns for API evolution with type safety
- **Detailed error responses** - Pydantic provides comprehensive validation error messages
- **Self-documenting code** - Models serve as both validation and documentation

### Negative
- **Additional dependencies** - Requires Pydantic and drf-spectacular for full functionality
- **Learning curve** - Team needs to understand DRF, Pydantic, and OpenAPI integration patterns
- **Complexity increase** - Additional layer of abstraction between Django models and API
- **Performance overhead** - Pydantic validation adds computational cost during request/response processing
- **Django-Pydantic bridging** - Requires careful handling when converting between Django ORM and Pydantic models

### Neutral
- **Django ecosystem lock-in** - Reinforces Django choice but aligns with architecture decision
- **API-first mindset** - Encourages thinking about API design before implementation

## Implementation Plan

1. **Phase 1: Core Setup**
   - Install Django Rest Framework, Pydantic, and drf-spectacular
   - Configure Pydantic integration with DRF
   - Configure OpenAPI schema generation with Pydantic models
   - Set up API routing structure
   - Implement basic authentication

2. **Phase 2: API Development**
   - Create Pydantic models for request/response validation
   - Implement DRF serializers with Pydantic integration
   - Implement ViewSets for CRUD operations with type safety
   - Add custom API endpoints for business logic
   - Configure permissions and authentication
   - Implement custom exception handlers with Pydantic error formatting

3. **Phase 3: Documentation & Testing**
   - Customize OpenAPI schema with Pydantic model documentation
   - Add API examples and rich response schemas
   - Implement type-safe API testing with Pydantic models
   - Deploy interactive API documentation to development environment

## Success Metrics

- **API coverage**: 100% of business functionality exposed via type-safe, documented APIs
- **Type safety**: 100% of API endpoints use Pydantic models for validation
- **Documentation accuracy**: Zero discrepancies between API behavior and OpenAPI schema
- **Developer adoption**: Frontend developers can build features using type-safe API contracts
- **Response times**: API endpoints maintain sub-200ms response times despite validation overhead
- **Error handling**: Consistent, detailed error response format across all endpoints

## Related ADRs

- [ADR-001](./adr-001-modular-monolith): Aligns with modular monolith architecture decision

## References

- [Django Rest Framework Documentation](https://www.django-rest-framework.org/)
- [Pydantic Documentation](https://docs.pydantic.dev/)
- [OpenAPI 3.0 Specification](https://swagger.io/specification/)
- [drf-spectacular Documentation](https://drf-spectacular.readthedocs.io/)
- [Pydantic-DRF Integration](https://github.com/surenkov/drf-pydantic)
- [API Design Best Practices](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
- [DRF Exception Handling](https://www.django-rest-framework.org/api-guide/exceptions/)

---

*This ADR establishes the API development foundation for Entirius. All API development should follow DRF patterns enhanced with Pydantic validation and maintain type-safe OpenAPI schema accuracy.*
