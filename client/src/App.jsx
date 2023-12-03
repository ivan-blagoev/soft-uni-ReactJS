import Navbar from "./components/navbar/Navbar"
import GetStarted from "./components/get-started/GetStarted"
import Searchbar from "./components/searchbar/Searchbar"
import About from "./components/about/About"
import PropertiesList from "./components/properties-list/PropertiesList"
import Footer from "./components/footer/Footer"

import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    
  <div className="container-xxl bg-white p-0">

  < Navbar />

  <Routes>
    
     <Route path="/" element ={< GetStarted /> } /> 

     <Route path="/about" element= {< About />} />

     <Route path="/properties" element= { <>< Searchbar /> <PropertiesList/> </> } />

  </Routes>


  < Footer />

  </div>

  )
}

export default App
