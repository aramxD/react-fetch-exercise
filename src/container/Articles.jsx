import { useContext } from "react"
import styled from "styled-components"
import Article from "../components/Article"
import { UserContext } from "../context/UserContext"
import {Container, ContainerRow} from '../elements/Container'
import DevChanger from "./DevChanger"


const Articles = ({className})=>{
    let [userData] = useContext(UserContext)
    return(
        <div className={className}>
            <Container>
                <h2>Estos son mis articulos en Dev.to</h2>
                <DevChanger/>
                <ContainerRow>
                {
                    userData.articlesFromDevTo.map((article)=>{
                        return <Article article={article} key={article.id}/>
                    })
                }</ContainerRow>
            </Container>
        </div>
    )
}

export default styled(Articles)`
    
    background-color:${props=> props?.theme?.prymary || "rgb(42, 42, 42)"};
    color:${props=>props?.theme?.primary ||"rgb(255, 255, 255)"};
    //margin:60px 0;
    padding: 20px 60px;

    h2{
        margin-bottom:0;
    }
    
`