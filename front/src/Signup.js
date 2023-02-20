import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function Signup() {
    
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    회원가입
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">이름</Form.Label>
                        <Form.Control type="text" placeholder="이름을 입력하세요" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          이메일 주소
                        </Form.Label>
                        <Form.Control type="email" placeholder="이메일을 입력하세요" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호를 다시 입력해주세요" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          회원가입
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        계정이 이미 있으신가요..?{' '}
                        <a href="/" className="text-primary fw-bold">
                          로그인
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );    
};
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