import CheeseTitle from './CheeseTitle'
import CheeseImage from './CheeseImage'
import CheeseDescription from './CheeseDescription'
import Buy from '../Buy'

export default function Cheese(){
    return(
        <div className='cards'>
        <CheeseTitle/>
        <CheeseImage/>
        <CheeseDescription/>
        <Buy/>
        <hr className='separation'/>
        </div>
    )
}