import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

function Mineral(){
    const { name } = useParams()
    const [mineral, setMineral] = useState()

    const getMineralData = async (name) => {
      const response = await axios.get(`http://localhost:3000/mineral/find-one?name=${name}`)
      if(response.status === 200){
        setMineral(response.data)
      }
    }

    useEffect(() => {
      getMineralData(name)
    }, [name])

    return(
        <div className='flex justify-center flex-col'>
          {mineral ? 
            <div>
              <p>{mineral.name}</p>
              <p>{mineral.description}</p>
              {mineral?.properties ? <ul>  
                {
                  Object.entries(mineral.properties)
                  .map((item) => 
                    <li key={item[0]}>
                      {item[0]}: {item[1]}
                    </li>)
                  }
              </ul> : 
              <p>Esse mineral não tem propriedades</p>
              }
            </div>
          : 
          <p>mineral não encontrado</p>}
        <Link to = {'/'} className='hover:text-sky-700 hover:underline'>Voltar</Link>

        </div>
    )
}
export default Mineral