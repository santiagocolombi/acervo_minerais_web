import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './assets/Login'
import Lista from './assets/Lista'

function App() {

  return ( 
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Produto' element={<Lista/>}/>
      <Route path='*' element={<h1>Not Found</h1>}/> 
    </Routes>
    </BrowserRouter>
    
    
    </div>

    
  )
}

export default App
