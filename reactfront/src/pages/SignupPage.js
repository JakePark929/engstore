import React from 'react';
import './SignupPage.css';
import {
    Box, Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputDateField from "../component/main/InputDateField";

const SignupPage = () => {
    const navigate = useNavigate();

    const handleSubmits = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const addBirth = data.get('birthYear') + data.get('birthMonth') + data.get('birthDay')
        const user = {
            email: data.get('email'),
            password: data.get('password'),
            name: data.get('name'),
            birth: addBirth,
            gender: data.get('gender'),
            phone1: data.get('phone1')
        };
        console.log(user);
        fetch("http://localhost:9090" + "/signup-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                console.log(1, res)
                if (res.status === 201) {
                    return res.json()
                } else {
                    return null;
                }
            })
            .then(res => { // Catch는 여기서 오류가 나야 실행됨
                console.log("정상", res);
                if (res !== null) {
                    navigate("/signup-complete");
                } else {
                    alert("회원가입에 실패하였습니다.");
                }
            })
    };

    return (
        <div className="signupContainer">
            <Paper elevation={8} className="signupPaper" sx={{borderRadius: 0}}>
                <div className="signup_titleField">
                    <div className="arrowBackIcon" onClick={() => navigate(-1)}>
                        <ArrowBackIcon sx={{fontSize: 35, marginTop: 2}}/>
                    </div>
                    <label className="signupTitle" onClick={() => navigate("/")}>
                        <h3>엔지니어링 설계정보 디지털 변환 플랫폼</h3>
                    </label>
                </div>

                <div className="signupLabel">
                    <div className="signup_mainLabel">
                        <h2>회원가입</h2>
                    </div>
                </div>

                <div className="signupField">
                    <Box component="form" noValidate onSubmit={handleSubmits}>
                        <div>
                            <TextField id="standard-basic"
                                       name="email"
                                       label="이메일(*)"
                                       variant="standard"
                                       sx={{width: 320}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="standard-password-input"
                                name="password"
                                label="비밀번호(*)"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                sx={{width: 320}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="standard-password-input"
                                label="비밀번호확인"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                sx={{width: 320}}
                            />
                        </div>
                        <div>
                            <TextField id="standard-basic"
                                       name="name"
                                       label="이름(*)"
                                       variant="standard"
                                       sx={{width: 320}}
                            />
                        </div>
                        <div>
                            <InputDateField/>
                        </div>
                        <div>
                            <FormControl id="signup_inputGender">
                                <FormLabel id="demo-row-radio-buttons-group-label">성별</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="gender"
                                >
                                    <FormControlLabel id="signup_genderRadio" value="M" control={<Radio/>}
                                                      label="남자"/>
                                    <FormControlLabel id="signup_genderRadio" value="F" control={<Radio/>}
                                                      label="여자"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <TextField id="standard-basic"
                                       name="phone1"
                                       label="전화번호(*)"
                                       variant="standard"
                                       sx={{width: 320}}
                            />
                        </div>
                        <div>
                            <TextField id="standard-basic"
                                       label="전화번호2(선택)"
                                       variant="standard"
                                       sx={{width: 320}}
                            />
                        </div>
                        <div>
                            <TextField id="standard-basic"
                                       label="회사명"
                                       variant="standard"
                                       sx={{width: 320}}
                            />
                        </div>
                        <div>
                            <TextField id="standard-basic"
                                       label="부서"
                                       variant="standard"
                                       sx={{width: 320}}
                            />
                        </div>
                        <div>
                            <TextField id="standard-basic"
                                       label="직급"
                                       variant="standard"
                                       sx={{width: 320}}
                            />
                        </div>
                        <div className="sign_buttonField">
                            <Button variant="contained"
                                    sx={{width: 120, borderRadius: 30, marginLeft: 4, marginRight: 4}}
                                    onClick={() => navigate("/")}
                            >
                                취소
                            </Button>
                            <Button variant="contained"
                                    type="submit"
                                    sx={{width: 120, borderRadius: 30, marginLeft: 4, marginRight: 4}}
                            >
                                다음
                            </Button>
                        </div>
                    </Box>
                </div>
                {/*<SignupButtonField/>*/}

            </Paper>
        </div>
    );
};

export default SignupPage;