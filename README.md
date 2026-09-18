# matchpoint-ecommerce
Full-stack multi-sport-e-commerce built with React, Node.js, TypeScript and PostgreSQL

## Estructura del proyecto

- frontend/: interfaz de la tienda con React y TypeScript.
- backend/: API y reglas de negocio con Node.js y TypeScript.
- database/migrations/: cambios versionados de la estructura de PostgreSQL.
- database/seeds/: datos iniciales y ejemplos para desarrollo.
- docs/database/: diagrama entidad-relación (DER) y decisiones del modelo.

## Estado actual

El proyecto está en la etapa de estructura inicial y diseño de datos.
Todavía no hay una aplicación ejecutable.

Antes de generar SQL, revisaremos el DER del MVP:
catálogo multideporte, especializaciones de productos, variantes,
usuarios y pedidos.

## Configuración local

Los archivos .env contienen configuración local y no deben subirse a Git.
Si se agrega un .env.example, debe contener únicamente valores ficticios,
sin contraseñas ni claves reales.
