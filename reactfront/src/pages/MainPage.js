import React from 'react';
import './MainPage.css';
import {Button, Paper} from "@mui/material";
import LoginField from "../component/main/LoginField";
import {Route, Routes, useNavigate} from "react-router-dom";
import FindEmailField from "../component/main/FindEmailField";
import FindPwField from "../component/main/FindPwField";

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div className="mainContainer">
            <Paper elevation={8} className="mainPaper" sx={{borderRadius: 12}}>
                <div className="mainTitle">
                    <label onClick={() => navigate("/")}>
                        <h2>엔지니어링 설계정보 디지털 변환 플랫폼</h2>
                    </label>
                </div>
                <div className="mainField">
                    <div className="imgField">
                        <img className="mainImg" src="img/network.png"/>
                    </div>

                    <div className="borderLine"></div>
                    <Routes>
                        <Route path="/" exact={true} element={<LoginField/>}/>
                        <Route path="/find-email" exact={true} element={<FindEmailField/>}/>
                        <Route path="/find-pw" exact={true} element={<FindPwField/>}/>
                    </Routes>
                </div>
            </Paper>
        </div>
    );
};

export default MainPage;