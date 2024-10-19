import Linksdoacervo from "../../Minerais/Linksdoacervo";
import Classe from "./Classe";
import { Link } from "react-router-dom";
function OxidosEHidroxidos() {
    return <div>
        <Classe nome='Óxidos e Hidróxidos'
        desc='Os óxidos são os minerais onde o oxigênio está ligado com um ou mais metais. Esta classe contem vários minerais de minério, fontes de ferro, crômo, manganês, estanho e urânio. O único oxido que não é apresentado nessa classe é o SiO2, porque este composto é a unidade estrutural básica da classe dos silicatos (a maior e mais comum classe mineral na crosta terrestre). Os óxidos estão subdivididos segundo a proporção de átomos dos metais em relação aos átomos de oxigênio presentes. Isto é porque diferentes proporções geram distintas estruturas cristalinas.

Os óxidos podem ser classificados como simples, múltiplos ou hidróxidos. Os primeiros são aqueles que possuem um metal e um oxigênio (XmOp), existindo diferentes proporções X:O (segundo as propriedades do metal). Os múltiplos, possuem dois metais diferentes em distintas posições na estrutura cristalina.

Finalmente os hidróxidos estão caracterizados pela presença do grupo hidroxila (OH)– ou moléculas de água (H2O). Este grupo aniônico, gera ligações entre os átomos mais fracas do que as ligações nos óxidos (que são fortemente iônicas).'/>

<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Link to = '/' class='hover:text-sky-700 hover:underline'>Voltar</Link>
</div>;
}

export default OxidosEHidroxidos;