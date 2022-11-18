import Gubbio from './Gubbio/Gubbio'
import Catanzaro from './Catanzaro/Catanzaro'
import Lampedusa from './Lampedusa/Lampedusa'
import Rogoredo from './Rogoredo/Rogoredo'
import '../assets/styles.css'

function App() {
  console.log('Saluti da Gubbio');
  return (
    <div>
      <h1 className='servizi'>I NOSTRI VIAGGI</h1>
      <Gubbio />
      <Catanzaro />
      <Lampedusa />
      <Rogoredo />
    </div>
  );
}

//Tante componenti : titolo, immagine, descrizione, durata, prezzo, bottone interessa ..a.. (...poi con +1)
export default App;
