import React from 'react';
import styled from 'styled-components';

function callback(response) {
  const { success, merchant_uid, error_msg } = response;
  console.log('이게 뭐지', merchant_uid);

  if (success) {
    alert('결제 성공');
  } else {
    alert(`결제 실패: ${error_msg}`);
  }
}
const Payment = () => {
  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init('imp73244762');

    const data = {
      pg: 'html5_inicis.INIpayTest', // PG사
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: '아임포트 결제 데이터 분석', // 주문명
      buyer_name: '김태윤', // 구매자 이름
      buyer_tel: '01012341234', // 구매자 전화번호
      buyer_email: 'example@example', // 구매자 이메일
      buyer_addr: '신사동 661-16', // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
    };
    IMP.request_pay(data, callback);
  };

  return (
    <>
      <Container>
        <PaymentBtn onClick={onClickPayment}>payment</PaymentBtn>
      </Container>
    </>
  );
};

export default Payment;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaymentBtn = styled.button``;
