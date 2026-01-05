
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './assets/components/dashboard'
import { Landing } from './assets/components/landing'

function App() {
 
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
  )
        }


        function Appbar(){
          const navigate = useNavigate();
      return <div>
      <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing page</button>

        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard</button>

      </div>
          </div>
        }
  


export default App