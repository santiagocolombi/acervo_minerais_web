import Linksdoacervo from "../../Minerais/Linksdoacervo";
import Classe from "./Classe";
import { Link } from "react-router-dom";

function Sulfetos() {
    return <div >
        <Classe nome='Sulfetos'
        desc='Os sulfetos abrangem minerais importantes e de especial interesse econômico. Eles formam uma classe de minerais que incluem a maioria dos minerais de minério.

Sua característica determinativa é a presença do ânion S2- ligado com um ou mais metais ou semimetais, é normal dos sulfetos serem listados segundo a proporção de átomos do metal (ou semimetal) em relação aos átomos do enxofre. Costuma-se incluir, junto com eles, outros grupos similares mas raros como os sulfoarsenietos, arsenetos, selenetos e teluretos.

Suas propriedades físicas ajudam significativamente a sua correta identificação: Muitas das espécies são opacas, com cores distintivas e traço caracteristicamente coloridos; e aquelas que não são opacas (cinábrio, realgar e ouro-pigmento) possuem cores distintivas, índices de refração extremamente altos e só transmitem luz na extremidades finas.

A estrutura dos sulfetos varia segundo a espécie. São encontrados enxofres com coordenação octaédrica regular, ou tetraédrica, em muitos sulfetos simples como a galena, PbS, e esfalerita, ZnS. Em sulfetos mais complexos, como também sulfossais, podem ser encontrados poliedros de  coordenação distorcidos. No tipo de ligação predominam a iônica e a covalente, pudendo ser observadas as características das ligações metálicas.'/>

<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>

<Linksdoacervo pagina='/' nomemineral='turmalina'/>
    <Link to = '/' class='hover:text-sky-700 hover:underline'>Voltar</Link> 
    </div>;
}

export default Sulfetos;