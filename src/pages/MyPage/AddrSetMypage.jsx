import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import NewAddressPopup from '../../components/Payment/NewAddressPopup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { fetchDeleteAddress } from '../../apis/Payment';
import AddrForm from './AddrForm';
import axios from 'axios';

export default function AddrSetMypage() {
    
  const [myZoneCode, setMyZondeCode] = useState(null); // zoneCode 상태
  const [isAddressInclude, setAddressInclude] = useState(null); // 상세주소 컴포넌트를 보여주기 위해, 앞서 주소가 입력되었는지 확인할 변수 + 우편번호 찾기를 통해 찾은 전체주소에 해당함
  const [isNewAddress, setNewAddress] = useState(false); // 신규 배송지 추가 확인
  const [isChangeAddress, setChangeAddress] = useState(false); // 배송지 변경 클릭 유무 확인

  const queryClient = useQueryClient();

    const [AddrList, setAddrList] = useState([
        {
        id: '기본 배송지', 
        name:"김김김", 
        address:"서울시 중구", 
        DetailAddress:"1번지", 
        call:"01012345678", },
        {id: '회사', name:"김김김", address:"어디", DetailAddress:"저기", call:"01012345678", },
      ]);

    const [initialValue, setInitValue] = useState({ 
        id: "", 
        name:"", 
        address:"", 
        DetailAddress:"", 
        call:"",
    })
    
    
    const [isEditing, setIsEditing] = useState(0);

    const addAddrList = (a) => {
        
        setAddrList(prev =>  ([
            ...prev,
           {
            id: a.id,
            name: a.name,
            address: a.address,
            DetailAddress: a.DetailAddress,
            call: a.Call,
        }]));
        console.log(AddrList);
    }

    const editAddrList = (a) => {
        const newList = AddrList.map((data) => {
            if(data.DetailAddress == a.DetailAddress){
                data.id = a.id;
                data.name = a.name;
                data.address = a.address;
                data.DetailAddress = a.DetailAddress;
                data.call = a.Call
            }
        });
        setAddrList(newList);
        console.log(AddrList);
    }

    const endEdit = () => {
        setIsEditing(0);
    }

    const handleAdd = () => {
        setInitValue({
            id: '', 
            name:"", 
            address:"", 
            DetailAddress:"", 
            call:"",
        })
        setIsEditing(1);
    }

    const handleEdit = (id, name, address, DetailAddress, call) => {
        setInitValue({
            id: id, 
            name: name, 
            address: address, 
            DetailAddress: DetailAddress, 
            call: call,
        })
        setIsEditing(1);
    }
    // const handleDelete = (DetailAddress) => {
    //     console.log(DetailAddress);
    //     if(AddrList.length <= 1){
    //         alert("배송지가 최소 1개 필요합니다.")
    //     }
    //     else{
    //         if (window.confirm("배송지를 삭제하시겠습니까?")) {
    //             //const id = this.id;
    //             setAddrList(AddrList.filter(AddrList => AddrList.DetailAddress != DetailAddress));
    //             alert("삭제되었습니다.");
    //           } 
    //         else {

    //           }
    //     }
    // }

    const fetchDeleteAddress = (id) => {
        axios.delete(`http://ec2-13-125-35-175.ap-northeast-2.compute.amazonaws.com/api/v1/addresses/${id}`, {
            withCredentials: true,
          });
    }

    const fetchAddAddress = (addr) => {
        axios.post('http://ec2-13-125-35-175.ap-northeast-2.compute.amazonaws.com/api/v1/addresses', addr);
    }
    
    
  const cancleNewAddress = () => {
    document.body.style.overflow = 'auto';
    setMyZondeCode(null);
    setValue('customerName', null);
    setValue('phoneNumber', null);
    setValue('address', null);
    setValue('detailAddress', null);
    setAddressInclude(null);
    setNewAddress(false);
    setIsEditing(0);
  };
  
  //배송지 삭제 요청
  const { mutate: handleDeleteAddress } = useMutation({
    mutationFn: (id) => fetchDeleteAddress(id),
    onSuccess: () => {
        queryClient.invalidateQueries(['totalUserAddress']);
      // 위와 같이 삭제한 후, 전체적인 주소목록에 대해 다시 refetch하는 과정 필요 or 백엔드로 부터 수정된 값들을 받아와서 총배송지를 다시 설정해주는 방법도 있음
      document.body.style.overflow = 'auto';
      setChangeAddress(false);
    },
    onError: () => {
      console.log('배송지 삭제 요청 실패');
      document.body.style.overflow = 'auto';
      setChangeAddress(false);
    },
  });

    // 배송지 추가 요청
  const { mutate: handleAddAddress } = useMutation({
    mutationFn: (address) => fetchAddAddress(address),
    onSuccess: () => {
        queryClient.invalidateQueries(['totalUserAddress']);
      // 위와 같이 삭제한 후, 전체적인 주소목록에 대해 다시 refetch하는 과정 필요 or 백엔드로 부터 수정된 값들을 받아와서 총배송지를 다시 설정해주는 방법도 있음

      document.body.style.overflow = 'auto';
    },
    onError: () => {
      document.body.style.overflow = 'auto';
      console.log('배송지 추가 요청 실패');
    },
  });

  // 신규 배송지 관련 폼
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: 'onSubmit' });

  // 백엔드로 신규 배송지 추가 요청 보내는 함수 + 주소 추가요청 이후, 전체 주소에 대한 정보를 다시 받아와야함
  const onValid = (data) => {
    console.log('백으로 보낼 추가 배송지에 대한 정보', data);
    console.log(myZoneCode);
    const sendAddress = { ...data, myZoneCode };
    console.log('백엔드에 최종적으로 보낼 인수', sendAddress);

    handleAddAddress(sendAddress); // 배송지 추가 요청하는 부분
    cancleNewAddress();
  };
  const open = useDaumPostcodePopup();
  const handleClick = () => {
    open({ onComplete: onCompleteHandler });
  };
  const onCompleteHandler = (data) => {
    console.log('우편 api로 부터 오는 값', data);

    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setMyZondeCode(data.zonecode);
    setAddressInclude(fullAddress);
    setValue('address', fullAddress);
  };

  
  const handleAddressInclude = (e) => {
    setAddressInclude(e.currentTarget.value);
  };

  
  const getAddress = async () => {
    try {
      const {data} = await axios.get(`http://ec2-13-125-35-175.ap-northeast-2.compute.amazonaws.com/api/v1/addresses/all`)
      return data
    }
    catch(error) {
      console.log(error)
    }
  }

