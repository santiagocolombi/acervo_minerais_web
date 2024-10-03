import React from 'react';
import { Link } from 'react-router-dom';
function Login(){
    return <div class='max-w-screen-lg'>
        
        
        
        
        <div class='text-center flex space-x-20 justify-center  ' >
        <Link to ={'/NossoAcervo'}>Nosso Acervo</Link>
        <Link to ={'/Contato'}>Contato</Link>
        <Link to ={'/QuemSomos'}>Quem somos</Link>

        <form>
        
        <div class='border'>
                <label htmlFor='nome_mineral'></label>
                <input type="text" id='nome_mineral' placeholder='Nome do mineral'class='outline-none'/>
            </div>
            </form>
            
        
        </div> 
        <p class='pt-28'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur provident rerum, doloribus, dolore necessitatibus nihil amet maiores aliquid fugiat, eos maxime laborum sequi praesentium non animi quaerat incidunt facilis quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam inventore facere voluptate repellat iusto dolores unde doloribus dolor illo, quod sed tempora quae vitae excepturi nulla cum mollitia repudiandae impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque laudantium repudiandae quo mollitia aliquam! Laboriosam cupiditate veniam nesciunt quaerat corporis labore tenetur! Soluta repudiandae alias sapiente in veniam nam! Ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio nemo sint reprehenderit, blanditiis voluptas fugiat itaque dolorem velit neque animi eaque accusamus non libero, exercitationem minus ea iusto eveniet.</p>     
    </div>;
}

export default Login;