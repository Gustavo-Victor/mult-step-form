import styled from "styled-components";

export const Container = styled.header`
    padding: 1.5625rem 0 ;
    border-bottom: 1px solid #16195c; 

    h1 {
        font-size: 1.75rem; 
        margin-bottom: 1rem; 
    }

    p {
        font-size: 0.875rem;
        color: #b8b8d4;
        margin-bottom: 0.5rem; 
    }

    @media only screen and (max-width: 1000px) {
        padding-left: 2rem; 
    }

    @media only screen and (max-width: 450px) {
        text-align: center;
        padding: 1.5625rem 0 ;
    }
`; 