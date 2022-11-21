import HotDTitle from './HotDTitle'
import HotDImage from './HotDImage'
import HotDDescription from './HotDDescription'
import Buy from '../Buy'

export default function HotDog(){
    return ( 
    <div className='cards'>
    <HotDTitle/>
    <HotDImage/>
    <HotDDescription/>
    <Buy/>
    <hr className='separation'/>
    </div>
    )
}