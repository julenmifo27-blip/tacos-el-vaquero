import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ease, spring } from "@/lib/motion"
import type { Foto } from "@/data/cronica"

const formas = {
  /** Óvalo vertical */
  ovalo: "aspect-[4/5] rounded-[50%]",
  /** Píldora vertical (para la foto vertical) */
  pildora: "aspect-[2/3] rounded-full",
  /** Píldora horizontal */
  capsula: "aspect-[5/4] rounded-[999px]",
}

/** Foto destacada recortada en una forma, como en las páginas de la guía. */
export function FotoForma({
  foto,
  forma,
  ancho,
  alto,
  posicion = "50% 50%",
  className,
}: {
  foto: Foto
  forma: keyof typeof formas
  ancho: number
  alto: number
  posicion?: string
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={cn("relative w-full overflow-hidden bg-chile-oscuro", formas[forma], className)}
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease }}
    >
      <motion.img
        src={foto.src}
        alt={foto.alt}
        width={ancho}
        height={alto}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: posicion }}
        whileHover={reduce ? undefined : { scale: 1.04 }}
        transition={spring}
      />
    </motion.div>
  )
}
