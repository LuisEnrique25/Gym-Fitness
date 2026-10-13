import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programas from './components/Programas/Programas'
import { useState } from 'react'
import programsDB from './assets/db/programsDB.json';

function App() {
const [programs, setPrograms] = useState(programsDB);
console.log(programs)
  return (
  <>
    <Navbar/>
    <Hero/>
    <Programas programs={programs}/>
  </>
     

  )
}

export default App
