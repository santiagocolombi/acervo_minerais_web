;
import { Link } from "react-router-dom";

function Silicatos() {
    return <div className='max-w-screen-lg ' >
        <h1>Silicatos</h1>
  
      <p className="pt-10">Silicatos são o maior e mais distribuído grupo de minerais na superfície da Terra. São os principais minerais formadores de rocha, compreendendo até 90% da composição da crosta terrestre. A unidade fundamental que os compõe são os tetraedros de sílica, SiO4, que são, junto com os óxidos, as unidades fundamentais que compõem a Terra. As diferentes combinações das unidades fundamentais com os outros íons presentes na Terra geram uma grande variedade de minerais que, por sua vez, compõem distintos tipos de rocha importantes para entender o passado e o desenvolvimento da Terra. A capacidade da sílica de formar compostos com diferente grau de complexidade faz que pelo menos 40% dos minerais comuns pertençam a essa classe.

A fórmula geral dos silicatos está representada como XmYn(ZpOq)Wr, que é o resultado do comportamento dos arranjos de sílica com os diferentes íons disponíveis na crosta (que podem apresentar coordenações diferentes por causa do seu tamanho e sua carga). Qualquer silicato simples pode ser descrito utilizando esta fórmula.

As propriedades químicas da sílica permitem desenvolver ligações entre os tetraedros em configurações estruturais diversas. Esta variedade estrutural depende do compartilhamento de um oxigênio entre dois tetraedros adjacentes, a quantidade de oxigênios que cada tetraedro compartilha no retículo cristalino varia segundo as condições de cristalização da espécie. Este tipo de ligação de tetraedros através do compartilhamento de oxigênios, que aumenta a coesão da rede cristalina, é conhecida como polimerização e é a origem da ampla variedade das estruturas dos silicatos.

O grau de polimerização depende das condições de formação (cristalização) dos silicatos: quanto mais alta a temperatura de formação, tanto mais baixo o grau de polimerização e vice-versa. Existe uma grande quantidade de variáveis que contribuem a esta relação, que deverá ser abordada no curso de geologia geral como parte dos conceitos que intervém na formação dos minerais e das rochas, e mais detalhadamente em cursos avançados de ciência dos minerais. Uma das sínteses mais relevantes dos estudos de formação dos silicatos é a série de reação de Bowen.

Os silicatos são subclassificados baseados no grau de polimerização do tetraedro, no caso que cada um esteja isolado, que estejam em duplas isoladas, e assim por diante. Estes grupos recebem nomes diferentes:</p>
<ul className="list-disc flex items-center flex-col pt-10">
    <li className='hover:text-sky-700 hover:underline'><Link to='/Ciclo'>Ciclossilicatos</Link></li>
    <li className='hover:text-sky-700 hover:underline'><Link to='/Filo'>Filossilicatos</Link></li>
    <li className='hover:text-sky-700 hover:underline'><Link to='/Ino'>Inossilicatos</Link></li>
    <li className='hover:text-sky-700 hover:underline'><Link to='/Neso'>Nesossilicatos</Link></li>
    <li className='hover:text-sky-700 hover:underline'><Link to='/Soro'>Sorossilicatos</Link></li>
    <li className='hover:text-sky-700 hover:underline'><Link to='/Tecto'>Tectossilicatos</Link></li>
</ul>
<Link to='/'className='hover:text-sky-700 hover:underline'>Voltar</Link>
    </div>;
}

export default Silicatos;