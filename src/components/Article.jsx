import styled from "styled-components";
import {LinkSecondaryButton} from "../collections/Buttons"



const Article = ({className, article})=>{
    return(
        <div className={className}>
            <img src={article.social_image} alt={article.title} />
            <div>
            <h3>{article.title}</h3>
            <LinkSecondaryButton href={article.url}>Leer mas</LinkSecondaryButton>
        </div></div>
    )
}


export default styled(Article)`
    
    box-shadow: 0px 0px 12px rgba(0,0,0,.1);
    border:1px solid #e6e6e6;
    width: min(250px, 100%);
    border-radius: 20px;
    margin: 10px 10px;

    div{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        margin:  0;
        padding:.7rem;
        text-align:center;
    }
    h3{
        margin:0
    }
    a{
        
    }

    img{
        width:100%;
        border-top-left-radius:20px;        
        border-top-right-radius:20px;

    }
`