import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    margin: 1.875rem 0 ;
    cursor: pointer; 

    a {
        display: flex;
        align-items: center; 
        text-decoration: none; 
        flex-wrap: wrap;
    }

    @media only screen and (max-width: 650px) {
        margin: 1.5rem 0;    

        a {
            justify-content: center;
        }     
    }
`; 

export const Info = styled.div`
    flex: 1;
    margin-right: 1.25rem; 

    @media only screen and (max-width: 650px) {
        margin-right: 0;
        max-width: 60%;
    }

    @media only screen and (max-width: 450px) {
        display: none; 
    }
`; 

export const Title = styled.h4`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px; 
    font-size: 0.9rem; 
    color: #fff;

    @media only screen and (max-width: 650px) {
        text-align: left;         
    }
`; 

export const Description = styled.p`
    text-align: right; 
    font-size: 0.8125rem; 
    color: #b8b8d4; 

    @media only screen and (max-width: 650px) {
        text-align: left;         
    }
`; 

export const IconArea = styled.div<{isActive: boolean;}>`
    width: 50px; 
    height: 50px;
    border-radius: 50%; 
    background-color: ${props => props.isActive ? "#25cd89": "#494a7c"};  
    display: flex;
    justify-content: center; 

    svg {
        fill: white;
        width: 60%;
    }
    
    @media only screen and (max-width: 650px) {
        width: 30px;
        height: 30px;         
    }
`; 

export const Point = styled.div<{isActive: boolean;}>`
    width: 13px;
    height: 13px; 
    border: 3px solid #494a7c;  
    border-radius: 50%; 
    margin-left: 30px; 
    margin-right: -7px;
    background-color: ${props => props.isActive ? "#25cd89": "#494a7c"};

    @media only screen and (max-width: 650px) {
        display: none;
        margin: 0;
        padding: 0; 
    }
`; 