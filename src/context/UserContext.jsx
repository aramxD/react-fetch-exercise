import { createContext, useEffect, useState } from "react";
//import articlesDevToMock from '../mocks/mockUriel'

export const UserContext = createContext();


const userDataContext = {
    devToUsername: 'julio_santacruz',
    articlesFromDevTo: [],
}


export const UserProvider = ({children})=>{
    let [userData, setUserData] = useState(userDataContext)
    
    useEffect(()=>{
        
        async function fetchDevTo(){
            const response = await fetch("https://dev.to/api/articles?username="+userData.devToUsername)
            const articles = await response.json();
            setUserData({
                ...userData,
                articlesFromDevTo: articles,
            })
    }

    fetchDevTo()
    },[userData.devToUsername])

    


    return (<UserContext.Provider value={[userData, setUserData]}> {children} </UserContext.Provider>)
}

