import React from 'react'
import {ReactComponent as Farmely} from '../../assets/imgs/Farmely3.svg'
import apple1 from '../../assets/imgs/Intro/image 173.png'
import apple2 from '../../assets/imgs/Intro/image 170.png'
import apple3 from '../../assets/imgs/Intro/image 171.png'
import apple4 from '../../assets/imgs/Intro/image 172.png'
import envProb1 from '../../assets/imgs/Intro/unsplash_E5kBdpQ7kQw.png'
import envProb2 from '../../assets/imgs/Intro/unsplash_FxnqdmKBJps.png'
import envProb3 from '../../assets/imgs/Intro/unsplash_6xeDIZgoPaw.png'
import econoProb1 from '../../assets/imgs/Intro/unsplash_xDwEa2kaeJA.png'
import econoProb2 from '../../assets/imgs/Intro/unsplash_sFydXGrt5OA.png'
import problem from '../../assets/imgs/Intro/Group 64722.png'
import introCard1 from '../../assets/imgs/Intro/Group 64732.png'
import introCard2 from '../../assets/imgs/Intro/Group 64727.png'
import introCard3 from '../../assets/imgs/Intro/Group 64726.png'
import mission1 from '../../assets/imgs/Intro/mission1.png'
import mission2 from '../../assets/imgs/Intro/mission2.png'
import mission3 from '../../assets/imgs/Intro/mission3.png'
import potato from '../../assets/imgs/Intro/potato.png'
import carrot from '../../assets/imgs/Intro/carrot.png'
import paprica from '../../assets/imgs/Intro/paprica.png'
import pea from '../../assets/imgs/Intro/pea.png'
import afford from '../../assets/imgs/Intro/afford.png'
import envfriendly from '../../assets/imgs/Intro/envfriendly.png'
import OneOnOneHelp from '../../components/OneOnOneHelp/OneOnOneHelp'
import OneOnOnePosting from '../../components/OneOnOneHelp/OneOnOnePosting'
import AddrSetMypage from '../MyPage/AddrSetMypage'

const Category = [{key: "All", value: "전체"},
                    {key: "Pay", value: "후원/결제 문의"},
                    {key: "Shipping", value: "배송 문의"},
                    {key: "Cancel", value: "취소/반품/환불 문의"},
                    {key: "Other", value: "기타 문의"}];
            

const TitleOrContent = [{key: "Title", value: "제목"},
                    {key: "Content", value: "내용"},
                    {key: "TitleContent", value: "제목+내용"}];

