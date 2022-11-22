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
        <Title title='Hot Dog'/>
        <Image url='https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png' alt='hot-dog'/>
        <Description about='Description of our Hot-Dog'/>
        <Buy quant={add}/>
        <Qta howmuch={quantity} title='hot-dog'/>
        <hr className='separation'/>
        </div>
    )
}