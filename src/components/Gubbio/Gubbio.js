import TitoloGubbio from './TitoloGubbio'
import ImmagineGubbio from './ImmagineGubbio'
import DescrizioneGubbio from './DescrizioneGubbio'
import Interessa from '../Interessa'

export default function Gubbio(){
    return ( 
    <div className='citta'>
    <TitoloGubbio/>
    <ImmagineGubbio/>
    <DescrizioneGubbio/>
    <Interessa/>
    <hr className='separa'/>
    </div>
    )
}