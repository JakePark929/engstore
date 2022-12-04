import React from 'react';
import './FindInfoField.css';
import {AppBar, Box, Button, Tab, Tabs, TextField, Typography, useTheme} from "@mui/material";
import * as PropTypes from "prop-types";
import {useLocation, useNavigate} from "react-router-dom";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const FindInfoField = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fieldValue = location.state.fieldValue;
    const [value, setValue] = React.useState(fieldValue);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="findInfoField">
            <Box sx={{width: '100%'}} className="find_infoBox">
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab sx={{fontSize: '2vh', fontWeight: 1000, margin: '3px 4vh 3px 4vh'}}
                             label="아이디 찾기" {...a11yProps(0)} />
                        <Tab sx={{fontSize: '2vh', fontWeight: 1000}} label="비밀번호 찾기" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0} className="find_inputField">
                    <div>
                        <TextField id="standard-basic" name="name" label="이름" variant="standard"
                                   sx={{width: '33vh'}}/>
                    </div>
                    <div>
                        <TextField id="standard-basic" name="phone" label="전화번호" variant="standard"
                                   sx={{width: '33vh'}}/>
                    </div>
                    <div className="find_buttonField">
                        <Button variant="contained"
                                sx={{width: 120, borderRadius: 30, marginLeft: '1vh', marginRight: '1vh'}}
                                onClick={() => navigate("/")}
                        >
                            취소
                        </Button>
                        <Button variant="contained"
                                sx={{width: 120, borderRadius: 30, marginLeft: '1vh', marginRight: '1vh'}}
                                onClick={() => {
                                }}
                        >
                            다음
                        </Button>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} className="find_inputField">
                    <div>
                        <TextField id="standard-basic" name="email" label="이메일" variant="standard"
                                   sx={{width: '33vh'}}/>
                    </div>
                    <div>
                        <TextField id="standard-basic" name="name" label="이름" variant="standard"
                                   sx={{width: '33vh'}}/>
                    </div>
                    <div>
                        <TextField id="standard-basic" name="phone" label="전화번호" variant="standard"
                                   sx={{width: '33vh'}}/>
                    </div>
                    <div className="find_buttonField">
                        <Button variant="contained"
                                sx={{width: 120, borderRadius: 30, marginLeft: '1vh', marginRight: '1vh'}}
                                onClick={() => navigate("/")}
                        >
                            취소
                        </Button>
                        <Button variant="contained"
                                sx={{width: 120, borderRadius: 30, marginLeft: '1vh', marginRight: '1vh'}}
                                onClick={() => {
                                }}
                        >
                            다음
                        </Button>
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
};

export default FindInfoField;
