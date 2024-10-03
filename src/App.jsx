import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './assets/Login'
import Lista from './assets/Lista'
import Acervo from './assets/Acervo'
import Contato from './assets/Contato'
import QuemSomos from './assets/QuemSomos'

function App() {

  return ( 
    <div >
      <div>
      
      </div>
      
      <div class =' flex justify-center items-center text-center'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Lista' element={<Lista/>}/>
      <Route path='/NossoAcervo' element={<Acervo/>}/>
      <Route path='/Contato' element={<Contato/>}/>
      <Route path='/QuemSomos' element={<QuemSomos/>}/>
      <Route path='*' element={<h1>Not Found</h1>}/> 
    </Routes>
    </BrowserRouter>
    
    </div>
    </div>

    
  )
}

export default App