useEffect(() => {
getAddress()
.then((res) => {
//setAddrList(res);
})}, [])

    return (
        <>
        {!isEditing && <>
        {  AddrList.map(({id, name, address, DetailAddress, call}) => (
            <Wrap key = {id}>
            <>
                <hr />
                <AddressBox>
                    <AddressName>
                        {id}
                    </AddressName>
                    <Detail>
                        <p>{name}</p>
                        <p>{call}</p>
                        <p>{address + ' ' + DetailAddress}</p>
                        <p></p>
                    </Detail>
                    <ButtonBox>
                        {/* <EditButton onClick={() => {handleEdit(id, name, address, DetailAddress, call)}}>
                            수정
                        </EditButton> */}
                        <DeleteButton onClick={() => {handleDeleteAddress(id)}}>
                            삭제
                        </DeleteButton>
                    </ButtonBox>
                </AddressBox>
            </>
            <hr />
            </Wrap>
            ))
        }
        <AddButton onClick={handleAdd}>
            배송지 추가하기
        </AddButton>
        </>}
        {isEditing ? 
        <Overlay>
          <NewAddressPopup
            cancleNewAddress={endEdit}
            handleSubmit={handleSubmit}
            onValid={onValid}
            register={register}
            errors={errors}
            myZoneCode={myZoneCode}
            isAddressInclude={isAddressInclude}
            handleAddressInclude={handleAddressInclude}
            handleClick={handleClick}
          />
        </Overlay> : ""}
        </> 
    )
}
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 960px;
    margin-left: 50px;
`

const AddressBox = styled.div`
    display: flex;
    width: 960px;
    height: 8rem;
`

const AddressName = styled.div`
    font-weight: bold;
    margin-top: 1.5rem;
    width: 200px;
`

const Detail = styled.div`
    color: #4A4A4A;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    line-height: 120%;
    width: 600px;
`

const ButtonBox = styled.div`
    display: flex;
    margin: 0.5rem;
    margin-top: 1rem;
    width: 200px;
`

    const AddButton = styled.button`
        color: #FF6565;
        font-weight: bold;
        margin-top: 1rem;
        margin-right: 0.5rem;
        margin-left: 50px;
        background-color: transparent;
        border-color: transparent;
    `

    const EditButton = styled.button`
        color: #FF6565;
        border-color: #FF6565;
        border-style: solid;
        border-width: 1px;
        border-radius: 10rem;
        width: 65px;
        height: 25px;
        margin-right:1rem;
        margin-bottom: 0.2rem;
    `

const DeleteButton = styled.button`
        color: #FF6565;
        border-color: #FF6565;
        border-style: solid;
        border-width: 1px;
        border-radius: 10rem;
        width: 65px;
        height: 25px;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;