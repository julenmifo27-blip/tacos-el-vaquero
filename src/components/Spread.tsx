import type { ReactNode } from "react"
import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { Folio } from "@/components/Folio"

const tonos = {
  maiz: "bg-maiz text-carbon",
  chile: "bg-chile text-carbon",
  carbon: "bg-carbon text-hueso",
}

/**
 * Pliego de revista: una página con la foto destacada y otra con el texto.
 * En móvil, la foto va arriba y el texto abajo.
 */
export function Spread({
  tono,
  folio,
  foto,
  fotoLado = "izquierda",
  children,
  className,
}: {
  tono: keyof typeof tonos
  folio: [string, string]
  foto: ReactNode
  fotoLado?: "izquierda" | "derecha"
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn(tonos[tono], "px-4 py-10 sm:px-8 md:py-14", className)}>
      <div className="mx-auto max-w-7xl">
        <Folio izquierda={folio[0]} derecha={folio[1]} />
        <div className="mt-10 grid grid-cols-1 items-center gap-12 md:mt-14 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className={cn("mx-auto w-full max-w-md", fotoLado === "derecha" && "md:order-2")}>{foto}</div>
          <div className={cn("flex flex-col items-center", fotoLado === "derecha" && "md:order-1")}>{children}</div>
        </div>
      </div>
    </section>
  )
}

/** Texto corrido en mayúsculas, grueso y centrado, como en la guía. */
export function TextoGuia({
  children,
  className,
  variants,
}: {
  children: ReactNode
  className?: string
  variants?: Variants
}) {
  return (
    <motion.p
      variants={variants}
      className={cn(
        "max-w-[40ch] text-center text-[15px] font-bold uppercase leading-[1.45] tracking-[0.01em] md:text-base",
        className,
      )}
    >
      {children}
    </motion.p>
  )
}
