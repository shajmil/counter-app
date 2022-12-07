import { useState} from 'react'
import './App.css';
import { Button } from 'reactstrap';
function App() {
const [counter, setstate] = useState(0)
var increment=() => {
  setstate(counter+1)
}
var decrement=() => {
  if(counter>0){

    setstate(counter-1)
  }
}
var reset=() => {

  setstate(0)
}
  return (
    <div className="App">
      <header className="App-header">
        <div className='border border-3 p-5'>
    <h1> Counter App </h1>
 
    <h2> {counter}</h2>
    <div className="d-flex gap-3" >
   
    <button onClick={increment} className="btn btn-primary" >Increase</button>
    <button onClick={decrement} className="btn btn-danger" >Decrease</button>
    <button onClick={reset} className="btn btn-secondary" >Reset</button>
          </div> 
    </div>
      </header>
    </div>
  );
}

export default App;
