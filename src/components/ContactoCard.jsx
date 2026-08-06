function ContactoCard({ id, nombre, telefono, correo, etiqueta, onDelete }) {
  return (
    <article
      className="bg-white border border-gray-200
rounded-lg shadow-sm p-4 flex items-center
justify-between gap-4"
    >
      <div>
        <h3 className="font-bold text-gray-800">{nombre}</h3>
        <p className="text-sm text-gray-600">📞 {telefono}</p>
        <p className="text-sm text-gray-600">✉️ {correo}</p>
      </div>
      <button
        onClick={() => onEliminar(correo)}
        className="bg-red-500 hover:bg-red-600 text-white
text-xs font-semibold rounded-full px-4 py-2
transition"
      >
        Eliminar
      </button>
    </article>
  );
}

export default ContactoCard;
