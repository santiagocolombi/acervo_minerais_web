import { Link } from "react-router-dom";
import Submodle from "./Submodle";
import Linksdoacervo from "../../../Minerais/Linksdoacervo";
function Neso(){
return(
    <div>
    <Submodle nome='Nesossilicatos'
    desc='Nesossilicatos: Os tetraedros de sílica permanecem isolados, não há compartilhamento de oxigênios com outros tetraedros ((SiO4)4-).'/>
    <Linksdoacervo pagina='/' nomemineral='Biotita'/>
     <Link to = {'/Silicatos'} className='hover:text-sky-700 hover:underline'>Voltar para a lista de silicatos</Link>
    </div>
)
}
export default Neso