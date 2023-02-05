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
import Login from "./Login";
import Signup from "./Signup";

function App() {
    const [comp, setComp] = useState(Home);

//message 초기값을 ""으로 설정.
const [message1, setMessage1] = useState("");
// useEffect(함수,배열) : 컴포넌트가 화면에 나타났을(마운트)때 자동 실행.
useEffect( () => {
      // fetch(url,options) : HTTP 요청 함수
      fetch('/user/login')
      .then(response => response.text())
      .then(message1 => {
      setMessage1(message1);
      });
      },[])

const [message2, setMessage2] = useState("");
useEffect( () => {
        // fetch(url,options) : HTTP 요청 함수
        fetch('/user/member')
        .then(response => response.text())
        .then(message2 => {
        setMessage2(message2);
        });
        },[])

const [message3, setMessage3] = useState("");
useEffect( () => {
        // fetch(url,options) : HTTP 요청 함수
        fetch('/user/mytip')
        .then(response => response.text())
        .then(message3 => {
        setMessage3(message3);
        });
        },[])
        
const [DaelimBox, setDaelimBox] = useState("");
useEffect( () => {
        // fetch(url,options) : HTTP 요청 함수
        fetch('/user/DaelimBox')
        .then(response => response.text())
        .then(DaelimBox => {
            setDaelimBox(DaelimBox);
         });
        },[])

const [movie, setmovie] = useState("");
useEffect( () => {
        // fetch(url,options) : HTTP 요청 함수
        fetch('/user/movie')
        .then(response => response.text())
        .then(movie => {
            setmovie(movie);
         });
        },[])

const [ticketing, setticketing] = useState("");
useEffect( () => {
        // fetch(url,options) : HTTP 요청 함수
        fetch('/user/ticketing')
        .then(response => response.text())
        .then(ticketing => {
            setticketing(ticketing);
         });
        },[])


const [id,setId] = useState('');
const [pw,setPw] = useState('');
const [modal,setModal] = useState(false)
const [already,setAlready] = useState(false)

    return (
        <div className="App">
        <header id="header">
            <div class="container">
                <div class="row">
                    <div class="header clearfix">
                        <h1>
                            <a href="#">
                            <button onClick={() => setComp(Home)}><h1>{DaelimBox}</h1></button>
                            </a>    
                        </h1>
                        <nav class="nav">
                            <div>
                            <ul class="clearfix">
                                <li><button onClick={() => setComp(Login)}>{message1}</button></li>
                                <li><button onClick={() => setComp(Signup)}>{message2}</button></li>
                                <li><button onClick={() => setComp(About)}>{message3}</button></li> 
                            </ul>
                            <main children={comp} />
                            </div>
                        </nav>    
                    </div>
                </div>
            </div>
        </header>
        </div>
        
        
    );
}



export default App;

