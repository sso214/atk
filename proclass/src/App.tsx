import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import './style.scss';

function App() {

  useEffect(() => {
    AOS.init();
  },[]);


  return (
    <div id='wrap'>
      <div id='left'>
        <div>
          <img className='logo' src='public/svg/logo.svg' alt='PROCLASS'/>
          <h1>
            임직원의 커리어를 <b>BASIC</b> 에서<br />
            <b>PRO</b> 버전으로 업그레이드 하세요.
          </h1>
          <button>도입 문의</button>
        </div>
      </div>

      <div id='right'>
        <header>
          <img className='logo' src='#' alt='PROCLASS' />
        </header>

        <div id='cont01'>
          <div className='content'>
            <h2 data-aos="fade-down" data-aos-delay="300">커리어 성장을 위한</h2>
            <h2 data-aos="fade-down" data-aos-delay="600">교육의 모든 것</h2>
            <img data-aos="fade-down" data-aos-delay="900" className='logo' src='#' alt='PROCLASS' />
          </div>

          <img className='arrow' src='#' alt='arrow' />
        </div>

        <div id='cont02'>
          <div className='top' data-aos="fade-up" data-aos-delay="1200">
            <h2>
              스마트폰📱으로<br />
              💬 회의도 하고<br />
              🪪 명함도 보내는데<br />
              교육은 왜 못할까? 🤔
            </h2>
          </div>

          <div className='bottom'>
            <h2>
              <span>PROCLASS</span>는<br />
              가능합니다.
            </h2>
            <p>
              이러닝, 마이크로러닝, 플립러닝 등<br />
              원하는 교육을 진행할 수 있습니다.<br />
              심지어 개인화된 학습 경험을 제공하죠.
            </p>
          </div>
        </div>

        <div id='cont03'>
          <h2>
            프로클래스와 만나세요.<br />
            생성형 AI와 러닝저니로<br />
            더욱 새로워진 학습 경험을.
          </h2>
          <img src='#' alt='프로클래스와 만나세요. 생성형 AI와 러닝저니로 더욱 새로워진 학습 경험을.' />
        </div>

        <div id='cont04'>
          <div className='titleBox'>
            <div>
              <i></i>
              <h4>홈・학습</h4>
            </div>
            <h2>개인 맞춤 학습 추천</h2>
            <p>
              학습자별 관심사와 시청 기록을 기반으로<br />
              커리어 목표 달성을 도울 학습 콘텐츠를 추천합니다.
            </p>
          </div>

          <img className='mockup' src='#' alt='개인 맞춤 학습 추천' />

          <ul className='cardList'>
            <li>
              <h4>
                <b>온라인, 오프라인, 외부 학습 등</b><br />
                필수 클래스의 세부 정보를<br />
                한눈에 확인하고 편리하게 학습하세요.
              </h4>
              <img src='#' alt='온라인, 오프라인, 외부 학습 등 필수 클래스의 세부 정보를 한눈에 확인하고 편리하게 학습하세요.' />
            </li>
            <li>
              <h4>
                <b>번거롭게 검색할 필요없이</b><br />
                나에게 꼭 필요한 클래스를 추천 받으세요.
              </h4>
              <img src='#' alt='번거롭게 검색할 필요없이 나에게 꼭 필요한 클래스를 추천 받으세요.' />
            </li>
          </ul>
        </div>

        <div id='cont05'>
          <div className='titleBox'>
            <div>
              <i></i>
              <h4>러닝저니</h4>
            </div>
            <h2>생성형 AI로 최적의 학습 설계</h2>
            <p>
              프로클래스의 학습 전문가 ‘프클AI’가<br />
              맞춤형 학습 여정 설계를 도와드려요.
            </p>
          </div>

          <img className='mockup' src='#' alt='프클AI' />

          <ul className='cardList'>
            <li>
              <h5>STEP 1</h5>
              <p>
                커리어 관련 궁금증이 있다면?<br />
                프클AI에게 무엇이든 물어보세요.
              </p>
              <img src='#' alt='#' />
            </li>
            <li>
              <h4>STEP 2</h4>
              <p>
                프클AI가 질문에 맞는 자세한 답변과<br />
                학습 콘텐츠를 맞춤 추천해드려요.
              </p>
              <img src='#' alt='#' />
            </li>
          </ul>
        </div>

        <div id='cont06'>
          <div>
            <i></i>
            <h4>게이미피케이션</h4>
          </div>
          <h2>생성형 AI 기반 게임 플레이</h2>
          <p>
            학습 몰입도를 높여주는 게임 요소로<br />
            확실한 학습 효과를 경험하세요.
          </p>
          <ul>
            <li>
              <img src='#' alt='퀴즈' />
              <p>
                <span>OX 퀴즈, 단어 맞추기 등 학습 내용 기반</span><br />
                AI 자동생성 퀴즈를 풀어보세요.
              </p>
              <img src='#' alt='swiper' />
            </li>
            <li>
              <p>
                <span>학습 활동에 따라 보상(빈)을 얻고</span>
                리그도 참여할 수 있어요.
              </p>
              <img src='#' alt='보상' />
            </li>
          </ul>
        </div>

        <div id='cont07'>
          <div>
            <i></i>
            <h4>다양한 학습 과정</h4>
          </div>
          <h2>성장을 위한 모든 콘텐츠</h2>
          <p>프로클래스 하나로 충분해요!</p>
          <ul>
            <li>
              <p>
                <span>
                  온라인, 오프라인, 외부 학습 등<br/>
                  다양한 학습을 간편하게 즐기고<br/>
                </span>
                나의 학습과정을 통합 관리할 수 있어요.
              </p>
              <img src='#' alt='card' />
            </li>
            <li>
              <p>
                <span>
                  스스로 학습 주기를 설정하며<br />
                  학습 활동을 관리할 수 있어요.<br />
                </span>
                매일 학습 목표를 달성해보세요!
              </p>
              <img src='#' alt='card' />
            </li>
            <li>
              <p>
                <span>나의 학습 현황을 분석해보세요.</span><br />
                주간・월간 목표 달성률을 확인하고<br />
                학습 키워드를 파악할 수 있어요.
              </p>
              <img src='#' alt='card' />
            </li>
          </ul>
        </div>

        <div id='cont08'>
          <div>
            <i></i>
            <h4>커뮤니티</h4>
          </div>
          <h2>성장 시너지 강력한 소통 공간</h2>
          <p>관심사가 비슷한 동료와 대화하며 함께 성장해요.</p>

          <ul>
            <li>
              <img src='#' alt='사람' />
              <div>리더십에 꼭 필요한 역량이 뭐라고 생각하시나요?</div>
            </li>
            <li>
              <img src='#' alt='사람' />
              <div>팀이 나아가야할 명확한 목표를 제시 할 수 있어야 한다고 생각해요!</div>
            </li>
            <li>
              <img src='#' alt='사람' />
              <div>
                오! 저도 같은 생각이에요 🙌<br />
                리더십 관련해서 추천 해주실 만한<br />
                강의 없을까요?
              </div>
            </li>
          </ul>

          <ul>
            <li>
              <p>
                <span>
                  스터디를 통해 개인 역량 향상은 물론<br />
                  조직의 업무 효율을 높일 수 있어요.<br />
                </span>
                원하는 스터디를 직접 개설해보세요.
              </p>
              <img src='#' alt='card' />
            </li>
            <li>
              <p>
                <span>
                  커뮤니티는 커뮤니티 답게.<i>출시 예정</i><br />
                  익명성이 보장된 공간에서<br />
                </span>
                직무별, 주제별 대화를 나눠보세요.
              </p>
              <img src='#' alt='card' />
            </li>
          </ul>
        </div>

        <div id='cont09'>
          <div>
            <i></i>
            <h4>보상 체계</h4>
          </div>
          <h2>
            독려하지 않아도<br/>
            스스로 학습하는 기적
          </h2>
          <p>다양한 미션을 통해 얻는 보상 포인트 빈(Bean)</p>

          <img src='#' alt='gift' />

          <ul>
            <li>
              <p>
                <span>
                  학습 목표 달성, 퀴즈 풀이, 프클AI 활용 등<br/>
                  다양한 방식으로 ‘빈'을 획득해보세요.<br/>
                </span>
                모으는 재미가 쏠쏠할 거예요.
              </p>
              <img src='#' alt='card' />
            </li>
          </ul>
        </div>

        <div id='cont10'>
          <h2>
            <img src='#' alt='임직원의 커리어를 BASIC에서 PRO 버전으로 업그레이드 하세요.' />
          </h2>
          <button>도입 문의</button>
        </div>

      </div>
    </div>
  );
}

export default App;
