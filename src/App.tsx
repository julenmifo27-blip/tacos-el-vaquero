import { motion, useReducedMotion } from "framer-motion"
import { Moon, Sparkle, Sun } from "@phosphor-icons/react"
import { CircleTitle } from "@/components/CircleTitle"
import { Folio } from "@/components/Folio"
import { FotoForma } from "@/components/FotoForma"
import { Reel } from "@/components/Reel"
import { Spread, TextoGuia } from "@/components/Spread"
import { StencilStack } from "@/components/StencilStack"
import { carruselDia, carruselManana, carruselNoche, destacadas, texto } from "@/data/cronica"
import { enVista, fadeUp, spring, stagger, useVariants } from "@/lib/motion"

/** Tres iconos en fila, como los soles de calificación de la guía (aquí solo decoran). */
function Trio({ icono: Icono, className }: { icono: typeof Sun; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <div className={className} aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block"
          whileHover={reduce ? undefined : { rotate: 30, scale: 1.15 }}
          transition={spring}
        >
          <Icono weight="fill" className="size-10 md:size-12" />
        </motion.span>
      ))}
    </div>
  )
}

/** Alto de las bandas de carrusel entre pliegos */
const banda = "h-[46svh] min-h-[300px] bg-chile md:h-[min(64svh,600px)] md:min-h-[320px]"

