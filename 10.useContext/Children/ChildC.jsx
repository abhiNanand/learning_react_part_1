import React,{useContext} from 'react';
import {UserContext} from '../App1';



const ChildC= ()=>
{
  const user =useContext(UserContext);
  return(
    <p>

    user name is: {user}
    </p>
  );
}

export default ChildC;