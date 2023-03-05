import React from "react";
import './movie.css';

function Movie(){
  return(
    <div>
      <div className="MovieChart">
        <font size="6">무비 차트</font>
            <div className="ChartHeader">
              <font size="4">무비차트</font>
              <font size="4">상영예정작</font>
            </div><hr />
        <div className="ChartMenu">
          <div className="ChartSubMenu">
            <select className="ChartListBox">
                <option value=" ">예매율순</option>
                <option value=" ">평점순</option>
                <option value=" ">관람객순</option>
            </select>
            <button className="Button"><a>GO</a></button>
            </div>
              <div className="PosterMenu">
                <div className="MovieTier"><font className="TierFont">No.1</font></div>
                <div className="Poster01"></div>
                <font size="4">스즈메의 문단속</font><br />
                <font size="2">예매율 |</font>
                <font size="3">26.9%</font><br />
                <font size="2">2023.03.08 개봉</font>
                <a href="/">예매하기</a>
              </div>
              <div className="PosterMenu">
                <div className="MovieTier"><font className="TierFont">No.2</font></div>
                <div className="Poster02"></div>
                <font size="4">귀멸의 칼날-상현집결, ...</font><br />
                <font size="2">예매율 |</font>
                <font size="3">21.0%</font><br />
                <font size="2">2023.03.02 개봉</font>
                <a href="/">예매하기</a>
              </div>
              <div className="PosterMenu">
                <div className="MovieTier"><font className="TierFont">No.3</font></div>
                <div className="Poster03"></div>
                <font size="4">아임 히어로 더 파이널</font><br />
                <font size="2">예매율 |</font>
                <font size="3">14.1%</font><br />
                <font size="2">2023.03.01 개봉</font>
                <a href="/">예매하기</a>
              </div>
              <div className="PosterMenu">
                <div className="MoviePoster"></div>
              </div>
              <div className="MoviePoster2"></div>
              <div className="PosterMenu">
                <div className="MovieTier2"><font className="TierFont">No.4</font></div>
                <div className="Poster04"></div>
                <font size="4">대외비</font><br />
                <font size="2">예매율 |</font>
                <font size="3">6.8%</font><br />
                <font size="2">2023.03.01 개봉</font>
                <a href="/">예매하기</a>
              </div>
              <div className="PosterMenu">
                <div className="MovieTier2"><font className="TierFont">No.5</font></div>
                <div className="Poster05"></div>
                <font size="4">더 퍼스트 슬램덩크</font><br />
                <font size="2">예매율 |</font>
                <font size="3">5.4%</font><br />
                <font size="2">2023.01.04 개봉</font>
                <a href="/">예매하기</a>
              </div>
              <div className="PosterMenu">
                <div className="MovieTier2"><font className="TierFont">No.6</font></div>
                <div className="Poster06"></div>
                <font size="4">똑똑똑</font><br />
                <font size="2">예매율 |</font>
                <font size="3">3.6%</font><br />
                <font size="2">2023.03.08 개봉</font>
                <a href="/">예매하기</a>
              </div>
              <div className="PosterMenu">
                <div className="MovieTier2"><font className="TierFont">No.7</font></div>
                <div className="Poster07"></div>
                <font size="4">탑건-매버릭</font><br />
                <font size="2">예매율 |</font>
                <font size="3">3.2%</font><br />
                <font size="2">2022.06.22 개봉</font>
                <a href="/">예매하기</a>
              </div>
              <div className="PosterMenu">
                <div className="MovieTier2"><font className="TierFont">No.8</font></div>
                <div className="Poster08"></div>
                <font size="4">샤잠! 신들의 분노</font><br />
                <font size="2">예매율 |</font>
                <font size="3">3.2%</font><br />
                <font size="2">2023.03.15 개봉</font>
                <a href="/">예매하기</a>
              </div>
              <div className="PosterMenu">
                <div className="MovieTier2"><font className="TierFont">No.9</font></div>
                <div className="Poster09"></div>
                <font size="4">서치2</font><br />
                <font size="2">예매율 |</font>
                <font size="3">2.5%</font><br />
                <font size="2">2023.02.22 개봉</font>
                <a href="/">예매하기</a>
              </div>
              <div className="PosterMenu">
                <div className="MovieTier2"><font className="TierFont">No.10</font></div>
                <div className="Poster10"></div>
                <font size="4">멍뭉이</font><br />
                <font size="2">예매율 |</font>
                <font size="3">2.2%</font><br />
                <font size="2">2023.03.01 개봉</font>
                <a href="/">예매하기</a>
              </div>
              <div className="PosterMenu">
                <div className="MovieTier2"><font className="TierFont">No.11</font></div>
                <div className="Poster11"></div>
                <font size="4">카운트</font><br />
                <font size="2">예매율 |</font>
                <font size="3">1.4%</font><br />
                <font size="2">2023.02.22 개봉</font>
                <a href="/">예매하기</a>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;