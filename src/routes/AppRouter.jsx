import { BrowserRouter, Routes, Route } from "react-router";
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/*" element={<DashboardRoutes />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
