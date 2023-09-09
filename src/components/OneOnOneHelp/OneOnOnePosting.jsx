import React from 'react'
import { styled } from 'styled-components'
import CustomSelect from './CustomSelect'

export default function OneOnOnePosting() {
  return (
    <HelpContainer>
        <form>
        <CategoryContainer>
           <Select name='category'>
                <option value="All">전체</option>
                <option value="Pay">후원/결제 문의</option>
                <option value="Shipping">배송 문의</option>
                <option value="Cancel">취소/반품/환불 문의</option>
                <option value="Other">기타 문의</option>
            </Select>
            <Select name='DetailCategory'>
                <option value="Detail">상세유형</option>
            </Select>
        </CategoryContainer>
        <hr/>
        <CategoryContainer>
            <Label for = "title">제목</Label>
            <Input id='title'></Input>
        </CategoryContainer>
        <CategoryContainer>
            <PostInput></PostInput>
        </CategoryContainer>
        </form>
    </HelpContainer>
  )
}


const HelpContainer = styled.div`
    text-align: center;
`
const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Select = styled.select`
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'%3E%3C/path%3E%3C/svg%3E") no-repeat 95% 50%;
    padding: 5px;
    margin: 5px;
    width: 11vw;
    border: solid 2px #DFDFDF;
    border-radius: 10px;
`
const Label = styled.label`
`

const Input = styled.input`
    padding: 5px;
    margin:5px;
    width: 25vw;
    border: solid 2px #DFDFDF;
    border-radius: 10px;
`
const PostInput = styled.input`
padding: 5px;
margin:5px;
height:40vh;
width: 40vw;
border: solid 2px #DFDFDF;
border-radius: 10px;    
`

const SearchButton = styled.button`
    padding: 5px;
    width: 60px;
    border: solid 2px black;
    border-radius: 10px;
`

const PostContainer = styled.div`
    margin: 50px;
`

const PostButton = styled.button`
    margin: 20px;
    padding: 20px;
    padding-left:200px;
    padding-right:200px;
    border-radius: 15px;
    background-color: #FF6565;
    color:white;
    
`