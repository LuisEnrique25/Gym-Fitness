import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programas from './components/Programas/Programas'
import Pricing from './components/Pricing/Pricing'
import About from './components/About/About'
import { useState } from 'react'
import programsDB from './assets/db/programsDB.json';
import pricesDB from './assets/db/pricesDB.json'

function App() {
  const [programs, setPrograms] = useState(programsDB);
  const [prices, setPrices] = useState(pricesDB);
  console.log(programs)
  console.log(prices)
  return (
  <>
    <Navbar/>
    <Hero/>
    <Programas programs={programs}/>
    <About/>
    <Pricing/>
  </>
     

  )
}

export default App
