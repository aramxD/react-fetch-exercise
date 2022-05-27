import styled from "styled-components"
import { useContext } from "react"
import {UserContext} from '../context/UserContext'
import { SecondaryButton } from "../collections/Buttons"

const DevChanger = ({className})=>{
    let [userData, setUserData] = useContext(UserContext)
    
    let changeUserName = ()=>{
        let newUserName = userData.devToUsername === "julio_santacruz" ? "microsoft" : "julio_santacruz"
        
        setUserData({...userData, devToUsername: newUserName})
         
    }


    return(
    

    <div className={className}>
        <p>
            Tambien puedes 
        </p>
        <SecondaryButton onClick={changeUserName}>
            ver los
            { userData.devToUsername === "julio_santacruz" ? " los de microsoft" : " mios"}
        </SecondaryButton>
         
    </div>

)
}


export default styled(DevChanger)`
    display:flex;
    margin:0;
`