import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "../../hooks/formHooks";
import { FormActions } from "../../types/FormTypes";
import Theme from "../../components/Theme";
import SelectOption from "../../components/SelectOption";


export default function SecondStep() {
    const { state, dispatch } = useForm();
    const navigate = useNavigate(); 

    const handleNextStep = () => {
        if(state.name == "" || state.name == undefined || state.name == null) {
            navigate("/");
        } else {
            navigate("/step3"); 
        }
    }

    const handleChangeLevel = (level: number) => {
        if(level != 0 && level != 1) return ;
        dispatch({type: FormActions.setLevel, payload: level}); 
    }

    console.log(state.level); 

    useEffect(() => {
        if(state.name == "") {
            navigate("/"); 
        } else if (state.currentStep == 4) {
            navigate("/finish"); 
        } else {
            dispatch({
                type: FormActions.setCurrentStep, 
                payload: 2
            }); 
        }
    }, [dispatch, navigate, state.name, state.currentStep]);

    return (
        <Theme>
            <div className="step2">
                <p>Passo 2/3</p>
                <h2>{state.name}, o que melhor descreve você?</h2>
                <p>Escolha a melhor opção que condiz com seu estado atual profissionalmente.</p>
                <hr />

                <SelectOption 
                title="Sou iniciante"
                description="Comecei a programar há menos de 2 anos..."
                icon={"😅"}
                selected={state.level === 0}
                handleClick={() => handleChangeLevel(0)}
                />
                

                <SelectOption 
                title="Sou programador(a)"
                description="Já programo há 2 anos ou mais..."
                icon={"😎"}
                selected={state.level === 1}
                handleClick={() => handleChangeLevel(1)}
                />

                <Link to="/" className="btn-back">Voltar</Link>
                <button onClick={handleNextStep} className="btn-next">Próximo</button>
            </div>            
        </Theme>
    );
} 

