import { useNavigate, Link } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";
import { useForm } from "../../hooks/formHooks";
import { FormActions } from "../../types/FormTypes";
import Theme from "../../components/Theme";

export default function ThirdStep() {
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value; 
        dispatch({type: FormActions.setEmail, payload: email}); 
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        const githubURL = e.target.value; 
        dispatch({type: FormActions.setGithub, payload: githubURL}); 
    }

    const handleNextStep = () => {
        if(state.email != "" && state.github != "") {
            console.log(state);
            navigate("/finish");  
        } else {
            alert("Preencha os dados!"); 
        }
    }
    
    useEffect(() => {
        if(state.name == "" || state.name == undefined || state.name == null) {
            navigate("/"); 
        } else if (state.currentStep == 4) {
            navigate("/finish"); 
        } else {
            dispatch({type: FormActions.setCurrentStep, payload: 3}); 
        }
    }, [dispatch, navigate, state.name, state.currentStep]); 


    return (
        <Theme>
            <div className="step3">
                <p>Passo 3/3</p>
                <h2>Legal {state.name}, onde te achamos?</h2>
                <p>Preencha os campos abaixo com seus dados de contato.</p>
                <hr />

                <label htmlFor="email">
                    Qual seu e-mail? 
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ex: email@email.com"
                    value={state.email || ""}
                    required 
                    autoFocus
                    maxLength={50} 
                    onChange={handleEmailChange} />
                </label>

                <label htmlFor="github">
                    Qual seu Github? 
                    <input 
                    type="url"
                    name="github"
                    placeholder="ex: https://github.com/myUserName"
                    value={state.github || ""}
                    id="github"                                        
                    maxLength={60}
                    onChange={handleGithubChange}  />
                </label>

                <Link className="btn-back" to={"/step2"}>Voltar</Link>
                <button onClick={handleNextStep} className="btn-next">Finalizar</button>
            </div>
        </Theme>
    );
} 

