import { useState, useEffect } from "react";


 

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000); // Runs every second

    return () => {
      console.log("Cleanup: Clearing interval");
      clearInterval(interval);
    };
  }, []); // Runs only once

  return <h1>Count: {count}</h1>;
}










// 1. updating page title
// export default function App() {

//   const [count, setCount] = useState(0);

//   useEffect(
//     () => {document.title = `Page${count}`;},[count]);
  
//   return (
//     <>
//       <h1>Count:{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Count</button >
//    </>
// );
// }

//2.fetching data from API(Api calls)
 