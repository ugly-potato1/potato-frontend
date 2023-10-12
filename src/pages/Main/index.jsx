import React from 'react'
import "../../styles/Main/index.css"
import Image01 from '../../assets/imgs/main_banner_3.png'
import Image02 from '../../assets/imgs/login_bg.png'
import Image03 from '../../assets/imgs/main_cook_1.png'
import Image04 from '../../assets/imgs/main_cook_2.jpg'
import Image05 from '../../assets/imgs/main_banner_2.png'
import Image06 from '../../assets/imgs/main_farmer_1.png'
import Image07 from '../../assets/imgs/main_farmer_2.png'
import Image08 from '../../assets/imgs/main_farmer_3.png'
import Image09 from '../../assets/imgs/main_farmer_4.jpg'
import Image10 from '../../assets/imgs/main_bottom_1.png'
import Image11 from '../../assets/imgs/main_bottom_2.png'
import Image12 from '../../assets/imgs/main_bottom_3.png'

export default function Main() {
  return (
    <div className='wrapper'>
      <div className = "main__container">
        <div className='banner__container'>
          <img className="banner__image1" 
          src={Image01}>
          </img>
          <div className='banner__shadow'>
            <span className='span__1'>농가와 소비자가 함께하는<br/> 지속 가능한 농업</span>
            <span className='span__2'>함께하는 환경 보호! 마을과 상생하는 프로젝트</span>
            <button class="title__button">마을구출 동참하기
            </button>
          </div>
        </div>
        <div className='sub__title'>다채롭기만한.<div className='span__3'>똑같이 알록달록한 농작물</div></div>
        
        <div className='sub__container1'>
          <img className="banner__image2" 
          src={Image02}>
          </img>
        </div>
        <div className='sub__title__2'>싸고 맛있는.</div>
        <div className='sub__container2'>
          <img className="banner__image3" 
          src={Image03}>
          </img>
          <img className="banner__image4" 
          src={Image04}>
          </img>     
        </div>
        <div className='button__wrapper'>
          <button class="orange__button">이름만 못난이인 농작물 더 알아보기
          </button>
        </div>
        <div className='sub__container3'>
          <div className='sub__title__3'>마을과 함께하는<br/>상생 프로젝트</div>
          <div className='user__wrap'>
            <img className="banner__image5" 
            src={Image05}>
            </img>
            <div className='shadow'>
              <button class="button__sample1">마을구출 동참하기
              </button>
              <button class="button__sample2">마을구출 동참하기
              </button>
            </div>
          </div>
          <div className='img__container'>
          <img  
          src={Image06}>
          </img>   
          <img  
          src={Image07}>
          </img>
          <img 
          src={Image08}>
          </img>   
          <img 
          src={Image09}>
          </img>      
          </div>
        </div>
      <div className='bottom__container'>
        <div className='sub__title__4'>우리의 미션</div>
        <div className='img__container'>
          <>
          </>
          <div>
          <img className='sub__image'  
          src={Image10}>
          </img> 
          <div  className='sub__title__5'>지속가능한 농업</div>
          </div>
          <div>
          <img className='sub__image'  
          src={Image11}>
          </img> 
          <div  className='sub__title__5'>환경 보호</div>
          </div>
          <div>
          <img  className='sub__image' 
          src={Image12}>
          </img> 
          <div  className='sub__title__5'>못난이 농작물<br/> 인식 개선 · 체험</div>
          </div>  
          </div>
          <div className='bottom__button'>이름만 못난이인 농작물 더 알아보기</div>
          <button className='bottom__bar'>
       </button>
      </div>
       
      </div>
    </div>
  )
}
