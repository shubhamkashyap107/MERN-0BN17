import Ad from "./components/Ad"
import Hero from "./components/Hero"
import Introduce from "./components/Introduce"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App()
{
  return (
    <>
      <Navbar />
      <div style={{display : "flex"}}>
        <Sidebar />
        <Hero />
        <Ad />
      </div>
      {/* <Introduce name="Shubham" age={16} city="Delhi" /> */}
    </>
  )
}

export default App