import React, { useState } from 'react';
import { styled } from 'styled-components';
import AddrForm from './AddrForm';

export default function AddrSetMypage() {

    const [AddrList, setAddrList] = useState([
        {id:0, 
        AddrName: '기본 배송지', 
        name:"김김김", 
        address:"서울시 중구", 
        DetailAdress:"1번지", 
        call:"01012345678", },
        {id:1, AddrName: '회사', name:"김김김", address:"어디", DetailAdress:"저기", call:"01012345678", },
      ]);
    
    const [isEditting, setIsEditting] = useState(0);

    const addAddrList = (a) => {
        
        setAddrList(prev =>  ([
            ...prev,
           {
            id: a.AddrName,
            AddrName: a.AddrName,
            name: a.name,
            address: a.address,
            DetailAdress: a.DetailAddress,
            call: a.Call,
        }]));
        console.log(AddrList);
    }

    const endEdit = () => {
        setIsEditting(0);
    }

    const handleAdd = () => {
        setIsEditting(1);
    }

    const handleEdit = (id) => {
        setIsEditting(1);
    }
    const handleDelete = (id) => {
        console.log(id);
        if(AddrList.length <= 1){
            alert("배송지가 최소 1개 필요합니다.")
        }
        else{
            if (window.confirm("배송지를 삭제하시겠습니까?")) {
                //const id = this.id;
                setAddrList(AddrList.filter(AddrList => AddrList.id != id));
                alert("삭제되었습니다.");
              } 
            else {

              }
        }
    }

    return (
        <>
        {!isEditting && <>
        {  AddrList.map(({id, AddrName, name, address, DetailAdress, call}) => (
            <div key = {id}>
            <>
                <hr />
                <AddressBox>
                    <AddressName>
                        {AddrName}
                    </AddressName>
                    <Detail>
                        <p>{name}</p>
                        <p>{call}</p>
                        <p>{address + ' ' + DetailAdress}</p>
                        <p></p>
                    </Detail>
                    <ButtonBox>
                        <EditButton onClick={() => {handleEdit(AddrName, name, address, DetailAdress, call)}}>
                            수정
                        </EditButton>
                        <DeleteButton onClick={() => {handleDelete(id)}}>
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
        {isEditting ? <AddrForm addAddr={addAddrList} endEdit={endEdit}/> : ""}
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
    width: 5rem;
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