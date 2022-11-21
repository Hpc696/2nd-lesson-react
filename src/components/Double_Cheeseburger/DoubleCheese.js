import DoubleCTitle from './DoubleCTitle'
import DoubleCImage from './DoubleCImage'
import DoubleCDescription from './DoubleCDescription'
import Buy from '../Buy'

export default function DoubleCheese(){
    return (
        <div className='cards'>
        <DoubleCTitle/>
        <DoubleCImage/>
        <DoubleCDescription/>
        <Buy/>
        <hr className='separation'/>
        </div>
    )
}