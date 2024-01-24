import { ReactComponent as CancleBtn } from '../../assets/imgs/Payment/icon_cancle.svg';
import CustomerDetail from '../../components/Payment/CustomerDetail';
import TotalPayment from '../../components/Payment/TotalPayment';
import DeliverInfo from '../../components/Payment/DeliverInfo';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from './styles';

// 사용자 전체 배송지 목록 (더미데이터)
const addressList = [
  {
    addressId: 1,
    customerName: '1번 고객',
    phoneNumber: '010-1111-1111',
    address: '서울특별시 중구 퇴계로 235',
    detailAddress: '111동 1111호',
    isDefault: true,
  },
  {
    addressId: 2,
    customerName: '2번 고객',
    phoneNumber: '010-2222-2222',
    address: '서울특별시 성북구 퇴계로 235',
    detailAddress: '222동 2222호',
    isDefault: false,
  },
  {
    addressId: 3,
    customerName: '3번 고객',
    phoneNumber: '010-3333-3333',
    address: '서울특별시 성북구 퇴계로 235',
    detailAddress: '333동 3333호',
    isDefault: false,
  },
];

const Payment = () => {
  // 이전 페이지로 부터 최종 금액을 받아오는 과정 필요 (ex. 이전페이지에서 Link의 state속성을 통해 넘겨주고 useLocation을 통해 받는식) + TotalPayment 컴포넌트에 뿌리기
  // 사용자 정보를 가져오는 요청 필요 + 얻은 사용자 정보를 CustomerDetail컴포넌트에 props로 뿌리기
  // 사용자의 전체 배송지 목록 + 기본 배송지 목록을 가져오는 요청 + (배송지 추가 및 삭제에 대한 요청 고려)
  // 기본 배송지를 배송지 state를 만들어 여기에 저장하고, DeliverInfo 컴포넌트에 뿌리자!
  // 바로 위에서 만든 배송지 state는 배송지 변경에서 클릭시 해당 배송지를 업데이트하고, 다시 DeliverInfo에 뿌리는 과정 필요하다
  const [agreement, setAgreement] = useState(false);
  const [deliverRequest, setDeliverRequest] = useState(''); // 배송 요청 사항
  const [isChangeAddress, setChangeAddress] = useState(false); // 배송지 변경 클릭 유무 확인
  const [isNewAddress, setNewAddress] = useState(false); // 신규 배송지 추가 확인

  const handleCheckboxChange = (e) => {
    setAgreement(e.target.checked);
  };
  const handleInputChange = (e) => {
    setDeliverRequest(e.target.value);
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

  const onClickChangeAddress = () => setChangeAddress(true);
  const cancleChangeAddress = () => setChangeAddress(false);
  const onClickNewAddress = () => {
    setChangeAddress(false);
    setNewAddress(true);
  };
  const cancleNewAddress = () => setNewAddress(false);

  return (
    <>
      <S.PaymentLayout>
        <S.PageTitle>주문/결제</S.PageTitle>
        <S.Bar />
        <S.CustomerInfoContainer>
          <CustomerDetail handleCheckboxChange={handleCheckboxChange} />
          <DeliverInfo
            onClickChangeAddress={onClickChangeAddress}
            handleInputChange={handleInputChange}
          />
          <PaymentMethod style={{ boxShadow: 'none' }}>
            <h1>결제 수단</h1>
          </PaymentMethod>
          <AgreeMent style={{ boxShadow: 'none' }}>
            <h1>약관동의</h1>
          </AgreeMent>
        </S.CustomerInfoContainer>
        <TotalPayment onClickPayment={onClickPayment} fee={67000} />
      </S.PaymentLayout>
      {isChangeAddress && (
        <Overlay onClick={cancleChangeAddress}>
          <DeliveryBox>
            <PopUpTitle>
              <h1>배송지 선택</h1>
              <CancleBtn onClick={cancleChangeAddress} />
              <hr />
            </PopUpTitle>
            <DeliveryList>
              {addressList.map((address) => (
                <DeliveryItem
                  key={address.addressId}
                  isDefault={address.isDefault}
                >
                  {address.customerName}
                  {address.phoneNumber}
                  {address.address}
                  {address.detailAddress}
                </DeliveryItem>
              ))}
            </DeliveryList>
            <NewAddressBtn onClick={onClickNewAddress}>
              신규 배송지 추가
            </NewAddressBtn>
          </DeliveryBox>
        </Overlay>
      )}
      {isNewAddress && (
        <Overlay onClick={cancleNewAddress}>
          <NewAddressBox>
            <PopUpTitle>
              <h1>신규 배송지 추가</h1>
              <CancleBtn onClick={cancleNewAddress} />
              <hr />
            </PopUpTitle>
          </NewAddressBox>
        </Overlay>
      )}
    </>
  );
};

export default Payment;

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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DeliveryBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 80vh;
  border-radius: 16px;
  background: #fff;
  overflow: auto;
`;
const PopUpTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  position: relative;
  h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.4px;
  }
  svg {
    cursor: pointer;
    position: absolute;
    width: 13px;
    height: 19px;
    top: 25px;
    right: 20px;
  }

  hr {
    z-index: 30;
    width: 100%;
    height: 1px;
    background: #d2d2d2;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;
const DeliveryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DeliveryItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 500px;
  height: 270px;
  border-radius: 5px;
  border: 2px solid ${(props) => (props.isDefault ? '#f47885' : '#e3e3e3')};
  margin: 10px 0;
`;
const NewAddressBtn = styled.button`
  width: 80%;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #d4d4d4;
  background: #fff;
  color: #ff4256;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.36px;
  margin: 30px auto;
  padding: 10px 5px;
`;
const NewAddressBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 65vh;
  border-radius: 16px;
  background: #fff;
  overflow: auto;
`;
