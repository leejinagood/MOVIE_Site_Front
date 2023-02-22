import React from "react";
import './ticketing.css';
 
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
                    <li><a href="#none">더 퍼스트 슬램덩크</a></li>
                    <li class="on"><a href="#none">귀멸의 칼날-상현집결, 그리고 도공 마을로</a></li>
                    <li><a href="#none">타이타닉</a></li>
                    <li><a href="#none">카운트</a></li>
                    <li><a href="#none">마루이비디오</a></li>
                    <li><a href="#none">서치2</a></li>
                    <li><a href="#none">스즈메의문단속</a></li>
                    <li><a href="#none">어메이징오리스</a></li>
                    <li><a href="#none">두다다쿵-후후섬의비밀</a></li>
                    <li><a href="#none">아바타-물의길</a></li>
                    <li><a href="#none">영웅</a></li>
                    <li><a href="#none">오늘밤,세계에서이사랑이사라진다해도</a></li>
                    <li><a href="#none">대외비</a></li>
                    <li><a href="#none">방탄소년단:옛투컴인시네마</a></li>
                    <li><a href="#none">살수</a></li>
                    <li><a href="#none">탄생</a></li>
                    <li><a href="#none">메간</a></li>
                    <li><a href="#none">블랙펜서-와칸다포에버</a></li>
                  </ul>
                </div>
                <div class="items">
                  <ul>
                    <li><a href="#none">광교</a></li>
                    <li class="on"><a href="#none">동수원</a></li>
                    <li><a href="#none">동탄</a></li>
                    <li><a href="#none">동탄역</a></li>
                    <li><a href="#none">부천</a></li>
                    <li><a href="#none">소풍</a></li>
                    <li><a href="#none">수원</a></li>
                    <li><a href="#none">안산</a></li>
                    <li><a href="#none">의정부</a></li>
                    <li><a href="#none">일산</a></li>
                    <li><a href="#none">판교</a></li>
                    <li><a href="#none">평택</a></li>
                    <li><a href="#none">경기광주</a></li>
                    <li><a href="#none">고양행신</a></li>
                    <li><a href="#none">광교상현</a></li>
                    <li><a href="#none">광명역</a></li>
                    <li><a href="#none">구리</a></li>
                    <li><a href="#none">김포</a></li>
                    <li><a href="#none">김포운양</a></li>
                    <li><a href="#none">김포한강</a></li>
                    <li><a href="#none">다산</a></li>
                    <li><a href="#none">동탄호수공원</a></li>
                    <li><a href="#none">배곧</a></li>
                    <li><a href="#none">범계</a></li>
                    <li><a href="#none">부천역</a></li>
                    <li><a href="#none">부천옥길</a></li>
                  </ul>
                </div>
                <div class="date">
                  <ul>
                    <li><a href="#none">==2월==</a></li>
                    <li class="on"><a href="#none">19</a></li>
                    <li><a href="#none">20</a></li>
                    <li><a href="#none">21</a></li>
                    <li><a href="#none">22</a></li>
                    <li><a href="#none">23</a></li>
                    <li><a href="#none">24</a></li>
                    <li><a href="#none">25</a></li>
                    <li><a href="#none">26</a></li>
                    <li><a href="#none">27</a></li>
                    <li><a href="#none">28</a></li>
                    <li><a href="#none">==3월==</a></li>
                    <li><a href="#none">01</a></li>
                    <li><a href="#none">02</a></li>
                    <li><a href="#none">03</a></li>
                    <li><a href="#none">04</a></li>
                    <li><a href="#none">05</a></li>
                    <li><a href="#none">06</a></li>
                    <li><a href="#none">07</a></li>
                    <li><a href="#none">08</a></li>
                    <li><a href="#none">09</a></li>
                    <li><a href="#none">10</a></li>
                  </ul>
                </div>
                <div className="Time">
                  <h3>IMAX 2D IMAX관</h3>
                  <br /><hr /><br />
                  <p><button>09:00</button> 327석 <button>09:00</button> 327석 <button>09:00</button> 327석</p>
                  <p><button>09:00</button> 327석 <button>09:00</button> 327석 <button>09:00</button> 327석</p>
                  <p><button>09:00</button> 327석 <button>09:00</button> 327석 <button>09:00</button> 327석</p>
                  <br /><hr /><br />
                  <h3>4DX 2D 4DX관</h3>
                  <br /><hr /><br />
                  <p><button>09:00</button> 327석 <button>09:00</button> 327석 <button>09:00</button> 327석</p>
                  <p><button>09:00</button> 327석 <button>09:00</button> 327석 <button>09:00</button> 327석</p>
                  <br /><br /><br /><br /><br /><br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
 
export default Ticketing;