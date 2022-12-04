import React from 'react';
import './LoginFeild.css';
import {Box, Button, FormLabel, TextField} from "@mui/material";
import {Form, useNavigate} from "react-router-dom";

const LoginField = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        let details = {
            'email': data.get('email'),
            'password': data.get('password'),
        };

        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        console.log(formBody)

        fetch("http://localhost:9090" + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: formBody,
        })
            .then(res => {
                console.log(1, res)
                const url = res.url.substring(res.url.lastIndexOf("/"))
                if (res.status === 200) {
                    navigate(url);
                } else {
                    // return alert("로그인 실패");
                }
            })
    };

    return (
        <div className="loginField">
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <div className="login_inputField">
                    <TextField id="standard-basic" name="email" label="이메일" variant="standard" sx={{width: 280}}/>
                    <br/>
                    <TextField id="standard-basic" name="password" label="비밀번호"  type="password" variant="standard" sx={{width: 280}}/>
                </div>
                <div className="login_linkField">
                    <p className="login_findLink">이메일찾기</p>
                    <p className="login_findNoLink">/</p>
                    <p className="login_findLink">비밀번호찾기</p>
                </div>
                <div className="login_buttonField">
                    <Button type="submit" variant="contained" sx={{width: 280, borderRadius: 30}}>로그인</Button>
                    <br/>
                    <Button variant="contained" sx={{width: 280, borderRadius: 30}} onClick={()=>navigate("/policy")}>회원가입</Button>
                </div>
            </Box>
        </div>
    );
};

export default LoginField;