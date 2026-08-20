import { useState, useEffect } from "react";
import "./App.css";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";
import Saludo from "./components/Saludo";

// URL base de la API (JSON Server debe estar corriendo en puerto 3001)
const API = "http://localhost:3001/contactos";

export default function App() {
  const [contactos, setContactos] = useState([]);
  // Interruptor de la actividad complementaria "08 · Opcional" de index.html:
  // muestra/oculta el campo "empresa" en el formulario y en las tarjetas.
  const [mostrarEmpresa, setMostrarEmpresa] = useState(true);

  // GET - Cargar contactos cuando el componente se monta
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setContactos(data));
  }, []);

  // POST - Agregar un nuevo contacto
  const agregarContacto = (nuevo) => {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo),
    })
      .then((res) => res.json())
      .then((creado) => {
        setContactos((prev) => [...prev, creado]); // Agregamos al estado
      });
  };

  // DELETE - Eliminar un contacto por su id
  const eliminarContacto = (id) => {
    fetch(`${API}/${id}`, { method: "DELETE" }).then(() => {
      setContactos((prev) => prev.filter((c) => c.id !== id));
    });
  };

  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Franja de "sobre aéreo": el detalle a rayas navy/rojo que da la identidad del diseño */}
      <div className="h-3 w-full bg-stripes" />

      <main className="max-w-3xl mx-auto px-5 sm:px-8 pb-20 pt-10">
        <header className="relative mb-10 animate-slideDown">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-airmail mb-2">
                Correspondencia archivada
              </p>
              <h1 className="font-display italic font-semibold text-4xl sm:text-5xl text-navy leading-tight">
                Agenda ADSO v4
              </h1>
              <p className="mt-3 max-w-md text-sm text-ink/70 leading-relaxed">
                Archive sus contactos aqui gracias a{" "}
                <code className="font-mono text-xs bg-navy text-cream px-1.5 py-0.5 rounded-lg">
                  JSON Server
                </code>
                , ahora con un diseño de correo aéreo hecho con{" "}
                <code className="font-mono text-xs bg-navy text-cream px-1.5 py-0.5 rounded-lg">
                  TailwindCSS
                </code>
                .
              </p>
            </div>

            {/* Matasellos con el contador, como sello postal */}
            <div className="shrink-0 self-start sm:self-end animate-stampIn">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-airmail flex flex-col items-center justify-center rotate-[-6deg] bg-parchment shadow-sm">
                <span className="font-display font-bold text-2xl text-navy leading-none">
                  {contactos.length}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-airmail text-center leading-tight mt-1 px-1">
                  {contactos.length === 1 ? "ficha" : "fichas"}
                </span>
              </div>
            </div>
          </div>

          <label className="mt-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-navy/80 cursor-pointer bg-parchment border border-dashed border-kraft/60 rounded-full px-4 py-2">
            <input
              type="checkbox"
              checked={mostrarEmpresa}
              onChange={(e) => setMostrarEmpresa(e.target.checked)}
              className="accent-airmail"
            />
            Mostrar campo "empresa"
          </label>
        </header>

        <div className="space-y-6">
          <FormularioContacto
            onAgregar={agregarContacto}
            mostrarEmpresa={mostrarEmpresa}
          />

          {contactos.length === 0 ? (
            <p className="text-center font-mono text-sm text-navy/60 bg-parchment/60 border border-dashed border-kraft/50 rounded-2xl py-8 px-4">
              Aún no hay contactos archivados.
            </p>
          ) : (
            <section
              className="contacto-grid grid grid-cols-1 sm:grid-cols-2 gap-5"
              aria-label="Contactos archivados"
            >
              {contactos.map((c) => (
                <ContactoCard
                  key={c.id}
                  {...c}
                  mostrarEmpresa={mostrarEmpresa}
                  onEliminar={eliminarContacto}
                />
              ))}
            </section>
          )}

          {/* Componente de saludo en tiempo real, en su propio archivo
              (src/components/Saludo.jsx), separado de la lógica de la agenda. */}
          <Saludo />
        </div>
      </main>
    </div>
  );
}
