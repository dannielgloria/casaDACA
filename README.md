# Casa DACA

Presencia digital editorial para Casa DACA Mezcal, construida con Next.js 15, React 19, TypeScript, TailwindCSS, Framer Motion y una capa ligera de GSAP para el cursor en escritorio.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Variables de entorno

Copia `.env.example` a `.env.local` y ajusta:

```bash
NEXT_PUBLIC_SITE_URL=https://casadaca.com
NEXT_PUBLIC_LAUNCH_DATE=2026-12-12T20:00:00-06:00
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/casadaca
NEWSLETTER_PROVIDER=console
```

`NEWSLETTER_PROVIDER` acepta `console`, `mailchimp`, `brevo`, `resend` o `supabase`.

## Produccion en Vercel

1. Importa el repositorio en Vercel.
2. Configura las variables de entorno.
3. Usa el preset de Next.js.
4. Deploy.

## Produccion con Docker

```bash
docker compose up --build
```

La aplicacion queda disponible en `http://localhost:3000`.

## Arquitectura

- `app/`: rutas, metadata, API y estilos globales.
- `app/components/`: UI reutilizable.
- `app/features/casa-daca/`: componentes de experiencia de marca.
- `app/hooks/`: hooks de animacion y tiempo.
- `app/lib/`: configuracion, utilidades e i18n.
- `app/services/`: integraciones server-side.
- `public/assets/`: identidad oficial de Casa DACA.
