import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components'
import { FiSearch } from "react-icons/fi";
import Image01 from './imgs/img1.png'
import Image02 from './imgs/img2.png'
import Image03 from './imgs/img3.png'
import ContentWrap from './components/ContentWrap';

export default function Community() {

    const [tagButtonList, setTagButtonList] = useState(["#가벼운", "#여름", "#런치", "#디너"]);
    const [selectedTag, setSelectedTag] = useState(null);
    const handleTagChange = (tag) => {
        if(selectedTag !== tag)
            setSelectedTag(tag);
        else if(selectedTag === tag)
            setSelectedTag(null);
     };


    const [Keyword1, SetKeyword1] = useState(["#여름", "#가벼운"]);
    const [Keyword2, SetKeyword2] = useState(["#여름", "#소화가 잘 되는"]);
    const [Keyword3, SetKeyword3] = useState(["#여름", "#디저트"]);

    const [data, setData] = useState(
        {
            "theme": "여름 테마",
            "Keyword1": {"word": ["#가벼운", "#디저트"],
                        "img": "https://img1.daumcdn.net/thumb/R658x0.q70/?fname=http://t1.daumcdn.net/news/201708/19/chosun/20170819030343637qedb.jpg",
                        "url": "/ingredients/tomato"},
            "Keyword2": {"word": ["#다이어트", "#에피타이저"],
                        "img": "http://www.traveli.co.kr/repository/show/contents/S20141109140543m0.jpg",
                        "url": "/ingredients/plum"},
            "Keyword3": {"word": ["#제철", "#든든한"],
                        "img": "https://mblogthumb-phinf.pstatic.net/MjAxODA3MDFfMjYz/MDAxNTMwNDE0MzU2NjM4.twgInRnMnNVHLizOmRpoiAaULVWto2lZHdneDFIVncAg.hQMj9E5AnqBnZlmYqKmtquGE6XLfh0ACG47bS5zYcdUg.JPEG.insuart/IMG_7503.JPG?type=w800",
                        "url": "/ingredients/cherry"},
        }
    )
    let newData = null;
    useEffect(() =>{
        newData = data // 태그 따라 걸러주는거
      },[selectedTag])

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
                        {/*<TagButton>#가벼운</TagButton>
                        <TagButton>#여름</TagButton>
                        <TagButton>#런치</TagButton>
    <TagButton>#디너</TagButton>*/}
                        {tagButtonList.map((tag) => (
                            <TagButton 
                            key={tag}
                            active={selectedTag === tag}
                            onClick={() => handleTagChange(tag)}>{tag}</TagButton>
                        ))}
                    </TagWrap>
                    <PostButton>글쓰기</PostButton>
                </ButtonWrap>
            </Container>
            {(selectedTag === null) ? //tag 선택되면 컨텐츠 필터링
            (<div>
            <ContentWrap color={'#FFF4F4'} data={data}>

            </ContentWrap>
            <ContentWrap data={data}>

            </ContentWrap>
            <ContentWrap data={data}>

            </ContentWrap>
            </div>) :
            (<div>

            </div>)
            }
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
    border: solid 1px;
    border-color:  ${(props) => (props.active ? '#ff4256' : '#bfbfbf')};
    border-radius: 5rem;
    width: auto;
    height: 3rem;
    color:  ${(props) => (props.active ? '#ff4256' : '#969696')};
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