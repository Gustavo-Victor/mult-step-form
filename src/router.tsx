import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import FirstStep from "./pages/FirstStep";
import SecondStep from "./pages/SecondStep";
import ThirdStep from "./pages/ThirdStep";
import NotFound from "./pages/NotFound";
import Finish from "./pages/Finish";

export const Router = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<FirstStep />} />
                <Route path="/step2" element={<SecondStep />} />
                <Route path="/step3" element={<ThirdStep />} />
                <Route path="/finish" element={<Finish />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}