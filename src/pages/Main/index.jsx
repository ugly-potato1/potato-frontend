import React from 'react'
import Image01 from '../../assets/imgs/main_banner_3.png'
import Image02 from '../../assets/imgs/login_bg.png'
import Image03 from '../../assets/imgs/main_cook_1.png'
import Image04 from '../../assets/imgs/main_cook_2.jpg'
import Image05 from '../../assets/imgs/main_banner_2.png'
import Image06 from '../../assets/imgs/main_farmer_1.png'
import Image07 from '../../assets/imgs/main_farmer_2.png'
import Image08 from '../../assets/imgs/main_farmer_3.png'
import Image09 from '../../assets/imgs/main_farmer_4.jpg'
import Image10 from '../../assets/imgs/main_bottom_1.png'
import Image11 from '../../assets/imgs/main_bottom_2.png'
import Image12 from '../../assets/imgs/main_bottom_3.png'
import { styled } from 'styled-components'

export default function Main() {
  return (
  <>
  <Wrapper>
    <>
    <BannerContainer>
    <img
          src={Image01}>
          </img>
          <BannerShadow>
            <Span1>농가와 소비자가 함께하는<br/> 지속 가능한 농업</Span1>
            <Span2>함께하는 환경 보호! 마을과 상생하는 프로젝트</Span2>
            <button>마을구출 동참하기</button>
          </BannerShadow>
    </BannerContainer>
    <SubTitle>다채롭기만한.<br></br><span>똑같이 알록달록한 농작물</span></SubTitle>
    <SubContainer1>
    <img 
          src={Image02}>
          </img>
    </SubContainer1>
    <SubTitle2>싸고 맛있는.</SubTitle2>
    <SubContainer2>
    <BlurImg1 top="-200px" left="-400px" />
    <BlurImg2 top="-180px" left="-200px" />
          <img
          src={Image03}>
          </img>
          <img
          src={Image04}>
          </img>     
    <BlurImg1 top="200px" left="800px" />
    <BlurImg2 top="180px" left="600px" />
        </SubContainer2>
     
    </>
    <ButtonWrapper>
          <button>이름만 못난이인 농작물 더 알아보기
          </button>
    </ButtonWrapper>
    <SubContainer3>
          <a>마을과 함께하는<br/>상생 프로젝트</a>
          <UserWrapper>
            <img
            src={Image05}>
            </img>
            <Shadow>
              <a>농가와 소비자가 함께하는<br/> 지속 가능한 농업</a>
              <b>함께하는 환경 보호!<br/>농가와 상생하는 프로젝트</b>
              <button>못난이 친구들 구출 동참하기
              </button>
             
            </Shadow>
          </UserWrapper>
          <ImgContainer>
          <img  
          src={Image06}>
          </img>   
          <img  
          src={Image07}>
          </img>
          <img 
          src={Image08}>
          </img>   
          <img 
          src={Image09}>
          </img>      
          </ImgContainer>
        </SubContainer3>
        <BottomContainer>
        
        <a>우리의 미션</a>
        <ImgContainer2>
        <BlurImg1 top="0" left="-400px" />
    <BlurImg2 top="0" left="-50px" />
          <div>
          <img
          src={Image10}>
          </img> 
          <BottomTitle>지속가능한 농업</BottomTitle>
          </div>
          <div>
          <img 
          src={Image11}>
          </img> 
          <BottomTitle>환경 보호</BottomTitle>
          </div>
          <div>
          <img
          src={Image12}>
          </img> 
          <BottomTitle>못난이 농작물<br/> 인식 개선 · 체험</BottomTitle>
          </div>  
          <BlurImg1 top="300px" left="800px" />
    <BlurImg2 top="300px" left="600px" />
          </ImgContainer2>
          <button>이름만 못난이인 농작물 더 알아보기</button>
        </BottomContainer>
  </Wrapper>
  </>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 
  
  `;

const BannerContainer = styled.div`
  box-sizing: border-box;
  width : 1300px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Span1 = styled.div`
margin-top : 136px;
color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 38px;
font-style: normal;
font-weight: 800;
line-height: normal;
letter-spacing: 0.76px;
`
const Span2 = styled.div`
color: #FFF;
text-align: center;
margin-top : 29px;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.4px;
`

const BannerShadow = styled.div`
display : flex;
position: absolute;
flex-direction: column;
align-items: center;
text-align: center;

width: 551px;
height: 100%;
top: 45%;
transform: translate(68%, -45%);
background-color:rgba(0, 0, 0, 0.61);
button{
  display : flex;
flex-direction: column;
align-items: center;
width : 277px;
height: 65px;
background-color: #FF6565;
color: white;
text-align: center;
line-height: 65px;
text-decoration: none;
border: none;
border-radius: 17px;
font-size: 22px;
font-weight: bold;
margin-top : 3rem;

}
button:hover{
  background-color: #f78181;
}
}
`



const SubTitle = styled.div`
display: flex;
position : relative;
font-size: 32px;
font-weight: bold;
margin-top : 0%;
padding: 60px;
flex-direction: column;
align-items: center;
text-align: center;
line-height: 2.5rem;
span{
  display: flex;
  position : relative;
  color: #B5B5B5;
  align-items: center;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.5px;
  padding-top:18px;
}
`

const SubContainer1 = styled.div`
position : relative;
width: 100%;
height: 455px;
margin-top:30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #f0efe9;

img{
  position:relative;
  width: 683px;
  height: 455px;
  margin-top:  30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
`

const SubTitle2 = styled.div`
display: flex;
position : relative;
font-size: 32px;
font-weight: bold;
padding: 60px;
flex-direction: column;
align-items: center;
text-align: center;
line-height: 2.5rem;
`

const SubContainer2 = styled.div`
display: flex;
justify-content: center; 
position: relative;
align-items: center; 
gap: 40px; 
img{
  width: 400px;
  position:relative;
  height: 250px;
  border-radius: 1rem;
}
`
const ButtonWrapper = styled.div`
text-align: center;
button{
  margin-top: 100px;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 496px;
  height: 65px;
  background-color: #ff9c2f;
  color: white;
  text-align: center;
  line-height: 65px;
  text-decoration: none;
  border: none;
  border-radius: 17px;
  font-size: 22px;
  font-weight: bold;
}
button:hover{
  background-color: #F5DA81;
}
`

const SubContainer3 = styled.div`
    margin-top: 100px;
    width : 100%;
    height: 1256px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFEEDB;
    a{
      display: flex;
      position : relative;
      font-size: 32px;
      font-weight: bold;
      padding: 60px;
      flex-direction: column;
      align-items: center;
      text-align: center;
      line-height: 2.5rem;
    }
`

const UserWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;

img{
  width: 1080px;
    height: 599px;
   flex-direction: column;
   align-items: center;
   margin: 0 0 0 10px;
}
`
const Shadow = styled.div`
position: absolute;
height: 600px;
top: 50%;
left: 17.3%;
width: 30%;
transform: translate(-54%, -50%);
border: 1px solid black;
border-radius: 1rem 0 0 1rem;
background-color:rgba(0, 0, 0, 0.61);
justify-contents : center;
text-align : center;
button{
  flex-direction: column;
  align-items: center;
  width : 90%;
  height: 12%;
  border-radius: 17px;
background: #FF4256;
  color: white;
  text-align: center;
  line-height: 65px;
  text-decoration: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  margin-top : 129px;
  overflow: hidden;
  white-space: nowrap;
}
button:hover{
  background: #F78181;
}
a{
color: #FFF;
height : 100px;
margin-top : 100px;
text-align: center;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 800;
line-height: normal;
letter-spacing: 0.3px;
margin-bottom : 1rem;
overflow: hidden;
white-space: nowrap;
}
b{
  color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.34px;
overflow: hidden;
  white-space: nowrap;
}
`
const ImgContainer = styled.div`
display: flex;
justify-content: center; 
align-items: center; 
gap: 10px; 
img{
  width: 300px;
  height: 250px;
  border-radius: 1rem 1rem 0 0;
  margin-top: 80px;
}
`

const BottomContainer = styled.div`
display: flex;
position : relative;
flex-direction: column;
align-items: center;
a{
  margin-bottom : -65px;
  display: flex;
  position : relative;
  font-size: 32px;
  font-weight: bold;
  padding: 60px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 2.5rem;
}
button{
  margin-top: 100px;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 496px;
  height: 65px;
  background-color: #ff9c2f;
  color: white;
  text-align: center;
  line-height: 65px;
  text-decoration: none;
  border: none;
  border-radius: 17px;
  font-size: 22px;
  font-weight: bold;
}
button:hover {
  background: #F5DA81;
}
`

const ImgContainer2 = styled.div`
display: flex;
justify-content: center; 
align-items: center; 
gap: 10px; 
img{
  width: 300px;
  height: 250px;
  border-radius: 1rem 1rem 0 0;
  margin-top: 80px;
  margin-right : 47px;
}
`
const BottomTitle = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center; 
align-items: center; 
width: 300px;
height: 65.933px;
flex-shrink: 0;
border-radius: 0px 0px 14px 14px;
background: rgba(243, 243, 243, 0.60);
color: #2A2A2A;
text-align: center;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.36px;
`
const BlurImg1 = styled.div`
position:absolute;
width: 466px;
height: 466px;
flex-shrink: 0;
border-radius: 466px;
background: rgba(255, 156, 47, 0.20);
// background: green;
filter: blur(100px);
top: ${props => props.top};
left: ${props => props.left};
z-index: -1;
`

const BlurImg2 = styled.div`
position:absolute;
width: 466px;
height: 466px;
flex-shrink: 0;
border-radius: 466px;
background: rgba(255, 66, 86, 0.15);
// background: red;
filter: blur(100px);
top: ${props => props.top};
left: ${props => props.left};
z-index: -1;
`

