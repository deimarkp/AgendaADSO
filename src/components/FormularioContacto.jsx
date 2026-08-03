import { useState } from "react";

function FormularioContacto({ onAgregar }) {
  // Estado del formulario: un solo objeto con los campos controlados.
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
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
    setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
  };

  return (
    <form className="form-contacto" onSubmit={manejarEnvio}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={manejarCambio}
      />
      <input
        type="text"
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={manejarCambio}
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={form.correo}
        onChange={manejarCambio}
      />
      <input
        type="text"
        name="etiqueta"
        placeholder="Etiqueta (ej. Familia, Trabajo)"
        value={form.etiqueta}
        onChange={manejarCambio}
      />
      <button type="submit">Agregar contacto</button>
    </form>
  );
}

export default FormularioContacto;
