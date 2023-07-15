import styled from "styled-components";

export const Container = styled.div<{selected: boolean; }>`
    display: flex;
    border: 2px solid ${props => props.selected ? "#25cd89" : "#16195c"}; 
    border-radius: 10px; 
    padding: 1.25rem; 
    align-items: center; 
    cursor: pointer;
    margin-bottom: 0.93rem; 
    gap: 20px; 

    &:hover {
        border-color: #496459; 
    }
`; 

export const Icon = styled.div`
    width: 60px; 
    height: 60px; 
    border-radius: 50%;
    background-color: #191a59; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5626rem; 

    @media only screen and (max-width: 650px) {
        width: 50px;
        height: 50px;
        font-size: 1.3rem; 
    }

    @media only screen and (max-width: 300px) {
        display: none; 
    }
`; 

export const Info = styled.div`
    flex: 1; 
`; 

export const Title = styled.h3`
    font-size: 1.065rem; 
    font-weight: bold;
    margin-bottom: 0.4375rem; 

`; 

export const Description = styled.p`
    font-size: 0.875rem; 
    color: #b8b8d4; 
`; 
