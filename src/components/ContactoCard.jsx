function ContactoCard({ id, nombre, telefono, correo, etiqueta, onDelete }) {
  return (
    <article className="tarjeta-contacto">
      <h3>{nombre}</h3>
      <p className="dato">📞 {telefono}</p>
      <p className="dato">✉️ {correo}</p>
      {etiqueta && <p className="tag">{etiqueta}</p>}
      <div className="acciones">
        <button className="btn-eliminar" onClick={() => onDelete(id)}>
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default ContactoCard;
