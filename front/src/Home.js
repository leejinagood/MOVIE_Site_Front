import React from "react";
import {Routes, Route, Link } from 'react-router-dom';
import './Home.css';
import Ticketing from './ticketing';
import img1 from './poster01.jpg';
import img2 from './poster02.jpg';
import img3 from './poster03.jpg';
import img4 from './poster04.jpg';



// npm install react-router-dom@6
function Home(){
  return(
  <div>
    <section id="banner">
        <header>
            <div class="banner_menu">
                <div class="container">
                    <div class="row">
                        <div class="bm_right">
                            <ul>
                                <li><Link to="./ticketing">예매</Link></li>
                                <li><a href="#" onClick={function(){alert("영화 페이지입니다.");}}>영화</a></li>
                            </ul>
                            <div class="search">
                            <input type="text" placeholder="검색어 입력"></input>
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Routes>
            <Route exact path="./ticketing" component={Ticketing}></Route>
        </Routes>
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
        <section id ="movie_poster">
            <div class="movie_poster">
             <div class="posrt1">
                <div>
                    <div class = "poster">
                    <figure>
                    <img src={img1}/>
                    </figure>
                    <div class="rank"><strong>1</strong></div>
                    </div>
                    <div class = "infor"></div>
                </div>
             </div>
             <div class="posrt2">
                <div>
                    <div class = "poster">
                    <figure>
                    <img src={img2}/>
                    </figure>
                    <div class="rank"><strong>2</strong></div>
                    </div>
                    <div class = "infor"></div>
                </div>
             </div>
             <div class="posrt3">
                <div>
                    <div class = "poster">
                    <figure>
                    <img src={img3}/>
                    </figure>
                    <div class="rank"><strong>3</strong></div>
                    </div>
                    <div class = "infor"></div>
                </div>
             </div>
             <div class="posrt4">
                <div>
                    <div class = "poster">
                    <figure>
                    <img src={img4}/>
                    </figure>
                    <div class="rank"><strong>4</strong></div>
                    </div>
                    <div class = "infor"></div>
                </div>
             </div>

            </div>
            </section>
            <section id ="event">
                <div class="container">
                    <div class="row">
                        <div class="event">
                            <h3>이벤트</h3>
                            <div class="event_left"></div>
                            <div class="event_right"></div>
                        </div>
                    </div>
                </div>
             </section>
            
        </div> 
        
        
        );
  }

/*
function Home(){
  return(
<div>
  <section id="banner">
    <Router>
        <header>
            <div class="banner_menu">
                <div class="container">
                    <div class="row">
                        <div class="bm_right">
                            <ul>
                            <Link to="/">
                                <button>Home</button>
                            </Link>
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
        </header>
        <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Ticketing" component={Ticketing} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
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
*/
export default Home;