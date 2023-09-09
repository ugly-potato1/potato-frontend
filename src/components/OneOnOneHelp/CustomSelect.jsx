import React, { useState } from 'react'
import { styled } from 'styled-components'

export default function CustomSelect(optionData) {
    optionData = optionData.optionData;
    const [currentValue, setCurrentValue] = useState(optionData[0].value);
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (e) => {
      setCurrentValue(e.target.getAttribute("value"));
    };
  
  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        {optionData && optionData.map((data) => (
          <Option
            key={data.key}
            value={data.value}
            onClick={handleOnChangeSelectValue}
          >
            {data.value}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

const SelectBox = styled.div`
position: relative;
width: 160px;
padding: 8px;
border-radius: 12px;
background-color: #ffffff;
align-self: center;
border: solid 1px #DFDFDF;
cursor: pointer;
&::before {
  content: "⌵";
  position: absolute;
  top: 1px;
  right: 8px;
  color: black;
  font-size: 20px;
}
`;
const Label = styled.label`
font-size: 14px;
margin-left: 4px;
text-align: center;
`;
const SelectOptions = styled.ul`
position: absolute;
list-style: none;
top: 0px;
left: 0;
width: 100%;
overflow: hidden;
height: 170px;
max-height: ${(props) => (props.show ? "none" : "0")};
padding: 0;
border-radius: 8px;
background-color: white;
color: black;
`;
const Option = styled.li`
font-size: 14px;
padding: 10px 20px;
transition: background-color 0.2s ease-in;
&:hover {
    background-color: #c9c9c9;
}
`;