export default function App() {
  const up = useVariants(fadeUp)
  const group = useVariants(stagger)

  return (
    <main className="overflow-x-clip">
      {/* ── Portada: título en círculo y el carrusel de la mañana ── */}
      <header className="relative min-h-[100dvh] overflow-hidden bg-chile text-carbon">
        <Reel
          fotos={carruselManana}
          descripcion="Fotos de la mañana, de Analu."
          inmediato
          className="absolute inset-0"
          axis={78}
          tileHeight={25}
          speed={5}
          curve={70}
          fade={10}
        />
        <motion.div
          className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-5 sm:px-8"
          variants={group}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={up} className="w-full">
            <Folio izquierda="La mañana, la tarde y la noche" derecha="Glorieta de Santa Fe" />
          </motion.div>
          <CircleTitle className="mt-6 w-[min(84vw,46dvh)] md:mt-8" />
          <motion.p
            variants={up}
            className="mt-5 max-w-[32ch] text-center text-sm font-bold uppercase tracking-[0.06em] md:text-base"
          >
            {texto.bajada}
          </motion.p>
        </motion.div>
      </header>

      {/* ── Gancho ── */}
      <section className="bg-chile px-4 py-24 text-carbon sm:px-8 md:py-32">
        <motion.div className="mx-auto flex max-w-5xl flex-col items-center gap-14" variants={group} {...enVista}>
          <TextoGuia variants={up} className="max-w-[44ch] text-base md:text-lg">
            {texto.gancho}
          </TextoGuia>
          <StencilStack
            as="p"
            etiqueta="No. Nomás hay que subir."
            lineas={[
              { texto: "No.", alinear: "center" },
              { texto: "Nomás hay", alinear: "center" },
              { texto: "que subir.", alinear: "center", className: "text-maiz [text-shadow:4px_4px_0_var(--color-carbon)]" },
            ]}
            className="text-[clamp(3.25rem,11vw,9.5rem)]"
          />
        </motion.div>
      </section>

      {/* ── La mañana ── */}
      <Spread
        tono="maiz"
        folio={["La mañana", "Fotos de Analu"]}
        foto={<FotoForma foto={destacadas.manana} forma="ovalo" ancho={2061} alto={1467} posicion="42% 50%" />}
      >
        <motion.div className="flex flex-col items-center" variants={group} {...enVista}>
          <motion.div variants={up} className="relative px-8">
            <Sparkle weight="fill" className="absolute -left-1 top-2 size-9 text-chile md:size-11" aria-hidden />
            <h2 className="-rotate-6 pb-3 font-script text-[clamp(4.25rem,10vw,8.5rem)] leading-[1.15] [text-shadow:5px_5px_0_var(--color-chile)]">
              La mañana
            </h2>
            <Sparkle weight="fill" className="absolute -right-1 bottom-4 size-6 text-chile md:size-7" aria-hidden />
          </motion.div>
          <motion.div variants={up}>
            <Trio icono={Sun} className="mt-4 flex gap-4 text-chile" />
          </motion.div>
          <TextoGuia variants={up} className="mt-8">
            {texto.manana}
          </TextoGuia>
        </motion.div>
      </Spread>

      {/* ── La tarde de los godínez ── */}
      <Spread
        tono="chile"
        fotoLado="derecha"
        folio={["La tarde de los godínez", "Fotos de Julen"]}
        foto={
          <FotoForma
            foto={destacadas.dia}
            forma="pildora"
            ancho={1080}
            alto={1616}
            posicion="50% 35%"
            className="mx-auto max-w-sm"
          />
        }
      >
        <StencilStack
          etiqueta="La tarde de los godínez"
          lineas={[
            { texto: "La tar" },
            { texto: "de de", alinear: "end" },
            { texto: "los go" },
            { texto: "dí", alinear: "center", className: "text-maiz [text-shadow:4px_4px_0_var(--color-carbon)]" },
            { texto: "nez", alinear: "end" },
          ]}
          className="w-full max-w-md text-[clamp(3.5rem,8vw,7rem)]"
        />
        <motion.div variants={group} {...enVista}>
          <TextoGuia variants={up} className="mt-10">
            {texto.dia}
          </TextoGuia>
        </motion.div>
      </Spread>

      <Reel
        fotos={carruselDia}
        descripcion="Fotos del medio día, de Julen."
        className={banda}
        axis={50}
        tileHeight={54}
        speed={2.6}
        curve={72}
      />

      {/* ── La noche de los borrachitos ── */}
      <Spread
        tono="carbon"
        folio={["La noche de los borrachitos", "Fotos de Tocho"]}
        foto={<FotoForma foto={destacadas.noche} forma="capsula" ancho={2400} alto={1600} posicion="62% 50%" />}
      >
        <motion.div className="flex flex-col items-center" variants={group} {...enVista}>
          <motion.h2
            variants={up}
            className="ancha text-center text-[clamp(2.4rem,4.6vw,4.25rem)] uppercase leading-[0.95] text-maiz"
            style={{ fontStretch: "112%" }}
          >
            La noche
            <br />
            de los
            <br />
            borrachitos
          </motion.h2>
          <motion.div variants={up}>
            <Trio icono={Moon} className="mt-6 flex gap-4 text-maiz" />
          </motion.div>
          <TextoGuia variants={up} className="mt-8">
            {texto.noche}
          </TextoGuia>
        </motion.div>
      </Spread>

      <Reel
        fotos={carruselNoche}
        descripcion="Fotos de la noche, de Tocho."
        className={banda}
        axis={50}
        tileHeight={54}
        speed={4}
        curve={82}
      />

      {/* ── Cierre: aquí ya no hay chiste ── */}
      <section className="bg-carbon text-hueso">
        <div className="relative">
          <img
            src={destacadas.glorieta.src}
            alt={destacadas.glorieta.alt}
            width={2400}
            height={1600}
            loading="lazy"
            decoding="async"
            className="h-[72svh] min-h-[360px] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-carbon" />
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-8 md:pb-32">
          <Folio izquierda="Aquí arriba" derecha="Glorieta de Santa Fe" className="text-hueso/70" />
          {/* Cada párrafo aparece por su cuenta: el bloque completo es más alto que la pantalla */}
          <div className="mt-12 space-y-7">
            {[...texto.cierre, texto.aquiArriba].map((p) => (
              <motion.p
                key={p.slice(0, 24)}
                variants={up}
                {...enVista}
                className="max-w-[60ch] text-lg leading-relaxed md:text-xl"
              >
                {p}
              </motion.p>
            ))}
            <motion.p
              variants={up}
              {...enVista}
              className="-rotate-3 pb-3 text-center font-script text-[clamp(4rem,12vw,8rem)] leading-[1.15] text-maiz [text-shadow:5px_5px_0_var(--color-chile)]"
            >
              aquí arriba.
            </motion.p>
          </div>

          <div className="mt-20 space-y-8 md:mt-28">
            <StencilStack
              as="p"
              etiqueta="Más de 30 años abajo."
              lineas={[
                { texto: "Más de 30", alinear: "center" },
                { texto: "años abajo.", alinear: "center" },
              ]}
              className="text-[clamp(2.6rem,8.5vw,6.5rem)] text-maiz"
            />
            <StencilStack
              as="p"
              etiqueta="Casi ocho meses arriba."
              lineas={[
                { texto: "Casi ocho", alinear: "center" },
                { texto: "meses arriba.", alinear: "center" },
              ]}
              className="text-[clamp(2.6rem,8.5vw,6.5rem)] text-chile"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-hueso/15 bg-carbon px-4 py-10 text-sm text-hueso/75 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:justify-between">
          <span className="font-semibold uppercase tracking-[0.12em] text-hueso">Tacos El Vaquero</span>
          <span>{texto.creditos}</span>
        </div>
      </footer>
    </main>
  )
}
