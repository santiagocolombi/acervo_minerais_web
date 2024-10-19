import React from 'react'
import { Link } from 'react-router-dom';
function QuemSomos() {
    return <div class='max-w-screen-lg '>
        <div class='pb-10 font-medium text-2xl'><h1>Quem somos</h1></div>
        <section class='border-y-2'><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod velit, at quaerat sequi voluptate repellendus eveniet dolor, odio tempora ratione minus sit, recusandae ipsam quae repellat enim vitae quos quo.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis praesentium sapiente quibusdam, corporis quidem similique non quas atque, necessitatibus quasi expedita? Veniam repellendus reprehenderit, omnis sit dolor culpa odit.</p></section>
        <Link to = {'/'} class='hover:text-sky-700 hover:underline '  >Voltar</Link>
    </div>;
}

export default QuemSomos;