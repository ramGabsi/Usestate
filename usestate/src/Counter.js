
import { useState } from "react";
function Counter(props) {
    const {delta} = props
    const {max} = props
    const {min} = props
   const [count, setCount] = useState(0);


   function addone () {
    setCount(
      function(oldCount){
        if (oldCount >= max){
        return 0 }
      
        return oldCount + delta
      }
    )
   }

   function minusone () {
    setCount(
      function(oldCount){
        if (oldCount <= min){
        return 0 }
      
        return oldCount - delta
      }
    )
    }
   function resat () {

    return setCount(0)
   }
  
  return (
    <div >
    <h1> Counter </h1>
    <p> counter is at {count}</p>
    <button onClick={addone}> 
    + {delta} </button>
    <button onClick={resat}> 
    resat </button>
    <button onClick={minusone}> 
    - {delta} </button>
    </div>
  );

  }
export default Counter;
