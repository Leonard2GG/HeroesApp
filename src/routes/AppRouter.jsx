import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from '../components/ui/Navbar';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/*" element={<DashboardRoutes />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
