import styled from "styled-components";

export const Container = styled.div`
    background-color: #02044a; 
    color: #fff; 
    min-height: 100vh; 
`;

export const Area = styled.div`
    margin: auto; 
    max-width: 980px; 
    width: 100%; 
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
`;

export const StepForm = styled.div`
    flex: 1; 
    display: flex;

    @media only screen and (max-width: 650px) {
        flex-direction: column; 
    }
`;

export const Sidebar = styled.div`
    flex: 1;
    max-width: 250px; 
    border-right: 1px solid #16195c; 

    @media only screen and (max-width: 650px) {
        padding: 0 2rem; 
        display: flex;
        align-items: center;    
        justify-content: center;
        max-width: 100%; 
        gap: 0.5rem; 
    }
    
`;

export const Page = styled.div`
    flex: 1; 
    padding: 2.5rem 0 0 2.5rem; 

    p { 
        font-size: 0.8125rem; 
        color: #b8b8d4; 
    }

    h2 {
        font-size: 1.625rem; 
        margin: 0.8rem 0 ;
    }

    hr {
        margin: 0; 
        border: 1px solid #16195c; 
        outline: none; 
        height: 0; 
        margin: 1.875rem 0 ; 
    }

    label {
        font-size: 0.8125rem; 
        display: block; 
        margin-bottom: 1rem; 

        input {
            display: block; 
            margin-top: 0.8rem; 
            outline: none; 
            border: none; 
            width: 100%; 
            padding: 1.25rem; 
            border-radius: 0.625rem; 
            border: 2px solid #16195c; 
            color: #fff; 
            font-size: 0.9rem;
            background-color: #02044a;

            &:focus {
                border: 2px solid #25cd89;
            }

            &::placeholder {
                color: #b8b8d4;
            }
        }        
    }

    .btn-next {
        background-color: #25cd89;
        color: #fff;
        font-weight: bold; 
        font-size: 0.875rem; 
        padding: 1.2rem 2.5rem; 
        border: 0; 
        outline: 0; 
        cursor: pointer;
        border-radius: 1.875rem;
        margin-top: 0.8rem; 

        &:hover {
            opacity: 0.95; 
        }
    }

    .btn-back {
        font-size: 0.875rem; 
        display: inline-block; 
        text-decoration: none;
        padding: 1.2rem 2.5rem; 
        cursor: pointer;
        color: #b8b8d4; 

    }


    @media only screen and (max-width: 650px) { 
        padding: 2rem; 

    }
`;


