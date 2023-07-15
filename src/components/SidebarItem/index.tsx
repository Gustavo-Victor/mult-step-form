import { Link } from "react-router-dom";
import { SidebarItemProps } from "../../types/SidebarTypes";
import { Container, Info, Title, Description, IconArea, Point } from "./styled"; 
import { ReactComponent as BookIcon } from "../../assets/images/book.svg";
import { ReactComponent as MailIcon } from "../../assets/images/mail.svg";
import { ReactComponent as ProfileIcon }  from "../../assets/images/profile.svg";


export default function SidebarItem(props: SidebarItemProps) {
    const { title, description, icon, path, isActive } = props;
    
    return (
        <Container>
            <Link to={path}>                
                <Info> 
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Info>
                <IconArea isActive={isActive}>
                    {icon == "profile" && <ProfileIcon />}
                    {icon == "book" && <BookIcon />}
                    {icon == "mail" && <MailIcon />}
                </IconArea>
                <Point isActive={isActive}></Point>
            </Link>
        </Container>
    )
}