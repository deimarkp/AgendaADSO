import { useState } from "react";

export default function FormularioContacto({ onAgregar, mostrarEmpresa = true }) {
  const base = { nombre: "", telefono: "", correo: "", etiqueta: "", empresa: "" };
  const [form, setForm] = useState(base);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (error) setError("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.telefono || !form.correo) {
      setError("Nombre, teléfono y correo son obligatorios.");
      return;
    }

    onAgregar(form);
    setForm(base);
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b-2 border-navy/20 focus:border-airmail px-0.5 py-1.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/30";
  const labelClass =
    "font-mono text-[10px] uppercase tracking-[0.18em] text-navy/70";

  return (
    <form
      className="relative bg-white/70 border border-navy/15 rounded-2xl shadow-[0_8px_24px_rgba(23,37,84,0.10)] p-6 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 animate-postIn"
      onSubmit={onSubmit}
    >
      <span className="absolute -top-3 left-5 bg-navy text-cream font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-lg">
        Formulario Nº 04
      </span>

      <div className="space-y-1">
        <label htmlFor="nombre" className={labelClass}>
          Nombre *
        </label>
        <input
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={onChange}
          placeholder="Ej. Samuel David"
          autoComplete="off"
          className={inputClass}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="telefono" className={labelClass}>
          Teléfono *
        </label>
        <input
          id="telefono"
          name="telefono"
          value={form.telefono}
          onChange={onChange}
          placeholder="Ej. 300 123 4567"
          autoComplete="off"
          className={inputClass}
        />
      </div>

      <div className={`space-y-1 ${mostrarEmpresa ? "" : "sm:col-span-2"}`}>
        <label htmlFor="correo" className={labelClass}>
          Correo *
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          value={form.correo}
          onChange={onChange}
          placeholder="Ej. Saramuñoz@correo.com"
          autoComplete="off"
          className={inputClass}
        />
      </div>

      {mostrarEmpresa && (
        <div className="space-y-1">
          <label htmlFor="empresa" className={labelClass}>
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            value={form.empresa}
            onChange={onChange}
            placeholder="Ej. SENA CTMA"
            autoComplete="off"
            className={inputClass}
          />
        </div>
      )}

      <div className="space-y-1 sm:col-span-2">
        <label htmlFor="etiqueta" className={labelClass}>
          Etiqueta
        </label>
        <input
          id="etiqueta"
          name="etiqueta"
          value={form.etiqueta}
          onChange={onChange}
          placeholder="Ej. Trabajo, Familia, SENA..."
          autoComplete="off"
          className={inputClass}
        />
      </div>

      {error && (
        <p className="sm:col-span-2 -mt-1 font-mono text-xs font-semibold text-airmail animate-shake">
          ⚠ {error}
        </p>
      )}

      <button
        type="submit"
        className="sm:col-span-2 mt-1 bg-navy hover:bg-navy-dark text-cream font-mono text-xs uppercase tracking-[0.18em] rounded-lg py-3 border-2 border-dashed border-cream/0 hover:border-airmail/40 transition-colors"
      >
        Archivar contacto
      </button>
    </form>
  );
}
