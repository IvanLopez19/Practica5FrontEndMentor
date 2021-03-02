import '../Estilos/Style.css';
import Acordeon from './Acordeon';

function Card(){
    return(
        <div className="card">
        <h1>FAQ</h1>
        <Acordeon/>
        </div>
    )
}

export default Card;