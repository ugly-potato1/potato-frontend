import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import {IoIosArrowDown} from 'react-icons/io'
import CustomSelect from './CustomSelect';

export default function OneOnOneHelp() {
    function handleCategoryButton(e) {
        e.preventDefault();
    }
    const [option, setOption] = useState(false);

    const Post = false;

    const Category = [{key: "All", value: "전체"},
                    {key: "Pay", value: "후원/결제 문의"},
                    {key: "Shipping", value: "배송 문의"},
                    {key: "Cancel", value: "취소/반품/환불 문의"},
                    {key: "Other", value: "기타 문의"}];

    const TitleOrContent = [{key: "Title", value: "제목"},
                    {key: "Content", value: "내용"},
                    {key: "TitleContent", value: "제목+내용"}];

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
        <h2>1:1 문의</h2>
        <hr />
        <CategoryContainer>
            <form>
                {/*<Select name='category'>
                    <option value="All">전체</option>
                    <option value="Pay">후원/결제 문의</option>
                    <option value="Shipping">배송 문의</option>
                    <option value="Cancel">취소/반품/환불 문의</option>
                    <option value="Other">기타 문의</option>
                </Select>
                <Select name='TitleOrContent'>
                    <option value="Title">제목</option>
                    <option value="Content">내용</option>
                    <option value="TitleContent">제목+내용</option>
                </Select>*/}
                <div style={{display:'flex'}}>
                <CustomSelect optionData = {Category} show={option} width='160px' />
                <CustomSelect optionData = {TitleOrContent} show={option} width='160px' />
                <SearchInput></SearchInput>
                <SearchButton onClick={handleCategoryButton}>검색</SearchButton>
                </div>
            </form>
        </CategoryContainer>
        <PostContainer>
            {Post ? Post.map((p) => <li>{p}</li>):
            "게시글이 없습니다."
            }
        </PostContainer>
        <PostButton>글쓰기</PostButton>
    </HelpContainer>
  )
}

const HelpContainer = styled.div`
    text-align: center;
`
const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 20px;
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

const SearchInput = styled.input`
    padding: 5px;
    margin:5px;
    width: 25vw;
    border: solid 2px #DFDFDF;
    border-radius: 10px;
`

const SearchButton = styled.button`
    padding: 5px;
    margin: 5px;
    width: 60px;
    height: 2rem;
    align-items: center;
    border: solid 1px black;
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