Proyecto: CTA - Proyecto Final Desarrollo Web

Descripción
-----------
Pequeño sitio single-page de presentación (proyecto final) que muestra habilidades en HTML, CSS y JavaScript. Tiene un diseño moderno con fondo hero, efecto glassmorphism y un modal de contacto con opciones para Gmail/Outlook/cliente de correo.

Puntos clave para explicar al profesor
-------------------------------------
- Estructura semántica: uso de `header`, `section`, `footer` y contenedores con IDs para navegación.
- Interactividad: botones con `scrollIntoView`, modal de contacto, y modal para ampliar avatar.
- Diseño: variables CSS para tema (paleta similar a VS Code), glassmorphism (`backdrop-filter`), animaciones `@keyframes`.
- Accesibilidad: enlaces con `href` a secciones, `aria-label` en avatar, y cierre de modales con `Escape`.
- Simplificaciones: se optó por un solo `img` en navbar para evitar problemas de carga en entornos de examen; hay comentario en `index.html` explicando por qué.

Archivos importantes
-------------------
- `index.html` - Página principal.
- `css/style.css` - Estilos principales (variables de color al inicio).
- `js/main.js` - Lógica de interactividad (nav móvil, modales, scroll).
- `images/` - Imágenes usadas (hero, avatar, servicios).

Cómo presentar (guión breve)
---------------------------
1. Explica la estructura del HTML y por qué usaste secciones semánticas.
2. Muestra el header con la paleta (comenta elección del color y la coherencia con el avatar).
3. Abre el modal de contacto y explica cómo funciona (Gmail/Outlook/mailto).
4. Muestra el modal del avatar y la navegación responsive (menu hamburguesa).
5. Señala las decisiones técnicas: `backdrop-filter`, `picture` (comentado), y por qué elegiste `mailto` + enlaces a servicios.

Cómo ejecutar localmente
------------------------
(En PowerShell)
```powershell
cd "E:\LEO\ESTUDIAR\PROGRAMACION\!Tareas de Desarrollo Web\PROJECTO FINAL\cta"
python -m http.server 8000
```
(Nodo/alternativa si tienes Node.js)
```bash
cd "E:/LEO/ESTUDIAR/PROGRAMACION/!Tareas de Desarrollo Web/PROJECTO FINAL/cta"
npx http-server -p 8000
```
Luego abrir `http://localhost:8000` en el navegador.

Siguientes pasos recomendados
----------------------------
- Añadir `about.html` y `projects.html` como páginas separadas (si piden múltiples páginas).
- Comprimir/optimizar imágenes y minificar `style.css` para entrega final.
- Preparar 3-4 frases para explicar cada decisión de diseño.

Contacto del autor
------------------
Leonxsoldier — leonmbelmont@gmail.com
