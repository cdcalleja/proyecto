import Header from "./components/Header";
import Carrusel from "./components/Carrusel";
import Historia from "./components/Historia";
import Trasfondo from "./components/Trasfondo";
import Personajes from "./components/Personajes";
import Flotante from "./components/Flotante";
import Foot from "./components/Foot";

function App() {
  return (
<div style={{backgroundColor: "darkslategrey"}}>
<Header></Header>
<Carrusel></Carrusel>
<br/><br/><br/>
<Historia></Historia>
<br/><br/><br/>
<Trasfondo></Trasfondo>
<br/><br/><br/>
<Personajes></Personajes>
<Flotante></Flotante>
<br /><br />
<Foot></Foot>
</div>

  );
}

export default App;
