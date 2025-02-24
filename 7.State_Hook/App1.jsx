import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number =>number + 5);
        setNumber(number =>number + 5);
        setNumber(number + 2  );
        setNumber(number =>number + 5);
        console.log(number);
      }}>button</button>
    </>
  )
}
