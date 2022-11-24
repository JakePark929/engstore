import React from 'react';
import './SignupPage.css';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Paper,
    Radio, RadioGroup,
    Select,
    TextField
} from "@mui/material";
import SignupButtonField from "../component/main/SignupButtonField";
import {useNavigate} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SignUpPage = () => {
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

    return (
        <div className="signupContainer">
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
                </div>

                <div className="signupField">
                    <div>
                        <TextField id="standard-basic"
                                   label="이메일"
                                   variant="standard"
                                   sx={{width: 320}}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-password-input"
                            label="비밀번호"
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
                    <div className="signup_inputDate">
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">연도</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age1}
                                    label="Age"
                                    sx={{width: 100}}
                                    onChange={handleChange1}
                                >
                                    <MenuItem value={10}>1990</MenuItem>
                                    <MenuItem value={20}>1991</MenuItem>
                                    <MenuItem value={30}>1992</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">월</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age2}
                                    label="Age"
                                    sx={{width: 80}}
                                    onChange={handleChange2}
                                >
                                    <MenuItem value={1}>01</MenuItem>
                                    <MenuItem value={2}>02</MenuItem>
                                    <MenuItem value={3}>03</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">일</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age3}
                                    label="Age"
                                    sx={{width: 80}}
                                    onChange={handleChange3}
                                >
                                    <MenuItem value={1}>01</MenuItem>
                                    <MenuItem value={2}>02</MenuItem>
                                    <MenuItem value={3}>03</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div>
                        <FormControl className="signup_inputGender">
                            <FormLabel id="demo-row-radio-buttons-group-label">성별</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel className="signup_genderRadio" value="남자" control={<Radio />} label="남자" />
                                <FormControlLabel className="signup_genderRadio" value="여자" control={<Radio />} label="여자" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <TextField id="standard-basic"
                                   label="전화번호"
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
                </div>

                <SignupButtonField/>
            </Paper>
        </div>
    );
};

export default SignUpPage;