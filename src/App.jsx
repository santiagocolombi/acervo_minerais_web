import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './assets/Login'
import Lista from './assets/Lista'

function App() {

  return ( 
    <div class ='h-screen w-screen flex justify-center items-center text-center'>
      
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Lista' element={<Lista/>}/>
      <Route path='*' element={<h1>Not Found</h1>}/> 
    </Routes>
    </BrowserRouter>
    
    
    </div>

    
  )
}

export default App
