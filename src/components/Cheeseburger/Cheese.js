import CheeseTitle from './CheeseTitle'
import CheeseImage from './CheeseImage'
import CheeseDescription from './CheeseDescription'
import Buy from '../Buy'
import Qta from '../Qta'
import { useState } from 'react'

export default function Cheese(){
    const [quantity, setQuantity] = useState(0);
    function add(){
        setQuantity(quantity+1)
        console.log('cliccato')
    }
    return(
        <div className='cards'>
        <CheeseTitle/>
        <CheeseImage/>
        <CheeseDescription/>
        <Buy quant={add}/>
        <Qta howmuch={quantity}/>
        <hr className='separation'/>
        </div>
    )
}