import React from 'react';
import './PrivacyPolicyPage.css'
import {Checkbox, Paper, TextareaAutosize} from "@mui/material";
import {useNavigate} from "react-router-dom";
import SignupButtonField from "../component/main/SignupButtonField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PrivacyPolicyPage = () => {
    const navigate = useNavigate();
    return (
        <div className="policyContainer">
            <Paper elevation={8} className="signupPaper" sx={{borderRadius: 0}}>
                <div className="signup_titleField">
                    <div className="arrowBackIcon" onClick={() => navigate(-1)}>
                        <ArrowBackIcon sx={{fontSize: 35, marginTop:2}}/>
                    </div>
                    <label className="signupTitle" onClick={() => navigate("/")}>
                        <h3>엔지니어링 설계정보 디지털 변환 플랫폼</h3>
                    </label>
                </div>

                <div className="signupLabel">
                    <div className="signup_mainLabel">
                        <h2>회원가입</h2>
                    </div>
                    <div className="signup_borderLine"></div>
                    <div className="signup_subLabel">
                        <h2>개인정보 약관</h2>
                    </div>
                </div>

                <div className="signupPolicy">
                    <TextareaAutosize
                        maxRows={4}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        defaultValue=""
                        style={{ width: 600, height: 250, overflow:"scroll", overflowX:"hidden", resize: "none"}}
                        readOnly
                    />
                </div>

                <div className="signupCheck">
                    <Checkbox/>
                    <p>개인정보 수집 및 이용에 모두 동의합니다.</p>
                </div>

                <SignupButtonField/>
            </Paper>
        </div>
    );
};

export default PrivacyPolicyPage;