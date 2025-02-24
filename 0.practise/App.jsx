import { useEffect ,useState} from "react";

// function App() {
   
//   useEffect(()=>{

//     console.log("component mounter");
//     return ()=>{
//       console.log("component unmounterd"); //cleanup code here
//     };

//   },[]);

//   return (
//     <>
//       hello world
//     </>
//   )
// }

// export default App

export default function App()
{



  const [count,setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("mounting");
      setCount((prev) => prev + 1);
    } , 1000);

    return () => {
      console.log("unmounting");
      clearInterval(interval); // Cleanup interval when unmounting
    };
  }, []);

  return <h1>Timer: {count}</h1>;
};