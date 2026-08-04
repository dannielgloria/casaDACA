import Image from "next/image";
import { ArrowDown, Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ParallaxImage } from "@/components/ui/parallax";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Countdown } from "@/features/casa-daca/countdown";
import { LabelZoom } from "@/features/casa-daca/label-zoom";
import { NewsletterForm } from "@/features/casa-daca/newsletter-form";
import { jsonLd, siteConfig } from "@/lib/site";

const principles = [
  "100% Agave Espadin",
  "Oaxaca",
  "Hecho en pequenos lotes",
  "Tradicion",
  "Origen",
  "Equilibrio"
];

const gallery = [
  {
    src: siteConfig.assets.hero,
    alt: "Botella Casa DACA con agave y luz calida",
    className: "md:col-span-7 md:row-span-2"
  },
  {
    src: siteConfig.assets.label,
    alt: "Etiqueta de mezcal Casa DACA",
    className: "md:col-span-5"
  },
  {
    src: siteConfig.assets.logoHorizontal,
    alt: "Logotipo horizontal Casa DACA",
    className: "md:col-span-5"
  },
  {
    src: siteConfig.assets.isotipo,
    alt: "Isotipo Casa DACA",
    className: "md:col-span-4"
  },
  {
    src: siteConfig.assets.logo,
    alt: "Logotipo Casa DACA",
    className: "md:col-span-8"
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CustomCursor />
      <main className="overflow-hidden bg-ink text-sand">
        <Hero />
        <Essence />
        <Bottle />
        <LabelSection />
        <Launch />
        <SmallBatches />
        <Story />
        <Gallery />
        <Newsletter />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Casa DACA">
      <Image
        src={siteConfig.assets.hero}
        alt="Casa DACA Mezcal artesanal en Oaxaca"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover opacity-62 animate-breathe"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(17,17,17,0.48)_46%,rgba(17,17,17,0.96))]" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <Image
            src={siteConfig.assets.logoHorizontal}
            alt="Casa DACA Mezcal"
            width={900}
            height={450}
            className="mx-auto h-auto w-[min(78vw,620px)]"
            priority
          />
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="sr-only">Casa DACA Mezcal</h1>
          <p className="mt-10 font-serif text-5xl leading-none tracking-[0.14em] text-sand md:text-7xl">
            CASA DACA
          </p>
          <p className="mt-4 text-xs uppercase tracking-ritual text-bronze md:text-sm">
            Mezcal
          </p>
          <p className="mt-8 text-lg text-sand/72 md:text-xl">
            Algo autentico esta por nacer.
          </p>
          <Button asChild className="mt-10">
            <a href="#esencia">
              Descubrir
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 h-16 w-px -translate-x-1/2 overflow-hidden bg-sand/16">
        <span className="block h-8 w-px bg-bronze animate-scroll" />
      </div>
    </section>
  );
}

