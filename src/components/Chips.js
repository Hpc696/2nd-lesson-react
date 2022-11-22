import Title from './Title'
import Image from './Image'
import Description from './Description'
import Buy from './Buy'
import Qta from './Qta'
import { useState } from 'react'

export default function Cheese(){
    const [quantity, setQuantity] = useState(0);
    function add(){
        setQuantity(quantity+1)
        console.log('cliccato')
    }
    return(
        <div className='cards'>
        <Title title='Chips'/>
        <Image url='https://www.salepepe.it/files/2015/07/AA069300_-1140x636.jpg' alt='chips'/>
        <Description about='Description of our Chips'/>
        <Buy quant={add}/>
        <Qta howmuch={quantity} title='chips'/>
        <hr className='separation'/>
        </div>
    )
}