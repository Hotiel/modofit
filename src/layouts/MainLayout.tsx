import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import HomeFit from "../pages/ModoFit/HomeFit";
import HomeTrail from "../pages/ModoTrail/HomeTrail";

import NavFit from "../components/Navbar/NavFit";
import NavTrail from "../components/Navbar/NavTrail";

import FooterFit from "../components/Footer/FooterFit";
import FooterTrail from "../components/Footer/FooterTrail";

import FitFaqs from "../pages/ModoFit/Faqs";
import NosotrosFit from "../pages/ModoFit/Nosotros";

import NosotrosTrail from "../pages/ModoTrail/Nosotros";

function MainLayout () {
    
    function LayoutFit () {
        return(
            <div className="container">
                    <NavFit />
                        <Outlet />
                    <FooterFit />
            </div>
        )
    };

        function LayoutTrail () {
        return(
            <div className="container">
                    <NavTrail />
                        <Outlet />
                    <FooterTrail />
            </div>
        )
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutFit />}>
                    <Route index element={<HomeFit />}/>
                    <Route path="faqs" element={<FitFaqs />}/>
                    <Route path="nosotros" element={<NosotrosFit />}/>
                </Route>

                <Route path="/modotrail" element={<LayoutTrail />}>
                    <Route index element={<HomeTrail />}/>
                    <Route path="nosotros" element={<NosotrosTrail />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainLayout