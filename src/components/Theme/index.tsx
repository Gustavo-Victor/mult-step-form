import { ReactNode } from "react";
import Header from "../Header";
import SidebarItem from "../SidebarItem";
import { Container, Area, StepForm, Page, Sidebar } from "./styled"; 
import { useForm } from "../../hooks/formHooks";

type ThemeProps = {
    children: ReactNode; 
}

export default function Theme({ children } : ThemeProps) {
    const { state } = useForm();

    return (
        <Container>
            <Area>
                <Header />
                <StepForm>
                    <Sidebar>
                        <SidebarItem 
                        title="Pessoal"
                        description="Se identifique"
                        icon="profile"
                        path="/"
                        isActive={state.currentStep === 1}
                         />
                        <SidebarItem
                        title="Profissional"
                        description="Seu nível"
                        icon="book"
                        path="/step2"
                        isActive={state.currentStep === 2}
                        />
                        <SidebarItem
                        title="Contatos"
                        description="Como te achar"
                        icon="mail"
                        path="/step3"
                        isActive={state.currentStep === 3}
                        />
                    </Sidebar>
                    <Page>{children}</Page>
                </StepForm>
            </Area>
        </Container>
    )
}