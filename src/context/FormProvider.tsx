import { useReducer} from "react";
import { FormContext } from "./FormContext";
import { FormActions, FormData, FormAction } from "../types/FormTypes";
import { ContextProviderProps } from "../types/ProviderTypes";


const formReducer = (state: FormData, action: FormAction) => {
    switch(action.type) {
        case FormActions.setCurrentStep: 
            return { 
                ...state,
                currentStep: action.payload
            }
        case FormActions.setName: 
            return { 
                ...state,
                name: action.payload
            }
        case FormActions.setLevel: 
            return { 
                ...state,
                level: action.payload
            }
        case FormActions.setEmail: 
            return { 
                ...state,
                email: action.payload
            } 
        case FormActions.setGithub: 
            return { 
                ...state,
                github: action.payload
            }
        default: 
            return state; 
    }  
}

const initialState: FormData = {
    name: "",
    currentStep: 1, 
    level: 0,
    email: "", 
    github: "" 
}


export default function FormProvider( { children }: ContextProviderProps) {
    const [state, dispatch] = useReducer(formReducer, initialState); 
    const value = { state, dispatch };

    return (
    <FormContext.Provider value={value}>
        {children}
    </FormContext.Provider>);
} 