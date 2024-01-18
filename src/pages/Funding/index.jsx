import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 180px;
  margin-right: 180px;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff6565;
  width: 1080px;
  height: 89px;
  border-radius: 15px;
  color: white;
  padding: 10px 50px;
  margin-top: 10px;
  span:first-child {
    font-size: 18px;
    font-weight: 600;
    width: 158px;
    height: 21px;
  }
  span:last-child {
    font-size: 17px;
    font-weight: 600;
    width: 203px;
    height: 44px;
    background-color: white;
    color: #ff6565;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    letter-spacing: 0.34px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 109px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  width: 335px;
  height: 232px;
  color: white;
  border-radius: 20px;
`;

const DetailTitle = styled.div`
  width: 87px;
  height: 30px;
  font-size: 25px;
  font-weight: 700;
  margin: 0 auto;
  margin-top: 25px;
`;

const DetailInfo = styled.div`
  width: 242px;
  height: 60px;
  font-size: 17px;
  font-weight: 600;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 5;
  margin-top: 25px;
`;

const Box = styled.div`
  background-color: #ff6565;
  width: 335px;
  height: 232px;
  border-radius: 20px;
  margin-right: 37px;
  position: relative;
  margin-bottom: 109px;

  &:hover {
    ${Detail} {
      transition: all 0.3s;
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const Country = styled.div`
  width: 80px;
  height: 30px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -50px;
`;

export default function Funding() {
  const countryInfo = [
    {
      id: 1,
      name: "전주마을",
      detail:
        "우리 전주마을은 ~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~----------------------------------aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      id: 2,
      name: "전주마을",
      detail:
        "우리 전주마을은 ~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~----------------------------------aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      id: 3,
      name: "전주마을",
      detail:
        "우리 전주마을은 ~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~----------------------------------aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      id: 4,
      name: "전주마을",
      detail:
        "우리 전주마을은 ~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~----------------------------------aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      id: 5,
      name: "전주마을",
      detail:
        "우리 전주마을은 ~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~----------------------------------aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      id: 6,
      name: "전주마을",
      detail:
        "우리 전주마을은 ~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~----------------------------------aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  ];

  return (
    <>
      <Wrapper>
        <Banner>
          <span>펀딩이 처음 이신가요?</span>
          <span>
            <Link to="/">이용방법보러가기 ↓</Link>
          </span>
        </Banner>
        <Row>
          {countryInfo.map(country => (
            <> 
            <Link to="buying">
              <Box>
                <Country>{country.name}</Country>
                <Detail>
                  <DetailTitle>{country.name}</DetailTitle>
                  <DetailInfo>{country.detail}</DetailInfo>
                </Detail>
              </Box>
              </Link>
            </>
          ))}
        </Row>
      </Wrapper>
      ;
    </>
  );
}
