
import './App.css';
import Counter from "./components/Counter"
import Decrease from './components/Decrease';
import Increase from './components/Increase';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';



function App() {
  return (
    <div className="App">
      <Counter/>
      <Increase/>
      <Decrease/>
      <IncreaseByTwoCounter/>
      
     
   
    </div>
  )
}

export default App;
