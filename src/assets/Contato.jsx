import React from 'react';
import { Link } from 'react-router-dom';
function Lista() {
    return <div class='max-w-screen-lg'>
        <h1 class='pb-10'>Contato</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus animi et unde in saepe consequatur reprehenderit voluptatum corporis id reiciendis optio culpa accusantium quia adipisci, eum libero aliquid harum nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam magnam aut laborum quas laudantium fugit quae quam rerum molestiae blanditiis? Earum, sint libero aspernatur impedit quisquam at voluptatem similique quidem.</p>
        <Link to = {'/'} >Voltar</Link>
        
    </div>;
}

export default Lista;