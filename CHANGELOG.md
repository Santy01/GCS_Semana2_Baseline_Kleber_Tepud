# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-19

### Agregado
- Página de login básica en HTML puro con estilos CSS integrados
- Estructura inicial del proyecto con carpetas docs, src, tests, config y scripts
- Documentación SRS v1.0 con requisitos funcionales y no funcionales
- Documentación SDD v1.0 con diseño de arquitectura y componentes
- README.md con instrucciones completas de ejecución y creación de baselines
- Archivo de configuración de ejemplo (config.example)
- Este archivo CHANGELOG.md para registro de cambios
- Validación básica de credenciales en el formulario de login
- Mensajes de error y éxito en la interfaz de usuario
- Opción de "Recordarme" en el formulario
- Diseño responsive para dispositivos móviles

### Características de Seguridad
- Validación de entrada en el lado del cliente
- Uso de autocomplete para mejorar UX en campos de credenciales

### Notas
- Esta es la versión inicial del proyecto (Baseline v1.0.0)
- Las credenciales de prueba son: usuario `admin`, contraseña `admin123`
- La autenticación es solo para demostración (no conectada a backend)

---

## [Unreleased]

### Planeado para Futuras Versiones
- Integración con backend para autenticación real
- Implementación de registro de usuarios
- Recuperación de contraseña funcional
- Sistema de roles y permisos
- Dashboard post-login
- Persistencia de sesión con tokens
- Pruebas unitarias y de integración
- Despliegue automatizado

---

## Formato de Entradas

### Tipos de Cambios
- `Agregado` para nuevas funcionalidades
- `Cambiado` para cambios en funcionalidad existente
- `Obsoleto` para funcionalidades que serán removidas
- `Removido` para funcionalidades removidas
- `Corregido` para corrección de bugs
- `Seguridad` para vulnerabilidades corregidas

### Ejemplo de Entrada Futura
```markdown
## [1.1.0] - YYYY-MM-DD

### Agregado
- Nueva funcionalidad X que permite Y

### Corregido
- Bug en el formulario de login que causaba Z
```
