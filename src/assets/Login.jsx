import React from 'react';
import { Link } from 'react-router-dom';
function Login(){
    return <div >
        <h1 class='text-5xl '>Acervo de minerais</h1>
        <form>
            <div class='text-center border'>
                <label htmlFor='nome_mineral'></label>
                <input type="text" id='nome_mineral' placeholder='Nome do mineral'class='outline-none text-center'/>
            </div>
        </form>
        <div class=''>
        <Link to ={'/Lista'}>Lista</Link>
        </div>
    </div>;
}

export default Login;