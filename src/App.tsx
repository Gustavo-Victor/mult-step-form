import FormProvider from "./context/FormProvider"; 
import { Router } from "./router";

export default function App() {
  
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}
