import Title from '../functionality/Title'
import Image from '../functionality/Image'
import Description from '../functionality/Description'
import Buy from '../functionality/Buy'
import Qta from '../functionality/Qta'
import { useState } from 'react'
import Ingredients from '../functionality/Ingredients'
import ShowIngredients from '../functionality/ShowIngredients'
import Price from '../functionality/Price'

export default function Cheese(){
    //funz x contatore di quanti pezzi di quel prodotto
    const [quantity, setQuantity] = useState(0);
    function add(){
        setQuantity(quantity+1)
        console.log('cliccato')
    }
    //funz x mostra/nascondi ingredienti
    const [show, setShow] = useState(false);
    function showingr(){
        setShow(!show)
        console.log('click mostra/nascondi')
    }
    //costanti usate x bottone mostra/nascondi ingredienti
    const mostra = <><Ingredients sho={showingr} content='HIDE INGREDIENTS' /><ShowIngredients ingred='Bread, Beef, Cheddar, Ketchup, Mayo, Onions, Pickle slices' /></>
    const nascondi = <Ingredients sho={showingr} content='SHOW INGREDIENTS'/>

    return(
        <div className='cards'>
        <Title title='Cheeseburger'/>
        <Image url='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg' alt='cheeseburger'/>
        <Description about='Description of our cheeseburger'/>
        <Price money={3.5}/>
        {show ? mostra : nascondi}
        <Buy quant={add}/>
        <Qta howmuch={quantity} title='cheeseburger'/>
        <hr className='separation'/>
        </div>
    )
}