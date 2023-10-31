import React, { useEffect, useState } from 'react'
import TestImage from '../../../../assets/imgs/main_farmer_1.png'
import styled from 'styled-components'

export default function OneReviewItem({review, review: {id, title, apple, pear, delivery_date, price, completed, image}, setModalOpen}) {    
  return (
    <ItemBox>
      <ImageWrapper>
        <img src={image} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Detail><li>사과 {apple}kg</li><li>배 {pear}kg</li></Detail>
        <DateAndPrice>
          <Date>농작물 전달 완료일 {delivery_date} </Date>
          <p>결제 {price.toLocaleString('ko-KR')}원</p>
        </DateAndPrice>
        {completed ? 
          <ButtonWrapper>
            <CompleteButton>작성 완료</CompleteButton>
          </ButtonWrapper>
          :
          <InputWrapper>
            <InputBox placeholder='후기 쓰고 사진 업로드하면 300P'></InputBox>
            <InputButton onClick={() => setModalOpen(true)}>후기 작성</InputButton>
          </InputWrapper>
        }
      </Content>
    </ItemBox>
  )
}

const ItemBox = styled.div`
  width: 100%;
  padding: 1.8rem 1.3rem;
  display: flex;
  gap: 1.44rem;
  align-items: center;
`

const ImageWrapper = styled.div`
  min-width: 14.5rem;
  height: 10rem;

  img {
    height:100%;
    object-fit: cover;
    border-radius: 1.25rem;

  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

`

const DateAndPrice = styled.div`
  display: flex;
  justify-content: space-between;

  p{
    margin-right: 0.4rem;
  }
`

const Title = styled.p`
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: 0.0275rem;
`

const Detail = styled.div`
  color: var(--font-color-1);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

const Date = styled.p`
  color: var(--main-color);
  letter-spacing: 0.01875rem;
`

const InputWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 1.25rem;
  box-sizing: border-box;
  position: relative;

`

const InputBox = styled.input`
  width: 100%;
  border: 1px solid #DFDFDF;
  padding: 0.65rem 1.25rem;
  border-radius: 1.25rem;
  overflow: hidden;
  box-sizing: border-box;
`

const InputButton = styled.button`
  height: 100%;
  position: absolute;
  right: 0;
  background-color: var(--main-color);
  padding: 0.69rem 1.44rem;
  color: white;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const CompleteButton = styled.button`
  width: 6.8rem;
  padding: 0.69rem 1.44rem;
  background-color: #A2A2A2;
  color: white;
  border-radius: 1.25rem;
`