import HotDog from './HotDog'
import DoubleCBurger from './DoubleCBurger'
import Chips from './Chips'
import CheeseBurger from './CheeseBurger'
import '../assets/styles.css'

function App() {
  console.log('App is running...');
  return (
    <div>
      <h1 className='products'>OUR PRODUCTS</h1>
      <CheeseBurger/>
      <DoubleCBurger/>
      <HotDog/>
      <Chips/>
    </div>
  );
}
//Tante componenti : titolo, immagine, descrizione, durata, prezzo, bottone interessa ..a.. (...poi con +1)
export default App;
