import { useContext } from "react";
import styled from "styled-components";
import avatar from '../assets/img/avartar.jpg'
import {Container, ContainerRow} from "../elements/Container";
import StyledSpan from "../elements/StyledSpan";
import { CircleImage } from "../elements/CircleImg";
import { H1title, InfoContainer } from "../elements/StyledTitle";
import { LinkPrimaryButton, LinkSecondaryButton } from "../collections/Buttons";
import { UserContext } from "../context/UserContext"

const Header = ({className}) =>{
    let [userData] = useContext(UserContext)
    return(
    <Container>
    <header className={className}>
        <InfoContainer>
            <H1title> Bienvenid@s, soy
                <StyledSpan>Julio Santacruz</StyledSpan>
            Desarrollador web
            </H1title>
            <ContainerRow>
            <LinkPrimaryButton>Mis Proyectos</LinkPrimaryButton>
            <LinkPrimaryButton>Descargar mi CV</LinkPrimaryButton>
            </ContainerRow>
            
            <LinkSecondaryButton>Lee mis articulos ({userData.articlesFromDevTo.length})</LinkSecondaryButton>
        </InfoContainer>
        <CircleImage src={avatar} alt="Foto de Julio" />
    </header>
    </Container>
    );
}

export default styled(Header)`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items:center;
padding: 40px 0 20px 0;


`;


