import TitoloCatanzaro from './TitoloCatanzaro'
import ImmagineCatanzaro from './ImmagineCatanzaro'
import DescrizioneCatanzaro from './DescrizioneCatanzaro'
import Interessa from '../Interessa'

export default function Catanzaro(){
    return (
        <div className='catanzaro'>
        <TitoloCatanzaro/>
        <ImmagineCatanzaro/>
        <DescrizioneCatanzaro/>
        <Interessa/>
        </div>
    )
}