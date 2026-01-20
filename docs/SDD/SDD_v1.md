# Software Design Document (SDD)
## Sistema de Gestión - Login
**Versión:** 1.0  
**Fecha:** 19 de Enero, 2026  
**Autor:** Kleber Tepud  
**Estado:** Aprobado

---

## 1. Introducción

### 1.1 Propósito
Este documento describe el diseño arquitectónico y técnico del Sistema de Login. Proporciona una visión detallada de los componentes, decisiones de diseño y estructura técnica.

### 1.2 Alcance
El diseño cubre la implementación frontend del sistema de autenticación de usuarios, incluyendo estructura HTML, estilos CSS y lógica JavaScript.

### 1.3 Audiencia
- Desarrolladores que implementarán o mantendrán el sistema
- Revisores técnicos
- Equipo de QA para entender el comportamiento esperado

---

## 2. Arquitectura del Sistema

### 2.1 Vista General de la Arquitectura

El sistema sigue una arquitectura de **Cliente Único (Single-Page)** sin backend, implementada completamente en el navegador.

```
┌─────────────────────────────────────┐
│         Navegador Web               │
│  ┌───────────────────────────────┐  │
│  │   Capa de Presentación        │  │
│  │   (HTML + CSS)                │  │
│  └───────────────┬───────────────┘  │
│                  │                   │
│  ┌───────────────▼───────────────┐  │
│  │   Capa de Lógica              │  │
│  │   (JavaScript)                │  │
│  └───────────────────────────────┘  │
│                                      │
└─────────────────────────────────────┘
```

### 2.2 Patrón de Diseño

**Patrón Utilizado:** Separación de Responsabilidades (Separation of Concerns)
- **HTML**: Estructura y contenido semántico
- **CSS**: Presentación y diseño visual
- **JavaScript**: Comportamiento y lógica de negocio

---

## 3. Componentes del Sistema

### 3.1 Componente: Interfaz de Usuario (login.html)

**Responsabilidad:** Renderizar la interfaz de login y capturar interacciones del usuario.

**Estructura de Componentes:**

```
Login Container
├── Login Header
│   ├── Título (h1)
│   └── Descripción (p)
├── Mensajes de Estado
│   ├── Error Message (div)
│   └── Success Message (div)
├── Login Form
│   ├── Campo Usuario (input)
│   ├── Campo Contraseña (input)
│   ├── Opciones de Formulario
│   │   ├── Recordarme (checkbox)
│   │   └── Olvidaste contraseña (link)
│   └── Botón Login (button)
└── Enlace de Registro (div)
```

**Elementos Principales:**

| Elemento | ID/Clase | Tipo | Propósito |
|----------|----------|------|-----------|
| Contenedor Principal | `.login-container` | `<div>` | Contenedor central del formulario |
| Formulario | `#loginForm` | `<form>` | Formulario de autenticación |
| Campo Usuario | `#username` | `<input>` | Captura nombre de usuario |
| Campo Contraseña | `#password` | `<input>` | Captura contraseña |
| Mensaje Error | `#errorMessage` | `<div>` | Muestra errores de validación |
| Mensaje Éxito | `#successMessage` | `<div>` | Confirma login exitoso |
| Botón Submit | `.login-button` | `<button>` | Envía el formulario |

---

### 3.2 Componente: Sistema de Estilos (CSS Embebido)

**Responsabilidad:** Proporcionar diseño visual atractivo y responsive.

**Secciones de Estilo:**

1. **Reset y Base**
   - Normalización de estilos (`* { margin: 0; padding: 0; }`)
   - Box-sizing universal

2. **Layout Principal**
   - Centrado vertical y horizontal con Flexbox
   - Gradiente de fondo

3. **Estilos del Contenedor**
   - Tarjeta blanca con sombra
   - Bordes redondeados
   - Responsive con max-width

4. **Estilos de Formulario**
   - Campos de entrada con hover y focus
   - Botones con efectos de transición
   - Mensajes de error/éxito diferenciados

**Decisiones de Diseño Visual:**

- **Paleta de Colores:**
  - Primary: `#667eea` (Azul violeta)
  - Secondary: `#764ba2` (Púrpura)
  - Background gradient: Linear gradient entre colores primarios
  - Text: `#333` (Gris oscuro)
  - Error: `#c33` (Rojo)
  - Success: `#3c3` (Verde)

- **Tipografía:**
  - Font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  - Tamaños: 28px (h1), 16px (botón), 14px (texto general)

- **Espaciado:**
  - Padding contenedor: 40px
  - Margin entre elementos: 20-30px
  - Border-radius: 5-10px

