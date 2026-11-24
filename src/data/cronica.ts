/**
 * Texto de la crónica (escrito por el equipo; solo se repartió en secciones)
 * y fotos de cada momento del día. Ningún dato aquí es inventado.
 */

export type Foto = { src: string; alt: string }

const foto = (grupo: "manana" | "dia" | "noche", slug: string, alt: string): Foto => ({
  src: `${import.meta.env.BASE_URL}fotos/${grupo}/${slug}.jpg`,
  alt,
})

/* ── Fotos ─────────────────────────────────────────────────────── */

export const destacadas = {
  manana: foto(
    "manana",
    "manana-salsas",
    "Cuatro salseras de acero con salsa roja, salsa verde, salsa de chile y limones partidos sobre un mantel rojo",
  ),
  dia: foto("dia", "dia-taquero-perfil", "Taquero joven de mandil negro picando carne en la plancha"),
  noche: foto(
    "noche",
    "noche-entrega",
    "Una joven entrega un plato de tacos a un motociclista bajo los focos del puesto",
  ),
  glorieta: foto(
    "noche",
    "noche-glorieta",
    "La glorieta de Santa Fe de noche, llena de coches, vista desde arriba",
  ),
}

/** Fotos de Analu */
export const carruselManana: Foto[] = [
  foto("manana", "manana-vista-general", "Comedor techado con mesas rojas, comensales y la lona del Vaquero al fondo"),
  foto("manana", "manana-chiles-en-vinagre", "Tazones de acero con chiles en vinagre y zanahoria"),
  foto("manana", "manana-lona-menu", "Clientas comiendo bajo la lona roja del menú de Tacos El Vaquero"),
  foto("manana", "manana-sillas-rojas", "Sillas rojas de plástico y mesas con manteles a rayas, todavía vacías"),
  foto("manana", "manana-obreros-comiendo", "Dos trabajadores de uniforme azul comen de espaldas entre mesas rojas"),
  foto("manana", "manana-lonas-escalera", "Lonas de \"Estamos aquí arriba\" y \"Tacos al carbón\" colgadas junto a la escalera"),
  foto("manana", "manana-mesas-amarillas", "Mesas con manteles rojos y amarillos a rayas y sillas rojas"),
  foto("manana", "manana-mesa-de-salsas", "Mesa larga con tazones de salsas y servilletas, con comensales al fondo"),
]

/** Fotos de Julen */
export const carruselDia: Foto[] = [
  foto("dia", "dia-escalera", "Escalera de concreto que sube al segundo piso, con las lonas de los puestos"),
  foto("dia", "dia-llamarada", "Llamarada de la parrilla frente al parrillero"),
  foto("dia", "dia-taquero-canasta", "Taquero joven escurriendo carne en una coladera junto a la plancha"),
  foto("dia", "dia-chorizos-parrilla", "Chorizos y carne asándose en la parrilla de carbón"),
  foto("dia", "dia-parrillero-coca", "Parrillero de playera naranja sosteniendo un trozo de carne"),
  foto("dia", "dia-plancha-picando", "Mano picando carne en la plancha de acero"),
  foto("dia", "dia-parrillero-fuego", "Parrillero de playera naranja trabajando sobre la parrilla en llamas"),
  foto("dia", "dia-taco-en-mano", "Mano sosteniendo un taco recién servido junto a la tabla de picar"),
  foto("dia", "dia-parrillero-pinzas", "Parrillero volteando carne con pinzas entre el humo"),
  foto("dia", "dia-carne-parrilla", "Carne asándose entre humo sobre la parrilla"),
  foto("dia", "dia-parrillero-plato", "Parrillero de playera naranja con un plato de carne recién asada"),
  foto("dia", "dia-cortando-carne", "Parrillero de espaldas cortando carne con un cuchillo largo"),
]

/** Fotos de Tocho */
export const carruselNoche: Foto[] = [
  foto("noche", "noche-mesas-vacias", "Mesas y bancos de plástico rojos vacíos en la noche"),
  foto("noche", "noche-cuchillos-lona", "Dos cuchillos sobre la tabla de picar con la lona del Vaquero al fondo"),
  foto("noche", "noche-aguas", "Papel escrito a mano con los sabores de agua: jamaica, pepino con limón, piña con apio y tamarindo"),
  foto("noche", "noche-plancha", "Mano en movimiento sobre la plancha con chorizo y tortillas"),
  foto("noche", "noche-cliente", "Cliente de playera azul cenando de espaldas bajo el techo de lámina"),
  foto("noche", "noche-tacos", "Dos tacos con cebolla y cilantro sobre un plato en una mesa roja"),
  foto("noche", "noche-silla", "Silla roja de plástico junto a una mesa vacía en la oscuridad"),
]

/* ── Texto ─────────────────────────────────────────────────────── */

export const texto = {
  bajada: "Glorieta de Santa Fe. Abierto 24 horas, todos los días.",
  gancho:
    "Llegas a la glorieta de Santa Fe con hambre y buscas Tacos el Vaquero donde siempre estuvo, en la banqueta. Nada. Ni humo, ni carbón, ni taquero. Por un segundo piensas lo peor: que ya cerró, que otro más.",
  manana:
    "El Vaquero le da de comer a Santa Fe desde 1994. Empezó en un centro comercial, se pasó a Patio Santa Fe y acabó en la glorieta, abierto 24 horas, todos los días. El nombre no es pose: antes de los tacos, la familia pastoreaba vacas. Hoy lo sacan adelante Camel, el dueño, y su sobrina Jimena, que está ahí desde los 7 años. Jimena cobra, levanta mesas, compra la mercancía y se sabe las ventas de memoria. Hace de todo, literal.",
  dia: "Y es que El Vaquero son dos taquerías en una. De día llegan godínez, estudiantes y obreros con la hora de la comida contada.",
  noche:
    "De noche llegan los que vienen de fiesta y no quieren que se acabe. A esos, Jimena les mide las chelas, “por tu seguridad y por la mía”.",
  cierre: [
    "El 27 de marzo, a menos de tres meses del Mundial, la alcaldía los mandó de la calle a un segundo piso. Y lo que no se ve, no se vende. Lo que antes salía en veinte minutos ahora tarda todo el día. La carne que compraban por kilo ahora la compran por gramos. De 10 o 12 empleados quedaron 4.",
    "Aquí ya no hay chiste. De esta taquería vive la familia entera. Con ella Jimena pagó su prepa y su universidad, y hoy están aguantando con los ahorros.",
    "Ellos no pidieron moverse, y tampoco tienen mucho margen para negociar. Lo único que depende de ellos es seguir prendiendo el carbón, de día y de noche, esperando que alguien suba la escalera.",
  ],
  aquiArriba: "Cuando un cliente les pregunta dónde quedaron, contestan lo mismo:",
  creditos: "Fotos: Analu, Julen y Tocho",
}
