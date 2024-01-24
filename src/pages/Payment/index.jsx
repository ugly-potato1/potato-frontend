import { ReactComponent as ColumnBar } from '../../assets/imgs/Payment/columnBar.svg';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from './styles';
import CustomerDetail from '../../components/Payment/CustomerDetail';

const Payment = () => {
  // 사용자의 배송지 목록을 가져오는 요청 + (배송지 추가 및 삭제에 대한 요청 고려)
  const [agreement, setAgreement] = useState(false);
  const handleCheckboxChange = (e) => {
    setAgreement(e.target.checked);
  };
  const onClickPayment = () => {
    if (!agreement) {
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
    <S.PaymentLayout>
      <S.PageTitle>주문/결제</S.PageTitle>
      <S.Bar />
      <S.CustomerInfoContainer>
        <S.CustomerDetail>
          <CustomerDetail
            handleCheckboxChange={handleCheckboxChange}
            agreement={agreement}
          />
        </S.CustomerDetail>
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
      </S.CustomerInfoContainer>
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
    </S.PaymentLayout>
  );
};

export default Payment;

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
