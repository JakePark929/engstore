import React from 'react';
import './LoginFeild.css';
import {Box, Button, FormLabel, TextField} from "@mui/material";
import {Form, Link, useNavigate} from "react-router-dom";

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
                const form = res.url.substring(res.url.lastIndexOf(":"));
                const url = form.slice(form.indexOf("/"));
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
                    <div>
                        <TextField id="standard-basic" name="email" label="이메일" variant="standard"
                                   sx={{width: '35vh'}}/>
                    </div>
                    <div>
                        <TextField id="standard-basic" name="password" label="비밀번호" type="password" variant="standard"
                                   sx={{width: '35vh'}}/>
                    </div>
                </div>
                <div className="login_linkField">
                    <Link to={"/find-info"} state={{fieldValue: 0}} style={{textDecoration: 'none'}}>
                        <p className="login_findLink">이메일찾기</p>
                    </Link>
                    <p className="login_findNoLink">/</p>
                    <Link to={"/find-info"} state={{fieldValue: 1}} style={{textDecoration: 'none'}}>
                        <p className="login_findLink">비밀번호찾기</p>
                    </Link>
                </div>
                <div className="login_buttonField">
                    <Button type="submit" variant="contained" sx={{
                        width: '35vh',
                        borderRadius: 30,
                        backgroundColor: '#8CD8E9',
                        '&:hover': {
                            backgroundColor: '#6BA3AF'
                        }
                    }}>로그인</Button>
                    <br/>
                    <Button variant="contained" sx={{
                        width: '35vh',
                        borderRadius: 30,
                        backgroundColor: '#A9D18E',
                        '&:hover': {
                            backgroundColor: '#7C9A67'
                        }
                    }}
                            onClick={() => navigate("/policy")}>회원가입</Button>
                </div>
            </Box>
        </div>
    );
};

export default LoginField;