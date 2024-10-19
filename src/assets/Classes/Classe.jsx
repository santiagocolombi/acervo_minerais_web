import Linksdoacervo from "../../Minerais/Linksdoacervo"
import { Link } from "react-router-dom"
function Classe({nome, desc,}){
    return(
    <div className='max-w-screen-lg'>
        <h1>{nome}</h1>
    <p className="pb-10 pt-10">{desc}</p>
    
    </div>
        
    )
}
export default Classe