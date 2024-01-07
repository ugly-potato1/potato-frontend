import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

import TruckIcon from "../../assets/imgs/Mypage/InitMypageBtn/truck.png";
import HeartIcon from "../../assets/imgs/Mypage/InitMypageBtn/heart.png";
import CartIcon from "../../assets/imgs/Mypage/InitMypageBtn/cart.png";
import FeedBackIcon from "../../assets/imgs/Mypage/InitMypageBtn/feedback.png";
import QuestionIcon from "../../assets/imgs/Mypage/InitMypageBtn/question_circle.png";
import ChatBubbleIcon from "../../assets/imgs/Mypage/InitMypageBtn/chat_bubble.png";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProfileBanner from "../../components/ProfileBanner";

export default function InitMypage() {
  const MyCropBtn = [
    { id: 0, text: "후원내역 조회", icon: TruckIcon },
    { id: 1, text: "찜 목록", icon: HeartIcon },
    { id: 2, text: "장바구니", icon: CartIcon },
    { id: 3, text: "농작물 후기", icon: FeedBackIcon },
  ];

  const CustomerCenterBtn = [
    { id: 4, text: "FAQ", icon: QuestionIcon },
    { id: 5, text: "1:1 문의", icon: ChatBubbleIcon },
  ];

  const navigate = useNavigate();

  const handleOnClick = (id, text) => {
    console.log(id);
    navigate("/mypage/detail", { state: { id: id, text: text } });
  };

  return (
    <>
      <ProfileBanner />
      <Wrapper>
        <p>나의 작물</p>
        <ButtonWrapper>
          {MyCropBtn.map(({ id, text, icon }) => (
            <ButtonItem key={id} onClick={() => handleOnClick(id, text)}>
              <div>
                <img key={id} src={icon} alt="mySvgImage" />
                {text}
              </div>
              <HiOutlineChevronRight />
            </ButtonItem>
          ))}
        </ButtonWrapper>

        <p>고객센터</p>
        <ButtonWrapper>
          {CustomerCenterBtn.map(({ id, text, icon }) => (
            <ButtonItem key={id} onClick={() => handleOnClick(id, text)}>
              <div>
                <img key={id} src={icon} alt="mySvgImage" />
                {text}
              </div>
              <HiOutlineChevronRight />
            </ButtonItem>
          ))}
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

const ProfileBox = styled.div`
  width: 100vw;
  height: 18.4rem;
  background-color: #fff5e9;
`;

const Wrapper = styled.div`
  width: 100vw;
  padding: 0 11.25rem;
  display: flex;
  flex-direction: column;
  justify-items: center;

  p {
    font-size: 1.375rem;
    font-weight: 700;
    margin: 5.75rem 0 1.31rem 0;
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 4.25rem;
  grid-gap: 1rem;
  justify-items: center;
`;

const ButtonItem = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.75rem;
  border: 1px solid #dfdfdf;
  border-radius: 1rem;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  font-size: 1.125rem;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-shrink: 0;
  }
`;
