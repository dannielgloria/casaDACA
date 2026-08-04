"use client";

import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function LabelZoom() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="group relative mx-auto block w-full max-w-sm overflow-hidden border border-sand/14 bg-charcoal/35 p-4 transition duration-700 hover:border-bronze/70 hover:shadow-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
        onClick={() => setOpen(true)}
        aria-label="Ampliar etiqueta Casa DACA"
      >
        <Image
          src={siteConfig.assets.label}
          alt="Etiqueta Casa DACA"
          width={941}
          height={1672}
          className="h-auto w-full"
          sizes="(max-width: 768px) 86vw, 380px"
        />
        <span className="absolute bottom-6 right-6 inline-flex h-11 w-11 items-center justify-center border border-bronze/50 bg-ink/70 text-bronze backdrop-blur">
          <ZoomIn className="h-4 w-4" />
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/92 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Detalle de etiqueta"
        >
          <Button
            variant="ghost"
            className="absolute right-5 top-5 h-12 w-12 px-0"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </Button>
          <div className="max-h-[90vh] max-w-3xl overflow-auto">
            <Image
              src={siteConfig.assets.label}
              alt="Detalle ampliado de la etiqueta Casa DACA"
              width={941}
              height={1672}
              className="h-auto w-full"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
