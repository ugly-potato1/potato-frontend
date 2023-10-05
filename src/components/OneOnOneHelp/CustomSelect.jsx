import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'

export default function CustomSelect({optionData, isShow, width }) {
    const [currentValue, setCurrentValue] = useState(optionData[0].value);
    const [showOptions, setShowOptions] = useState(0);

    const handleOnChangeSelectValue = (e) => {
      setCurrentValue(e.target.getAttribute("value"));
      {/*sendValueFuction(currentValue);, sendValueFunction prop으로 받아서 currentValue 상위 컴포넌트로 올려보낼 예정*/}
      console.log(e.target);
    };

    useEffect(() => {
      setShowOptions(0);
    }, [isShow]);
  
  return (
    <SelectBox className='sel' onClick={() => setShowOptions((prev) => !prev)} width={width}>
      <Label className='sel'>{currentValue}</Label>
      <SelectOptions isshow={showOptions}>
        {optionData && optionData.map((data) => (
          <Option
            key={data.key}
            value={data.value}
            selected={data.value === currentValue}
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
width: ${(props) => props.width};
margin: 0.2rem;
padding: 8px;
border-radius: 12px;
background-color: #ffffff;
align-self: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border: solid 1px #DFDFDF;
cursor: pointer;
&::before {
  content: "⌵";
  position: absolute;
  top: 3px;
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
height: auto;
max-height: ${(props) => (props.isshow ? "none" : "0")};
padding: 0;
border-radius: 12px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color: white;
color: black;
`;

const Option = styled.li`
font-size: 14px;
padding: 10px 20px;
transition: background-color 0.1s ease-in;
background-color: ${(props) => props.selected ? "#FF9C2F" : "white"};
&:hover {
    background-color:  ${(props) => props.selected ? "#FF9C2F" : "#dcdbdb"};
}
`;