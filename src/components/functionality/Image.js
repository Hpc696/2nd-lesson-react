export default function Image(props){

    return(
        <img className='images' src={props.url} alt={props.alt}></img>
    )
}