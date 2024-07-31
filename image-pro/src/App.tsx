import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import { AuthProvider } from "./Context/auth"
import PublicRoute from "./Routes/PublicRoute"
import PrivateRoute from "./Routes/PrivateRoute"



function App() {

  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <Home/>
        </PrivateRoute>
      }/>
      <Route path="/signup" element={
        <PublicRoute>
          <Signup/>
        </PublicRoute>
      }/>
    </Routes>
    </AuthProvider>
  )
}

export default App