---

### 3.3 Componente: Lógica de Validación (JavaScript)

**Responsabilidad:** Manejar la validación de credenciales y feedback al usuario.

**Funciones Principales:**

#### 3.3.1 handleLogin(event)
```javascript
function handleLogin(event)
```
**Propósito:** Procesar el envío del formulario de login.

**Parámetros:**
- `event`: Evento de submit del formulario

**Flujo de Ejecución:**
1. Prevenir comportamiento default del formulario
2. Obtener valores de username y password
3. Ocultar mensajes previos
4. Validar credenciales contra valores hardcoded
5. Mostrar mensaje apropiado (éxito/error)
6. Si es exitoso, simular redirección con timeout

**Pseudo-código:**
```
FUNCIÓN handleLogin(event):
    event.preventDefault()
    
    username = obtener_valor(campo_usuario)
    password = obtener_valor(campo_contraseña)
    
    ocultar_todos_los_mensajes()
    
    SI (username == "admin" Y password == "admin123"):
        mostrar_mensaje_exito()
        ESPERAR 1 segundo
        mostrar_alerta("Login exitoso")
    SINO:
        mostrar_mensaje_error()
    FIN SI
    
    RETORNAR falso
FIN FUNCIÓN
```

#### 3.3.2 Event Listeners
**Propósito:** Limpiar mensajes de error cuando el usuario comienza a escribir.

**Eventos:**
- `input` en campo username
- `input` en campo password

**Comportamiento:**
- Ocultar mensaje de error al detectar cambios en los campos

---

## 4. Flujo de Datos

### 4.1 Diagrama de Flujo - Proceso de Login

```
┌─────────────┐
│   Inicio    │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│ Usuario carga       │
│ login.html          │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ Renderizar          │
│ formulario          │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ Usuario ingresa     │
│ credenciales        │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ Usuario hace clic   │
│ "Iniciar Sesión"    │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ handleLogin()       │
│ ejecutado           │
└──────┬──────────────┘
       │
       ▼
    ┌──────┐
    │Validar│
    └───┬──┘
        │
    ┌───▼────────────────┐
    │¿Credenciales OK?   │
    └───┬────────────┬───┘
        │            │
     SI │            │ NO
        │            │
        ▼            ▼
┌──────────┐  ┌─────────────┐
│Mostrar   │  │Mostrar      │
│Éxito     │  │Error        │
└────┬─────┘  └──────┬──────┘
     │               │
     ▼               │
┌──────────┐         │
│Simular   │         │
│Redirect  │         │
└────┬─────┘         │
     │               │
     └───────┬───────┘
             │
             ▼
      ┌──────────┐
      │   Fin    │
      └──────────┘
```

### 4.2 Estado de la Aplicación

**Variables de Estado:**
- Valores de campos: `username`, `password`
- Estado de checkbox: `rememberMe`
- Visibilidad de mensajes: `errorMessage.display`, `successMessage.display`

**Transiciones de Estado:**
- Inicial → Ingresando datos
- Ingresando datos → Validando
- Validando → Éxito | Error
- Error → Ingresando datos (al modificar campos)

---

## 5. Decisiones Técnicas

### 5.1 Tecnologías Seleccionadas

| Tecnología | Versión | Justificación |
|------------|---------|---------------|
| HTML5 | Última | Estándar web moderno, soporte amplio |
| CSS3 | Última | Flexbox, gradientes, transiciones |
| JavaScript | ES6+ | Funciones modernas, mejor legibilidad |
| Git | 2.x | Control de versiones estándar |

### 5.2 Decisiones de Arquitectura

**DA-001: Aplicación de Una Sola Página**
- **Decisión:** Implementar como archivo HTML único
- **Razones:**
  - Simplicidad de despliegue
  - No requiere servidor
  - Facilita demostración y testing
  - Adecuado para el alcance del proyecto
- **Alternativas Consideradas:**
  - Separar CSS y JS en archivos externos
  - **Rechazada porque:** Aumenta complejidad sin beneficio significativo para un prototipo

**DA-002: Estilos Embebidos**
- **Decisión:** CSS dentro del `<style>` tag
- **Razones:**
  - Carga más rápida (una sola petición HTTP)
  - Portabilidad (un solo archivo)
  - No requiere configuración de servidor
- **Trade-off:** Menor reutilización pero mayor simplicidad

**DA-003: Validación del Lado del Cliente**
- **Decisión:** Validación solo en JavaScript
- **Razones:**
  - No hay backend disponible en v1.0
  - Suficiente para demostración
  - Feedback inmediato al usuario
