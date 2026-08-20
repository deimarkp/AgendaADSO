import { useState } from "react";

/**
 * Componente de saludo en tiempo real.
 *
 * A diferencia del "Saludo con formulario" (que necesita un botón
 * "Saludar" y un onSubmit para actualizar el mensaje), aquí NO hay
 * botón ni submit: el saludo se recalcula en cada pulsación de tecla
 * porque se renderiza directamente a partir del mismo estado que
 * controla el input (onChange -> setNombre -> re-render inmediato).
 */
export default function Saludo() {
  const [nombre, setNombre] = useState("");

  const nombreLimpio = nombre.trim();

  return (
    <section className="relative bg-parchment border border-dashed border-kraft/50 rounded-2xl p-6 animate-postIn">
      <span className="absolute -top-3 left-5 bg-airmail text-cream font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-lg">
        Postal
      </span>

      <h2 className="font-display italic font-semibold text-navy text-lg mb-1">
        Saludo en tiempo real
      </h2>
      <p className="font-mono text-xs text-ink/60 mb-4">
        Escribe tu nombre y el saludo se actualiza al instante, sin botón.
      </p>

      <div className="space-y-1 max-w-sm">
        <label
          htmlFor="saludo-nombre"
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy/70"
        >
          Tu nombre
        </label>
        <input
          id="saludo-nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre..."
          autoComplete="off"
          className="w-full bg-white/70 border-0 border-b-2 border-navy/20 focus:border-airmail px-0.5 py-1.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/30"
        />
      </div>

      <p className="mt-4 font-display italic font-semibold text-navy text-base min-h-[1.5rem]">
        {nombreLimpio ? `¡Hola, ${nombreLimpio}! 👋` : "Empieza a escribir para ver el saludo..."}
      </p>
    </section>
  );
}
