import ChipsTitle from './ChipsTitle'
import ChipsImage from './ChipsImage'
import ChipsDescription from './ChipsDescription'
import Buy from '../Buy'

export default function Chips(){
    return (
        <div className='cards'>
        <ChipsTitle/>
        <ChipsImage/>
        <ChipsDescription/>
        <Buy/>
        <hr className='separation'/>
        </div>
    )
}