import PropTypes from "prop-types";

function Card({ title, description }) {
  return (
    <div style={{
      marginTop: "20px",
      padding: "20px",
      border: "1px solid #333",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{ color: "#333" }}>Información Ingresada</h2>
      <p><strong>Título:</strong> {title}</p>
      <p><strong>Descripción:</strong> {description}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
