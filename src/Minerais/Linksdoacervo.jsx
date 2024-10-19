import { Link } from "react-router-dom";

function Linksdoacervo({pagina, nomemineral}){
    return(
        <div className='flex justify-center flex-col' >
        <Link to= {pagina} className="className= hover:text-sky-700 hover:underline">&#8226; {nomemineral}</Link>
        </div>
    )
}
export default Linksdoacervo