import React from 'react';
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ProfileBanner from '../ProfileBanner';

export default function DipsOn() {
    return (
        
        <>
        <div>{<ProfileBanner></ProfileBanner>}</div>
            <Header>
                <a>찜한 마을</a>
            </Header>
            <Headline>
            </Headline>
            <DipsOnWrapper>
                <a>찜한 마을이 없습니다.</a>
                <b>장바구니</b>
            </DipsOnWrapper>
        </>
     
    );
}
const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    margin : 0px auto;
    align-items: center;
    display : flex;
    flex-direction: column;
    position : relative;
 
`

const Header = styled.div`
  
  display : flex;
  flex-direction: column;
  text-align : center;
  align-items: center;
  height : 120px;
  width : 780px;
  position : relative;
  margin-top : 10px;
  border : 1px solid black;
  a{
    top:70%;
  }
`

const Headline = styled.div`
  
  display : flex;
  flex-direction: column;
  height : 2px;
  width : 780px;
  position : relative;
  margin-top : 10px;
  background-color: #DFDFDF;
`
const DipsOnWrapper = styled.div`
  
  display : flex;
  flex-direction: column;
  height : 2px;
  width : 780px;
  position : relative;
  margin-top : 10px;
  background-color: #DFDFDF;
`