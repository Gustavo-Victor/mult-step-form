import { useForm } from "../../hooks/formHooks";
import { useNavigate } from "react-router-dom";
import { FormActions } from "../../types/FormTypes";
import { useEffect } from "react";
import Theme from "../../components/Theme";
import { Info } from "./styled";


export default function Finish() {
    const { state, dispatch } = useForm();
    const navigate = useNavigate(); 
    const levelDescription = state.level == 0 ? "Iniciante" : "Programador(a) experiente"; 
    const levelIcon = state.level == 0 ? "😅" : "😎"; 

    const handleFinish = () => {
        dispatch({type: FormActions.setName, payload: ""}); 
        dispatch({type: FormActions.setEmail, payload: ""}); 
        dispatch({type: FormActions.setGithub, payload: ""}); 
        dispatch({type: FormActions.setLevel, payload: 0}); 
        dispatch({type: FormActions.setCurrentStep, payload: 1}); 
        navigate("/"); 
    }

    useEffect(() => {
        if(state.currentStep < 3 || state.name == "") {
            navigate("/"); 
        } else {
            dispatch({type: FormActions.setCurrentStep, payload: 4}); 
        }
    }, [state.currentStep, state.name, navigate, dispatch]); 

    return (
        <Theme>
            <div className="finish-step-form">
                <h2>Muito obrigado!</h2>
                <p>Fique de olho no seu celular e em suas redes sociais, logo mais entraremos em contato!</p>
                <hr />
                <Info>
                    <p><strong>Nome:</strong> {state.name}</p>
                    <p><strong>Experiência:</strong> {levelDescription} {levelIcon}</p>
                    <p><strong>E-mail:</strong> {state.email}</p>
                    <p><strong>Github:</strong> {state.github}</p>
                </Info>
                <button onClick={handleFinish} className="btn-next">Voltar</button>
            </div>
        </Theme>
    );
}