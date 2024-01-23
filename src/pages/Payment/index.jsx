import { ReactComponent as ColumnBar } from '../../assets/imgs/Payment/columnBar.svg';
import React, { useState } from 'react';
import styled from 'styled-components';

const Payment = () => {
  // 배송지 저장할 state필요 (배송지 변경시에 state를 바꾸어 주어야 하며, 기본 배송지도 알아야함)
  const [agree, setAgree] = useState(false);
  const handleCheckboxChange = (e) => {
    setAgree(e.target.checked);
  };
  const onClickPayment = () => {
    if (!agree) {
      alert('먼저 연락처와 이메일로의 수신에 동의하세요!');
      return;
    }
    const { IMP } = window;
    IMP.init('imp73244762');

    const data = {
      pg: 'html5_inicis.INIpayTest', // PG사 (테스트용이라 INIpayTest붙음)
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 200, // 결제금액
      name: '아임포트 결제 데이터 분석', // 주문명 (상품명 들어가면 될듯 + 예를들어 품목1외 몇개)
      buyer_name: '김태윤', // 구매자 이름 (Link state로 부터 받아온 사용자명)
      buyer_tel: '01012341234', // 구매자 전화번호 (Link state로 부터 받아온 전화번호)
      buyer_email: 'example@example', // 구매자 이메일 (Link state로 부터 받아온 이메일)
      buyer_addr: '신사동 661-16', // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
    };
    const callback = (response) => {
      const { success, imp_uid, merchant_uid, paid_amount, error_msg } =
        response;

      if (success) {
        // 백엔드 연동 과정 (결제금액이 올바른지 확인하기 위함) + imp_uid, merchant_uid 값을 백으로 보냄
        // (백으로 imp_uid값 전송 필요 + 백에서는 가맹점 식별코드 및 secret key를 통해 accessToken값을 얻어오고, 주문 내역이 올바른지 확인하는 과정 필요)
        // 올바른 결제인 경우 리다이렉션 페이지 구성 필요
        alert('결제 성공');
      } else {
        alert(`결제 실패: ${error_msg}`);
      }
    };

    IMP.request_pay(data, callback);
  };

  return (
    <PaymentLayout>
      <PageTitle>주문/결제</PageTitle>
      <Bar />
      <CustomerInfoContainer>
        <CustomerDetail>
          <h1>구매자 정보</h1>
          <h1>
            이름 <span className="value">홍길동</span>
          </h1>
          <h1>
            이메일 <span className="value">OOOOO@naver.com</span>
          </h1>
          <h1>
            연락처 <span className="value">010-1234-5678</span>
          </h1>
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={handleCheckboxChange}
            />
            <span>위 연락처와 이메일로의 수신에 동의합니다.</span>
          </label>
        </CustomerDetail>
        <DeliverInfo>
          <h1>
            배송지 정보 <button>배송지 변경</button>
          </h1>
          <h1>
            이름 <span className="value">홍길동</span>
          </h1>
          <h1>
            연락처 <span className="value">010-1234-5678</span>
          </h1>
          <h1>
            배송주소{' '}
            <span className="value">
              [00000] 서울 00구 00로 000 000동 000호
            </span>
          </h1>
          <hr
            style={{ width: '95%', margin: '0 auto', marginBottom: '30px' }}
          />
          <h1>
            배송 요청사항{' '}
            <input type="text" placeholder="ex) 초인종 누르지 말아 주세요~!" />
          </h1>
        </DeliverInfo>
        <PaymentMethod style={{ boxShadow: 'none' }}>
          <h1>결제 수단</h1>
        </PaymentMethod>
        <AgreeMent style={{ boxShadow: 'none' }}>
          <h1>약관동의</h1>
        </AgreeMent>
      </CustomerInfoContainer>
      <ButtonContainer>
        <TotalFee>
          <span>최종 구매 금액</span>
          <span className="bold">67000원</span>
          <ColumnBar />
          <span>배송비</span>
          <span className="bold">무료</span>
        </TotalFee>
        <PaymentBtn onClick={onClickPayment}>구매하기</PaymentBtn>
      </ButtonContainer>
    </PaymentLayout>
  );
};

export default Payment;

const PaymentLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1300px;
  max-width: 1920px;
  margin: 0 auto;
`;
const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`;
const CustomerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  div {
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.12);
    margin-top: 50px;
    margin-bottom: 30px;
    flex-shrink: 0;
    width: 100%;
  }
  div:not(:first-child) {
    margin-top: 70px;
  }
  h1:first-child {
    position: absolute;
    top: -45px;
    left: -20px;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.44px;
  }
  h1:not(first-child),
  label {
    font-size: 18px;
    font-weight: 600;
    padding-left: 25px;
    margin-bottom: 40px;
    position: relative;
  }
  h1:nth-child(2) {
    padding-top: 30px;
  }
  h1 span,
  h1 input {
    position: absolute;
    left: 150px;
  }
  .value {
    font-weight: 400;
    padding-bottom: 20px;
  }
  label {
    display: flex;
    align-items: center;
  }
  label span {
    color: #707070;
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
  }
  h1 input {
    width: 446px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #dfdfdf;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    position: absolute;
    top: -5px;
  }
`;
const CustomerDetail = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 250px;
  margin-right: 50px;
`;
const DeliverInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 298px;
  position: relative;
  h1 button {
    margin-left: 20px;
    width: 160px;
    font-size: 18px;
    font-weight: 500;
    border: 1px solid #bcbcbc;
    border-radius: 5px;
  }
`;
const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100px;
`;
const AgreeMent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100px;
`;
const ButtonContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
  div,
  button {
    height: 65px;
    flex-shrink: 0;
    border-radius: 15px;
  }
  div {
    max-width: 561px;
    border: 1px solid #dfdfdf;
    background: #fff;
  }
  button {
    background: #ff4256;
    color: white;
    min-width: 400px;
    position: absolute;
    font-weight: 800;
    font-size: 22px;
    right: 0;
  }
`;
const TotalFee = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 22px;
    font-weight: 500;
    margin: 0 auto;
  }
  span.bold {
    font-weight: 700;
  }
`;
const PaymentBtn = styled.button``;

const Bar = styled.div`
  width: 70%;
  height: 8px;
  flex-shrink: 0;
  background: #f3f3f3;
  margin: 0 auto;
  margin-top: 35px;
  margin-bottom: 35px;
`;
