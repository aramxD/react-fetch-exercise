import styled from "styled-components"
import Article from "../components/Article"
import {Container, ContainerRow} from '../elements/Container'


const Articles = ({className})=>{
    let mockUriel = []
    return(
        <div className={className}>
            <Container>
                <h2>Estos son mis articulos en Dev.to</h2>
                <ContainerRow>
                {
                    mockUriel.map((article)=>{
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
    padding:60px
    
`