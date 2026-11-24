import { useReducedMotion, type Variants } from "framer-motion"

export const ease = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

/** Para las sílabas del esténcil: suben desde más abajo, una tras otra. */
export const silaba: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export const spring = { type: "spring", stiffness: 320, damping: 24 } as const

/** Variants sin desplazamiento para quien pide menos movimiento. */
export function useVariants(v: Variants): Variants {
  const reduce = useReducedMotion()
  return reduce ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : v
}

/** Aparece una sola vez, cuando entra a la pantalla. */
export const enVista = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.25 },
} as const
