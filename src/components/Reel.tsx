import { useRef, useSyncExternalStore } from "react"
import { useInView } from "framer-motion"

const consulta = "(max-width: 767px)"

function useAngosta() {
  return useSyncExternalStore(
    (avisar) => {
      const mq = window.matchMedia(consulta)
      mq.addEventListener("change", avisar)
      return () => mq.removeEventListener("change", avisar)
    },
    () => window.matchMedia(consulta).matches,
    () => false,
  )
}
import { TiltedGridHero, type TiltedGridHeroProps } from "@/components/ui/tilted-grid-hero"
import { cn } from "@/lib/utils"
import type { Foto } from "@/data/cronica"

/**
 * Carrusel curvo de 21st.dev (TiltedGridHero) sobre el rojo.
 * Se monta cuando la sección se acerca a la pantalla, porque el componente
 * precarga todas sus fotos al montarse.
 */
export function Reel({
  fotos,
  descripcion,
  className,
  children,
  inmediato = false,
  ...props
}: Omit<TiltedGridHeroProps, "images"> & {
  fotos: Foto[]
  /** Resumen para lectores de pantalla: la banda del componente es decorativa. */
  descripcion: string
  inmediato?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const cerca = useInView(ref, { once: true, margin: "800px 0px" })
  // En pantallas angostas una curva cerrada infla demasiado las orillas
  const angosta = useAngosta()
  const curva = angosta ? Math.min(props.curve ?? 80, 55) : props.curve

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      <p className="sr-only">
        {descripcion} {fotos.map((f) => f.alt).join(". ")}.
      </p>
      {/* El componente ya aparece con un fundido propio al medir la pantalla */}
      {(inmediato || cerca) && (
        <TiltedGridHero
          images={fotos}
          aspectRatio={3 / 2}
          className="absolute inset-0 h-full w-full"
          {...props}
          curve={curva}
        >
          {children}
        </TiltedGridHero>
      )}
    </div>
  )
}
