import { Link } from "react-router-dom";
import Submodle from "./Submodle";
import Linksdoacervo from "../../../Minerais/Linksdoacervo";
function Ino(){
return(
    <div>
    <Submodle nome='Inossilicatos'
    desc='Inossilicatos: São os silicatos que formam cadeias infinitas, estas podem ser simples (compartilhando dois oxigênios para cada tetraedro, numa linha) ou duplas (possuem tetraedros compartilhando tanto dois como três oxigênios, formando uma cadeia de anéis).Têm como unidades básicas (Si2O6)4- nas cadeias simples e (Si4O11)6- nas duplas.'/>
    <Linksdoacervo pagina='/' nomemineral='Biotita'/>
    <Link to = {'/Silicatos'} className='hover:text-sky-700 hover:underline'>Voltar para a lista de silicatos</Link>
    </div>
)
}
export default Ino