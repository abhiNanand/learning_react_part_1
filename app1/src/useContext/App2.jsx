import React from 'react';

export const UserContext = React.createContext();


function User()
{
    const value = React.useContext(UserContext);
    return <h1>{value}</h1>
}



export default function App2()
{
    return(
        <UserContext.Provider value="Reed">
            <User/>
        </UserContext.Provider>
    );
}