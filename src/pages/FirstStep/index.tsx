import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme";
import { useForm } from "../../hooks/formHooks";
import { FormActions } from "../../types/FormTypes"; 
import { ChangeEvent, useEffect } from "react";

export default function FirstStep() {
    const navigate = useNavigate(); 
    const { state, dispatch } = useForm();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: FormActions.setName, payload: e.target.value});   
    }

    const handleNextStep = () => {
        if(state.name != "" && state.name != null && state.name != undefined) {
            navigate('/step2');
        } else {
            window.alert('Preencha os dados.'); 
        }
    }

    useEffect(() => {
        if(state.currentStep == 4) {
            navigate("/finish"); 
        } else {
            dispatch({
                type: FormActions.setCurrentStep, 
                payload: 1
            }); 
        }
    }, [dispatch, navigate, state.currentStep]);

    return (
        <Theme>
            <div className="step1">
                <p>Passo 1/3</p>
                <h2>Vamos começar com seu nome</h2>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr/>

                <label htmlFor="name">
                    Seu nome completo
                    <input 
                    type="text"
                    id="name"
                    value={state.name || ""}
                    placeholder="Ex: João Martin da Silva..."
                    autoFocus
                    required
                    maxLength={60}
                    onChange={handleChange}
                     />
                </label>

                <button onClick={handleNextStep} className="btn-next">Próximo</button>
            </div>
        </Theme>
    );
} 

