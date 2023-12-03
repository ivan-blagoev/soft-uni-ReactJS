import Navbar from "./components/navbar/Navbar"
import GetStarted from "./components/get-started/GetStarted"
import Searchbar from "./components/searchbar/Searchbar"
import About from "./components/about/About"
import PropertiesList from "./components/properties-list/PropertiesList"
import Footer from "./components/footer/Footer"
import Contact from "./components/contact/Contact"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout"
import Register from "./components/register/Register"
import PropertiesCreate from "./components/properties-create/PropertiesCreate"

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';


function App() {
  
  return (
    
  <AuthProvider>
    <div className="container-xxl bg-white p-0">

  < Navbar />

  <Routes>

     <Route path="/" element ={< GetStarted /> } /> 

     <Route path="/contacts" element ={< Contact /> } />

     <Route path="/about" element= {< About />} />

     <Route path="/properties" element= { <>< Searchbar /> <PropertiesList/> </> } />

     <Route path="/login" element= {< Login />} />

     <Route path="/logout" element= {< Logout />} />
     
     <Route path="/register" element= {< Register />} />

     <Route path="/properties/create" element= {< PropertiesCreate />} />
     

  </Routes>


  < Footer />

  </div>
  </AuthProvider>
  )
}

export default App
