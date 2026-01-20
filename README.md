# Sistema de Gestión - Proyecto Baseline

## Objetivo del Proyecto

Este proyecto es un sistema de gestión básico que implementa funcionalidades de autenticación de usuarios. El objetivo principal es demostrar las prácticas de gestión de configuración de software mediante la implementación de un baseline controlado que incluye documentación de requisitos (SRS), diseño (SDD) y código fuente versionado.

## Estructura del Repositorio

```
GCS_Semana2_Baseline_Kleber_Tepud/
├── docs/                      # Documentación del proyecto
│   ├── SRS/                  # Software Requirements Specification
│   │   └── SRS_v1.md        # Especificación de requisitos v1.0
│   └── SDD/                  # Software Design Document
│       └── SDD_v1.md        # Documento de diseño v1.0
├── src/                      # Código fuente
│   └── login.html           # Página de login (HTML puro)
├── tests/                    # Pruebas del sistema
├── config/                   # Archivos de configuración
│   └── config.example       # Ejemplo de configuración
├── scripts/                  # Scripts de automatización
├── CHANGELOG.md             # Registro de cambios
└── README.md                # Este archivo
```

## Cómo Ejecutar el Proyecto

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- No se requiere servidor web ni dependencias adicionales

### Pasos para Ejecutar

1. **Clonar o descargar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd GCS_Semana2_Baseline_Kleber_Tepud
   ```

2. **Abrir la aplicación**
   - Navegar a la carpeta `src/`
   - Abrir el archivo `login.html` directamente en un navegador web
   - Alternativamente, hacer doble clic en el archivo `login.html`

3. **Credenciales de prueba**
   - Usuario: `admin`
   - Contraseña: `admin123`

### Ejecución con Servidor Local (Opcional)

Si prefieres ejecutar con un servidor HTTP local:

```bash
# Con Python 3
cd src
python -m http.server 8000

# Con Node.js (npx)
cd src
npx http-server -p 8000

# Con PHP
cd src
php -S localhost:8000
```

Luego acceder a: `http://localhost:8000/login.html`

## Cómo Crear un Baseline

Un baseline es una versión específica y controlada del proyecto que ha sido revisada y aprobada.

### Proceso para Crear un Baseline

1. **Verificar el Estado del Código**
   ```bash
   git status
   ```

2. **Asegurar que Todos los Cambios Estén Confirmados**
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   ```

3. **Crear un Tag de Versión (Baseline)**
   ```bash
   # Formato: v<major>.<minor>.<patch>
   git tag -a v1.0.0 -m "Baseline v1.0.0 - Versión inicial del sistema de login"
   ```

4. **Verificar el Tag Creado**
   ```bash
   git tag -l
   git show v1.0.0
   ```

5. **Subir el Tag al Repositorio Remoto**
   ```bash
   git push origin v1.0.0
   # O subir todos los tags
   git push origin --tags
   ```

### Convenciones de Versionado

El proyecto sigue **Semantic Versioning (SemVer)**:
- **MAJOR** (v1.x.x): Cambios incompatibles con versiones anteriores
- **MINOR** (vx.1.x): Nueva funcionalidad compatible con versiones anteriores
- **PATCH** (vx.x.1): Correcciones de bugs compatibles

### Ejemplos de Baselines

- `v1.0.0` - Versión inicial con login básico
- `v1.1.0` - Agregada funcionalidad de registro de usuarios
- `v1.1.1` - Corrección de bug en validación de formulario
- `v2.0.0` - Refactorización completa de la arquitectura

### Recuperar un Baseline Específico

```bash
# Ver todos los baselines disponibles
git tag -l

# Cambiar a un baseline específico
git checkout v1.0.0

# Crear una rama desde un baseline
git checkout -b hotfix/v1.0.1 v1.0.0
```

## Gestión de Configuración

### Control de Versiones
- Todos los cambios deben ser registrados en `CHANGELOG.md`
- Cada baseline debe estar documentado con su alcance y cambios

### Archivos de Configuración
- Los archivos de configuración reales NO deben subirse al repositorio
- Usar `config.example` como plantilla
- Mantener configuraciones sensibles en `.gitignore`

### Documentación
- La documentación debe actualizarse antes de crear un nuevo baseline
- Cada versión mayor debe incluir actualización de SRS y SDD

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Git para control de versiones

## Autor

Kleber Tepud  
Gestión de la Configuración de Software - UNIANDES  
Semestre VII - 2026

## Licencia

Este proyecto es para fines académicos.

---

## Proyecto Angular Original

This project was also generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.3.

### Development server (Angular)

To start a local development server, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
