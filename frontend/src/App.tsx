import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Newgame from "./Pages/Newgame"
import Rules from "./Pages/Rules"


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/newgame" element={<Newgame/>}/>
          <Route path="/rules" element={<Rules/>}/>
          {/* <Route path="/*" element={} /> */}
      </Routes>
    </div>
  )
}

export default App