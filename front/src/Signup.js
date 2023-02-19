import './Signup.css';
import React, { useState } from 'react'  

export default function Signup() {
  let userId = document.querySelector('#userId');
	let passwordForm = document.querySelector('#userPW');
	let re_passwordForm = document.querySelector('#re_password');
	
	const [inputs, setInputs] = useState({
   	    userId: '',
		userPW: '',
		re_password: ''
    });

  const onChange = (e) => { //input에 name을 가진 요소의 value에 이벤트를 걸었다
    const { name, value } = e.target // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
    const nextInputs = { ...inputs, [name]: value,}//스프레드 문법으로 기존의 객체를 복사한다.
    setInputs(nextInputs); //만든 변수를 seInput으로 변경해준다.
  }
    function CheckPass(str){ //비밀번호 정규식
      let reg1 =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;
      return(reg1.test(str));
    };
   
	function letsJoin() { //로그인 유효성 검사
    if(inputs.userId===""){
      alert("아이디를 입력해주세요!");
      userId.focus();
      return;
    }else if(inputs.userPW===""){
      alert("비밀번호를 입력해주세요!");
      passwordForm.focus();
      return;
    }
    else if(inputs.re_password===""){
      alert("비밀번호 중복 확인을 입력해주세요!");
      re_passwordForm.focus();
      return;
    }
    else if(CheckPass(inputs.userPW) === false){
      alert("비밀번호는 영문+숫자 6자를 조합하여 입력해주세요 !");
      passwordForm.focus();
      return;
    }else if(inputs.re_password !==inputs.userPW){
      alert("비밀번호가 동일하지 않습니다!");
      re_passwordForm.focus();
      return;
    }else{
      fetch("/register", { //원하는 주소 입력
        method: 'post',
        headers: {
          'content-type': 'application/json'
    },
        body : JSON.stringify({
        userId : inputs.userId,
        userPW : inputs.userPW,
      })
        }).then(res => res.json())
          .then(resonse => {
          if(resonse===true){
            window.location.replace("/원하는 주소");
          }else{
            alert("다시 시도해주세요");
          }
        });
      }
	  }
  return (
	<div className="userJoinOuter">
		<div className="form-box login-register-form-element" id="userJoinInner">
			<h2 className="form-box-title">계정 만들기</h2><br /><br />
			<form className="form" id="registerFrm" name="register-page" >
				<div className="form-row">
					<div className="form-item">
						<div className="form-input">
							<input type="text" id="userId" name="userId" onChange={onChange}  placeholder="아이디" />
							</div>
					  </div>
				  </div>
				<div className="form-row">
					<div className="form-item">
						<div className="form-input">
							<input type="password" id="userPW" name="userPW" onChange={onChange} placeholder="비밀번호"/>
						</div>
					</div>
				</div>
				<div className="form-row">
					<div className="form-item">
						<div className="form-input">
							<input type="password" id="re_password" name="re_password" onChange={onChange} placeholder="비밀번호 확인"/>
						</div>
					</div>
				</div>
				<div className="form-row">
					<div className="form-item">
						<input type="button" className="button medium primary"  onClick={letsJoin} id="joinBtn" value="가입하기"/>
					</div>
				</div>
			</form>
		</div>
	</div>
  );
}
/*
import React,{useState, useEffect} from 'react';
import axios from 'axios';



 const Signup = () => {
        return(
           <div>{NameBox()}</div>
        )
 };
   const NameBox = () => {

   const [inputId, setInputId] = useState("");
   const [inputPw, setInputPw] = useState("");


       const handleInputId = (e) => {
       setInputId(e.target.value);
     };
     const handleInputPw = (e) => {
       setInputPw(e.target.value);
     };

     const onClickLogin = () => {
       console.log("click login");
      console.log("ID : ", inputId);
       console.log("PW : ", inputPw);
       axios.post("http://localhost:8083/api/login", {
           email: inputId,
           passwd: inputPw,
         })
         .then((res) => {
           console.log(res);
           console.log("res.data.userId :: ", res.data.userId);
           console.log("res.data.msg :: ", res.data.msg);

           if (res.data.email === undefined) {
             // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
             console.log("======================", res.data.msg);
             alert("입력하신 id 가 일치하지 않습니다.");
           } else if (res.data.email === null) {
             // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
            console.log(
               "======================",
               "입력하신 비밀번호 가 일치하지 않습니다."
             );
             alert("입력하신 비밀번호 가 일치하지 않습니다.");
           } else if (res.data.email === inputId) {
             // id, pw 모두 일치 userId = userId1, msg = undefined
             console.log("======================", "로그인 성공");
             sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
             sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
           }
           // 작업 완료 되면 페이지 이동(새로고침)
           document.location.href = "/";
         })
         .catch();
      };

      return (
        <><><input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="input_id"
          value={inputId}
          onChange={handleInputId} />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw} />
            <br />
            <button type="button" onClick={onClickLogin}>
            확인
          </button></></>
         );
        };
*/
//export default Signup;