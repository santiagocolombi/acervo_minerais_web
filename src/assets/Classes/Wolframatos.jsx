import Linksdoacervo from "../../Minerais/Linksdoacervo";
import Classe from "./Classe";
import { Link } from "react-router-dom";
function Wolframatos(){
    return(
        <div>
            <Classe nome='Wolframatos'
            desc='Os molibdatos e wolframatos (tungstatos) são minerais pouco abundantes e relativamente raros (constituem cerca de 20 minerais e 11 minerais respectivamente). Os minerais do desta se caracterizam pela combinação dos grupos aniônicos [MoO4]2- e [WO4]2+ com metais.'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>

<Linksdoacervo pagina='/' nomemineral='turmalina'/>

<Linksdoacervo pagina='/' nomemineral='turmalina'/>


<Link to = '/' class='hover:text-sky-700 hover:underline'>Voltar</Link>
        </div>
    )
    
}
export default Wolframatos