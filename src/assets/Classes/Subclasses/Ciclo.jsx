import { Link } from "react-router-dom"
import Submodle from "./Submodle"
import Linksdoacervo from "../../../Minerais/Linksdoacervo"
Link
function Ciclo(){
return(
    <>
    <div>
        <Submodle nome='Ciclossilicatos'
            desc='Ciclossilicatos: Cada tetraedro compartilha dois oxigênios formando anéis de três, quatro ou seis tetraedros ((Si6O18)12-).'
            className='max-w-screen-lg flex justify-center flex-col'
            />
     <Linksdoacervo pagina='/Turmalina' nomemineral='turmalina'/>
     <Linksdoacervo pagina='/' nomemineral='QUrtzo'/>
     <Linksdoacervo pagina='/' nomemineral='Biotita'/>
     <Link to = {'/Silicatos'} className='hover:text-sky-700 hover:underline'>Voltar para a lista de silicatos</Link>
     </div>
     
    
    
    </>
    
)
}
export default Ciclo