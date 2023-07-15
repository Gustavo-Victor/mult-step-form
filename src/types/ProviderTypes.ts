import { FormAction, FormData } from "./FormTypes"; 
import { ReactNode } from "react";

export interface ContextProviderType {
    state: FormData, 
    dispatch: (action: FormAction) => void;  
}

export interface ContextProviderProps {
    children: ReactNode
}