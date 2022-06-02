import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Clothes } from './components/Clothes'
import { Painting } from './components/Paintings'
import { Electronics } from './components/Electronics'
import { Footer } from './components/Footer'
import { About } from './components/Footerpages/About'
import { Contact } from './components/Footerpages/Contact'
import { FAQ } from './components/Footerpages/FAQ'
import { ProductDetails } from './components/ProductDetails'
import { Cart } from './components/Cart'
import {NoteFound} from "./components/NoteFound"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}  />
       <Route path='/Clothes' element={<Clothes/>}  />
       <Route path='/Paintings' element={<Painting/>}  />
       <Route path='/Electronics' element={<Electronics/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/FAQ' element={<FAQ/>}/>
       <Route path='/ProductDetails/id' element={<ProductDetails/>} />
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='*' element={<NoteFound/>} />
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
