import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './assets/Login'
import Lista from './assets/Lista'
import Acervo from './assets/Acervo'
import Contato from './assets/Contato'
import QuemSomos from './assets/QuemSomos'
import Footer from './assets/Footer'
import Sulfetos from './assets/Classes/Sulfetos'
import Sulfatos from './assets/Classes/Sulfatos'
import Silicatos from './assets/Classes/Silicatos'
import OxidosEHidroxidos from './assets/Classes/OxidosEHidroxidos'
import Haloides from './assets/Classes/Haloides'
import Fosfatos from './assets/Classes/Fosfatos'
import ElementN from './assets/Classes/ElementN'
import Carbonatos from './assets/Classes/Carbonatos'
import Wolframatos from './assets/Classes/Wolframatos'
import Ciclo  from './assets/Classes/Subclasses/Ciclo'
import Filo from './assets/Classes/Subclasses/Filo'
import Ino  from './assets/Classes/Subclasses/Ino'
import Neso from './assets/Classes/Subclasses/Neso'
import Soro from './assets/Classes/Subclasses/Soro'
import Tecto from './assets/Classes/Subclasses/Tecto'





function App() {

  return ( 
    <div>
      
      
      <div className='flex flex-col justify-center items-center text-center'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Lista' element={<Lista/>}/>
      <Route path='/NossoAcervo' element={<Acervo/>}/>
      <Route path='/Contato' element={<Contato/>}/>
      <Route path='/QuemSomos' element={<QuemSomos/>}/>
      <Route path='/ElementN' element={<ElementN/>}/> 
      <Route path='/Sulfetos' element={<Sulfetos/>}/> 
      <Route path='/Haloides' element={<Haloides/>}/> 
      <Route path='/OxidosEHidroxidos' element={<OxidosEHidroxidos/>}/> 
      <Route path='/Fosfatos' element={<Fosfatos/>}/> 
      <Route path='/Sulfatos' element={<Sulfatos/>}/> 
      <Route path='/Carbonatos' element={<Carbonatos/>}/> 
      <Route path='/Silicatos' element={<Silicatos/>}/> 
      <Route path='/Wolframatos' element={<Wolframatos/>}/>
      <Route path='/Ciclo' element={<Ciclo/>}/>
      <Route path='/Filo' element={<Filo/>}/>
      <Route path='/Ino' element={<Ino/>}/>
      <Route path='/Neso' element={<Neso/>}/>
      <Route path='/Soro' element={<Soro/>}/>
      <Route path='/Tecto' element={<Tecto/>}/>
      
      <Route path='*' element={<h1>Not Found</h1>}/> 

    </Routes>
    </BrowserRouter>
    
    </div>
    <Footer/>
    </div>

    
  )
}

export default App
