import './App.css'
import HomePage from './pages/HomePage';
import ConstructTest from './pages/ConstructTest';
import {Route, Routes} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "../src/styles/animations/pageSwitch.css";


function App() {
  return (
    <div className="app">
      <TransitionGroup>
        <Routes>
            <CSSTransition timeout={200} classNames="left"> 
              <Route path='/' Component={HomePage}></Route>
            </CSSTransition>
            <CSSTransition timeout={200} classNames="right">
              <Route path='/construct-test' Component={ConstructTest}></Route>  
            </CSSTransition>   
        </Routes>
      </TransitionGroup>
    </div>
  )
}

export default App
