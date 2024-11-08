import { Link } from "react-router-dom";
import "./Pokemon.css";
 
function Pokemon({name , image ,id}){
    return (
    <div className="pokemon"> 
      <Link href={`/pokemon/${id}`}>
        <div className="pokemon-name">{name}</div>
        <div>
            <img className="pokemon-img" src={image} />
        </div>
      </Link>
    </div>
    )

}

export default Pokemon;