export default function Intro() {
  return (
    <div className='w-screen h-screen box-border'>
      <div className='bg-slate-500 h-60'>

      </div>
      <div className='text-center'>
        <h3 className=' text-xl mt-10 font-bold'>못난이 농작물이란?</h3>
        <p className='mt-5'>맛이나 영양은 그대로지만, 색 · 흠집 여부 · 크기 등의 외관이 품질 구분 기준 표준에 미달하는 비규격 농산물입니다.</p>
        <div className='flex justify-center my-10'>
          <div className='mx-10 my-5'><img src = {apple1} alt='표준' className='max-h-40'/>표준</div>
          <div className='mx-10 my-5'><img src = {apple2}  alt='색' className='max-h-40'/>색</div>
          <div className='mx-10 my-5'><img src = {apple3}  alt='크기' className='max-h-40'/>크기</div>
          <div className='mx-10 my-5'><img src = {apple4}  alt='흠집' className='max-h-40'/>흠집</div>
        </div>
        <div className='my-7 leading-normal'>
          <h4 className='font-semibold'>전체 농산물의 30%를 차지하는 이 못난이들은 외형이 다르다는 이유로 버려지고 있습니다.</h4>
          <h5>이로 인해 다음의 문제들이 발생하게 됩니다.</h5>
        </div>
      </div>
      {/*<div className='text-center bg-orange-100 h-auto p-5'>
          <div className='m-auto'>
            <h3 className='m-5 font-bold'>환경적 문제</h3>
              <div className='flex justify-evenly mx-10 font-semibold'>
                  <div className='relative'>
                  <img src={envProb1} alt='썩으면서 악취 발생' className='h-52'/>
                  <h5 className='absolute text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-slate-50 whitespace-nowrap'>썩으면서 악취 발생</h5>
                  </div>
                  <div className='relative'>
                    <img src={envProb2} alt='수질 오염 발생' className=' h-52'/>
                    <h5 className='absolute text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-slate-50'>수질 오염 발생</h5>
                  </div>
                  <div className='relative'>
                    <img src={envProb3} alt='온실가스 배출' className=' h-52'/>
                    <h5 className='absolute text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-slate-50'>온실가스 배출</h5>
                  </div>
              </div>
          </div>
          <div className='m-auto'>
            <h3 className='my-5 mt-10 font-bold'>경제적 문제</h3>
            <div className='flex justify-evenly mx-28 font-semibold whitespace-nowrap'>
              <div className='relative'>
                <img src={econoProb1} alt='노동력 낭비' className=' h-52'/>
                <h5 className='absolute text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-slate-50'>노동력 낭비</h5>
              </div>
              <div className='relative'>
                <img src={econoProb2} alt='농산물 재배에 투입된 자원 낭비' className=' h-52'/>
                <h5 className='absolute text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-slate-50 leading-tight'>농산물 재배에<br/>투입된 자원 낭비</h5>
              </div>
            </div>
          </div>
      </div>*/}
      <div style={{backgroundColor: '#FFEDDA'}}>
        <img src = {problem} className='mx-auto xl:max-w-7xl' alt = '문제점'/>
      </div>
      <div className='justify-center text-center my-16'>
        <div className='flex justify-center mx-4'>
          <img src={introCard1} alt='개성있는 외형을 가진 농산물' className='' />
        </div>
        <h2 className='font-bold my-7 flex items-center justify-center'><Farmely fill='#2A2A2A' className='mx-3'/>가 생각하는 못난이</h2>
        <div className='flex justify-center'>
          <div className='flex justify-center mx-4 my-2'>
            <img src={introCard2} alt='수요를 넘어선 잉여 생산물' className='w-full h-auto max-w-full' />
          </div>
          <div className='flex justify-center mx-4 my-2'>
            <img src={introCard3} alt='기타 도매할 길이 없는 농산물' className='w-full h-auto max-w-full' />
          </div>
        </div>
      </div>
      <hr />
      <div className='text-center font-semibold'>
        <h2 className='mt-10 font-bold'>우리의 미션</h2>
        <h5 className='my-10'>못난이 농작물을 이해하고 경험하며, 함께하는 것입니다</h5>
        <div className='flex flex-wrap justify-evenly lg:justify-center my-5'>
          <div className='w-1/3 xl:w-1/4 min-w-min'>
            <img className='max-h-80 m-auto' src={mission1} alt='못난이 농작물 이해하기'/>
          </div>
          <div className='my-auto w-1/3  xl:w-1/4 min-w-min text-center'>
            <h5 className='text-brand my-5'>못난이 농작물 이해하기</h5>
            <h6 className='leading-tight'>외형만 다르고 맛과 영양은 동일한, 못나지 않은,<br/>서로 개성이 다른 친구들일 뿐입니다.</h6>
          </div>
        </div>
        <div className='flex flex-row-reverse flex-wrap justify-evenly lg:justify-center my-5'>
          <div className='w-1/3 xl:w-1/4 min-w-min'>
            <img className='max-h-80 m-auto' src={mission2} alt='못난이 농작물 이해하기'/>
          </div>
          <div className='my-auto w-1/3 xl:w-1/4 min-w-max text-center'>
            <h5 className='text-brand my-5'>개성이 다른 친구들 경험해보기</h5>
            <h6>재미있게 알아가는 개성 충만 못난이 친구들</h6>
          </div>
        </div>
        <div className='flex flex-wrap justify-evenly lg:justify-center my-5'>
        <div className='w-1/3 xl:w-1/4 min-w-min'>
            <img className='max-h-80 m-auto' src={mission3} alt='못난이 농작물 이해하기'/>
          </div>
          <div className='my-auto w-1/3  xl:w-1/4 min-w-min text-center'>
            <h5 className='text-brand my-5 leading-tight'>농가와 소비자가 함께하는<br/>지속 가능한 농업</h5>
            <h6 className='leading-tight'>함께하는 환경 보호<br/>농가와 상생하는 프로젝트</h6>
          </div>
        </div>
      </div>
      <hr />
      <div className='text-center'>
        <h3 className='my-10 leading-tight font-bold'>못난이 친구들을 직접 만나볼 수 있는<br/>펀딩 프로젝트</h3>
        <div>
          마을 섭외 과정 동영상
        <iframe></iframe>
        </div>
        <div>
        <div className='flex justify-evenly lg:flex-row'>
          <div className='flex justify-evenly lg:flex-row mx-10'>
            <img className='h-24 lg:relative lg:top-20 lg:left-40' src={carrot} alt='당근'/>
            <img className='h-20 lg:relative lg:top-6 lg:left-60' src={potato} alt='감자'/>
          </div>
          <div className='p-10 leading-normal font-bold mx-auto xl:mx-10'>
            <h5>못난이 친구들과 함께!</h5>
            <h5>마을 농장과 함께!</h5>
            <h5>우리의 미션을 함께!</h5>
          </div>
          <div className='flex justify-evenly lg:flex-row mx-10'>
            <img className='h-24 lg:relative lg:top-1 lg:right-60' src={paprica} alt='파프리카'/>
            <img className='h-24 lg:relative lg:top-20 lg:right-40' src={pea} alt='완두콩'/>
          </div>
        </div>
          <div className='mx-auto flex justify-around bg-orange-100 xl:w-1/2 lg:w-2/3 p-12 rounded-2xl font-bold'>
            <div><h2 className='my-5 lg:mb-5'>합리적인 가격으로</h2><img src={afford} alt='합리적인 가격으로'/></div>
            <div><h2 className='my-5 lg:mb-5'>친환경적으로</h2><img src={envfriendly} alt='친환경적으로'/></div>
          </div>
        </div>
        <h4 className='m-10 leading-normal font-semibold'>전국 곳곳에서 우리를 기다리는 못난이 친구들을<br/>마을과 함께하는 펀딩 프로젝트로 함께 해봐요!</h4>
      </div>
    </div>
  )
}
