import HotDog from './products/HotDog'
import DoubleCBurger from './products/DoubleCBurger'
import Chips from './products/Chips'
import CheeseBurger from './products/CheeseBurger'
import '../assets/styles.css'
import Cart from './Cart'

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
