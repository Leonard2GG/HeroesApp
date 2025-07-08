import { Routes, Route } from "react-router";
import { Navbar } from '../components/ui/Navbar'
import MarvelScreen from '../components/marvel/MarvelScreen';
import DCScreen from '../components/dc/DCScreen';
import SearchScreen from '../components/search/SearchScreen';

export default function DashboardRoutes() {
    return (
        <>
            <Navbar />
            <Routes>

                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DCScreen />} />

                <Route path="/search" element={<SearchScreen />} />
                <Route path="/" element={<MarvelScreen />} />
            </Routes>
        </>
    )
}
