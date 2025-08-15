# CIIU VMA App (lite, sin cargar JSON)

## ¿Qué incluye?
- React + Vite (TypeScript)
- Tailwind por CDN (sin configuración)
- `src/App.tsx` con el formato solicitado (Anexo 1/2, VMA visibles, N° muestra 1/2, etc.)
- **Sin** botón de cargar JSON
- **`src/CIIU_MAP.ts`**: punto único donde pegas tus CIIU

## ¿Cómo pegar los CIIU?
1. Abre el archivo **`ciiu_map_paste.txt`** y copia **todo** el objeto.
2. Abre `src/CIIU_MAP.ts` y pega el contenido dentro del objeto:
   ```ts
   const CIIU_MAP: Record<string, { actividad: string; parametros: string[] }[]> = {
     ...pega_aquí...
   };
   export default CIIU_MAP;
   ```
   > Si copiaste líneas que empiezan con `export const CIIU_MAP = { ... }`, elimina el `export const` y deja **solo** las llaves.

3. Ejecuta el proyecto:
   ```bash
   npm install
   npm run dev
   ```

## Notas
- Puedes pegar todos los códigos de una vez (mapeo extraído de tu Excel).
- El buscador funciona por **código** o **actividad**.
- La tabla superior muestra hasta **4 filas** a modo de resumen; **todas** las CIIU seleccionadas se consideran en las tablas de parámetros.
