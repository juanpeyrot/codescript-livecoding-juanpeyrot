
Este proyecto es una versión limpia de la app que inicialmente fue construida sobre una base ya existente, con el objetivo de avanzar más rápido durante la entrevista técnica. Después de esa etapa inicial, decidí reestructurarla completamente para dejar algo más mantenible y profesional.

## Cambios principales

Pasé todo el código a una solución más modular y ordenada. Además, aproveché la nueva API de signals de Angular para hacer el manejo de estado mucho más simple y reactivo.

Agregué soporte para dark mode usando Tailwind moderno, que permite que toda la app se adapte automáticamente al tema claro u oscuro, y también incluí un toggler para cambiar entre ellos.

También mejoré la UI: rediseñé estilos, ajusté los componentes para que respondan bien en pantallas pequeñas (ya es totalmente responsive), y reorganicé la estructura visual para que todo sea más claro y usable.

Implementé paginación simple con botones prev/next que se desactivan según corresponda. Además agregué la posibilidad de filtrar los fabricantes por tipo, guardando el valor en `localStorage` para que se mantenga entre sesiones.

El servicio fue reescrito desde cero, esta vez usando signals. Ahora la lógica es mucho más directa, fácil de seguir y testear.

## Como correr la app

1. Cloná este repo:

```bash
git clone https://github.com/juanpeyrot/codescript-livecoding-juanpeyrot

cd codescript-livecoding-juanpeyrot
```

2. Instalá las dependencias:

```bash
npm install
```

3. Arrancá la app en modo desarrollo:

```bash
npm run start
```

Abrí tu navegador en http://localhost:4200 para verla.