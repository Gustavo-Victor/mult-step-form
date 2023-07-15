export interface FormData {
    name: string; 
    currentStep: 1 | 2 | 3 | 4; 
    level: 0 | 1; 
    email: string; 
    github: string; 
}


export enum FormActions {
    setCurrentStep, 
    setName, 
    setLevel, 
    setEmail,
    setGithub
}

export interface FormAction {
    type: FormActions, 
    payload: number | string; 
}