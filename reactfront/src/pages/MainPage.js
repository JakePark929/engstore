import React from 'react';
import './MainPage.css';
import {Button, Paper} from "@mui/material";
import LoginField from "../component/main/LoginField";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div className="mainContainer">
            <Paper elevation={8} className="mainPaper" sx={{borderRadius: 12}}>

                <label className="mainTitle" onClick={()=>navigate("/")}>
                    <h2>엔지니어링 설계정보 디지털 변환 플랫폼</h2>
                </label>

                <div className="mainField">
                    <div className="imgField">
                        <img className="mainImg" src="img/network.png"/>
                    </div>

                    <div className="borderLine"></div>

                    <LoginField/>
                </div>

            </Paper>
        </div>
    );
};

export default MainPage;