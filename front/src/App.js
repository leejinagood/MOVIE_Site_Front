/*
    *Update : 2023.01.17
    *Author: 이현종, 박소영 ..
*/
import './App.css';
import './swiper.css';
import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route, Router, Switch, useNavigate} from 'react-router-dom'; //React-Router import
import Home from "./Home";
import About from "./About";

function App() {
    const [comp, setComp] = useState(Home);

// message 초기값을 ""으로 설정.
// const [message1, setMessage1] = useState("");
// // useEffect(함수,배열) : 컴포넌트가 화면에 나타났을(마운트)때 자동 실행.
// useEffect( () => {
//       // fetch(url,options) : HTTP 요청 함수
//       fetch('/user/login')
//       .then(response => response.text())
//       .then(message1 => {
//       setMessage1(message1);
//       });
//       },[])

// const [message2, setMessage2] = useState("");
// useEffect( () => {
//         // fetch(url,options) : HTTP 요청 함수
//         fetch('/user/member')
//         .then(response => response.text())
//         .then(message2 => {
//         setMessage2(message2);
//         });
//         },[])

// const [message3, setMessage3] = useState("");
// useEffect( () => {
//         // fetch(url,options) : HTTP 요청 함수
//         fetch('/user/mytip')
//         .then(response => response.text())
//         .then(message3 => {
//         setMessage3(message3);
//         });
//         },[])
        
// const [DaelimBox, setDaelimBox] = useState("");
// useEffect( () => {
//         // fetch(url,options) : HTTP 요청 함수
//         fetch('/user/DaelimBox')
//         .then(response => response.text())
//         .then(DaelimBox => {
//             setDaelimBox(DaelimBox);
//          });
//         },[])

// const [movie, setmovie] = useState("");
// useEffect( () => {
//         // fetch(url,options) : HTTP 요청 함수
//         fetch('/user/movie')
//         .then(response => response.text())
//         .then(movie => {
//             setmovie(movie);
//          });
//         },[])

// const [ticketing, setticketing] = useState("");
// useEffect( () => {
//         // fetch(url,options) : HTTP 요청 함수
//         fetch('/user/ticketing')
//         .then(response => response.text())
//         .then(ticketing => {
//             setticketing(ticketing);
//          });
//         },[])


// const [id,setId] = useState('');
// const [pw,setPw] = useState('');
// const [modal,setModal] = useState(false)
// const [already,setAlready] = useState(false)

    return (
        <div>
        <button onClick={() => setComp(Home)}>Home</button>
        <button onClick={() => setComp(About)}>About</button>
        <hr />
        <main children={comp} />
        </div>
        
        // <div className="App">
        // <header id="header">
        //     <div class="container">
        //         <div class="row">
        //             <div class="header clearfix">
        //                 <h1>
        //                     <a href="#">
        //                         <h1>{DaelimBox}</h1>
        //                     </a>    
        //                 </h1>
        //                 <nav class="nav">
                            
        //                     <div>
        //                     <ul class="clearfix">
        //                         <li><a href="#">{message1}</a></li>
        //                         <li><button onClick={Home}>{message2}</button></li>
        //                         <li><a href="#">{message3}</a></li> 
        //                     </ul>
        //                     </div>

        //                 </nav>    
        //             </div>
        //         </div>
        //     </div>
        // </header>
        // <section id="banner">
        //     <div class="banner_menu">
        //         <div class="container">
        //             <div class="row">
        //                 <div class="bm_right">
        //                     <ul>
        //                         <li><a href="#">{movie}</a></li>
        //                         <li><a href="#">{ticketing}</a></li>
        //                     </ul>
        //                     <div class="search">
        //                     <input type="text" placeholder="검색어 입력"></input>
        //                     <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"></img>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        
        // <div class="slider">
        //         <div class="swiper-container">
        //             <div class="swiper-wrapper">
        //                 <div class="swiper-slide ss1">
        //                     <div class="container">
        //                         <div class="row">
        //                             <h2>코로나 <em>Covid-19</em></h2>
        //                             <p>많은 사람들의 목숨을 앗아간 질병</p>
        //                         </div>
        //                     </div>

        //                 </div>
        //                 <div class="swiper-slide ss2">
        //                     <div class="container">
        //                         <div class="row">
        //                             <h2>캡틴 마블 <em>Captain Marvel</em></h2>
        //                             <p>새로운 히어로, 어벤져스의 희망</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div class="swiper-slide ss3">
        //                     <div class="container">
        //                         <div class="row">
        //                             <h2>캡틴 마블 <em>Captain Marvel</em></h2>
        //                             <p>새로운 히어로, 어벤져스의 희망</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
                    

        //             <div class="swiper-pagination"></div>
        //             <div class="swiper-button-prev"></div>
        //             <div class="swiper-button-next"></div>

        //         </div>
        //     </div>
        // </div>
        
    );
}



export default App;

