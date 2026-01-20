# Scripts

Este directorio contiene scripts de automatización para el proyecto.

## Propósito

Centralizar scripts útiles para:
- Despliegue
- Automatización de tareas
- Generación de reportes
- Gestión de versiones
- Backup y restauración

## Scripts Planeados

### create-baseline.sh / create-baseline.ps1
Script para crear un nuevo baseline (tag de git) con validaciones:
- Verificar que todos los cambios estén commiteados
- Actualizar CHANGELOG.md
- Crear tag con formato correcto
- Push del tag al repositorio remoto

### deploy.sh / deploy.ps1
Script para desplegar la aplicación:
- Validar archivos necesarios
- Copiar archivos al servidor
- Verificar despliegue exitoso

### validate-docs.sh / validate-docs.ps1
Script para validar que la documentación esté completa:
- Verificar existencia de archivos requeridos
- Validar formato de documentos
- Verificar links internos

## Estado Actual

**Versión 1.0:** Este directorio está preparado para futuras implementaciones de scripts de automatización.

## Convenciones

- Scripts para Linux/Mac: extensión `.sh`
- Scripts para Windows: extensión `.ps1` (PowerShell)
- Scripts multi-plataforma: usar Node.js o Python
- Incluir comentarios explicativos en cada script
- Documentar uso en el header del script
