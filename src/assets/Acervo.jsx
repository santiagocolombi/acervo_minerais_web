import React, { useEffect, useState } from 'react';
import Linksdoacervo from '../Minerais/Linksdoacervo';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Acervo() {
    const [mineral, setMineral] = useState([])

    const getMineralData = async () => {
        const response = await axios.get("http://localhost:3000/mineral/find-many")
        if(response.status === 200){
            setMineral(response.data)
        }
    }

    useEffect(() => {
        getMineralData()
    }, [])


    return <div className='max-w-screen-lg'>
        <h1 className='pb-10  font-medium text-2xl'>Acervo</h1>
        <section className='border-y-2'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, illum possimus. Quia perferendis, sapiente aut, maiores obcaecati officia et tempore minima nulla enim, est sunt accusamus ipsam provident reiciendis. Dolores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora aspernatur, minus cupiditate quod eligendi perferendis recusandae adipisci ipsam cum? Velit culpa laborum sed asperiores libero voluptas beatae est suscipit rem?</p>
        </section>
        <div >

        {mineral.map(mineral => <Linksdoacervo 
        key={mineral.name} 
        pagina={`/mineral/${mineral.name}`} 
        nomemineral={mineral.name} />)}
        
        </div>

        
        
        <Link to = {'/'} class='hover:text-sky-700 hover:underline'>Voltar</Link>
        
        
    </div>;
}

export default Acervo;