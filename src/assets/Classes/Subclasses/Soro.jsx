import { Link } from "react-router-dom";
import Submodle from "./Submodle";
import Linksdoacervo from "../../../Minerais/Linksdoacervo";


function Soro(){
return(
    <div>
    <Submodle nome='Sorossilicatos'
    desc='Sorossilicatos: Tetraedros unidos em duplas isoladas, compartilhando um único oxigênio ((Si2O7)6-).'/>
    <Linksdoacervo pagina='/' nomemineral='Biotita'/>
     <Link to = {'/Silicatos'} className='hover:text-sky-700 hover:underline'>Voltar para a lista de silicatos</Link>
    </div>
)
}
export default Soro