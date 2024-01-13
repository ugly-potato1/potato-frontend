import React, { useState } from 'react';
import { styled } from 'styled-components'
import { FiSearch } from "react-icons/fi";
import ContentWrap from './ContentWrap';

export default function Community() {

    const [tagButtonList, setTagButtonList] = useState(["#가벼운", "#여름", "#런치", "#디너"]);
    const [selectedTag, setSelectedTag] = useState([null]);

    return (
        <Wrapper>
            <Container>
                <InputWrap>
                    <SearchInput />
                    <SearchButton>
                        <FiSearch color='#6A6A6A' size='1.2rem' />
                    </SearchButton>
                </InputWrap>
                <ButtonWrap>
                    <TagWrap>
                        <TagButton>#가벼운</TagButton>
                        <TagButton>#여름</TagButton>
                        <TagButton>#런치</TagButton>
                        <TagButton>#디너</TagButton>
                    </TagWrap>
                    <PostButton>글쓰기</PostButton>
                </ButtonWrap>
            </Container>

            <ContentWrap color={'#FFF4F4'}>

            </ContentWrap>
            <ContentWrap>

            </ContentWrap>
            <ContentWrap>

            </ContentWrap>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
//검색창
const InputWrap = styled.div`
    box-sizing: border-box;
    margin: auto;
    margin-top: 3rem;
    border: solid 2px #DADADA;
    border-radius: 5rem;
    width: 800px;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchInput = styled.input`
    border: solid 0px #DADADA;
    background-color: transparent;
    width: 740px;
    height: 3rem;
    outline: none;
`
const SearchButton = styled.button`
    border: solid 0px;
    height: 3rem;
`
//태그, 글쓰기버튼
const ButtonWrap = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 1280px;
`
const TagWrap = styled.div`
    justify-content: space-evenly;
`

const TagButton = styled.button`
    margin: auto;
    margin-left: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border: solid 1px #BFBFBF;
    border-radius: 5rem;
    width: auto;
    height: 3rem;
    color: #969696;
`
const PostButton = styled.button`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border: solid 0px #BFBFBF;
    border-radius: 5rem;
    width: 7rem;
    height: 3rem;
    background-color: #FF4256;
    color: #F3F3F3;
`
//컨텐츠