function Essence() {
  return (
    <section id="esencia" className="px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Nuestra esencia"
            title="Todo gran mezcal comienza mucho antes de llegar a una botella."
            copy="Casa DACA nace desde una mirada paciente: la tierra, el agave, el fuego y el tiempo como un mismo lenguaje. Tradicion, origen y equilibrio no son palabras decorativas; son el ritmo con el que se decide cada gesto."
          />
        </Reveal>
        <Reveal delay={0.12}>
          <ParallaxImage
            src={siteConfig.assets.hero}
            alt="Luz, agave y botella Casa DACA"
            width={1254}
            height={1254}
            wrapperClassName="aspect-[4/5] border border-sand/10"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Bottle() {
  return (
    <section className="relative min-h-[120vh] px-6 py-32">
      <div className="sticky top-0 mx-auto grid min-h-screen max-w-7xl items-center gap-14 overflow-hidden lg:grid-cols-2">
        <Reveal>
          <div className="max-w-xl">
            <p className="mb-6 text-xs uppercase tracking-ritual text-bronze/80">
              La botella
            </p>
            <h2 className="font-serif text-6xl leading-none md:text-8xl">
              Revelada por el tiempo.
            </h2>
            <p className="mt-8 text-lg leading-8 text-sand/66">
              No se muestra de golpe. Aparece como aparece el mezcal en la memoria:
              primero una silueta, despues textura, finalmente presencia.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="label-mask ml-auto max-h-[78vh] overflow-hidden border border-sand/10 bg-charcoal/25">
            <Image
              src={siteConfig.assets.hero}
              alt="Botella Casa DACA parcialmente revelada"
              width={1254}
              height={1254}
              className="h-full w-full scale-125 object-cover object-[56%_45%]"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LabelSection() {
  return (
    <section className="bg-charcoal px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <LabelZoom />
        </Reveal>
        <Reveal delay={0.12}>
          <SectionHeading
            eyebrow="Etiqueta"
            title="Bronce, papel y silencio."
            copy="La etiqueta conserva el contraste esencial de Casa DACA: negro mate, trazo bronce, informacion precisa y textura suficiente para recordar que lo artesanal tambien puede ser exacto."
          />
        </Reveal>
      </div>
    </section>
  );
}

function Launch() {
  return (
    <section className="px-6 py-28 md:py-44" aria-labelledby="launch-title">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Cuenta regresiva"
            title="El origen se acerca."
            copy="Una fecha, un lote, una primera memoria compartida."
          />
        </Reveal>
        <Reveal delay={0.16} className="mt-16">
          <Countdown targetDate={siteConfig.launchDate} />
        </Reveal>
      </div>
    </section>
  );
}

function SmallBatches() {
  return (
    <section className="bg-agave px-6 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Pequenos lotes"
            title="Nada sobra. Nada grita."
            copy="Cada elemento sostiene una misma intencion: cuidar el origen y permitir que el mezcal hable con medida."
          />
        </Reveal>
        <div className="mt-16 grid gap-px bg-sand/10 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="min-h-44 bg-agave px-7 py-8 transition duration-500 hover:bg-ink/22">
                <span className="font-serif text-5xl text-bronze/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-sm uppercase tracking-ritual text-sand">
                  {item}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="px-6 py-28 md:py-44">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Image
            src={siteConfig.assets.isotipo}
            alt=""
            width={1254}
            height={1254}
            className="h-auto w-44 opacity-70"
          />
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-xs uppercase tracking-ritual text-bronze/80">
            Nuestra historia
          </p>
          <div className="mt-8 space-y-8 font-serif text-4xl leading-tight text-sand/88 md:text-6xl">
            <p>
              Casa DACA nace de una forma sencilla de mirar: respetar lo que ya
              estaba ahi.
            </p>
            <p>
              La tierra de Oaxaca, la paciencia del agave y el pulso de las
              manos que transforman fuego en memoria.
            </p>
          </div>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-sand/62">
            No buscamos apresurar una tradicion. Buscamos acompanarla. Cada lote
            existe como un pequeno registro del lugar, del clima, de la espera y
            de la decision de hacer menos, pero hacerlo con mayor verdad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-[#0c0c0c] px-6 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Galeria"
            title="Fragmentos de una presencia."
          />
        </Reveal>
        <div className="mt-16 grid auto-rows-[260px] gap-4 md:grid-cols-12 md:auto-rows-[320px]">
          {gallery.map((image, index) => (
            <Reveal key={`${image.src}-${index}`} className={image.className}>
              <div className="h-full overflow-hidden border border-sand/10 bg-charcoal">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.src === siteConfig.assets.label ? 941 : 1254}
                  height={image.src === siteConfig.assets.label ? 1672 : 1254}
                  className="h-full w-full object-cover opacity-88 transition duration-700 hover:scale-[1.03] hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="px-6 py-28 text-center md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-ritual text-bronze/80">
          Lanzamiento
        </p>
        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-none text-sand md:text-8xl">
          Se de los primeros en conocer el lanzamiento.
        </h2>
        <NewsletterForm />
      </Reveal>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="border-y border-sand/10 bg-charcoal/70 px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-ritual text-bronze/80">
            Instagram
          </p>
          <h2 className="mt-4 font-serif text-4xl text-sand md:text-6xl">
            Historias, luz y primeros gestos.
          </h2>
        </div>
        <Button asChild variant="ghost">
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            <Instagram className="h-4 w-4" />
            Siguenos
          </a>
        </Button>
        <div className="md:col-span-2">
          <Image
            src={siteConfig.assets.hero}
            alt="Historia de Instagram Casa DACA"
            width={1254}
            height={1254}
            className="aspect-[16/7] w-full border border-sand/10 object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Image
            src={siteConfig.assets.logoHorizontal}
            alt="Casa DACA"
            width={360}
            height={180}
            className="h-auto w-52"
          />
          <p className="mt-8 text-sm uppercase tracking-quiet text-sand/58">
            Casa DACA · Oaxaca
          </p>
        </div>
        <nav className="flex flex-wrap gap-5 text-xs uppercase tracking-quiet text-sand/58">
          <a className="transition hover:text-bronze" href={siteConfig.instagramUrl}>
            Instagram
          </a>
          <a className="inline-flex gap-2 transition hover:text-bronze" href="mailto:hola@casadaca.com">
            <Mail className="h-3.5 w-3.5" />
            Correo
          </a>
          <a className="transition hover:text-bronze" href="/aviso-de-privacidad">
            Aviso de privacidad
          </a>
          <a className="transition hover:text-bronze" href="/terminos">
            Terminos
          </a>
          <span className="inline-flex gap-2 text-bronze/70">
            <MapPin className="h-3.5 w-3.5" />
            Oaxaca
          </span>
        </nav>
      </div>
    </footer>
  );
}
