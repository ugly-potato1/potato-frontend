import styled from 'styled-components';

const CustomerDetail = ({ agreement, handleCheckboxChange }) => {
  return (
    <>
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
          checked={agreement}
          onChange={handleCheckboxChange}
        />
        <span>위 연락처와 이메일로의 수신에 동의합니다.</span>
      </label>
    </>
  );
};

export default CustomerDetail;

const H1 = styled.h1`
  span,
  input {
    position: absolute;
    left: 150px;
  }
  input {
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
const Span = styled.span`
  .value {
    font-weight: 400;
    padding-bottom: 20px;
  }
`;
const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  padding-left: 25px;
  margin-bottom: 40px;
  position: relative;
  display: flex;
  align-items: center;
  span {
    color: #707070;
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
  }
`;
const Input = styled.input`
  position: absolute;
  left: 150px;
`;
