/*
    *Update : 2023.02.10
    *Author: 이현종, 박소영 ..
*/
import './App.css';
import './swiper.css';
import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import { Link, Routes, Route, useNavigate} from 'react-router-dom'; //React-Router import
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";


function App() {

const [comp, setComp] = useState(Home);
const [message1, setMessage1] = useState("");
useEffect( () => {
      fetch('/user/login')
      .then(response => response.text())
      .then(message1 => {
      setMessage1(message1);
      });
      },[])

const [message2, setMessage2] = useState("");
useEffect( () => {
        fetch('/user/member')
        .then(response => response.text())
        .then(message2 => {
        setMessage2(message2);
        });
        },[])

const [message3, setMessage3] = useState("");
useEffect( () => {
        fetch('/user/mytip')
        .then(response => response.text())
        .then(message3 => {
        setMessage3(message3);
        });
        },[])
        
const [DaelimBox, setDaelimBox] = useState("");
useEffect( () => {
        fetch('/user/DaelimBox')
        .then(response => response.text())
        .then(DaelimBox => {
            setDaelimBox(DaelimBox);
         });
        },[])

const [movie, setmovie] = useState("");
useEffect( () => {
        fetch('/user/movie')
        .then(response => response.text())
        .then(movie => {
            setmovie(movie);
         });
        },[])

const [ticketing, setticketing] = useState("");
useEffect( () => {
        fetch('/user/ticketing')
        .then(response => response.text())
        .then(ticketing => {
            setticketing(ticketing);
         });
        },[])
/*
const [id,setId] = useState('');
const [pw,setPw] = useState('');
const [modal,setModal] = useState(false)
const [already,setAlready] = useState(false)
*/
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
                                <li><button onClick={() => setComp(Login)}><b>{message1}</b></button></li>
                                <li><button onClick={() => setComp(Signup)}><b>{message2}</b></button></li>
                                <li><button onClick={() => setComp(About)}><b>{message3}</b></button></li> 
                            </ul>
                            </div>
                        </nav>    
                    </div>
                </div>
            </div>
        </header>
        <main children={comp} />
        </div>
    );
}

// const App = () => {

//     const [inputId, setInputId] = useState("");
//     const [inputPw, setInputPw] = useState("");
//         const handleInputId = (e) => {
//         setInputId(e.target.value);
//       };
//       const handleInputPw = (e) => {
//         setInputPw(e.target.value);
//       };
  
//       const onClickLogin = () => {
//         console.log("click login");
//         console.log("ID : ", inputId);
//         console.log("PW : ", inputPw);
//         Axios.post("http://localhost:8083/api/login", {
//             email: inputId,
//             passwd: inputPw,
//           })
//           .then((res) => {
//             console.log(res);
//             console.log("res.data.userId :: ", res.data.userId);
//             console.log("res.data.msg :: ", res.data.msg);
//             if (res.data.email === undefined) {
//               // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
//               console.log("======================", res.data.msg);
//               alert("입력하신 id 가 일치하지 않습니다.");
//             } else if (res.data.email === null) {
//               // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
//               console.log(
//                 "======================",
//                 "입력하신 비밀번호 가 일치하지 않습니다."
//               );
//               alert("입력하신 비밀번호 가 일치하지 않습니다.");
//             } else if (res.data.email === inputId) {
//               // id, pw 모두 일치 userId = userId1, msg = undefined
//               console.log("======================", "로그인 성공");
//               sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
//               sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
//             }
//             // 작업 완료 되면 페이지 이동(새로고침)
//             document.location.href = "/";
//           })
//           .catch();
//       };
  
//       return (
//         <><><input
//           type="email"
//           className="form-control"
//           placeholder="Enter email"
//           name="input_id"
//           value={inputId}
//           onChange={handleInputId} />
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             name="input_pw"
//             value={inputPw}
//             onChange={handleInputPw} /></>
            
//             <button
//               type="button"
//               onClick={onClickLogin}
//             >
//             확인
//           </button></>
//           )};
  
  

export default App;

