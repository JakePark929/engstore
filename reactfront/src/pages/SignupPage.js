import React, {useState} from 'react';
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
    const [userMail, setUserMail] = useState("");

    const handleOnChange = (e) => {
        setUserMail(e.target.value);
    };

    const checkDuplicated = () => {
        console.log(userMail);
        const post = {
            email: userMail,
        }
        fetch("http://localhost:9090" + "/check-dupl", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(post)
        })
            .then(res => {
                console.log(1, res)
                if (res.status === 200) {
                    return res.json();
                } else if(res.status === 204) {
                    return null;
                }
            })
            .then(res => { // Catch는 여기서 오류가 나야 실행됨
                console.log("정상", res);
                if (res === null) {
                    console.log("사용가능합니다.")
                } else {
                    console.log("사용불가합니다.")
                }
            })
    }

    const handleSubmits = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        let birthMonth;
        let birthDay;

        if (data.get('birthMonth') < 10) {
            birthMonth = '0' + data.get('birthMonth')
        } else {
            birthMonth = String(data.get('birthMonth'));
        }
        if (data.get('birthDay') < 10) {
            birthDay = '0' + data.get('birthDay')
        } else {
            birthDay = String(data.get('birthDay'));
        }

        const addBirth = data.get('birthYear') + birthMonth + birthDay;
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
                    return res.json();
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
                                       onChange={handleOnChange}
                            />
                        </div>
                        <div className="sign_mailButtonField">
                            <Button variant="contained"
                                    sx={{
                                        width: 130,
                                        borderRadius: 3,
                                        marginLeft: 2,
                                        marginRight: 2,
                                        backgroundColor: '#12A3CC',
                                        '&:hover': {
                                            backgroundColor: '#0E7997'
                                        }
                                    }}
                                    onClick={() => checkDuplicated()}
                            >
                                중복확인
                            </Button>
                            <Button variant="contained"
                                    sx={{
                                        width: 130,
                                        borderRadius: 3,
                                        marginLeft: 2,
                                        marginRight: 2,
                                        backgroundColor: '#5C70EB',
                                        '&:hover': {
                                            backgroundColor: '#4150A9'
                                        }
                                    }}
                            >
                                이메일 인증
                            </Button>
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
                                    sx={{
                                        width: 120,
                                        borderRadius: 30,
                                        marginLeft: 4,
                                        marginRight: 4,
                                        backgroundColor: '#D1D1D1',
                                        '&:hover': {
                                            backgroundColor: '#858585'
                                        }
                                    }}
                                    onClick={() => navigate("/")}
                            >
                                취소
                            </Button>
                            <Button variant="contained"
                                    type="submit"
                                    sx={{
                                        width: 120,
                                        borderRadius: 30,
                                        marginLeft: 4,
                                        marginRight: 4,
                                        backgroundColor: '#A9D18E',
                                        '&:hover': {
                                            backgroundColor: '#7C9A67'
                                        }
                                    }}
                            >
                                다음
                            </Button>
                        </div>
                    </Box>
                </div>
            </Paper>
        </div>
    );
};

export default SignupPage;