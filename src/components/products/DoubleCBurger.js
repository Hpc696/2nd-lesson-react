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
        <Title title='Double Cheeseburger'/>
        <Image url='https://img.buzzfeed.com/video-api-prod/assets/7500687a06b34ee29c84a044861a01fc/BFV9770_DoubleCheeseburgerasmadebyErikAnderson-Thumb1080SQ.jpg?resize=1200:*' alt='doublecheeseburger'/>
        <Description about='Description of our Double Cheeseburger'/>
        <Price money={5}/>
        <Ingredients show={showingr}/>
        {show ? <ShowIngredients ingred='Bread, Double beef, Cheddar, Ketchup, Mayo, Onions, Pickle slices'/> : null}
        <Buy quant={add}/>
        <Qta howmuch={quantity} title='double cheeseburger'/>
        <hr className='separation'/>
        </div>
    )
}