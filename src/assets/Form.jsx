import { useState } from "react";

function Form(){
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[message, setMessage] = useState('')
    return(
    <div>
        <form onSubmit={() =>{}} className="flex-col border-2">
            <input type='text' placeholder='Digite seu nome'
            onChange={(e) => setName(e.target.value)}
            value={name} className="flex border-b-2"/>
            <input type="text" placeholder='Digite seu E-mail'
            onChange={(e)=>setName(e.target.value)} 
            value={email} className="flex border-b-2"/>
            <textarea  placeholder='Digite sua mensagem'
            onChange={(e)=>setMessage(e.target.value)}
            value={message} className="flex"/>

        </form>
        
    </div>

    )

}
export default Form