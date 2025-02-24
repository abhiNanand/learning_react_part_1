import {useState} from 'react';

 
export default function App()
{


  const [counter,setCounter]= useState(0);

function handleClick()
{

    setCounter(counter+1);
    console.log(counter);//checking updated value in console.

}

function decrement()
{


setCounter(counter-1);
console.log(counter);


}

function reset()
{
  

setCounter(0);
console.log(counter);


}



return(
    <>
    
    <h2>Count:{counter}</h2>
    <button onClick={handleClick}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    
    </>
);

}