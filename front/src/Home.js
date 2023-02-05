import React from 'react';
import './App.css';
import './swiper.css';
import './Home.css';

function Home(){
  return(
<div>
  <section id="banner">
            <div class="banner_menu">
                <div class="container">
                    <div class="row">
                        <div class="bm_right">
                            <ul>
                                <li><a href="#">영화</a></li>
                                <li><a href="#">예매</a></li>
                            </ul>
                            <div class="search">
                            <input type="text" placeholder="검색어 입력"></input>
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="slider">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide ss1">
                            <div class="container">
                                <div class="row">
                                    <h2>코로나 <em>Covid-19</em></h2>
                                    <p>많은 사람들의 목숨을 앗아간 질병</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide ss2">
                            <div class="container">
                                <div class="row">
                                    <h2>캡틴 마블 <em>Captain Marvel</em></h2>
                                    <p>새로운 히어로, 어벤져스의 희망</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide ss3">
                            <div class="container">
                                <div class="row">
                                    <h2>캡틴 마블 <em>Captain Marvel</em></h2>
                                    <p>새로운 히어로, 어벤져스의 희망</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                </div>
            </div>
        </div> 
  )
}

export default Home;