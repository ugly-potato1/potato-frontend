import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image1 from "../../../assets/imgs/Mypage/WishListImg.png";
import EmptyWish from '../SubContent/EmptyWish';


export default function WishList() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showEmptyWish, setShowEmptyWish] = useState(false); // 빈 찜목록 페이지 표시 여부
  const [filter, setFilter] = useState('진행중'); // 초기 필터: 진행중

  useEffect(() => {
    // 이미지 및 목록 데이터를 가져옵니다.
    const fetchedItems = [
      { id: 1, name: '떡잎마을', imageUrl: Image1 , info: 'OO마을에서 자라는 싱긋한 사과가 일품 이다'},
      { id: 2, name: '언덕마을', imageUrl: Image1 , info: 'OO마을에서 자라는 싱긋한 사과가 일품 이다'},
      { id: 3, name: '태초마을', imageUrl: Image1 , info: 'OO마을에서 자라는 싱긋한 사과가 일품 이다'},
      { id: 4, name: '하늘마을', imageUrl: Image1 , info: 'OO마을에서 자라는 싱긋한 사과가 일품 이다'},
      // 필요한 만큼 항목을 추가하세요
    ];
    setWishlistItems(fetchedItems);
    if (fetchedItems.length === 0) {
      setShowEmptyWish(true);
    }
  }, []);
  

  // 이미지를 두 개씩 그룹화합니다.
  const groupedItems = groupBy(wishlistItems, 2);

  const filteredItems = wishlistItems.filter((item) => {
    if (filter === '진행중') {
      // 진행중 아이템만 보기
      return item.status === '진행중';
    } else if (filter === '진행완료') {
      // 진행완료 아이템만 보기
      return item.status === '진행완료';
    }
    return true; // 다른 경우 모두 보기
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <Wrapper>
      <Header>
        <a>찜한 마을</a>
      </Header>
      <HeadLine></HeadLine>

      {/* WishButton 컴포넌트를 렌더링하고 버튼 클릭 시 필터를 변경 */}
      <WishButton>
        <Button active={filter === '진행중'} onClick={() => handleFilterChange('진행중')}>
          진행중
        </Button>
        <Button active={filter === '진행완료'} onClick={() => handleFilterChange('진행완료')}>
          진행완료
        </Button>
      </WishButton>

      {showEmptyWish ? (
        <EmptyWish />
      ) : (
        <WishListWrapper>
          <WishListItems>
            {groupedItems.map((group, groupIndex) => (
              <Row key={groupIndex}>
                {group.map((item) => (
                  <WishListItem key={item.id}>
                    <ItemImage src={item.imageUrl} alt={item.name} />
                    <ItemName>{item.name}</ItemName>
                    <ItemInfo>{item.info}</ItemInfo>
                  </WishListItem>
                ))}
              </Row>
            ))}
          </WishListItems>
        </WishListWrapper>
      )}
    </Wrapper>
  );
}

// 이미지를 그룹화하는 함수
function groupBy(arr, groupSize) {
  return arr.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / groupSize);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);
}

const Wrapper = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;s
  
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 120px;
  width: 780px;
  position: relative;
  margin-top: 0px;

  a {
    margin-top: 40px;
    top: 70%;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`;
const HeadLine = styled.div`
  display: flex;
  flex-direction: column;
  height: 3px;
  width: 900px;
  position: relative;
  background-color: #dfdfdf;
`;

const WishListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const WishListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  gap: 50px; // 이미지 간격을 조절합니다
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; // 행 간격 조절
`;

const WishListItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  // 이미지에 대한 스타일을 추가하세요
  display : flex;
  justify-content: space-between;
  margin : 80px;

`;

const ItemName = styled.div`
  margin-top : -36px;
  display : flex;
  justify-content: center;
  color: #2A2A2A;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`;
const ItemInfo = styled.div`
margin-top : 10px;
display : flex;
justify-content: center;
color: #2A2A2A;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;

const WishButton = styled.div`

margin-right: auto;
margin-left: 350px;
  display: flex;
  width: 250px;
  margin-top: 20px;

`;

const Button = styled.div`
  
display : flex;
justify-content: center;
 text-align: center;
 flex-direction : column;
width: 105px;
height: 39px;
flex-shrink: 0;
border-radius: 25.5px;
border: 1px solid #DFDFDF;
background-color: ${(props) => (props.active ? '#ccc' : '#fff')}; /* 눌린 버튼은 회색, 아닌 버튼은 하얀색 */
cursor : pointer;

`;