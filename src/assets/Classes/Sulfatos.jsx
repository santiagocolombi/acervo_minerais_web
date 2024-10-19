
import { Link } from "react-router-dom";
import Linksdoacervo from "../../Minerais/Linksdoacervo";
import Classe from "./Classe";
function Sulfatos() {
    return <div>
        <Classe nome='Sulfatos'
        desc='O grupo aniônico (SO4)2- é a unidade estrutural fundamental nos minerais sulfatos. O tipo de estrutura de cada espécie, depende também do cátion (pelo tamanho e a coordenação) e da presença de água na estrutura. Algumas classes similares mas raras, como os manganatos e os cromatos (cujas unidades fundamentais são os grupos tetraédricos MnO4 e CrO4), apresentam estrutura química análoga à classe anidra mais importante e abundante dos sulfatos (o grupo da barita), pelo que podem ser abordados de forma conjunta.

A classe possui uma grande variedade de minerais que podem ser divididos entre entre sulfatos anidros e sulfatos hidratados, mas poucos deles são comuns. No primeiro bloco, são comuns os membros do grupo da barita e no segundo, a gipsita.'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>

<Linksdoacervo pagina='/' nomemineral='turmalina'/>

<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Link to = '/' class='hover:text-sky-700 hover:underline'>Voltar</Link>


</div>;
}

export default Sulfatos;