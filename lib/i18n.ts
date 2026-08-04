export const dictionary = {
  es: {
    discover: "Descubrir",
    launch: "Lanzamiento",
    newsletter: "Quiero formar parte"
  },
  en: {
    discover: "Discover",
    launch: "Launch",
    newsletter: "Join the first circle"
  }
} as const;

export type Locale = keyof typeof dictionary;
