# Portfolio Profesional - Dra. Florencia Cubile

## 📋 Descripción General

Se ha creado un **portfolio profesional, moderno y responsivo** para la Dra. Florencia Cubile, abogada especializada en Derecho Penal. El sitio está completamente desarrollado en **HTML5, CSS3 y JavaScript vanilla**, con diseño moderno y enfoque en UX profesional.

## 🎯 Características Principales

### Diseño
- **Paleta de Colores Profesional**: Azul marino (#1a3a52) con acentos dorados (#d4af37)
- **Tipografía Premium**: Playfair Display para títulos, Inter para cuerpo de texto
- **Responsivo**: Completamente adaptado para mobile, tablet y desktop
- **Animaciones Suaves**: Scroll animado, hover effects, y transiciones elegantes
- **Branding Consistente**: Logo personalizado con iconografía profesional

### Secciones Incluidas
1. **Inicio (Hero)**: Presentación principal con CTA inmediato
2. **Sobre Mí**: Información personal, perfil profesional y estadísticas
3. **Cómo Trabajo**: 6 servicios clave presentados de forma visual
4. **Experiencia**: Timeline interactivo con detalles laborales
5. **Ubicación**: Información de contacto y ubicación en Santa Fe
6. **Contacto**: Formulario funcional y métodos de contacto
7. **Footer**: Enlaces rápidos y referencias profesionales

## 📁 Estructura de Archivos

```
FlorAbogacia/
├── index.html          # Archivo principal
├── css/
│   └── styles.css      # Estilos completos
├── js/
│   └── main.js         # Interactividad
└── [Imágenes a añadir]
```

## 🖼️ Imágenes - Tamaños Recomendados

### 1. **Foto Profesional Principal (Hero)**
   - **Ubicación**: Sección Hero, lado derecho
   - **Tamaño**: 600x600px (cuadrada)
   - **Formato**: JPG o WebP
   - **Descripción**: Foto profesional de estudio, fondo neutral
   - **Recomendación**: Retrato con fondo blanco o gris claro, ropa profesional (traje/blazer)

### 2. **Foto Secundaria (About)**
   - **Ubicación**: Sección "Sobre Mí", lado derecho
   - **Tamaño**: 500x600px
   - **Formato**: JPG o WebP
   - **Descripción**: Foto profesional similar, puede ser en ambiente de oficina

### 3. **Mapa (Ubicación)**
   - **Ubicación**: Sección "Ubicación", lado derecho
   - **Tamaño**: 600x600px
   - **Implementación**: Google Maps embed
   - **Instrucciones**: 
     - Ir a: https://www.google.com/maps
     - Buscar: "San Lorenzo 1076, Santa Fe, Argentina"
     - Click en "Compartir" → "Insertar un mapa"
     - Copiar el código iframe

## 💡 Sugerencias y Recomendaciones

### ✅ **Implementaciones Sugeridas**

1. **SEO y Meta Tags**
   - Agregar meta tags adicionales (og:image, og:description)
   - Crear sitemap.xml
   - Agregar schema.org para profesionales del derecho
   - Google Analytics

2. **Integración de Google Maps**
   - Reemplazar placeholder en sección "Ubicación"
   - Agregar marcador de la oficina
   - Mostrar horarios de atención

3. **Email y Contacto**
   - Sistema backend para procesar formularios (si deseas guardar en BD)
   - O usar servicios como Formspree, EmailJS o Netlify Forms
   - Actualmente redirige a cliente de email

4. **Mejoras de Contenido**
   - Agregar **Áreas de Práctica** más detalladas
   - **Blog jurídico** local con artículos sobre derecho penal
   - **FAQ** (Preguntas frecuentes) sobre procedimientos
   - **Testimonios** de clientes (con consentimiento)

5. **Certificaciones y Credenciales**
   - Agregar número de matrícula profesional
   - Certificaciones adicionales
   - Afiliaciones profesionales

6. **Redes Sociales**
   - Integrar íconos de LinkedIn en footer
   - Posible integración con WhatsApp Business
   - Links a redes profesionales

7. **Optimizaciones Técnicas**
   - LazyLoading para imágenes
   - Compresión de imágenes
   - Caché browser
   - CDN para recursos estáticos

### 🎨 **Mejoras de Diseño Potenciales**

1. **Sección de Especialidades**
   - Crear sección "Áreas de Práctica" antes de "Experiencia"
   - Mostrar enfoque específico en Derecho Penal

2. **Testimonios/Casos de Éxito**
   - Agregar sección con clientes satisfechos (anónimos)
   - Review de servicios prestados

3. **Artículos/Blog**
   - Mini-blog con artículos sobre cambios legales
   - Tips jurídicos útiles
   - Actualizaciones normativas

4. **Herramientas Interactivas**
   - Calculadora de honorarios
   - Checklist para consulta inicial
   - Guía de documentos necesarios

5. **Galería o Portfolio**
   - Mostrar casos representativos (anonimizados)
   - Proyecto de ley trabajado

## ⚙️ Cómo Implementar las Imágenes

### Opción 1: Usando URLs
Reemplaza en `index.html`:
```html
<!-- Reemplazar -->
<div class="image-placeholder">...</div>

<!-- Por -->
<img src="https://tu-sitio.com/img/foto-profesional.jpg" alt="Dra. Florencia Cubile">
```

### Opción 2: Subir Archivos Locales
1. Crear carpeta `/img` en el proyecto
2. Guardar imágenes con nombres: `florencia-hero.jpg`, `florencia-about.jpg`
3. Actualizar rutas en HTML

### Opción 3: Usar CDN (Recomendado)
- Cloudinary.com
- Imgix.com
- AWS S3

## 🔧 Pasos para Personalizar

### 1. Cambiar Logo
En CSS (`styles.css`), línea ~102:
```css
.logo-icon {
    /* Reemplazar emoji ⚖ con tu propio SVG o imagen */
}
```

### 2. Cambiar Colores
Variables CSS (líneas 8-27 de `styles.css`):
```css
--primary: #1a3a52;      /* Azul principal */
--accent: #d4af37;        /* Dorado */
```

### 3. Modificar Contenido
- Textos directamente en `index.html`
- Información de contacto
- Referencias profesionales

### 4. Agregar Redes Sociales
En footer, antes de `</footer>`:
```html
<div class="social-links">
    <a href="https://linkedin.com/in/florencia-cubile" target="_blank">LinkedIn</a>
    <a href="https://wa.me/5493425110049" target="_blank">WhatsApp</a>
</div>
```

## 📱 Optimizaciones Realizadas

✅ Mobile-first responsive design
✅ Animaciones suaves (no pesadas)
✅ Navegación intuitiva
✅ Formulario de contacto funcional
✅ Accesibilidad básica (alt text, colores contrastados)
✅ Carga rápida (sin dependencias externas principales)
✅ Scroll smooth automatizado
✅ Menú hamburguesa para móvil

## 🚀 Deployment (Recomendaciones)

### Opciones Gratuitas/Económicas:
1. **Netlify** - Recomendado (muy fácil)
   - Conectar repositorio Git
   - Deploy automático
   - Formularios fáciles

2. **Vercel** - Excelente rendimiento
3. **GitHub Pages** - Gratis si es repo público
4. **Firebase Hosting** - Google
5. **tu-proveedor-hosting** - Host compartido tradicional

## ✨ Próximos Pasos Recomendados

**Prioritario:**
1. Obtener 2 fotos profesionales de estudio
2. Integrar Google Maps
3. Configurar formulario de contacto (Formspree/EmailJS)
4. Dominio propio (.com.ar o .ar)

**Importante:**
5. Agregar Google Analytics
6. Crear perfil LinkedIn si no existe
7. Optimizar imágenes
8. Test en múltiples navegadores

**Futuro:**
9. Blog/artículos jurídicos
10. Sección de testimonios
11. Integración con redes sociales
12. Chat en vivo (Tawk, Intercom)

## 📞 Información de Contacto (Actual)

- **Email**: Dra.florenciacubile@gmail.com
- **Teléfono**: +54 (342) 5-11-0049
- **Ubicación**: San Lorenzo 1076, Santa Fe Capital
- **Referencias Profesionales**: 
  - Consuelo Rosas: 3425427667
  - Juan Pablo Temón: 3425044074

## 🎓 Cambios Sugeridos al Contenido

### 1. **Agregar Especialidad Específica**
Considera mencionar más claramente:
- Procedimientos penales complejos
- Defensa de víctimas
- Derecho penal económico
- Derecho administrativo disciplinario

### 2. **Diferenciar Servicios**
Podrías expandir "Cómo Trabajo" con:
- **Primera Consulta Gratuita**: Para evaluar caso
- **Honorarios Flexibles**: Package inicial+seguimiento
- **Confidencialidad**: Énfasis en secreto profesional

### 3. **Agregar Credenciales Adicionales**
Si tienes:
- Certificaciones en Mediación
- Cursos de especialización
- Membresía en colegios profesionales
- Idiomas adicionales

### 4. **Destacar Experiencia Reciente**
La experiencia en **Centro de Asistencia a la Víctima** es muy valiosa:
- Destaca enfoque en derechos humanos
- Interdisciplinariedad
- Trabajo en sector público

## 📋 Checklist Final

- [ ] Agregar fotos profesionales
- [ ] Integrar Google Maps
- [ ] Configurar formulario de contacto
- [ ] Comprar dominio
- [ ] Test en mobile/tablet/desktop
- [ ] SEO básico
- [ ] Google Analytics
- [ ] Deploy en servidor
- [ ] Agregar a Google My Business
- [ ] LinkedIn optimizado

---

**Sitio creado**: 1 de junio de 2026
**Versión**: 1.0
**Estado**: Listo para personalización con imágenes