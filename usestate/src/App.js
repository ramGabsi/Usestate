import './App.css';
import Counter from './Counter';
import {useState} from 'react';


function App() {
  const [delta, setdelta] = useState(1);
  const [max, setMax] = useState(1);
  const [min, setMin] = useState(1);
  function isdelta(e){
    setdelta(Number(e.target.value))
   }
   function isMax(e){
    setMax(Number(e.target.value))
    }
   function isMin(e){
      setMin(Number(e.target.value))
      }


  return (
    <div className="App">
     <p>choose step numebr</p>
   <p> <input type = "Number" value = {delta} onChange = {isdelta} /> </p>
   <p> max numebr in the counter</p>
   <p> <input type = "Number" value = {max} onChange = {isMax} /> </p>
   <p> min numebr in the counter</p>
   <p> <input type = "Number" value = {min} onChange = {isMin} /> </p>
   
    <Counter delta = {delta} max = {max} min = {min}/>
    <Counter delta = {delta} max = {max} min = {min}/>
    </div>
  );
}

export default App;
