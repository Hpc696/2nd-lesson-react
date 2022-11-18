import TitoloLampedusa from './TitoloLampedusa'
import ImmagineLampedusa from './ImmagineLampedusa'
import DescrizioneLampedusa from './DescrizioneLampedusa'
import Interessa from '../Interessa'

export default function Lampedusa(){
    return (
        <div className='lampedusa'>
        <TitoloLampedusa/>
        <ImmagineLampedusa/>
        <DescrizioneLampedusa/>
        <Interessa/>
        </div>
    )
}