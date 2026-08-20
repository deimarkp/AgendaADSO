import { useState } from "react";

export default function ContactoCard({
  id,
  nombre,
  telefono,
  correo,
  etiqueta,
  empresa,
  mostrarEmpresa = true,
  onEliminar,
}) {
  const [saliendo, setSaliendo] = useState(false);

  const handleEliminar = () => {
    setSaliendo(true);
    // Espera a que termine la animación de "sacar la tarjeta" antes
    // de avisarle a App.jsx que la borre de verdad (DELETE /contactos/:id).
    setTimeout(() => onEliminar(id), 260);
  };

  const inicial = (nombre || "?").trim().charAt(0).toUpperCase();

  return (
    <article
      className={`group relative flex items-start gap-3 bg-white border border-navy/15 rounded-2xl pl-4 pr-3 py-4 shadow-[0_2px_10px_rgba(28,43,82,0.08)] transition-all duration-200 animate-postIn ${
        saliendo
          ? "opacity-0 translate-x-6 rotate-2 pointer-events-none"
          : "opacity-100 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(23,37,84,0.16)]"
      }`}
    >
      {/* Franja lateral estilo borde de sobre aéreo */}
      <span className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-md bg-stripes" />

      {/* Matasellos con la inicial del contacto */}
      <div className="shrink-0 w-11 h-11 rounded-full border-2 border-dashed border-kraft/60 bg-parchment flex items-center justify-center rotate-[-4deg]">
        <span className="font-display font-bold text-navy text-lg">{inicial}</span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-display font-semibold text-navy text-base truncate">{nombre}</h3>
        <p className="font-mono text-xs text-ink/70 mt-1">📞 {telefono}</p>
        <p className="font-mono text-xs text-ink/70 truncate">✉️ {correo}</p>
        {mostrarEmpresa && empresa && (
          <p className="font-mono text-xs text-ink/70 truncate">🏢 {empresa}</p>
        )}
        {etiqueta && (
          <span className="inline-block mt-2 font-mono text-[10px] uppercase tracking-wide text-cream bg-airmail rounded-full px-2.5 py-0.5">
            {etiqueta}
          </span>
        )}

        <button
          type="button"
          className="mt-3 block font-mono text-[10px] uppercase tracking-widest text-airmail border border-airmail/60 rounded-full px-3 py-1 hover:bg-airmail hover:text-cream transition-colors"
          onClick={handleEliminar}
          aria-label={`Eliminar a ${nombre}`}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}
