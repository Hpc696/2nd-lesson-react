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
        <Title title='Double Cheeseburger'/>
        <Image url='https://img.buzzfeed.com/video-api-prod/assets/7500687a06b34ee29c84a044861a01fc/BFV9770_DoubleCheeseburgerasmadebyErikAnderson-Thumb1080SQ.jpg?resize=1200:*' alt='doublecheeseburger'/>
        <Description about='Description of our Double Cheeseburger'/>
        <Buy quant={add}/>
        <Qta howmuch={quantity} title='double cheeseburger'/>
        <hr className='separation'/>
        </div>
    )
}