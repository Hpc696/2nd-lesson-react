import HotDog from './Hot_Dog/HotDog'
import DoubleCheese from './Double_Cheeseburger/DoubleCheese'
import Chips from './Patatine_Fritte/Chips'
import Cheese from './Cheeseburger/Cheese'
import '../assets/styles.css'

function App() {
  console.log('App is running...');
  return (
    <div>
      <h1 className='products'>OUR PRODUCTS</h1>
      <Cheese />
      <DoubleCheese />
      <HotDog />
      <Chips />
    </div>
  );
}
//Tante componenti : titolo, immagine, descrizione, durata, prezzo, bottone interessa ..a.. (...poi con +1)
export default App;
