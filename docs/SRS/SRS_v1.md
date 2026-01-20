# Software Requirements Specification (SRS)
## Sistema de Gestión - Login
**Versión:** 1.0  
**Fecha:** 19 de Enero, 2026  
**Autor:** Kleber Tepud  
**Estado:** Aprobado

---

## 1. Introducción

### 1.1 Propósito
Este documento especifica los requisitos del Sistema de Gestión, enfocándose en la funcionalidad de autenticación de usuarios. Define los requisitos funcionales y no funcionales que el sistema debe cumplir.

### 1.2 Alcance
El sistema proporcionará una interfaz de login segura para autenticar usuarios y controlar el acceso a funcionalidades protegidas.

### 1.3 Definiciones y Acrónimos
- **SRS**: Software Requirements Specification
- **UI**: User Interface (Interfaz de Usuario)
- **UX**: User Experience (Experiencia de Usuario)
- **HTML**: HyperText Markup Language
- **CSS**: Cascading Style Sheets

---

## 2. Descripción General

### 2.1 Perspectiva del Producto
Sistema web de autenticación que servirá como punto de entrada para un sistema de gestión más amplio.

### 2.2 Funciones del Producto
- Autenticación de usuarios mediante credenciales
- Validación de datos de entrada
- Gestión de sesión de usuario
- Interfaz responsive y amigable

### 2.3 Usuarios del Sistema
- **Usuarios Finales**: Personal que necesita acceso al sistema
- **Administradores**: Gestión de credenciales y permisos

---

## 3. Requisitos Funcionales

### RF-001: Login de Usuario
**Prioridad:** Alta  
**Descripción:** El sistema debe permitir a los usuarios autenticarse mediante usuario y contraseña.

**Criterios de Aceptación:**
- El formulario debe contener campos para usuario y contraseña
- Ambos campos son obligatorios
- El botón de login debe estar claramente visible
- Al enviar credenciales válidas, el sistema debe mostrar mensaje de éxito

**Flujo Normal:**
1. Usuario ingresa nombre de usuario
2. Usuario ingresa contraseña
3. Usuario hace clic en "Iniciar Sesión"
4. Sistema valida credenciales
5. Sistema muestra mensaje de confirmación

**Flujo Alternativo:**
- Si las credenciales son incorrectas, mostrar mensaje de error

---

### RF-002: Validación de Credenciales
**Prioridad:** Alta  
**Descripción:** El sistema debe validar que los campos de usuario y contraseña no estén vacíos antes de procesar el login.

**Criterios de Aceptación:**
- Los campos no pueden enviarse vacíos
- Debe mostrarse validación HTML5 nativa
- Mensajes de error claros y específicos

---

### RF-003: Mensajes de Retroalimentación
**Prioridad:** Media  
**Descripción:** El sistema debe proporcionar retroalimentación visual al usuario sobre el estado del login.

**Criterios de Aceptación:**
- Mensaje de error visible cuando las credenciales son incorrectas
- Mensaje de éxito visible cuando el login es exitoso
- Los mensajes deben desaparecer al interactuar nuevamente con el formulario
- Los mensajes deben tener formato y colores diferenciados

---

### RF-004: Opción de Recordar Usuario
**Prioridad:** Baja  
**Descripción:** El sistema debe ofrecer una opción "Recordarme" para mantener la sesión del usuario.

**Criterios de Aceptación:**
- Checkbox visible y funcional
- Etiqueta descriptiva clara
- Estado se mantiene al marcar/desmarcar

---

### RF-005: Recuperación de Contraseña
**Prioridad:** Media  
**Descripción:** El sistema debe proporcionar un enlace para que los usuarios puedan recuperar su contraseña.

**Criterios de Aceptación:**
- Enlace "¿Olvidaste tu contraseña?" visible
- Enlace claramente distinguible
- Ubicado estratégicamente en la interfaz

---

### RF-006: Enlace a Registro
**Prioridad:** Media  
**Descripción:** El sistema debe proporcionar un enlace para que nuevos usuarios puedan registrarse.

**Criterios de Aceptación:**
- Enlace "Regístrate aquí" visible
- Mensaje contextual indicando que es para usuarios sin cuenta
- Formato distinguible del resto del contenido

