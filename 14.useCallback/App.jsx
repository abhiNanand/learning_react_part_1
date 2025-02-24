import {useState, useCallback} from 'react'; 

function App() {
  
  const [count,setCount] = useState(0);
  
 const increment=useCallback(()=>
  {
console.log("helo");

    setCount(count+1);

  });

  const decrement=useCallback(()=>
  {
    setCount(count-1);
console.log("d");
  });

  return (
    <>
       
       <h1>Count:{count}</h1>
      <button onClick={increment}> Add </button>
      <button onClick={decrement}> Subtract {decrement}</button>

    </>
  )
}

export default App
