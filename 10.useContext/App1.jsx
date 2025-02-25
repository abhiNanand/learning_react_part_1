
//Hum bas childA ko value provide karege. usey se child c value access kar sakta hai bina props har baar paass kareye

 import {createContext,useState} from 'react';
 import ChildA from './Childs/ChildA.jsx';

 //step1: create Context
 const UserContext = createContext();

 //step2: wrap all the child inside a provider
 //step3:
 //pass value

 //step4: consumer k andher jaake consume kr lo.

 function App()
 {
  const [user,setUser] =useState("abhishek");
  return(
    <>
    <UserContext.Provider value={user}>
      <ChildA/>
    </UserContext.Provider>
    </>
  );
 }

 export default App
 export {UserContext}
