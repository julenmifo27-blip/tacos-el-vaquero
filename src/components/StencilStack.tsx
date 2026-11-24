import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { enVista, silaba, stagger, useVariants } from "@/lib/motion"

type Linea = { texto: string; alinear?: "start" | "center" | "end"; className?: string }

const alineacion = { start: "self-start", center: "self-center", end: "self-end" }

/**
 * Título en esténcil partido en sílabas y escalonado.
 * El texto completo va en aria-label; las líneas son solo visuales.
 */
export function StencilStack({
  as: Tag = "h2",
  etiqueta,
  lineas,
  className,
}: {
  as?: "h1" | "h2" | "p"
  etiqueta: string
  lineas: Linea[]
  className?: string
}) {
  const grupo = useVariants(stagger)
  const pieza = useVariants(silaba)
  const MotionTag = motion[Tag]

  return (
    <MotionTag
      aria-label={etiqueta}
      // Interlineado de 1: con menos, las tildes (Á, Í, Ñ) chocan con la línea de arriba
      className={cn("flex flex-col font-stencil uppercase leading-none", className)}
      variants={grupo}
      {...enVista}
    >
      {lineas.map((l, i) => (
        <motion.span
          key={i}
          aria-hidden
          variants={pieza}
          className={cn("block whitespace-nowrap", alineacion[l.alinear ?? "start"], l.className)}
        >
          {l.texto}
        </motion.span>
      ))}
    </MotionTag>
  )
}
