import Card from "./Card";

function App() {
  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="number" placeholder="Edad" />
        <button type="submit">Agregar</button>
      </form>
      <Card />
    </div>
  );
}

export default App;
