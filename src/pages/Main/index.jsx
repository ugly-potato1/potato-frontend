import React from 'react'
import "../../styles/Main/index.css"
import Image01 from '../../assets/imgs/main_banner_1.png'
import Image02 from '../../assets/imgs/login_bg.png'
import Image03 from '../../assets/imgs/main_cook_1.png'
import Image04 from '../../assets/imgs/main_cook_2.jpg'
import Image05 from '../../assets/imgs/main_banner_2.png'
import Image06 from '../../assets/imgs/main_farmer_1.png'
import Image07 from '../../assets/imgs/main_farmer_2.png'
import Image08 from '../../assets/imgs/main_farmer_3.png'
import Image09 from '../../assets/imgs/main_farmer_4.jpg'

export default function Main() {
  return (
    <div className='wrapper'>
      <div className = "main__container">
        <img className="banner__image1" 
        src={Image01}>
        </img>
        <div className='sub__title'>다채롭기만한.</div>
        <div className='sub__container1'>
          <img className="banner__image2" 
          src={Image02}>
          </img>
        </div>
        <div className='sub__title'>싸고 맛있는.</div>
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
          <div className='sub__title'>마을과 함께하는<br/>상생 프로젝트</div>
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
       <div div className='bottom__bar'>
        하단 바
       </div>
      </div>
    </div>
  )
}
