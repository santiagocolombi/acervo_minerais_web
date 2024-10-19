import { Link } from "react-router-dom";
import Submodle from "./Submodle";
import Linksdoacervo from "../../../Minerais/Linksdoacervo";

function Tecto(){
return(
    <div>
    <Submodle nome='Tectossilicatos'
    desc='Tectossilicatos: Sendo os silicatos de maior grau de polimerização, os tetraedros de sílica compartilham todos os oxigênios obtendo um arranjo tridimensional altamente coesivo ((SiO2)0).'/>
    <Linksdoacervo pagina='/' nomemineral='Biotita'/>
     <Link to = {'/Silicatos'} className='hover:text-sky-700 hover:underline'>Voltar para a lista de silicatos</Link>
    </div>
)
}
export default Tecto