- **Limitaciones:** No es segura sin backend (documentado en SRS)

**DA-004: Credenciales Hardcoded**
- **Decisión:** Usuario y contraseña en código JavaScript
- **Razones:**
  - Propósito demostrativo únicamente
  - No requiere base de datos
  - Simplicidad de implementación
- **Riesgos Mitigados:**
  - Documentado claramente como NO PRODUCCIÓN
  - README indica que es solo para pruebas

---

## 6. Consideraciones de Seguridad

### 6.1 Medidas Implementadas
- Campo password con `type="password"` (oculta caracteres)
- Atributos `autocomplete` para mejorar UX de forma segura
- Validación de campos requeridos

### 6.2 Limitaciones Conocidas
- **Sin encriptación:** Credenciales en texto plano en código
- **Sin HTTPS:** Requiere configuración de servidor (fuera de alcance)
- **Sin rate limiting:** Posible brute force (requiere backend)
- **Sin tokens de sesión:** No hay persistencia real

### 6.3 Recomendaciones para Producción
1. Implementar backend con API REST
2. Usar HTTPS obligatorio
3. Hash de contraseñas con bcrypt o similar
4. Tokens JWT para manejo de sesión
5. Rate limiting y CAPTCHA
6. Validación tanto en cliente como servidor

---

## 7. Rendimiento

### 7.1 Métricas Objetivo
- **Carga inicial:** < 2 segundos
- **Tiempo de respuesta:** < 100ms para validación
- **Tamaño total:** < 50KB

### 7.2 Optimizaciones Aplicadas
- CSS y JS embebidos (reduce peticiones HTTP)
- Sin dependencias externas (sin carga de librerías)
- Uso de transiciones CSS en lugar de animaciones JavaScript
- Validación HTML5 nativa antes de JavaScript

---

## 8. Mantenibilidad

### 8.1 Estructura del Código
- Comentarios descriptivos en secciones CSS
- Nombres de variables y funciones descriptivos
- Separación clara entre estructura, estilo y comportamiento

### 8.2 Extensibilidad Futura
El diseño permite fácilmente:
- Agregar nuevos campos al formulario
- Integrar con backend API
- Implementar validaciones adicionales
- Agregar páginas adicionales (registro, recuperación)
- Migrar a framework (React, Vue, Angular)

---

## 9. Testing

### 9.1 Estrategia de Pruebas
- **Pruebas Manuales:** Validación en diferentes navegadores
- **Pruebas Responsive:** Verificación en múltiples tamaños de pantalla
- **Pruebas de Usabilidad:** Feedback de usuarios reales

### 9.2 Casos de Prueba Principales
1. Login exitoso con credenciales válidas
2. Login fallido con credenciales inválidas
3. Validación de campos vacíos
4. Funcionalidad de checkbox "Recordarme"
5. Responsiveness en móvil, tablet y desktop
6. Compatibilidad cross-browser

---

## 10. Despliegue

### 10.1 Requisitos de Despliegue
- Servidor web estático (o abrir directamente en navegador)
- No requiere compilación
- No requiere dependencias npm

### 10.2 Proceso de Despliegue
1. Copiar archivo `login.html` al servidor web
2. Configurar HTTPS (recomendado)
3. Verificar acceso desde URL pública
4. Testing post-despliegue

---

## 11. Apéndices

### 11.1 Convenciones de Código

**HTML:**
- Uso de indentación de 4 espacios
- Atributos en orden: id, class, name, type, otros
- Comentarios para secciones principales

**CSS:**
- Selectores organizados por componente
- Mobile-first approach en media queries (preparado para expansión)
- Variables CSS para colores (potencial mejora futura)

**JavaScript:**
- camelCase para nombres de variables y funciones
- Comentarios descriptivos antes de funciones
- Manejo explícito de eventos

---

## 12. Control de Versiones

| Versión | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | 19/01/2026 | Kleber Tepud | Versión inicial del documento |

---

## 13. Aprobación

| Rol | Nombre | Firma | Fecha |
|-----|--------|-------|-------|
| Arquitecto/Desarrollador | Kleber Tepud | _______ | 19/01/2026 |
| Revisor Técnico | Por definir | _______ | Pendiente |
| Aprobador | Por definir | _______ | Pendiente |

---

## 14. Referencias
- IEEE Std 1016-2009 - IEEE Standard for Information Technology—Systems Design—Software Design Descriptions
- MDN Web Docs - HTML, CSS, JavaScript References
- Material de curso: Gestión de la Configuración de Software - UNIANDES
