import React, { useState } from 'react';
import { styled } from 'styled-components';
import AddrForm from './AddrForm';

export default function AddrSetMypage() {

    const [AddrList, setAddrList] = useState([
        {id:0, AddrName: '기본 배송지', name:"김김김", call:"01012345678", },
      ]);
    
    const [isEditting, setIsEditting] = useState(0);

    const endEdit = () => {
        setIsEditting(0);
    }

    const handleAdd = () => {
        setIsEditting(1);
    }

    const handleEdit = () => {
        setIsEditting(1);
    }

    return (
        <>
        {!isEditting && <>
        {  AddrList.map(({id, AddrName, name, call}) => (
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
                        <p></p>
                    </Detail>
                    <ButtonBox>
                        <EditButton onClick={handleEdit}>
                            수정
                        </EditButton>
                        <DeleteButton>
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
        {isEditting ? <AddrForm endEdit={endEdit}/> : ""}
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
`

const Detail = styled.div`
    color: #4A4A4A;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 6rem;
    margin-right: 30vw;
    line-height: 120%;
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