import Gubbio from './Gubbio/Gubbio'
import Catanzaro from './Catanzaro/Catanzaro'
import Lampedusa from './Lampedusa/Lampedusa'
import Rogoredo from './Rogoredo/Rogoredo'

function App() {
  return (
    <><h1>
      I nostri viaggi
      </h1>
    <Gubbio />
    <Catanzaro />
    <Lampedusa />
    <Rogoredo />
    </>
  );
}

//Tante componenti : titolo, immagine, descrizione, durata, prezzo, bottone interessa ..a.. (...poi con +1)
export default App;
