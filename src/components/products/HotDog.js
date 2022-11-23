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
    const [quantity, setQuantity] = useState(0);
    function add(){
        setQuantity(quantity+1)
        console.log('cliccato')
    }

    const [show, setShow] = useState(false);
    function showingr(){
        setShow(!show)
        console.log('click mostra/nascondi')
    }
    return(
        <div className='cards'>
        <Title title='Hot Dog'/>
        <Image url='https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png' alt='hot-dog'/>
        <Description about='Description of our Hot-Dog'/>
        <Price money={3}/>
        <Ingredients show={showingr}/>
        {show ? <ShowIngredients ingred='Bread, Wurstel, Ketchup, Mayo'/> : null}
        <Buy quant={add}/>
        <Qta howmuch={quantity} title='hot-dog'/>
        <hr className='separation'/>
        </div>
    )
}