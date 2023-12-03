import Navbar from "./components/navbar/Navbar"
import GetStarted from "./components/get-started/GetStarted"
import Searchbar from "./components/searchbar/Searchbar"
import About from "./components/about/About"
import PropertiesList from "./components/properties-list/PropertiesList"
import Footer from "./components/footer/Footer"

function App() {
  
  return (
    
  <div className="container-xxl bg-white p-0">

  < Navbar />

  < GetStarted />

  < About />

  < Searchbar />
  < PropertiesList />

  < Footer />

  </div>

  )
}

export default App
