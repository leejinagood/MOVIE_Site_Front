import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="Signup">
		<h2 className="form-box-title">회원가입</h2>
			<form className="form" id="registerFrm" name="register-page" >
					<input type="text" id="userId" name="userId"  placeholder="아이디" />
					<input type="password" id="userPW" name="userPW" placeholder="비밀번호"/>
          <input type="password1" id="userPW1" name="userPW1" placeholder="비밀번호 확인"/>
          <input type="email" id="userEmail" name="userEmail" placeholder="이메일"/>
          
					<input type="button" className="button medium primary"  id="joinBtn" value="가입하기"/>
      </form>
	</div>
  )
};

export default Signup;