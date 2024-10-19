import { Link } from "react-router-dom";
import Classe from "./Classe";
import Linksdoacervo from "../../Minerais/Linksdoacervo";
function ElementN() {

    return <div>
            <Classe nome='Elementos Nativos'
            desc='Correspondem a todos aqueles elementos que podem ser achados como compostos sólidos elementares na Terra. Isto excluí os gases livres da atmosfera, e compreende aproximadamente 20 elementos encontrados no estado nativo. Estes elementos podem ser divididos como metais, semimetais, e não metais. Os primeiros são os mais comuns, exibem estruturas simples e podem ser subdivididos por sua vez em três grupos: o grupo do ouro (ouro, prata, cobre e chumbo; isoestruturais), o grupo da platina (platina, paládio, irídio e ósmio; isoestruturais) e o grupo do ferro (ferro e níquel-ferro).

Podem ser encontrados o mercúrio, o tântalo, o estanho e o zinco em alguma medida. Os semimetais nativos formam dois grupos isoestruturais: o arsênio, o antimônio e o bismuto, e os menos comuns, o selênio e o telúrio. Os não metais mais importantes são o enxofre e o carbono, sob a forma de diamante e grafita.'
/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>
<Linksdoacervo pagina='/' nomemineral='turmalina'/>

<Link to = '/' class='hover:text-sky-700 hover:underline'>Voltar</Link>
        
    </div>;
}

export default ElementN;