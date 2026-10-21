import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programas from './components/Programas/Programas'
import Pricing from './components/Pricing/Pricing'
import About from './components/About/About'
import { useState } from 'react'
import programsDB from './assets/db/programsDB.json';
import plansDB from './assets/db/plansDB.json'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProgressBar from './components/ProgressBar/ProgressBar'

function App() {
  const [programs, setPrograms] = useState(programsDB);
  const [plans, setPlans] = useState(plansDB);
  console.log(plans)
  return (
  <>
    <ProgressBar/>
    <Navbar/>
    <Hero/>
    <Programas programs={programs}/>
    <About/>
    <Pricing plans={plans}/>
    <Contact/>
    <Footer/>
  </>
     

  )
}

export default App
