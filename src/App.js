import { AgregarEstado } from "./components/AgregarEstado";


function App() {
  return (
    <div className="App">
      <AgregarEstado 
        textAreaId='escribirEstado' 
        titleState='¿Qué tienes para contarnos hoy?'
        placeHolderArea='¡Cuéntanos de tu día!'
      />
    </div>
  );
}

export default App;
