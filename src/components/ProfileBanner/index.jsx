import React from 'react';
import styled from 'styled-components'
import ProfileImage from '../../assets/imgs/mypage_profile.png'
import CarrotImg from '../../assets/imgs/Carrot.png'
import PlantImg from '../../assets/imgs/growing_plant.png'
import SettingImg from '../../assets/imgs/setting_icon.png'

export default function ProfileBanner() {
    return (
      <BannerContainer>
      <ProfileContainer>
        <ProfileWrapper>
          <ImageBox>
            <img 
            src={ProfileImage}>
            </img>
          </ImageBox>
        <TextBox>
          <Carrot src ={CarrotImg}></Carrot><c>작물지킴이</c>
          <a>홍길동<b>님</b><SetIcon src={SettingImg}></SetIcon></a>
        </TextBox>
        </ProfileWrapper>
        <RightContainer>
          <Plant src ={PlantImg}></Plant><a>Co2를 <b>0g</b>만큼 줄였어요!<c>></c></a>
          <FundingButton>마을 구출 동참하기</FundingButton>
        </RightContainer>
      </ProfileContainer>
    </BannerContainer>
    );
}


const BannerContainer = styled.div`

  box-sizing: border-box;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height : 294px;
  background-color : #FFF5E9;
  
`

const ProfileContainer = styled.div`
  
  display : flex;
  flex-direction: column;
  height : 236px;
  width : 300px;
  position : relative;
  margin-top : 40px;
  margin-right:60%;
  border-right : 2px solid #DFDFDF;
  background-color : #FFF5E9;

`

const RightContainer = styled.div`
  
  position : relative; 
  margin-left : 694px;
  margin-top : -195px;
  display : flex;
  flex-direction: column;
  justify-content: center;
  height : 40%;
  width : 500px;
  text-align : center;
  a{
color: #000;
text-align: center;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.56px;
margin-bottom : 30px;
}
  b{
    color: #000;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.7px;
  }
  c{
    font-size : 35px;
    color : rgba(159, 159, 159, 1);
  }
`

const ProfileWrapper = styled.div`
  
  display : flex;
  flex-direction: column;
  height : 90%;
  width : 140px;
  margin-left : 35%;
  text-align : center;
`

const SetIcon = styled.img`
display : flex;
position : relative;
float : right;
width: 19px;
height: 19px;
margin-left : 75%;
bottom : 1.7rem;
`

const ImageBox = styled.div`
  
  display : flex;
  flex-direction: column;
  justify-content : center;
  margin : 0 auto;
  margin-top:0px;
  height : 115px;
  width : 115px;

`

const TextBox = styled.div`
  
  display : flex;
  flex-direction: column;
  justify-content : center;
  margin : 0 auto;
  margin-top:0px;
  height : 100%;
  width : 100%;
  
  a{
  margin-right : 15px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.6px;
  }
  b{
    font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  }
  c{
    color: rgba(0, 0, 0, 0.60);
    margin-left : 3px;
    
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`

const Carrot = styled.img`
  display : flex;
  position: relative;
  top:23%;
  margin-left:10px;
  flex-direction : column;
  width : 24px;
  height : 24px;

  }
`
const Plant = styled.img`
  display : flex;
  position : relative;
  top : 40px;
  margin-top:50px;
  margin-left:55px;
  position : relative;
  width : 43px;
  height : 43px;
`
const FundingButton = styled.div`
    
    align-items: center;
    flex-direction: column;
    justify-content : center;
    width: 407px;
    height : 100x;
    border-radius: 17px;
    background: #FF6565;
    font-weight: bold;
    padding : 20px;
    cursor: pointer;
    margin-left : 50px;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.44px;
    color : #FFF;

    

    
    &:hover{
        background: #E89590;
    }
    &:active{
        background: #E89590;
    }

`