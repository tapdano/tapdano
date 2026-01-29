import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home/Home"
import Proposal from "./pages/proposal/Proposal"
import Tutorial from "./pages/Tutorial/Tutorial"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/proposal" element={<Proposal/>} />
                <Route path="/tutorial" element={<Tutorial/>} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}