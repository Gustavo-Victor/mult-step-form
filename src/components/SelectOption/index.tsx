import { SelectOptionProps } from "../../types/OptionTypes";
import { Container, Icon, Title, Info, Description } from "./styled"; 


export default function SelectOption(props : SelectOptionProps) { 
    const { title, description, icon, selected, handleClick } = props;

    return (
        <Container onClick={handleClick} selected={selected}>
            <Icon >{icon}</Icon>
            <Info>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Info>
            
        </Container>
    )
}