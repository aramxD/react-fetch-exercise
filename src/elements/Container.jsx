import styled from "styled-components";

export const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: min(900px, 80%);
    flex:1;
    
`

export const ContainerRow = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: flex-start;
    
    a{
        margin-right:30px
    }
`