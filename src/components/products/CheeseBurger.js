import Title from '../functionality/Title'
import Image from '../functionality/Image'
import Description from '../functionality/Description'
import Buy from '../functionality/Buy'
import Qta from '../functionality/Qta'
import { useState } from 'react'

export default function Cheese(){
    const [quantity, setQuantity] = useState(0);
    function add(){
        setQuantity(quantity+1)
        console.log('cliccato')
    }
    return(
        <div className='cards'>
        <Title title='Cheeseburger'/>
        <Image url='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg' alt='cheeseburger'/>
        <Description about='Description of our cheeseburger'/>
        <Buy quant={add}/>
        <Qta howmuch={quantity} title='cheeseburger'/>
        <hr className='separation'/>
        </div>
    )
}