import Linksdoacervo from "../../Minerais/Linksdoacervo";
import Classe from "./Classe";
import { Link } from "react-router-dom";
function Carbonatos() {
    return <div>
        <Classe nome='Carbonatos'
        desc='Carbonatos são todos os minerais que contém o grupo (CO3)2-, onde os oxigênios não são compartilhados entre os grupos aniônicos e os triângulos de carbono-oxigênio devem ser considerados unidades estruturais separadas. Muitas das propriedades destes minerais são derivadas deste grupo estrutural. Por exemplo, o íon carbonato é instável em presença do íon hidrogênio (reagindo para produzir dióxido de carbono e água) o que explica a solubilidade de muitos dos carbonatos em ácidos diluídos (ensaios de efervescência). Também tem amplo uso na industria.

Os carbonatos são divididos em três grupos, os primeiros agrupam espécies isoestruturais (o grupo da calcita e o grupo da aragonita), e o outro caraterizado pela presença da água (carbonatos monoclínicos hidratados). Existe, mais um grupo que abrange soluções sólidas parciais com estrutura similar (mas diferente) ao grupo da calcita, limitadas pela diferença de tamanho dos cátions (Fe para Ca, e Mg para Ca).'
/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>


<Link to = '/' class='hover:text-sky-700 hover:underline'>Voltar</Link>
    </div>
}

export default Carbonatos;