# Preentrega 3 - Checklist aplicada al proyecto actual

Esta guía está pensada para **cumplir la entrega sin rehacer toda la web**.

## 1) HTML / estructura

- [x] Mantener la estructura en componentes React ya existente (`Navbar`, `Hero`, `BestSellers`, `Sidebar`, cards y footer).
- [x] Usar clases utilitarias de Tailwind para grillas y flex (`grid`, `flex`, `md:`, `lg:`).
- [x] Verificar rutas de imágenes desde `public/fotos/...`.
- [x] Mantener `alt` descriptivo en imágenes de producto.

## 2) SCSS/SASS

Se agregó una arquitectura SCSS por capas en `styles/`:

- `abstracts/`: variables y mixins.
- `base/`: reset y utilidades (`@extend`, `@each`).
- `layout/`: layout global y animaciones.
- `components/`: estilos por componente.
- `pages/`: ajustes específicos de página.
- `vendors/`: overrides de librerías.
- `main.scss`: punto de entrada SCSS.

Además se agregó `styles/main.css` compilado/manual para que el proyecto siga funcionando incluso si tu entorno no permite instalar `sass`.

### Recursos de SASS que ya están en el repo

- Variables (`$brand-orange`, `$breakpoints`, etc.).
- Nesting en componentes (`.hero-shell .hero-cta-primary`, etc.).
- Mixins (`respond`, `interactive-scale`, `section-padding`).
- `@extend` con `%focus-ring`.
- `@each` para clases utilitarias dinámicas (`.u-text-*`).

## 3) Responsive

- [x] El layout principal ya usa breakpoints y utilidades responsive de Tailwind.
- [x] Se conservaron los breakpoints mobile/tablet/desktop existentes.
- [x] Se agregó una capa de estilos complementaria para focus, animaciones y detalles visuales.

## 4) Git/GitHub

Para completar la entrega:

1. Subir todo el proyecto (incluyendo carpeta `styles/`).
2. Confirmar que `.gitignore` excluye `node_modules`.
3. Hacer commits descriptivos (ej.: `feat: estructura scss y mejoras responsive`).
4. Activar GitHub Pages en `Settings > Pages`.

## Sugerencia de texto para presentar la entrega

> El proyecto mantiene su estructura React original y maquetación responsive con utilidades de grid/flex.
> Se implementó arquitectura SCSS modular con variables, mixins, nesting, `@extend` y `@each`, además de estilos avanzados con transiciones/animación.
> Se versionó en GitHub con historial de commits y repositorio listo para publicar en GitHub Pages.
