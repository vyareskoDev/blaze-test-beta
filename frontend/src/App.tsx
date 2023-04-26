import './App.css'
import HomePage from './pages/HomePage';
import ConstructTest from './pages/ConstructTest';
import {Route, Routes} from "react-router-dom";
import "../src/styles/animations/pageSwitch.css";


function App() {
  return (
    <div className="app">
        <Routes>
              <Route path='/' Component={HomePage}></Route>
              <Route path='/construct-test' Component={ConstructTest}></Route>  
        </Routes>
    </div>
  )
}

export default App
