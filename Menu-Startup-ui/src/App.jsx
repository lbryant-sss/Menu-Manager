import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Howto from "./components/howto/Howto";

import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<RegisterAndLogout />}/>
        <Route path="*" element={<NotFound />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