---

## 4. Requisitos No Funcionales

### RNF-001: Usabilidad
**Prioridad:** Alta  
**Descripción:** La interfaz debe ser intuitiva y fácil de usar.

**Criterios de Aceptación:**
- Diseño limpio y moderno
- Contraste adecuado entre texto y fondo
- Navegación clara sin necesidad de instrucciones adicionales
- Feedback visual inmediato en interacciones
- Accesibilidad para usuarios con diferentes dispositivos

**Métricas:**
- Usuario promedio debe poder completar login en menos de 30 segundos
- Tasa de error de usuario menor al 10%

---

### RNF-002: Rendimiento
**Prioridad:** Alta  
**Descripción:** El sistema debe responder rápidamente a las interacciones del usuario.

**Criterios de Aceptación:**
- Carga inicial de la página en menos de 2 segundos
- Validación de formulario instantánea (< 100ms)
- Transiciones suaves y sin lag perceptible
- Tamaño total de la página menor a 50KB

**Métricas:**
- Tiempo de respuesta de validación < 100ms
- First Contentful Paint < 1.5s

---

### RNF-003: Compatibilidad
**Prioridad:** Alta  
**Descripción:** El sistema debe funcionar correctamente en diferentes navegadores y dispositivos.

**Criterios de Aceptación:**
- Compatible con Chrome (últimas 2 versiones)
- Compatible con Firefox (últimas 2 versiones)
- Compatible con Safari (últimas 2 versiones)
- Compatible con Edge (últimas 2 versiones)
- Responsive en dispositivos móviles (smartphones y tablets)
- Resoluciones mínimas: 320px (móvil) a 1920px (desktop)

---

### RNF-004: Mantenibilidad
**Prioridad:** Media  
**Descripción:** El código debe ser fácil de mantener y modificar.

**Criterios de Aceptación:**
- Código HTML semántico y bien estructurado
- CSS organizado con comentarios descriptivos
- JavaScript modular y documentado
- Separación clara de responsabilidades (estructura, estilo, comportamiento)
- Nombres de variables y funciones descriptivos

---

### RNF-005: Seguridad Básica
**Prioridad:** Alta  
**Descripción:** El sistema debe implementar medidas básicas de seguridad en el cliente.

**Criterios de Aceptación:**
- Campo de contraseña con tipo "password" (texto oculto)
- No almacenar contraseñas en texto plano en el código
- Validación de entrada para prevenir caracteres maliciosos
- Uso de atributos autocomplete apropiados
- HTTPS recomendado en producción (documentado)

**Nota:** La seguridad completa requiere implementación backend (fuera del alcance de v1.0)

---

### RNF-006: Diseño Responsive
**Prioridad:** Alta  
**Descripción:** La interfaz debe adaptarse correctamente a diferentes tamaños de pantalla.

**Criterios de Aceptación:**
- Layout fluido que se adapta desde 320px hasta 1920px
- Elementos proporcionales y legibles en todos los tamaños
- No requiere zoom horizontal
- Touch-friendly en dispositivos táctiles (botones y campos suficientemente grandes)
- Pruebas exitosas en móvil, tablet y desktop

---

## 5. Restricciones

### 5.1 Restricciones Técnicas
- Debe funcionar sin servidor backend (solo frontend)
- Implementado con HTML, CSS y JavaScript vanilla (sin frameworks)
- No requiere dependencias externas ni compilación

### 5.2 Restricciones de Negocio
- Proyecto académico con fines demostrativos
- Timeline de desarrollo limitado
- Recursos limitados (1 desarrollador)

---

## 6. Aprobación

| Rol | Nombre | Firma | Fecha |
|-----|--------|-------|-------|
| Autor/Desarrollador | Kleber Tepud | _______ | 19/01/2026 |
| Revisor Técnico | Por definir | _______ | Pendiente |
| Aprobador | Por definir | _______ | Pendiente |

---

## 7. Control de Versiones

| Versión | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | 19/01/2026 | Kleber Tepud | Versión inicial del documento |

---

## 8. Referencias
- IEEE Std 830-1998 - IEEE Recommended Practice for Software Requirements Specifications
- Material de curso: Gestión de la Configuración de Software - UNIANDES
