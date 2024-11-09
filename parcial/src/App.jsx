import { useState } from "react";
import Card from "./Card";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedTitle, setSubmittedTitle] = useState("");
  const [submittedDescription, setSubmittedDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitted(false);

    // Validaciones del título y descripción
    if (title.trim().length < 3) {
      setError("Por favor, ingresa un título válido (al menos 3 caracteres).");
      return;
    }

    if (description.length < 6) {
      setError("Por favor, ingresa una descripción válida (al menos 6 caracteres).");
      return;
    }

    setSubmittedTitle(title);
    setSubmittedDescription(description);
    setIsSubmitted(true);

    setTitle("");
    setDescription("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Formulario de Información sobre Libros</h1>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Ingrese el título del libro"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Ingrese una descripción breve"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button type="submit" style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          ENVIAR
        </button>
      </form>
      {error && <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{error}</p>}
      {isSubmitted && <Card title={submittedTitle} description={submittedDescription} />}
    </div>
  );
}

export default App;
