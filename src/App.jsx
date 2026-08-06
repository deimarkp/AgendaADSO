// Hook para manejar el estado local del input de búsqueda.
import { useState, useEffect } from "react";
// Importa estilos globales del componente principal.
import "./App.css";
// Hook para persistir estado en localStorage.
import useLocalStorage from "./hook/useLocalStorage";
// Saludo debajo del título.
import Saludo from "./components/Saludo";
// Tarjeta visual para cada contacto.
import ContactoCard from "./components/ContactoCard";
// Formulario para crear contactos.
import FormularioContacto from "./components/FormularioContacto";

// Contacto de ejemplo usado solo la primera vez que se abre la app.
const CONTACTOS_INICIALES = [
  {
    id: 1,
    nombre: "Carolina Pérez",
    telefono: "300 123 4567",
    correo: "carolina@sena.edu.co",
    etiqueta: "Compañera",
  },

  {
    id: 2,
    nombre: "Gustavo Bolaños",
    telefono: "300 123 4567",
    correo: "gustavo@sena.edu.co",
    etiqueta: "Cliente",
  },
  {
    id: 3,
    nombre: "Cristian Acevedo",
    telefono: "300 765 4321",
    correo: "cristian@sena.edu.co",
    etiqueta: "Instructor",
  },
  {
    id: 4,
    nombre: "Emanuel Muñoz",
    telefono: "323 720 4129",
    correo: "emanuelmun22@gmail.co",
    etiqueta: "Amigo",
  },
  {
    id: 5,
    nombre: "Nubia Ramirez",
    telefono: "318 281 1484",
    correo: "nubia0526@hotmail.com",
    etiqueta: "Familiar",
  },
];

// Componente principal de la agenda.
export default function App() {
  // Lista de contactos, persistida en localStorage.
  const [contactos, setContactos] = useLocalStorage(
    "agenda-contactos",
    CONTACTOS_INICIALES,
  );

  // Estado propio del input de búsqueda (no necesita persistirse).
  const [busqueda, setBusqueda] = useState("");

  // Estado del input de saludo en tiempo real (no necesita persistirse).
  const [nombreSaludo, setNombreSaludo] = useState("");

  // Tema (claro/oscuro), persistido en localStorage.
  const [tema, setTema] = useLocalStorage("agenda-tema", "claro");

  // Aplica el atributo data-theme al <html> cada vez que cambia el tema,
  // para que las variables CSS del modo oscuro tomen efecto globalmente.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
  }, [tema]);

  // Alterna entre modo claro y oscuro.
  const alternarTema = () => {
    setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));
  };

  // Agrega un nuevo contacto al estado.
  const agregarContacto = (nuevo) => {
    setContactos((prev) => [...prev, { id: Date.now(), ...nuevo }]);
  };

  // Elimina un contacto por su id.
  const eliminarContacto = (id) => {
    setContactos((prev) => prev.filter((c) => c.id !== id));
  };

  // Deriva una lista filtrada por nombre en cada render.
  const contactosFiltrados = contactos.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.trim().toLowerCase()),
  );

  return (
    <main className="app-container">
      <div className="app-header">
        <h1 className="app-title">Agenda ADSO v3</h1>
        <button
          type="button"
          className="btn-tema"
          onClick={alternarTema}
          aria-label="Cambiar entre modo claro y oscuro"
          title="Cambiar entre modo claro y oscuro"
        >
          {tema === "claro" ? "🌙" : "☀️"}
        </button>
      </div>
      <Saludo />

      <FormularioContacto onAgregar={agregarContacto} />

      <input
        type="text"
        className="input-busqueda"
        placeholder="Buscar contacto por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <section className="lista-contactos">
        {contactosFiltrados.length === 0 ? (
          <p className="sin-resultados">No se encontraron contactos</p>
        ) : (
          contactosFiltrados.map((c) => (
            <ContactoCard
              key={c.id}
              id={c.id}
              nombre={c.nombre}
              telefono={c.telefono}
              correo={c.correo}
              etiqueta={c.etiqueta}
              onDelete={eliminarContacto}
            />
          ))
        )}
      </section>

      <section className="saludo-vivo">
        <label htmlFor="nombre-saludo" className="saludo-vivo-label">
          ¿Cómo te llamas?
        </label>
        <input
          id="nombre-saludo"
          type="text"
          className="saludo-vivo-input"
          placeholder="Escribe tu nombre..."
          value={nombreSaludo}
          onChange={(e) => setNombreSaludo(e.target.value)}
        />
        <p className="saludo-vivo-mensaje">
          {nombreSaludo.trim()
            ? `¡Hola, ${nombreSaludo.trim()}! 👋 Bienvenido a tu agenda.`
            : "Escribe tu nombre para ver el saludo aquí..."}
        </p>
      </section>
    </main>
  );
}
