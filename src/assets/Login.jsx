import React from 'react';
import { Link } from 'react-router-dom';
function Login(){
    return <div>
        <h1>Acervo de minerais</h1>
        <Link to ={'/Produto'}>Lista de minerais</Link>
        
    </div>;
}

export default Login;