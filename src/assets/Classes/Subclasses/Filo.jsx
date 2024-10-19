import Linksdoacervo from "../../../Minerais/Linksdoacervo";
import Submodle from "./Submodle";
import { Link } from "react-router-dom";
function Filo(){
return(
    <div>
    <Submodle nome='Filossilicatos'
    desc='Filossilicatos: Cada tetraedro de sílica compartilha três dos seus oxigênios com os tetraedros adjacentes, formando planos ((Si2O5)2-).'/>
    <Linksdoacervo pagina='/' nomemineral='Biotita'/>
     <Link to = {'/Silicatos'} className='hover:text-sky-700 hover:underline'>Voltar para a lista de silicatos</Link>

    </div>
)
}
export default Filo