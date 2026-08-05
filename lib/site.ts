export const siteConfig = {
  name: "Casa DACA",
  title: "Casa DACA Mezcal | Tradicion, origen y equilibrio",
  description:
    "Casa DACA es un mezcal artesanal de Oaxaca hecho en pequenos lotes: una presencia serena que honra el origen, el tiempo y la artesania.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://casadaca.com",
  launchDate:
    process.env.NEXT_PUBLIC_LAUNCH_DATE ?? "2026-12-12T20:00:00-06:00",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/casa_daca_?igsh=eG1wbW9ycjduOGg3",
  keywords: [
    "Casa DACA",
    "mezcal artesanal",
    "mezcal Oaxaca",
    "agave espadin",
    "pequenos lotes",
    "tradicion",
    "origen",
    "equilibrio",
    "mezcal premium"
  ],
  assets: {
    favicon: "/favicon.png",
    isotipo: "/assets/isotipo.png",
    logo: "/assets/logotipo.png",
    logoHorizontal: "/assets/logotipo_horizontal.png",
    hero: "/assets/historia-instagram.png",
    backgroundHome: "/assets/background_wo_mezcal.png",
    heroHorizontal: "/assets/historia-instagram-horizontal.png",
    bottleNeck: "/assets/cuello-botella.png",
    pinaMaguey: "/assets/pina-maguey.png",
    label: "/assets/etiqueta.png"
  }
} as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Casa DACA",
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.assets.logoHorizontal}`,
  sameAs: [siteConfig.instagramUrl],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Oaxaca",
    addressCountry: "MX"
  },
  brand: {
    "@type": "Brand",
    name: "Casa DACA Mezcal",
    slogan: "Tradicion, origen, equilibrio"
  }
};
