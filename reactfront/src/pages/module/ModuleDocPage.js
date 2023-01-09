import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Paper} from "@mui/material";

const ModuleDocPage = () => {
    const navigate = useNavigate();
    const text = "문서";
    const boxStyle = {
        border: '2px solid #A74BFD',
    }
    const borderStyle = {
        borderLeft : '1px solid #A74BFD',
        width: '1px',
        height: '62vh',
    }
    return (
        <div>
            <Paper elevation={8} className="moduleIntroPaper" sx={{borderRadius: 12}}>
                <div className="module_mainField">
                    <div className="module_introField">
                        <div className="module_introImgField">
                            <img className="module_introImg" src="/img/doc.png"/>
                        </div>
                        <div>
                            <h1>{text}</h1>
                        </div>
                    </div>

                    <div className="module_introBorderLine"
                         style={borderStyle}
                    >

                    </div>

                    <div className="module_introScriptField">
                        <div className="module_introScriptBox"
                             style={boxStyle}
                        >
                            <h2>클라우드 데이터 관리</h2>
                            <div>
                                <div className="module_introScriptLabel">
                                    <div className="module_introPoint"></div>
                                    <div className="module_introScript">
                                        파일을 업로드 및 삭제할 수 있습니다.
                                    </div>
                                </div>
                                <div className="module_introScriptLabel">
                                    <div className="module_introPoint"></div>
                                    <div className="module_introScript">
                                        업로드된 파일의 현황을 확인할 수 있습니다.
                                    </div>
                                </div>
                            </div>
                            <Button variant="contained"
                                    sx={{
                                        width: '32vh',
                                        height: '4.5vh',
                                        borderRadius: 30,
                                        fontSize: '2vh',
                                        fontWeight: 1000,
                                        backgroundColor: '#A74BFD',
                                        '&:hover': {
                                            backgroundColor: '#7030AC'
                                        }
                                    }}
                                    onClick={() => navigate("/module/doc/data")}
                            >
                                이동하기&nbsp;&nbsp;>
                            </Button>
                        </div>
                        <div className="module_introScriptBox"
                             style={boxStyle}
                        >
                            <div>
                                <h2>모듈 다운로드</h2>
                            </div>
                            <div>
                                <div className="module_introScriptLabel">
                                    <div className="module_introPoint"></div>
                                    <div className="module_introScript">
                                        {text} 모듈을 다운로드 할 수 있습니다.
                                    </div>
                                </div>
                                <div className="module_introScriptLabel">
                                    <div className="module_introPoint"></div>
                                    <div className="module_introScript">
                                        모듈의 기본 사용 방법을 알려드립니다.
                                    </div>
                                </div>
                            </div>
                            <Button variant="contained"
                                    sx={{
                                        width: '32vh',
                                        height: '4.5vh',
                                        borderRadius: 30,
                                        fontSize: '2vh',
                                        fontWeight: 1000,
                                        backgroundColor: '#A74BFD',
                                        '&:hover': {
                                            backgroundColor: '#7030AC'
                                        }
                                    }}
                                    onClick={() => navigate("/module/doc/download")}
                            >
                                이동하기&nbsp;&nbsp;>
                            </Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default ModuleDocPage;
