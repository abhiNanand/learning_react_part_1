 
 

export default function App() {
   
  let count = 0; // Regular variable

  function handleClick() {
    count = count + 1; // Updating count
    console.log(count); // Check updated value in console
   
     
    
  }

  return (
    <>
       <h2>Count: {count}</h2> 
      <button onClick={handleClick}>Increment</button>

    </>
  );
}

 
