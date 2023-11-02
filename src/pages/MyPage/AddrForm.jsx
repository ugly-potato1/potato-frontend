import React from 'react';
import { useForm } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";

export default function AddrForm({

  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1_000));
    alert(JSON.stringify(data));
    },
    initValue,
    }) {
    const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors }
    } = useForm();

    const onCompletePost = data => {
      setModalState(false);
      setInputAddressValue(data.address);
      setInputZipCodeValue(data.zonecode);
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>


      <label htmlFor="name">받는 사람</label>
      <input
        id="name"
        type="text"
        placeholder=""
        aria-invalid={
          isSubmitted ? (errors.name ? "true" : "false") : undefined
        }
        {...register("name", {
          required: "이름은 필수 입력입니다.",
          pattern: {
            //정규식
          }
        })}
      />
      {errors.name && <small role="alert">{errors.name.message}</small>}


      <label htmlFor="address">주소</label>
      <input
        id="address"
        type="text"
        placeholder=""
        aria-invalid={
          isSubmitted ? (errors.address ? "true" : "false") : undefined
        }
        {...register("address", {
          required: "주소는 필수 입력입니다.",
        })}
      />
      {errors.address && <small role="alert">{errors.address.message}</small>}


      <label htmlFor="DetaillAddress">상세주소</label>
      
      <input
        id="DetailAaddress"
        type="text"
        placeholder=""
        aria-invalid={
          isSubmitted ? (errors.DetailAddress ? "true" : "false") : undefined
        }
        {...register("DetailAddress", {
          required: "주소는 필수 입력입니다.",
        })}
      />
      {errors.DetailAddress && <small role="alert">{errors.DetailAddress.message}</small>}

      <label htmlFor="Call">연락처</label>
      <input
        id="Call"
        type="tel"
        placeholder=""
        aria-invalid={
          isSubmitted ? (errors.Call ? "true" : "false") : undefined
        }
        {...register("Call", {
          required: "연락처는 필수 입력입니다.",
          pattern: {
            //정규식
          }
        })}
      />
      {errors.DetailAddress && <small role="alert">{errors.Callmessage}</small>}


      <button type="submit" disabled={isSubmitting}>
        저장
      </button>
      <button type="reset" disabled={isSubmitting}>
        취소
      </button>
    </form>
    );
}

