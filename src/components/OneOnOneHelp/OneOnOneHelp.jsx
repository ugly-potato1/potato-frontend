import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import CustomSelect from './CustomSelect';
import OneOnOnePosting from './OneOnOnePosting';

export default function OneOnOneHelp() {
    function handleCategoryButton(e) {
        e.preventDefault();
    }
    const [option, setOption] = useState(false);

    const [isEditting, setIsEditting] = useState(false);

    const [categoryIdx, setCategoryIdx] = useState(0);
    const [titleOrContentIdx, setTitleOrContentIdx] = useState(0);

    const [posts, setPosts] = useState([false]); // 게시글 데이터는 자신의 상태나 API에서 가져온 데이터로 초기화

    // 현재 페이지를 state로 관리
    const [currentPage, setCurrentPage] = useState(1);

    // 페이지당 게시글 수
    const postsPerPage = 10;

    // 현재 페이지의 게시글 범위 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 변경 이벤트 핸들러
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePost = () => {
        setIsEditting(1);
    }
    const endEdit = () => {
        setIsEditting(0);
    }


    const Category = [{key: "All", value: "전체"},
                    {key: "Pay", value: "결제 문의"},
                    {key: "Shipping", value: "배송 문의"},
                    {key: "Cancel", value: "취소/반품/환불 문의"},
                    {key: "Other", value: "기타 문의"}];

    const TitleOrContent = [{key: "Title", value: "제목"},
                    {key: "Content", value: "내용"},
                    {key: "TitleContent", value: "제목+내용"}];


    const receiveCategoryValue = (rcv) => {
        setCategoryIdx(Category.findIndex(v => v.value === rcv));
        console.log(Category.findIndex(v => v.value === rcv));
    }

    const receiveTitleOrContent = (rcv) => {
        setTitleOrContentIdx(TitleOrContent.findIndex(v => v.value === rcv));
        console.log(TitleOrContent.findIndex(v => v.value === rcv));
    }

    const clickWrapp = (event) => {
        if(!event.target.classList.contains('sel')){
            setOption(current => !current);
            console.log(event);
        }
      };

    useEffect(() => {
        document.addEventListener("click", clickWrapp);
    }, []);  
                
  return (
    <HelpContainer>
        {isEditting == 0 && <div>
        <HelpText>1:1 문의</HelpText>
        <hr />
        <CategoryContainer>
            <form>
                {/*<Select name='category'>
                    <option value="All">전체</option>
                    <option value="Pay">결제 문의</option>
                    <option value="Shipping">배송 문의</option>
                    <option value="Cancel">취소/반품/환불 문의</option>
                    <option value="Other">기타 문의</option>
                </Select>
                <Select name='TitleOrContent'>
                    <option value="Title">제목</option>
                    <option value="Content">내용</option>
                    <option value="TitleContent">제목+내용</option>
                </Select>*/}
                {/*
                <div style={{display:'flex'}}>
                <CustomSelect optionData = {Category} sendValueFunction={receiveCategoryValue} isShow={option} width='160px' />
                <CustomSelect optionData = {TitleOrContent} sendValueFunction={receiveTitleOrContent} isShow={option} width='160px' />
                <SearchInput></SearchInput>
                <SearchButton onClick={handleCategoryButton}>검색</SearchButton>
                </div>
                */}
            </form>
        </CategoryContainer>
        <PostContainer>
            {posts ? <div>
        {currentPosts.map((post) => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            </div>
        ))}

        {/* 리스트 버튼 생성 */}
        <div>
            {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
            </button>
            ))}
        </div>
        </div>
      :
            "게시글이 없습니다."
            }
        </PostContainer>
        <PostButton onClick={handlePost}>글쓰기</PostButton>
        </div>}
        {isEditting && <OneOnOnePosting endEdit={endEdit}/>}
    </HelpContainer>
  )
}

const HelpText = styled.h1`
    margin: 3rem;
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;
`

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
    background-color: #FF4256;
    color:white;
    
`