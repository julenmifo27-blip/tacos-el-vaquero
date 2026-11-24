import { motion, useReducedMotion } from "framer-motion"
import { Sparkle } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { ease, spring } from "@/lib/motion"

/**
 * Título en círculo: "TACOS" por arriba y "EL VAQUERO" por abajo, con el
 * sombrero del Vaquero al centro. Entra girando una vez.
 */
export function CircleTitle({ className }: { className?: string }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={cn("relative aspect-square", className)}
      initial={reduce ? false : { opacity: 0, rotate: -40, scale: 0.9 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 1.3, ease }}
    >
      <h1 className="sr-only">Tacos El Vaquero</h1>
      <svg viewBox="0 0 520 520" className="h-full w-full overflow-visible" aria-hidden>
        <defs>
          {/* Arriba, de izquierda a derecha por encima del centro */}
          <path id="arco-arriba" d="M 75,260 A 185,185 0 0 1 445,260" />
          {/* Abajo, de izquierda a derecha por debajo: las letras quedan derechas */}
          <path id="arco-abajo" d="M 22,260 A 238,238 0 0 0 498,260" />
        </defs>
        <circle cx="260" cy="260" r="248" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="260" cy="260" r="146" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 9" />
        <text className="ancha fill-current" style={{ fontSize: 76, letterSpacing: "0.04em" }}>
          <textPath href="#arco-arriba" startOffset="50%" textAnchor="middle">
            TACOS
          </textPath>
        </text>
        <text className="ancha fill-current" style={{ fontSize: 50, letterSpacing: "0.02em" }}>
          <textPath href="#arco-abajo" startOffset="50%" textAnchor="middle">
            “EL VAQUERO”
          </textPath>
        </text>
      </svg>

      <Sparkle weight="fill" className="absolute left-[3.5%] top-1/2 size-[7%] -translate-y-1/2" aria-hidden />
      <Sparkle weight="fill" className="absolute right-[3.5%] top-1/2 size-[7%] -translate-y-1/2" aria-hidden />
      {/* El sombrero de la lona del Vaquero, digitalizado por Julen. Con el hover, se lo inclina. */}
      <div className="absolute left-1/2 top-1/2 w-[52%] -translate-x-1/2 -translate-y-1/2">
        <motion.img
          src={`${import.meta.env.BASE_URL}sombrero.png`}
          alt=""
          width={1140}
          height={462}
          draggable={false}
          className="h-auto w-full drop-shadow-[4px_4px_0_var(--color-carbon)]"
          whileHover={reduce ? undefined : { rotate: -8, y: -6, scale: 1.05 }}
          transition={spring}
        />
      </div>
    </motion.div>
  )
}
