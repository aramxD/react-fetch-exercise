import styled from "styled-components"
import {Container} from '../elements/Container'
import mockUriel from '../mocks/mockUriel'


const Article = ({className})=>{
    console.log(mockUriel)
    return(
        <div className={className}>
            <Container>
                <h2>Estos son mis articulos en Dev.to</h2>
                {
                    mockUriel.map((article, index)=>{
                        return <p key={article.id}> {article.title}</p>
                    })
                }
            </Container>
        </div>
    )
}

export default styled(Article)`
    background-color:${props=> props?.theme?.prymary || "rgb(42, 42, 42)"};
    color:${props=>props?.theme?.primary ||"rgb(255, 255, 255)"};
    margin:60px;
    padding:60px
`