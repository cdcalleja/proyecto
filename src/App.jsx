import Header from "./components/Header";
import Carrusel from "./components/Carrusel";
import Historia from "./components/Historia";
import Trasfondo from "./components/Trasfondo";
import Personajes from "./components/Personajes";

function App() {
  return (
<div style={{backgroundColor: "darkslategrey"}}>
<Header></Header>
<br/><br/>
<Carrusel></Carrusel>
<br/><br/><br/>
<Historia></Historia>
<br/><br/><br/>
<Trasfondo></Trasfondo>
<br/><br/><br/>
<Personajes></Personajes>
</div>

  );
}

export default App;
