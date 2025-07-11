import { Routes, Route } from "react-router";
import { Navbar } from '../components/ui/Navbar'
import MarvelScreen from '../components/marvel/MarvelScreen';
import DCScreen from '../components/dc/DCScreen';
import HeroScreen from '../components/hero/HeroScreen';
import SearchScreen from '../components/search/SearchScreen';

export default function DashboardRoutes() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DCScreen />} />
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                </Routes>
            </div>

        </>
    )
}
