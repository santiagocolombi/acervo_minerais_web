import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './assets/Login'
import Produto from './assets/Produto'

function App() {

  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Produto' element={<Produto/>}/>
      <Route path='*' element={<h1>Not Found</h1>}/> 
    </Routes>
    </BrowserRouter>

  )
}

export default App
