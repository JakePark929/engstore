import React from 'react';
import './SignupCompletePage.css';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button, Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";

const SignupCompletePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Paper elevation={8} className="signupPaper" sx={{borderRadius: 0}}>
                <div className="signup_titleField">
                    <div className="arrowBackIcon" onClick={() => navigate(-1)}>
                        <ArrowBackIcon sx={{fontSize: 35, marginTop: 2}}/>
                    </div>
                    <label className="signupTitle" onClick={() => navigate("/")}>
                        <h3>엔지니어링 설계정보 디지털 변환 플랫폼</h3>
                    </label>
                </div>
    
                <div className="signup_completeField">
                    <div className="signup_completeImg">
                        <h1>이미지</h1>
                    </div>
                    <div className="signup_completeLabel">
                        <h2>가입을 축하드립니다!</h2>
                        <h3>최종 승인을 위해 이메일을 반드시 확인 바랍니다.</h3>
                    </div>
                    <div className="signup_completeButtonField">
                        <Button variant="contained"
                                sx={{width: 160, borderRadius: 30, marginLeft: 4, marginRight: 4}}
                                onClick={() => navigate("/")}
                        >
                            확인
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default SignupCompletePage;