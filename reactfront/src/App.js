import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Footer from "./component/Footer";
import MainPage from "./pages/MainPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SignupPage from "./pages/SignupPage";
import SignupCompletePage from "./pages/SignupCompletePage";
import ModuleMainPage from "./pages/ModuleMainPage";
import ModuleHeader from "./component/ModuleHeader";
import React from "react";

function App() {
    const loc = useLocation();
    const firstUrl = loc.pathname.split('/')
    return (
        <div className="App">
            {firstUrl[1] === 'module'?<ModuleHeader/>:''}
            <div className="container">
                <Routes>
                    <Route path="*" exact={true} element={<MainPage/>}/>
                    <Route path="/policy" exact={true} element={<PrivacyPolicyPage/>}/>
                    <Route path="/signup" exact={true} element={<SignupPage/>}/>
                    <Route path="/signup-complete" exact={true} element={<SignupCompletePage/>}/>
                    <Route path="/module/main" exact={true} element={<ModuleMainPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
