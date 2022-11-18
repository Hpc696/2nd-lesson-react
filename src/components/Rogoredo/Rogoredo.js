import TitoloRogoredo from './TitoloRogoredo'
import ImmagineRogoredo from './ImmagineRogoredo'
import DescrizioneRogoredo from './DescrizioneRogoredo'
import Interessa from '../Interessa'

export default function Rogoredo(){
    return(
        <div className='rogoredo'>
        <TitoloRogoredo/>
        <ImmagineRogoredo/>
        <DescrizioneRogoredo/>
        <Interessa/>
        </div>
    )
}