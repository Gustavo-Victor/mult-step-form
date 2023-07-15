import { FormContext } from "../context/FormContext";
import { useContext } from "react";

export const useForm = () => {
    const context = useContext(FormContext); 

    if(context === undefined) { 
        throw new Error ("useForm needs to be used inside FormProvider component"); 
    }

    return context;
}