import { useState } from "react";

function FormularioContacto({ onAgregar }) {
  // Estado del formulario: un solo objeto con los campos controlados.
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
    empresa: "",
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.telefono.trim()) return;

    onAgregar(form);
    // Limpia el formulario tras agregar.
    setForm({ nombre: "", telefono: "", correo: "", etiqueta: "", empresa: "" });
  };

  return (
    <form
      onSubmit={manejarEnvio}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3
bg-white border border-gray-200 rounded-lg
shadow-sm p-5"
    >
      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-700">Nombre *</label>
        <input
          name="nombre"
          value={form.nombre}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded-md
px-4 py-2 outline-none focus:ring-2
focus:ring-purple-500"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-700">Teléfono *</label>
        <input
          name="telefono"
          value={form.telefono}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded-md
px-4 py-2 outline-none focus:ring-2
focus:ring-purple-500"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-700">Correo</label>
        <input
          name="correo"
          value={form.correo}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded-md
px-4 py-2 outline-none focus:ring-2
focus:ring-purple-500"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-700">Etiqueta</label>
        <input
          name="etiqueta"
          value={form.etiqueta}
          onChange={manejarCambio}
          placeholder="Amigo, Cliente, Instructor..."
          className="w-full border border-gray-300 rounded-md
px-4 py-2 outline-none focus:ring-2
focus:ring-purple-500"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-600">Empresa</label>
        <input
          name="empresa"
          value={form.empresa}
          onChange={manejarCambio}
          placeholder="SENA, Independiente..."
          className="w-full border border-gray-300 rounded-md
px-4 py-2 outline-none focus:ring-2
focus:ring-purple-500"
        />
      </div>

      <button
        type="submit"
        className="sm:col-span-2 bg-purple-600
hover:bg-purple-700 text-white font-semibold
rounded-lg py-2.5 transition"
      >
        Agregar contacto
      </button>
    </form>
  );
}

export default FormularioContacto;
