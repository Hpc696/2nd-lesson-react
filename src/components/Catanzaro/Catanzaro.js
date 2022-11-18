import TitoloCatanzaro from './TitoloCatanzaro'
import ImmagineCatanzaro from './ImmagineCatanzaro'
import DescrizioneCatanzaro from './DescrizioneCatanzaro'
import Interessa from '../Interessa'

export default function Catanzaro(){
    return (
        <div className='citta'>
        <TitoloCatanzaro/>
        <ImmagineCatanzaro/>
        <DescrizioneCatanzaro/>
        <Interessa/>
        <hr className='separa'/>
        </div>
    )
}