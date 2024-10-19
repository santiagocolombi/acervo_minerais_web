import Linksdoacervo from "../../Minerais/Linksdoacervo";
import Classe from "./Classe";
import { Link } from "react-router-dom";

function Haloides() {
    return <div>

        <Classe nome='Halóides'
        desc='Ogrupo está formado por compostos iônicos onde predominam os ânions halógenos (eletronegativos, como Cl–, Br–, F– e I–) combinados com cátions de baixa valência. São os exemplos mais perfeitos de mecanismo de ligação iônico puro, apresentando alta simetria nos cristais. Esta simetria, e a pureza da ligação iônica, diminui com cations menores e mais fortemente polarizados que resultam em ligações de características mais covalentes.

Em geral, os haloides isométricos possuem uma dureza baixa e um ponto de fusão relativamente alto, sendo pouco condutores de eletricidades e calor no estado sólido.'/>

<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>

<Link to = '/' class='hover:text-sky-700 hover:underline'>Voltar</Link>
    </div>;
}

export default Haloides;