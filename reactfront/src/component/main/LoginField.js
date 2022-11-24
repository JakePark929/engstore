import React from 'react';
import './LoginFeild.css';
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

const LoginField = () => {
    const navigate = useNavigate();
    return (
        <div className="loginField">
            <div className="login_inputField">
                <TextField id="standard-basic" label="이메일" variant="standard" sx={{width: 280}}/>
                <br/>
                <TextField id="standard-basic" label="비밀번호" variant="standard" sx={{width: 280}}/>
            </div>
            <div className="login_linkField">
                <p className="login_findLink">이메일찾기</p>
                <p className="login_findNoLink">/</p>
                <p className="login_findLink">비밀번호찾기</p>
            </div>
            <div className="login_buttonField">
                <Button variant="contained" sx={{width: 280, borderRadius: 30}}>로그인</Button>
                <br/>
                <Button variant="contained" sx={{width: 280, borderRadius: 30}} onClick={()=>navigate("/policy")}>회원가입</Button>
            </div>
        </div>
    );
};

export default LoginField;