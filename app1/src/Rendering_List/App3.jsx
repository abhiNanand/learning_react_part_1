

// 1. showing array items as list on screeen.

// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];

//   function ListItem()
//   {


//     const a = people.map(person=><li>{person}</li>)

//     return a;

//   }
// export default function App3(){




//     return(
//         <>

//         <ListItem></ListItem>
//         </>
//     );
// }

//2. showing object.let say show people whose profession is chemist.

const people = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];
  
  function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }

// export default function App3() {

//     const chemist = people.filter(person => person.profession === 'chemist');

//     const listItems = chemist.map(person =>
//         <li>
//             <img
//                 src={getImageUrl(person)}
//                 alt={person.name}
//             />
//             <p>

//                 <b>{person.name}:</b>
//                 {' ' + person.profession + ' '}
//                 id is {person.id}

//             </p>
//         </li>
//     );

//     return (
//         <>
//             <ul>{listItems}</ul>
//         </>
//     );
// }

//3.using keys 
export default function List() {
    const listItems = people.map(person =>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
      </li>
    );
    return <ul>{listItems}</ul>;
  }
  