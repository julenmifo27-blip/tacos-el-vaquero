import { cn } from "@/lib/utils"

/** Línea fina de encabezado de página, como en las guías impresas. */
export function Folio({ izquierda, derecha, className }: { izquierda: string; derecha: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-6 border-b border-current/25 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em]",
        className,
      )}
    >
      <span>{izquierda}</span>
      <span className="text-right">{derecha}</span>
    </div>
  )
}
