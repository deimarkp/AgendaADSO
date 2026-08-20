# Agenda ADSO v4 — API REST con JSON Server

Esta agenda ya no guarda los contactos en `localStorage`: ahora se conecta a una
API REST servida con **JSON Server**, usando `fetch` con los tres métodos vistos
en la guía (GET, POST, DELETE), siguiendo el mismo patrón de código del documento
"Ejemplo Sencillo – API REST con JSON Server".

## 1. Instalar dependencias

```bash
npm install
```

## 2. Revisar los datos iniciales (`db.json`)

En la raíz del proyecto ya existe `db.json` con la colección `contactos`:

```json
{
  "contactos": [
    {
      "id": "1",
      "nombre": "Samuel David",
      "telefono": "300 123 4567",
      "correo": "saramuñoz@correo.com",
      "etiqueta": "SENA",
      "empresa": "SENA CTMA"
    }
  ]
}
```

## 3. Levantar JSON Server (terminal 1)

```bash
npm run server
```

Esto inicia el servidor en `http://localhost:3001`. Verifica en el navegador:

```
http://localhost:3001/contactos
```

## 4. Levantar React (terminal 2)

```bash
npm run dev
```

Abre la app en `http://localhost:5173` (o el puerto que indique Vite).

## 5. Métodos HTTP usados

| Método | Acción                  | URL                    |
| ------ | ------------------------ | ----------------------- |
| GET    | Leer todos los contactos | GET /contactos          |
| POST   | Agregar un contacto      | POST /contactos         |
| DELETE | Borrar un contacto       | DELETE /contactos/:id   |

## 6. Probar

1. Llena el formulario y haz clic en **Archivar contacto** → debe aparecer la tarjeta.
2. Abre `http://localhost:3001/contactos` en otra pestaña para confirmar que quedó guardado en JSON Server.
3. Haz clic en **Eliminar** en una tarjeta → debe desaparecer tanto de la lista como de la API.
