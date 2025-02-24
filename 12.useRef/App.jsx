import { useRef,useState } from 'react'
 
//1. export default  function App() {


//   const value= useRef(0); //creates a ref with initial value 0
//   const [count,setCount]=useState(0);
//   function increment()
//   {

//     value.current+=1;
//     console.log(value);
//   }
  
//   return (
//     <>
       
//        <h3> {value.current}</h3>   
//        <button onClick={increment}>Increment</button>
//     </>
//   );
// }

//2. this code also do the same things but problem with this code is the whenever we re-render value will be set back to 0 but if useRef will be there value will be 0 onl initial , we will not lost any changes
// export default  function App() {


//   let value= 0; //creates a ref with initial value 0
//   const [count,setCount]=useState(0);
//   function increment()
//   {

//     value+=1;
//     console.log(value);
//   }
   
  
//   return (
//     <>
       
//        <h3> {value}</h3>   
//        <button onClick={increment}>Increment</button>
//     </>
//   );
// }

//3.Holding a Reference to a dom element

// export default function App() {
//   const inputRef = useRef(null);

//   function focusInput() {
//    inputRef.current.focus(); // Directly interact with DOM
//   }

//   return (
//     <>
//       <input ref={inputRef} type="text" placeholder="Type here..." />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }


