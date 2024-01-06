import React, { useState } from 'react';
import styled from 'styled-components';


const AccordionMenu = ({ id, title, content, status = "inProgress" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if(status !== "inProgress")
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionWrap>
      <div key={id} className={`que ${activeIndex === 0 ? 'on' : ''}`} onClick={() => handleToggle(0)}>
        <span>{title}</span>
        <div className="arrow-wrap">
            {status !== "inProgress" ? "답변 완료" : "답변 중"}
        </div>
      </div>
      <div className={`anw ${activeIndex === 0 ? 'active' : ''}`}>
        <span>{content}</span>
      </div>
    </AccordionWrap>
  );
};

export default AccordionMenu;

const AccordionWrap = styled.div`
  * {
    box-sizing: border-box;
  }

  .que:first-child {
    border-top: 0px solid #dddddd;
  }

  .que {
    position: relative;
    padding: 17px 0;
    cursor: pointer;
    text-align: start;
    font-size: 14px;
    border-bottom: 1px solid #dddddd;
  }

  .que::before {
    display: inline-block;
    content: 'Q';
    font-size: 14px;
    color: #FF4256;
    margin: 0 5px;
  }

  .que.on>span {
    font-weight: bold;
    color: #FF4256;
  }

  .anw {
    display: none;
    overflow: hidden;
    font-size: 14px;
    text-align: start;
    white-space: normal;
    background-color: #ffffff;
    padding: 27px 0;
  }

  .anw::before {
    display: inline-block;
    content: 'A';
    font-size: 14px;
    font-weight: bold;
    color: #666;
    margin: 0 5px;
  }

  .anw.active {
    display: block;
  }

  .arrow-wrap {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
  }
`;