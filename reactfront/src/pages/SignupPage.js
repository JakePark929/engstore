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

const SignupPage = () => {
    const navigate = useNavigate();
    const [age1, setAge1] = React.useState('');
    const [age2, setAge2] = React.useState('');
    const [age3, setAge3] = React.useState('');

    const handleChange1 = (e) => {
        setAge1(e.target.value);
    };

    const handleChange2 = (e) => {
        setAge2(e.target.value);
    };

    const handleChange3 = (e) => {
        setAge3(e.target.value);
    };

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
                        <div className="signup_inputDate">
                            <div>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">연도</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        name="birthYear"
                                        id="demo-simple-select"
                                        value={age1}
                                        label="Age"
                                        sx={{width: 100}}
                                        onChange={handleChange1}
                                    >
                                        <MenuItem value={'1986'}>1986</MenuItem>
                                        <MenuItem value={'1987'}>1987</MenuItem>
                                        <MenuItem value={'1988'}>1988</MenuItem>
                                        <MenuItem value={'1989'}>1989</MenuItem>
                                        <MenuItem value={'1990'}>1990</MenuItem>
                                        <MenuItem value={'1991'}>1991</MenuItem>
                                        <MenuItem value={'1992'}>1992</MenuItem>
                                        <MenuItem value={'1993'}>1993</MenuItem>
                                        <MenuItem value={'1994'}>1994</MenuItem>
                                        <MenuItem value={'1995'}>1995</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">월</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="birthMonth"
                                        value={age2}
                                        label="Age"
                                        sx={{width: 80}}
                                        onChange={handleChange2}
                                    >
                                        <MenuItem value={'01'}>01</MenuItem>
                                        <MenuItem value={'02'}>02</MenuItem>
                                        <MenuItem value={'03'}>03</MenuItem>
                                        <MenuItem value={'04'}>04</MenuItem>
                                        <MenuItem value={'05'}>05</MenuItem>
                                        <MenuItem value={'06'}>06</MenuItem>
                                        <MenuItem value={'07'}>07</MenuItem>
                                        <MenuItem value={'08'}>08</MenuItem>
                                        <MenuItem value={'09'}>09</MenuItem>
                                        <MenuItem value={'10'}>10</MenuItem>
                                        <MenuItem value={'11'}>11</MenuItem>
                                        <MenuItem value={'12'}>12</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">일</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        name="birthDay"
                                        id="demo-simple-select"
                                        value={age3}
                                        label="Age"
                                        sx={{width: 80}}
                                        onChange={handleChange3}
                                    >
                                        <MenuItem value={'01'}>01</MenuItem>
                                        <MenuItem value={'02'}>02</MenuItem>
                                        <MenuItem value={'03'}>03</MenuItem>
                                        <MenuItem value={'04'}>04</MenuItem>
                                        <MenuItem value={'05'}>05</MenuItem>
                                        <MenuItem value={'06'}>06</MenuItem>
                                        <MenuItem value={'07'}>07</MenuItem>
                                        <MenuItem value={'08'}>08</MenuItem>
                                        <MenuItem value={'09'}>09</MenuItem>
                                        <MenuItem value={'10'}>10</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
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