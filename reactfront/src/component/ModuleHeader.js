import React from 'react';
import './ModuleHeader.css';
import {useNavigate} from "react-router-dom";

const ModuleHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="moduleHeader">
            <label className="moduleHeaderLabel" onClick={() => navigate("/module/main")}>
                <h2>엔지니어링 설계정보 디지털 변환 플랫폼</h2>
            </label>
        </div>
    );
};

export default ModuleHeader;