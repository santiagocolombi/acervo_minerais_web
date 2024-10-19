import { Link } from "react-router-dom";
import Linksdoacervo from "../../Minerais/Linksdoacervo";
import Classe from "./Classe";
function Fosfatos() {
    return <div>
        <Classe nome='Fosfatos'
        desc='Fosfatos são aqueles minerais que contém o grupo funcional tetraédrico (PO4)3- como unidade fundamental estrutural. Unidades tetraédricas similares (AsO4)3- e (VO4)3- ocorrem em classes de menor ocorrência conhecidas como arseniatos e vanadatos. A paridade estrutural entre os íons P5+, As5+ e V5+ permite a sua mútua substituição em grupos aniônicos. Isto pode ser observado na solução sólida da série da piromorfita, onde todos os membros são isoestruturais. Esta paridade estrutural é um dos motivos pelos quais as três classes (fosfatos, arsenatos e vanadatos) são descritas juntas nos manuais de mineralogia. A apatita é o único dos fosfatos que pode ser considerado comum, sendo possíveis inúmeras substituições nos sítios atômicos da sua complexa estrutura.'/>
         <Linksdoacervo pagina='/' nomemineral='turmalina'/>
         <Linksdoacervo pagina='/' nomemineral='turmalina'/>
         <Linksdoacervo pagina='/' nomemineral='turmalina'/>
        <Link to = '/' class='hover:text-sky-700 hover:underline'>Voltar</Link>
    </div>;

    
}

export default Fosfatos;