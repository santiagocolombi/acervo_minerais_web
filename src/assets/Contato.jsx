import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
function Lista() {
    
    return <div class='max-w-screen-lg'>  
        <h1 className='pb-10  font-medium text-2xl'>Contato</h1>
    <section className='flex justify-center'>

        <div className='flex-col'>
     <Link className='flex'>E-mail</Link>
     <Link className='flex'>Facebook</Link>
     <Link className='flex'>X</Link>
     <Link className='flex'>Intagram</Link>

        </div>
        </section>
        <form>
         <Form/>
        </form>

        <Link to = {'/'} class='hover:text-sky-700 hover:underline'>Voltar</Link>
        
    </div>;
}

export default Lista;