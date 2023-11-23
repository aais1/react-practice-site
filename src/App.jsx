import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Analytics from './components/Analytics' 
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Analytics/>
     <Newsletter/>
     <hr className='h-[10px] bg-gray-700 border-none '/>
     <Footer/>
    </>
  )
}

export default App
