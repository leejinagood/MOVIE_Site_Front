import React, {useState, useCallback} from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form , Input , Checkbox , Button} from 'antd';
import './App';

const Signup = () =>{
    const [passwordCheck,setPasswordCheck] = useState('');
    const [term,setTerm] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         * 2. 약관 동의를 확인한다.
         */
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        
        //useCallback 하면 state 들을 dependence 배열에 넣어줍니다.
        //그래야 dependence 가 바뀔때 이벤트 함수가 생성이됩니다.
    },[password,passwordCheck,term]);

    const onChangePasswordChk = useCallback((e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
        //password state를 사용하기때문에 password를 넣어준다
    },[passwordCheck]);
    const onChangeTerm = useCallback((e) => {
        //체크박스 초기화
        setTermError(false);
        setTerm(e.target.checked);
        //state를 사용하지 않기때문에 빈값
    },[]);

    //반복되는 코드들을 Coustom Hook을 활용하여 줄여줄 수 있다.
    const useInput = (initValue = null) =>{
        const [value,setter] = useState(initValue);
        const handler = useCallback((e) => {
            setter(e.target.value);
        },[]);
        return [value,handler];
    };

    const [id,onChangeId] = useInput('');
    const [nick,onChangeNick] = useInput('');
    const [password,onChangePassword] = useInput('');

    return (
        <>
        <Head>
            <title>NodeBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js"></script>
        </Head>
        <AppLayout>
        <Form onSubmit={onSubmit} style={{padding:10}}>
            <div>
                <label htmlFor="user-id">아이디</label><br/>
                <Input name="user-id" value={id} required onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="user-nick">닉네임</label><br/>
                <Input name="user-nick" value={nick} required onChange={onChangeNick} />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label><br/>
                <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
                <label htmlFor="user-password-check">비밀번호체크</label><br/>
                <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} />
                {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
            </div>
            <div>
                <Checkbox name="user-term" value={term} onChange={onChangeTerm}>동의 합니까?</Checkbox>
                {termError && <div style={{color : 'red'}}>약관에 동의하셔야 합니다.</div>}
            </div>
            <div style={{marginTop:10}}>
                <Button type="primary" htmlType="submit" >가입하기</Button>
            </div>
        </Form>
        </AppLayout>
        </>
    );
};

export default Signup;