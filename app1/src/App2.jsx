import { useState } from 'react'

export default function App2()


{
  const [count, setCount] = useState(0)
  console.log("app2");
  return(<>
  
  <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
  </>);  
}