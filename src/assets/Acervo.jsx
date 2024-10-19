import React from 'react';
import Linksdoacervo from '../Minerais/Linksdoacervo';
import { Link } from 'react-router-dom';
function Acervo() {
    return <div class='max-w-screen-lg'>
        <h1 class='pb-10  font-medium text-2xl'>Acervo</h1>
        <section class='border-y-2'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, illum possimus. Quia perferendis, sapiente aut, maiores obcaecati officia et tempore minima nulla enim, est sunt accusamus ipsam provident reiciendis. Dolores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora aspernatur, minus cupiditate quod eligendi perferendis recusandae adipisci ipsam cum? Velit culpa laborum sed asperiores libero voluptas beatae est suscipit rem?</p>
        </section>
        <div >
            
            <Linksdoacervo pagina='/' nomemineral='turmalina'/>
        <Linksdoacervo pagina='/' nomemineral='turmalina'/>
        <Linksdoacervo pagina='/' nomemineral='turmalina'/>
        <Linksdoacervo pagina='/' nomemineral='turmalina'/>
        <Linksdoacervo pagina='/' nomemineral='turmalina'/>
        </div>

        
        
        <Link to = {'/'} class='hover:text-sky-700 hover:underline'>Voltar</Link>
        
        
    </div>;
}

export default Acervo;