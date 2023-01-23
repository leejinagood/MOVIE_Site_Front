/*
    *Update : 2023.01.17
    *Author: 이현종, 박소영 ..
*/
import './App.css';
import './swiper.css';
import React,{useState, useEffect} from 'react';
import Axios from 'axios';

function App() {

    const [user, setUser] = useState ("");
    useEffect ( ( ) => {
    Axios.post ("/api/users").then ((response) => {
        if(response.data) {
            setUser (response.data);
        } else {
            alert ("failed to ");
        }
    });
}, []);


  return (
    <div className="App">
      <header id="header">
        <div class="container">
            <div class="row">
                <div class="header clearfix">
                    <h1>
                        <a href="#">
                            <h1>DAELIM BOX 리액트</h1>
                            <h1>{user.login}</h1>
                        </a>    
                    </h1>
                    
                    <nav class="nav">
                        <ul class="clearfix">
                            <li>{user.login}</li>
                            <li><a href="#">회원가입</a></li>
                            <li><a href="#">내정보</a></li>
                        </ul>
                    </nav>    
                </div>
            </div>
        </div>
    </header>
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
  );
}

export default App;