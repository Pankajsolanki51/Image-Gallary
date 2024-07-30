import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import { AuthProvider } from "./Context/auth"


function App() {

  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </AuthProvider>
  )
}

export default App
