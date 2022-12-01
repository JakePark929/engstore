import React from 'react';
import './FindEmailField.css';
import {TextField} from "@mui/material";

const FindEmailField = () => {
    return (
        <div className="findField">
            <div className="find_inputField">
                <div>
                    <TextField id="standard-basic" name="name" label="이름" variant="standard"
                               sx={{width: '35vh'}}/>
                </div>
                <div>
                    <TextField id="standard-basic" name="phone" label="전화번호" variant="standard"
                               sx={{width: '35vh'}}/>
                </div>
            </div>
        </div>
    );
};

export default FindEmailField;
