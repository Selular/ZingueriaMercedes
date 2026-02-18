# Plan de cambios para Preentrega 3 (sin romper tu diseño actual)

## Qué ya cumple este proyecto

- Maquetación responsive con utilidades (`grid`, `flex`, breakpoints `sm/md/lg/xl`).
- Estructura en componentes React para separar secciones.
- Carpeta `public/fotos` con rutas relativas de imágenes.
- `.gitignore` configurado para no subir `node_modules` y `dist`.

## Qué cambiamos para mejorar la entrega

1. **SASS más prolijo**
   - Mantener `styles/main.scss` como entry.
   - Mantener parciales por capas: `abstracts/`, `base/`, `components/`, `layout/`, `pages/`, `vendors/`.
   - Mover estilos inline del modal a SCSS (`styles/components/_modal.scss`).

2. **Datos de cuotas tipados correctamente**
   - `installments` ahora es `number[]` (por ejemplo `[3, 6]`) en vez de `3 & 6`.
   - Product card y modal leen cuotas desde datos, evitando hardcode.

3. **Buenas prácticas sin cambiar visual principal**
   - Se mantiene Tailwind para layout principal.
   - SCSS complementa transiciones, focus y detalles visuales.

## Checklist para presentar al profe

- [ ] Mostrar `styles/main.scss` + parciales y explicar variables, mixins, nesting, `@extend`, `@each`.
- [ ] Mostrar que el sitio funciona en mobile/tablet/desktop.
- [ ] Mostrar que imágenes cargan con rutas relativas correctas.
- [ ] Mostrar `.gitignore` y commits descriptivos.
- [ ] Activar GitHub Pages y compartir URL pública.

## Recomendación de workflow seguro

```bash
git checkout -b preentrega3-final
git add .
git commit -m "feat: ajustes preentrega3 sass y responsive"
git push -u origin preentrega3-final
```

Abrí Pull Request a `main` recién cuando verifiques que se ve igual que antes.
