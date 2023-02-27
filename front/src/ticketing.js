import React from "react";
import './ticketing.css';
import { Link, Route, Routes } from 'react-router-dom';
import Seat from './seat';
 
function Ticketing(){
  return (
      <div>
        <div>
          <section className="MovieMenuName">
            <h2>영화</h2>
            <h2>극장</h2>
            <h2>날짜</h2>
            <h2>시간</h2>
          </section>
          <div className="MovieMenu">
          <h4>예매율순</h4>
            <hr />
            <div className="MovieList">
              <div id="row">
                <div class="items">
                  <ul>
                    <li><a href="#none" onClick={function(){alert("더 퍼스트 슬램덩크가 선택 되었습니다.")}}>더 퍼스트 슬램덩크</a></li>
                    <li class="on"><a href="#none" onClick={function(){alert("귀멸의 칼날-상현집결, 그리고 도공 마을로가 선택 되었습니다.")}}>귀멸의 칼날-상현집결, 그리고 도공 마을로</a></li>
                    <li><a href="#none" onClick={function(){alert("타이타닉이 선택 되었습니다.")}}>타이타닉</a></li>
                    <li><a href="#none" onClick={function(){alert("카운트가 선택 되었습니다.")}}>카운트</a></li>
                    <li><a href="#none" onClick={function(){alert("마루이비디오가 선택 되었습니다.")}}>마루이비디오</a></li>
                    <li><a href="#none" onClick={function(){alert("서치2가 선택 되었습니다.")}}>서치2</a></li>
                    <li><a href="#none" onClick={function(){alert("스즈메의 문단속이 선택 되었습니다.")}}>스즈메의문단속</a></li>
                    <li><a href="#none" onClick={function(){alert("어메이징오리스가 선택 되었습니다.")}}>어메이징오리스</a></li>
                    <li><a href="#none" onClick={function(){alert("두다다쿵-후후섬의비밀이 선택 되었습니다.")}}>두다다쿵-후후섬의비밀</a></li>
                    <li><a href="#none" onClick={function(){alert("아바타-물의길이 선택 되었습니다.")}}>아바타-물의길</a></li>
                    <li><a href="#none" onClick={function(){alert("영웅이 선택 되었습니다.")}}>영웅</a></li>
                    <li><a href="#none" onClick={function(){alert("오늘밤,세계에서이사랑이사라진다해도가 선택 되었습니다.")}}>오늘밤,세계에서이사랑이사라진다해도</a></li>
                    <li><a href="#none" onClick={function(){alert("대외비가 선택 되었습니다.")}}>대외비</a></li>
                    <li><a href="#none" onClick={function(){alert("방탄소년단:옛투컴인시네마가 선택 되었습니다.")}}>방탄소년단:옛투컴인시네마</a></li>
                    <li><a href="#none" onClick={function(){alert("살수가 선택 되었습니다.")}}>살수</a></li>
                    <li><a href="#none" onClick={function(){alert("탄생이 선택 되었습니다.")}}>탄생</a></li>
                    <li><a href="#none" onClick={function(){alert("메간이 선택 되었습니다.")}}>메간</a></li>
                    <li><a href="#none" onClick={function(){alert("블랙펜서-와칸다포에버가 선택 되었습니다.")}}>블랙펜서-와칸다포에버</a></li>
                  </ul>
                </div>
                <div class="items">
                  <ul>
                    <li><a href="#none" onClick={function(){alert("광교가 선택 되었습니다.")}}>광교</a></li>
                    <li class="on"><a href="#none" onClick={function(){alert("동수원이 선택 되었습니다.")}}>동수원</a></li>
                    <li><a href="#none" onClick={function(){alert("동탄이 선택 되었습니다.")}}>동탄</a></li>
                    <li><a href="#none" onClick={function(){alert("동탄역이 선택 되었습니다.")}}>동탄역</a></li>
                    <li><a href="#none" onClick={function(){alert("부천이 선택 되었습니다.")}}>부천</a></li>
                    <li><a href="#none" onClick={function(){alert("소풍이 선택 되었습니다.")}}>소풍</a></li>
                    <li><a href="#none" onClick={function(){alert("수원이 선택 되었습니다.")}}>수원</a></li>
                    <li><a href="#none" onClick={function(){alert("안산이 선택 되었습니다.")}}>안산</a></li>
                    <li><a href="#none" onClick={function(){alert("의정부가 선택 되었습니다.")}}>의정부</a></li>
                    <li><a href="#none" onClick={function(){alert("일산이 선택 되었습니다.")}}>일산</a></li>
                    <li><a href="#none" onClick={function(){alert("판교가가 선택 되었습니다.")}}>판교</a></li>
                    <li><a href="#none" onClick={function(){alert("평택이 선택 되었습니다.")}}>평택</a></li>
                    <li><a href="#none" onClick={function(){alert("경기광주가 선택 되었습니다.")}}>경기광주</a></li>
                    <li><a href="#none" onClick={function(){alert("고양행신이 선택 되었습니다.")}}>고양행신</a></li>
                    <li><a href="#none" onClick={function(){alert("광교상현이 선택 되었습니다.")}}>광교상현</a></li>
                    <li><a href="#none" onClick={function(){alert("광명역이 선택 되었습니다.")}}>광명역</a></li>
                    <li><a href="#none" onClick={function(){alert("구리가 선택 되었습니다.")}}>구리</a></li>
                    <li><a href="#none" onClick={function(){alert("김포가 선택 되었습니다.")}}>김포</a></li>
                    <li><a href="#none" onClick={function(){alert("김포운양이 선택 되었습니다.")}}>김포운양</a></li>
                    <li><a href="#none" onClick={function(){alert("김포한강이 선택 되었습니다.")}}>김포한강</a></li>
                    <li><a href="#none" onClick={function(){alert("다산이 선택 되었습니다.")}}>다산</a></li>
                    <li><a href="#none" onClick={function(){alert("동탄호수공원이 선택 되었습니다.")}}>동탄호수공원</a></li>
                    <li><a href="#none" onClick={function(){alert("배곧이 선택 되었습니다.")}}>배곧</a></li>
                    <li><a href="#none" onClick={function(){alert("범계가 선택 되었습니다.")}}>범계</a></li>
                    <li><a href="#none" onClick={function(){alert("부천역이 선택 되었습니다.")}}>부천역</a></li>
                    <li><a href="#none" onClick={function(){alert("부천옥길이 선택 되었습니다.")}}>부천옥길</a></li>
                  </ul>
                </div>
                <div class="date">
                  <ul>
                    <li><a href="#none">==2월==</a></li>
                    <li class="on"><a href="#none" onClick={function(){alert("2월 19일이 선택 되었습니다.")}}>19</a></li>
                    <li><a href="#none" onClick={function(){alert("2월 20일이 선택 되었습니다.")}}>20</a></li>
                    <li><a href="#none" onClick={function(){alert("2월 21일이 선택 되었습니다.")}}>21</a></li>
                    <li><a href="#none" onClick={function(){alert("2월 22일이 선택 되었습니다.")}}>22</a></li>
                    <li><a href="#none" onClick={function(){alert("2월 23일이 선택 되었습니다.")}}>23</a></li>
                    <li><a href="#none" onClick={function(){alert("2월 24일이 선택 되었습니다.")}}>24</a></li>
                    <li><a href="#none" onClick={function(){alert("2월 25일이 선택 되었습니다.")}}>25</a></li>
                    <li><a href="#none" onClick={function(){alert("2월 26일이 선택 되었습니다.")}}>26</a></li>
                    <li><a href="#none" onClick={function(){alert("2월 27일이 선택 되었습니다.")}}>27</a></li>
                    <li><a href="#none" onClick={function(){alert("2월 28일이 선택 되었습니다.")}}>28</a></li>
                    <li><a href="#none">==3월==</a></li>
                    <li><a href="#none" onClick={function(){alert("3월 01일이 선택 되었습니다.")}}>01</a></li>
                    <li><a href="#none" onClick={function(){alert("3월 02일이 선택 되었습니다.")}}>02</a></li>
                    <li><a href="#none" onClick={function(){alert("3월 03일이 선택 되었습니다.")}}>03</a></li>
                    <li><a href="#none" onClick={function(){alert("3월 04일이 선택 되었습니다.")}}>04</a></li>
                    <li><a href="#none" onClick={function(){alert("3월 05일이 선택 되었습니다.")}}>05</a></li>
                    <li><a href="#none" onClick={function(){alert("3월 06일이 선택 되었습니다.")}}>06</a></li>
                    <li><a href="#none" onClick={function(){alert("3월 07일이 선택 되었습니다.")}}>07</a></li>
                    <li><a href="#none" onClick={function(){alert("3월 08일이 선택 되었습니다.")}}>08</a></li>
                    <li><a href="#none" onClick={function(){alert("3월 09일이 선택 되었습니다.")}}>09</a></li>
                    <li><a href="#none" onClick={function(){alert("3월 10일이 선택 되었습니다.")}}>10</a></li>
                  </ul>
                </div>
                <div className="Time">
                  <h3>IMAX 2D IMAX관</h3>
                  <br /><hr /><br />
                  <p><button onClick={function(){alert("9시 50분으로 예약되었습니다.");}}>09:50</button> 332석 <button onClick={function(){alert("11시 10분으로 예약되었습니다.");}}>11:10</button> 184석 <button onClick={function(){alert("12시 20분으로 예약되었습니다.");}}>12:20</button> 332석</p>
                  <p><button onClick={function(){alert("13시 40분으로 예약되었습니다.");}}>13:40</button> 184석 <button onClick={function(){alert("16시 10분으로 예약되었습니다.");}}>16:10</button> 184석 <button onClick={function(){alert("17시 20분으로 예약되었습니다.");}}>17:20</button> 332석</p>
                  <p><button onClick={function(){alert("18시 40분으로 예약되었습니다.");}}>18:40</button> 184석 <button onClick={function(){alert("19시 50분으로 예약되었습니다.");}}>19:50</button> 332석 <button onClick={function(){alert("21시 10분으로 예약되었습니다.");}}>21:10</button> 184석</p>
                  <br /><hr /><br />
                  <h3>4DX 2D 4DX관</h3>
                  <br /><hr /><br />
                  <p><button onClick={function(){alert("10시 40분으로 예약되었습니다.");}}>10:40</button> 164석 <button onClick={function(){alert("15시 40분으로 예약되었습니다.");}}>15:40</button> 164석 <button onClick={function(){alert("19시 35분으로 예약되었습니다.");}}>19:35</button> 164석</p>
                  <p><button onClick={function(){alert("20시 40분으로 예약되었습니다.");}}>20:40</button> 132석 <button onClick={function(){alert("21시 50분으로 예약되었습니다.");}}>21:50</button> 132석 <button onClick={function(){alert("23시 15분으로 예약되었습니다.");}}>23:15</button> 164석</p>
                  <br /><br /><br /><br /><br /><br /><br /><br />
                  <Link to="./seat"><button>이동</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Routes>
            <Route exact path="./seat" component={Seat}></Route>
        </Routes>
      </div>
  );
};
 
export default Ticketing;