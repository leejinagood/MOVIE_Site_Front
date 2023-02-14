import './Login.css';
import React,{useState, useEffect} from 'react';

const Login = () => {
	
    return (
	<div className="Login">
		<h2 className="title">로그인</h2>
			<form className="form" id="registerFrm" name="register-page" >
					<input type="text" id="userId" name="userId"  placeholder="아이디" />
					<input type="password" id="userPW" name="userPW" placeholder="비밀번호"/>
					<input type="button" className="button medium primary"  id="joinBtn" value="로그인"/>
      </form>
	</div>

   )
};



export default Login;