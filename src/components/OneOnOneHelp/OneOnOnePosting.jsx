import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import CustomSelect from './CustomSelect'
import UploadPhoto from '../../assets/imgs/Group 64622.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function OneOnOnePosting() {
    const Category = [{key: "All", value: "전체"},
                    {key: "Pay", value: "결제 문의"},
                    {key: "Shipping", value: "배송 문의"},
                    {key: "Cancel", value: "취소/반품/환불 문의"},
                    {key: "Other", value: "기타 문의"}];
                    
    
    const navigate = useNavigate();

    const [option, setOption] = useState(false);

    const [categoryIdx, setCategoryIdx] = useState(0);


    const [title, setTitle] = useState("");
    const [postContent, setPostContent] = useState("====================\n\n1. 주문번호\n\n\n2. 문의내용");

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const receiveSelectValue = (rcv) => {
        setCategoryIdx(Category.findIndex(v => v.value === rcv));
        console.log(Category.findIndex(v => v.value === rcv));
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handlePostChange = (e) => {
        setPostContent(e.target.value);
    }

    const clickWrapp = (event) => {
        if(!event.target.classList.contains('sel')){
            setOption(current => !current);
        }
      };

    useEffect(() => {
        document.addEventListener("click", clickWrapp);
    }, []);  
           
  return (
    <HelpContainer>
        <form>
        <CategoryContainer>
            카테고리
            <div style={{display:'flex'}}>
                
                {/*
                <Select name='category'>
                    <option value="All">전체</option>
                    <option value="Pay">후원/결제 문의</option>
                    <option value="Shipping">배송 문의</option>
                    <option value="Cancel">취소/반품/환불 문의</option>
                    <option value="Other">기타 문의</option>
                </Select>*/
                }
                
                <CustomSelect optionData = {Category} sendValueFunction={receiveSelectValue} isShow={option} width='24.7vw' />
                <Select name='DetailCategory'>
                    <option value="Detail">상세유형</option>
                </Select>
            </div>
        </CategoryContainer>
        <hr/>
        <CategoryContainer>
            <Label htmlFor = "title">제목</Label>
            <Input id='title' value={title} onChange={handleTitleChange}></Input>
        </CategoryContainer>
        <hr/>
        <InputContainer>
            내용
        <ContentBox>
        <PostInput 
        value={postContent}
        onChange={handlePostChange}
        ></PostInput>
        <PhotoContainer>
            <img src={UploadPhoto} alt='UploadPhoto' style={{marginTop:5, maxWidth:100}} />
            <PhotoText>
            · 30MB 이하의 이미지만 업로드 가능합니다.<br/>
            · 상품과 무관한 내용은 삭제 될 수 있습니다.<br/>
            · 사진은 최대 5장까지 등록 가능합니다.
            </PhotoText>
        </PhotoContainer>
        </ContentBox>
        </InputContainer>
        <CancelButton onClick={handleCancel}>취소하기</CancelButton>
        <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
        </form>
    </HelpContainer>
  )
}


const HelpContainer = styled.div`
    text-align: center;
    padding: 5px;
`
const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:5px;
`
const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 5px;
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 5px;
    
`

const PhotoContainer = styled.div`
    display: flex;
    padding: 15px 5px;
`

const PhotoText = styled.h2`
    display: flex;
    padding: 15px 10px;
    text-align: left;
    line-height: normal;
    color: gray;
`

const Select = styled.select`
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'%3E%3C/path%3E%3C/svg%3E") no-repeat 95% 50%;
    padding: 5px;
    margin: 5px;
    width: 24.7vw;
    border: solid 2px #DFDFDF;
    border-radius: 10px;
`
const Label = styled.label`
`

const Input = styled.input`
    padding: 5px;
    margin:5px;
    width: 50vw;
    border: solid 2px #DFDFDF;
    border-radius: 10px;
`
const PostInput = styled.textarea`
padding: 5px;
height:40vh;
width: 50vw;
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

const SubmitButton = styled.button`
    margin: 20px;
    padding: 20px;
    width: 20vw;
    padding-left:100px;
    padding-right:100px;
    border-radius: 15px;
    background-color: #FF6565;
    color:white;
`

const CancelButton = styled.button`
    margin: 20px;
    padding: 20px;
    width: 20vw;
    padding-left:100px;
    padding-right:100px;
    border-radius: 15px;
    border: 2px solid #676767;
    background-color: #ffffff;
    color:#676767;
`