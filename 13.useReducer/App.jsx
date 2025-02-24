import {useReducer} from 'react';


// making counter.
// initial state
// should be in object.
const initialState={count:0};

function Reducer(state,action)
{

console.log(1,state);
console.log(2,action);
  switch(action.type)
  {
    // case "INCREMENT":
    //   return {count:state.count+1};
    // case "DECREMENT":
    //   return {count: state.count - 1};
    // case "RESET":
    //   return initialState;
    //   default:
    //     return state;
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return "Unrecognized command";
  }

}
export default function App()
{

  const [state,dispatch] = useReducer(Reducer,initialState);


  return(
<>
<div>


<h2>Counter:{state.count}</h2>
<button onClick={()=>dispatch({type:"INCREMENT"})}>ADD</button>
<button onClick={()=>dispatch({type:"DECREMENT"})}>SUBTRACT</button>
<button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
</div>
</>
  );
}
 

//2.