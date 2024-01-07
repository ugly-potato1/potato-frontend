import React, { useState } from 'react';
import { styled } from 'styled-components';
import AddrForm from './AddrForm';

export default function AddrSetMypage() {

    const [AddrList, setAddrList] = useState([
        {
        AddrName: '기본 배송지', 
        name:"김김김", 
        address:"서울시 중구", 
        DetailAddress:"1번지", 
        call:"01012345678", },
        {id:"저기", AddrName: '회사', name:"김김김", address:"어디", DetailAddress:"저기", call:"01012345678", },
      ]);

    const [initialValue, setInitValue] = useState({ 
        AddrName: "", 
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
            AddrName: a.AddrName,
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
                data.AddrName = a.AddrName;
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
            AddrName: '', 
            name:"", 
            address:"", 
            DetailAddress:"", 
            call:"",
        })
        setIsEditing(1);
    }

    const handleEdit = (AddrName, name, address, DetailAddress, call) => {
        setInitValue({
            AddrName: AddrName, 
            name: name, 
            address: address, 
            DetailAddress: DetailAddress, 
            call: call,
        })
        setIsEditing(1);
    }
    const handleDelete = (DetailAddress) => {
        console.log(DetailAddress);
        if(AddrList.length <= 1){
            alert("배송지가 최소 1개 필요합니다.")
        }
        else{
            if (window.confirm("배송지를 삭제하시겠습니까?")) {
                //const id = this.id;
                setAddrList(AddrList.filter(AddrList => AddrList.DetailAddress != DetailAddress));
                alert("삭제되었습니다.");
              } 
            else {

              }
        }
    }

    return (
        <>
        {!isEditing && <>
        {  AddrList.map(({AddrName, name, address, DetailAddress, call}) => (
            <div key = {DetailAddress}>
            <>
                <hr />
                <AddressBox>
                    <AddressName>
                        {AddrName}
                    </AddressName>
                    <Detail>
                        <p>{name}</p>
                        <p>{call}</p>
                        <p>{address + ' ' + DetailAddress}</p>
                        <p></p>
                    </Detail>
                    <ButtonBox>
                        <EditButton onClick={() => {handleEdit(AddrName, name, address, DetailAddress, call)}}>
                            수정
                        </EditButton>
                        <DeleteButton onClick={() => {handleDelete(DetailAddress)}}>
                            삭제
                        </DeleteButton>
                    </ButtonBox>
                </AddressBox>
            </>
            </div>
            ))
        }
        <hr />
        <AddButton onClick={handleAdd}>
            배송지 추가하기
        </AddButton>
        </>}
        {isEditing ? <AddrForm initValue={initialValue} addAddr={addAddrList} editAddr={editAddrList} endEdit={endEdit}/> : ""}
        </> 
    )
}

const AddressBox = styled.div`
    display: flex;
    height: 6rem;
`

const AddressName = styled.div`
    font-weight: bold;
    margin-top: 1.5rem;
    width: 6rem;
`

const Detail = styled.div`
    color: #4A4A4A;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 6rem;
    margin-right: 30vw;
    line-height: 120%;
    width: 10rem;
`

    const ButtonBox = styled.div`
        display: flexbox;
        margin: 0.5rem;
        margin-top: 1rem;
    `

    const AddButton = styled.button`
        color: #FF6565;
        font-weight: bold;
        margin-top: 1rem;
        margin-right: 0.5rem;
        background-color: transparent;
        border-color: transparent;
    `

    const EditButton = styled.button`
        color: #FF6565;
        border-color: #FF6565;
        border-style: solid;
        border-width: 1px;
        border-radius: 10rem;
        padding: 0.2rem;
        padding-left: 0.9rem;
        padding-right: 0.9rem;
        margin-right:1rem;
        margin-bottom: 0.2rem;
    `

const DeleteButton = styled.button`
        color: #FF6565;
        border-color: #FF6565;
        border-style: solid;
        border-width: 1px;
        border-radius: 10rem;
        padding: 0.2rem;
        padding-left: 0.9rem;
        padding-right: 0.9rem;
`