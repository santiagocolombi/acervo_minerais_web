import React from 'react';
import { Link } from 'react-router-dom';
function Login(){
    return <div>
        <h1>Acervo de minerais</h1>
        <form>
            <label htmlFor='nome_mineral'>Nome do minera</label>
        <input type="text" id='nome_mineral'/>
        
        </form>
        <Link to ={'/Produto'}>Lista de minerais</Link>
        
    </div>;
}

export default Login;