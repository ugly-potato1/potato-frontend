import React, { useState } from 'react';
import { styled } from 'styled-components';

export default function AddrSetMypage() {

    const [AddrList, setAddrList] = useState([
        {id:0, AddrName: '기본 배송지', name:{}, call:{}, },
      ]);
    
    const [isEditting, setIsEditting] = useState(0);

    return (
        <>
        <>
        { AddrList.map(({id, AddrName, name, call}) => (
            <>
                <hr />
                <AddressBox>
                    <AddressName>
                        {AddrName}
                    </AddressName>
                    <Detail>
                        {name}
                        {call}
                    </Detail>
                    <ButtonBox>
                        <EditButton />
                        <DeleteButton />
                    </ButtonBox>
                </AddressBox>
            </>
            ))
        }
        <hr />
        <AddButton />
        </>
        </> 
    )
}

const AddressBox = styled.div`
    display: flex;
`

const AddressName = styled.div`
    font-weight: bold;
`

const Detail = styled.div`
    
`

const ButtonBox = styled.div`
    display: flex;
`

const AddButton = styled.button`
    
`

const EditButton = styled.button`
    
`

const DeleteButton = styled.button`
    
`