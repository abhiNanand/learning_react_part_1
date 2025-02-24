 
import {useState} from 'react';


function Panel({title,children, isActive,onShow})
{


  return(
<>

<div className="section">

<h3> {title}</h3>
{isActive ? ( <p>{children}</p> ):(<button onClick={onShow}>Show</button>)} 

</div>

</>
  
  );
 
 

}

function App() {
 const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h3>Abhishek Anand, Vaishali</h3>
      <Panel
      

      title="About"
      isActive = {activeIndex === 0}
      onShow={()=>setActiveIndex(0)}
      > 

   My name is Abhi. I am from Vaishali Bihar. I had done my B.Tech in CSE from Lovely Professional University from sep 2021 to May 2025.

      </Panel>

      <Panel
      title="Role"
      isActive={activeIndex===1}
      onShow={()=>setActiveIndex(1)}
      >
        My role in my company is of a react developer. I had learnt html, css, js. I am doing managing state topic in react.
      </Panel>
    
    </>
  );
}

export default App
