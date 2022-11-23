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
        <Title title='Chips'/>
        <Image url='https://www.salepepe.it/files/2015/07/AA069300_-1140x636.jpg' alt='chips'/>
        <Description about='Description of our Chips'/>
        <Price money={2.5}/>
        <Ingredients show={showingr}/>
        {show ? <ShowIngredients ingred='Fried potatoes'/> : null}
        <Buy quant={add}/>
        <Qta howmuch={quantity} title='chips'/>
        <hr className='separation'/>
        </div>
    )
}