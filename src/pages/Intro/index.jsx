import React from 'react'
import introCard1 from './../../components/introCard/introCard1';

export default function Intro() {
  return (
    <div className='mx-auto max-w-screen-lg px-16px'>
      <div className='text-center'>
        <img alt='group 64491'></img>
        <h3 className=' text-xl mt-10'>못난이 농작물이란?</h3>
        <p className='mt-5'>맛이나 영양은 그대로지만, 색 · 흠집 여부 · 크기 등의 외관이 품질 구분 기준 표준에 미달하는 비규격 농산물입니다.</p>
        <div className='flex justify-around my-10'>
          <div><img alt='표준'/>표준</div>
          <div><img alt='색'/>색</div>
          <div><img alt='크기'/>크기</div>
          <div><img alt='흠집'/>흠집</div>
        </div>
        <div className='my-7'>
          <h4>전체 농산물의 30%를 차지하는 이 못난이들은 외형이 다르다는 이유로 버려지고 있습니다.</h4>
          <h5>이로 인해 다음의 문제들이 발생하게 됩니다.</h5>
        </div>
      </div>
      <div className='text-center bg-orange-100 h-96 p-7'>
        <div className='m-auto'>
          <h3 className=''>환경적 문제</h3>
          <div className='flex justify-around'>
            <div><img alt='썩으면서 악취 발생'/><h5>썩으면서 악취 발생</h5></div>
            <div><img alt='수질 오염 발생'/><h5>수질 오염 발생</h5></div>
            <div><img alt='온실가스 배출'/><h5>온실가스 배출</h5></div>
          </div>
        </div>
        <div className='m-auto'>
          <h3>경제적 문제</h3>
          <div className='flex justify-around'>
            <div><img alt='노동력 낭비'/><h5>노동력 낭비</h5></div>
            <div><img alt='농산물 재배에 투입된 자원 낭비'/><h5>농산물 재배에<br/>투입된 자원 낭비</h5></div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <h3>Farmely가 생각하는 못난이</h3>
        <introCard1 />
        <introCard1 />
        <introCard1 />
      </div>
      <hr />
      <div className='text-center'>
        <h3 className='mt-10'>우리의 미션</h3>
        <h5 className='my-5'>못난이 농작물을 이해하고 경험하며, 함께하는 것입니다</h5>
        <div className='flex justify-around'>
          <img alt='못난이 농작물 이해하기'/>
          <div className='p-10'>
            <h5 className='text-brand'>못난이 농작물 이해하기</h5>
            <h6>외형만 다르고 맛과 영양은 동일한, 못나지 않은,<br/>서로 개성이 다른 친구들일 뿐입니다.</h6>
          </div>
        </div>
        <div className='flex flex-row-reverse justify-around'>
        <img alt='개성이 다른 친구들 경험해보기'/>
          <div className='p-10'>
            <h5 className='text-brand'>개성이 다른 친구들 경험해보기</h5>
            <h6>재미있게 알아가는 개성 충만 못난이 친구들</h6>
          </div>
        </div>
        <div className='flex justify-around'>
          <img alt='농가와 소비자가 함께하는 지속 가능한 농업'/>
          <div className='p-10'>
            <h5 className='text-brand'>농가와 소비자가 함께하는<br/>지속 가능한 농업</h5>
            <h6>함께하는 환경 보호<br/>마을과 상생하는 프로젝트</h6>
          </div>
        </div>
      </div>
      <hr />
      <div className='text-center'>
        <h3 className='my-10'>못난이 친구들을 직접 만나볼 수 있는<br/>펀딩 프로젝트</h3>
        <iframe></iframe>
        <div className='flex justify-center'>
          <img alt='당근'/>
          <img alt='감자'/>
          <div className='p-10'>
            <h5>못난이 친구들과 함께!</h5>
            <h5>마을 농장과 함께!</h5>
            <h5>우리의 미션을 함께!</h5>
          </div>
          <img alt='파프리카'/>
          <img alt='완두콩'/>
        </div>
        <div className='mx-auto flex justify-around bg-orange-100 w-2/3 p-12 rounded-lg'>
          <div>합리적인 가격으로<img alt='합리적인 가격으로'/></div>
          <div>친환경적으로<img alt='친환경적으로'/></div>
        </div>
        <h4 className='m-10'>전국 곳곳에서 우리를 기다리는 못난이 친구들을<br/>마을과 함께하는 펀딩 프로젝트로 함께 해봐요!</h4>
      </div>

    </div>
  )
}
