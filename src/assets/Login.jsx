import React from 'react';
import { Link } from 'react-router-dom';


function Login(){
    return <div className='flex flex-col items-center'>
        <div className='flex space-x-20 justify-center items-end'>
            <img src='https://i.pinimg.com/originals/b4/25/66/b4256667e1af5e793841db4165ad470a.png' className='w-20 h-20 rounded-full'/>
            <Link to ={'/NossoAcervo'} className=' hover:text-sky-700 hover:underline  '>Nosso Acervo</Link>
            <Link to ={'/Contato'} className='  hover:text-sky-700 hover:underline  '>Contato</Link>
            <Link to ={'/QuemSomos'} className='  hover:text-sky-700 hover:underline  '>Quem somos</Link>
            <form>
                <div className='border-2'>
                    <label htmlFor='nome_mineral'></label>
                    <input type="text" id='nome_mineral' placeholder='Nome do mineral'className='outline-none  bg-bg-gray-400'/>
                </div>
            </form>  
        </div> 
        <section className='max-w-screen-lg pt-28 text-justify flex items-center '>
            <p> Minerais por definição são compostos sólidos formados naturalmente, por processos geológicos.<br></br>
            Minerais tem <strong>Estrutura cristalina</strong>, que é um arranjo ordenado dos átomos, formando padrões simétricos tridimensionais ao longo do mineral, esse padão é chamado de <strong>célula unitária</strong>,
            sendo repetidas várias vezes para formar um cristal visível a olho nu.<br></br>
            Um mineral é portanto formado por uma repetição de vários blocos empilhados onde seu tamanho depende da quantidade de blocos disponíveis, formando vários padões e várias formas.
            definidas por padrões geométricos de simetria.<br></br>
            Apenas elementos compostos de origem inorgãnica são considerados minerais, um mesmo composto mas feito de forma orgânica não é considerado. Um exelente exemplo são nossos
            dentes que possuem o mineral apatita em sua composição, mas os dentes não entram como mineral devido a explicação acima.<br></br>
            Minerais possuem composição quimica definida e não fixa, isso significa que a quantidade dos elementos podem variar em um certo intervalo, e inclusive até mudar com o tempo
            dependendo dos processos ocorridos.<br></br>
            <p > A <strong>cristaloquímica</strong> estuda essa relação entre composição qímica com a estrutura cristalina dos minerais.<br></br>
            Minerais também são substâncias sólidas e homogêneas que não podem ser separadas fisicamente em compostos simples. Já as rochas são sólidos naturais de composição mineral
            e apenas 20 minerais são comuns como formadores de rochas mas isoladamente existem mais de 5000 minerais diferentes, sendo descobertos vários novos todo ano.<br></br></p>
            <p className='border-b-2'>Minerais são importantes para a construção de inúmeras coisas sendo de extrema importância para a raça humana e são usados também como objetos de valor, minerais são extraídos do solo dés da pré-história,<br></br>
            Os minerais são classificados de acodo com os seus elementos presentes na sua estrutura e na forma como esstes se distribuem no seu interior ou seja, são classificadosde acordo
            com sua <strong>composição quimica</strong> e <strong>estrutura cristalina.</strong><br></br>
            Existem 9 classes principais de minerais, são elas:</p>
            <ul className='list-disc flex-col '>
                <li><Link to ={'/ElementN'}className='hover:text-sky-700 '> Elementos Nativos</Link></li><br></br>
                <li><Link to ={'/Sulfetos'} className='hover:text-sky-700'> Sulfetos</Link></li><br></br>
                <li><Link to ={'/Haloides'} className='hover:text-sky-700'> Halóides</Link></li><br></br>
                <li><Link to ={'/OxidosEHidroxidos'} className='hover:text-sky-700'> Óxidos/Hidróxidos</Link></li><br></br>
                <li><Link to ={'/Fosfatos'} className='hover:text-sky-700'> Fosfatos</Link ></li><br></br>
                <li><Link to ={'/Sulfatos'} className='hover:text-sky-700'> Sulfatos</Link></li><br></br>
                <li><Link to ={'/Silicatos'} className='hover:text-sky-700'> Silicatos</Link></li><br></br>
                <li><Link to ={'/Carbonatos'} className='hover:text-sky-700'> Carbonatos</Link ></li><br></br>
                <li><Link to ={'/Wolframatos'} className='hover:text-sky-700'> Wolframatos</Link ></li><br></br>
            </ul>

            </p>
        </section>    
    </div>;
}

export default Login;