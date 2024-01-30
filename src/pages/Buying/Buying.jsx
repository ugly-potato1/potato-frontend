import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SampleImg from '../../assets/imgs/Funding/Buying1.png';
import ShareImg from '../../assets/imgs/Funding/ShareImage.svg';
import LikeImg from '../../assets/imgs/Funding/LikeImage.svg';
import Tomato from '../../assets/imgs/Funding/Tomato.png';
import Plum from '../../assets/imgs/Funding/Plum.png';
import Peach from '../../assets/imgs/Funding/Peach.png';
import Items from './Items';
import axios from 'axios';
import LikedImg from '../../assets/imgs/Funding/LikedImage.svg'

export default function Buying() {
  const [productData, setProductData] = useState({
    image: '',
    location: '',
    title: '',
    description: '',
    likeCount: 0,
    isLiked: false, 
  });

  useEffect(() => {
    axios.get('your-api-endpoint')
      .then(response => {
        const data = response.data; 
        setProductData({
          image: data.image,
          location: data.location,
          title: data.title,
          description: data.description,
          likeCount: data.likeCount,
          isLiked: data.isLiked, 
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleLikeClick = () => {
    setProductData(prevData => ({
      ...prevData,
      likeCount: prevData.isLiked ? prevData.likeCount - 1 : prevData.likeCount + 1,
      isLiked: !prevData.isLiked,
    }));
  };
  // const handleLikeClick = () => {
  //   axios.post('your-like-api-endpoint', { productId: /* your product ID */'', isLiked: !productData.isLiked })
  //     .then(response => {
  //       const updatedData = response.data;
  //       setProductData({
  //         ...productData,
  //         likeCount: updatedData.likeCount,
  //         isLiked: updatedData.isLiked,
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error updating like status:', error);
  //     });
  // }; 서버연동

  const LikeButton = () => (
    <div
      onClick={handleLikeClick}
      style={{ cursor: 'pointer', display: 'flex', position: 'relative', marginLeft: '10px' }}
    >
      <img
        src={productData.isLiked ? LikedImg : LikeImg}
        alt="찜하기버튼"
      />
      <LikeCount>{productData.likeCount}</LikeCount>
    </div>
  );
  
  return (
    <>
      <Wrapper>
        <HeadLine></HeadLine>
        <ContentBox>
        <ImageContainer>
        <img src={productData.image || SampleImg} alt="상품" />
      </ImageContainer>
      <DescriptionContainer>
        <Info>
          마을의 펀딩 &#62;<a>{productData.location}</a>
        </Info>
        <Title>
          {productData.title}
        </Title>
        <Description>
          {productData.description}
        </Description>
            <ButtonBox>
              <ShareButton>
                <img src={ShareImg} alt="공유버튼"></img>
              </ShareButton>
              <LikeButton/>
              <CartButton>담은 목록 보러가기</CartButton>
            </ButtonBox>
          </DescriptionContainer>
        </ContentBox>
        <HeadLine></HeadLine>
        <ProductTitle>상품 종류</ProductTitle>
        <ProductContainer>
          <Items isDetailPage/> 
          {/* 상품 컴포넌트 */}
        </ProductContainer>
        <HeadLine></HeadLine>
        <ProductTitle>상품 소개</ProductTitle>
        <InfoContainer></InfoContainer>
      </Wrapper>
    </>
  );
}



const LikeCount = styled.span`
  position: absolute;
  bottom: 0.5rem;
  left: 1.9rem;
  color: #868686;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.015rem;
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBox = styled.div`
  height: 650px;
  display: flex;
  flex-direction: row;
  max-width: 1250px; //너비조정
  width: 100vw;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 535px;
  height: 399px;
  overflow: hidden;
  flex-shrink: 0; /* 이미지가 축소되지 않도록 합니다. */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DescriptionContainer = styled.div`
  padding: 20px;
  span {
    color: #a2a2a2;

    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.34px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;
const Title = styled.div`
  position: relative;
  color: #2a2a2a;
  top: -3rem;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`;
const Info = styled.div`
  position: relative;
  width: 200px;
  height: 30px;
  color: #a2a2a2;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.34px;
  white-space: nowrap; /* 줄바꿈 없이 한 줄로 표현합니다. */
  a {
    top: -0.1rem;
    margin-left: 0.3rem;
    flex-shrink: 0;
    border-radius: 12.5px;
    background: #ff9c2f;
    color: #fff;
    padding: 2px 7px 1px 7px;
    text-align: center;
    align-items: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;

const Description = styled.div`
  width: 419px;
  display: flex;
  height: 300px;
  position: relative;
  color: #5e5e5e;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ButtonBox = styled.div`
  display: flex;
  position: relative;
  top: 5.5rem;
  width : 40rem;
`;
const ShareButton = styled.div`
  display: flex;
  position: relative;
  margin-left: 10px;
  cursor: pointer;
`;
const LikeButton = styled.div`
  display: flex;
  position: relative;
  margin-left: 10px;
  cursor: pointer;
`;

const CartButton = styled.div`
  display: flex;
  width: 391px;
  height: 60px;
  padding: 16px 160px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--White, #fff);
  letter-spacing: 0.4px;
  border-radius: 40px;
  background: var(--Main-Color, #ff4256);
  white-space: nowrap;
  margin-left: 21px;
  margin-top: 0.3rem;
`;
const HeadLine = styled.div`
  width: 100vw;
  height: 1px;
  background: #ccc;
`;
const ProductTitle = styled.div`
  position: relative;
  display: flex;
  margin-top: 3rem;
  margin-left: -70rem;
  color: #2a2a2a;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  margin-bottom: 3rem;
`;
const ProductContainer = styled.div`
  height: 700px;
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  width: 58%;
  overflow-x: auto;
  overflow-y: auto; // 세로 스크롤이 생기지 않도록 설정
  white-space: nowrap; // 가로 스크롤을 통해 한 줄에 표시
`;

const InfoContainer = styled.div`
  width: 1200px;
  height: 1000px;
  flex-shrink: 0;
  background: #f7f7f7;
`;