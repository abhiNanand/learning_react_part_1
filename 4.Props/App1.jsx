//Challenge 1 of 3: Extract a component 
// This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

import { getImageUrl } from './prop_chall_1/src/utils.jsx';


function Profile({profession,award_no,awards,discovered})
{


  return(
    <>
<ul>
<li>
    <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards:{award_no} </b> 
            ({awards})
          </li>
          <li>
            <b>Discovered: </b>
           {discovered}
      </li>
</ul>

    </>
  );

}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <Profile 
        
        profession={"physicist and chemist"}
        award_no={4}
        awards={"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"}
        discovered={"a method for measuring carbon dioxide in seawater"}

        />
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
         <Profile 
        
        profession={"geochemist"}
        awards_no={2}
        awards={"Miyake Prize for geochemistry, Tanaka Prize"}
        discovered={"a method for measuring carbon dioxide in seawater"}

        />
          
      </section>
    </div>
  );
}




// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria Skłodowska-Curie</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('szV5sdG')}
//           alt="Maria Skłodowska-Curie"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b> 
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (chemical element)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('YfeOqp2')}
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b> 
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }
