import React from 'react';


// Ant Design
import { Select } from 'antd';


const TechpotSelectInput = ({ children ,placeholder }) => {

    return (
        <Select size="large" placeholder={placeholder}  style={{ width: '100%' }}>
            {children}
        </Select>
    )
}



export default TechpotSelectInput;

// value={selectValue} onChange={selectHandleChange} , selectValue, selectHandleChange



// Tweak styles on line 2696 in the andt.css file
// Seach pattern -> .ant-select {
