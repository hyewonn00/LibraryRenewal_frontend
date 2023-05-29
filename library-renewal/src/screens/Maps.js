import styled from 'styled-components';
import React, { useState } from 'react';
import marker from './marker.PNG';
import { Footer } from '../components/Footer';


const Container = styled.div`
.guideTab1 > ul > li {
  width:250px;
  height: 65px;
  padding: 20px 0;
  box-sizing: border-box;
  list-style: none;
  background: lightsteelblue;
  border:none;
  text-align: center;
  text-decoration-line: none;
}

.guideTab1 > ul > li:hover {
  background: cornflowerblue;
}

.guideTab1 > ul > li > a {
  text-decoration-line: none;
  color: black;
}


.guideTab2 > ul > li {
    width: 170px;
    padding: 20px 0;
    box-sizing: border-box;
    list-style: none;
    background: white;
    border: 1px solid;
    border-left: none;
    border-right: none;
    text-align: center;
    text-decoration-line: none;
}

.guideTab2 > ul > li:hover {
  font-weight: bold;
}

.guideTab2 > ul > li > a {
  text-decoration-line: none;
  color: black;
}
`;

function IndexPage() {
  const [selectedTab, setSelectedTab] = useState('1F');
  const [markerPosition, setMarkerPosition] = useState({ top: 0, left: 0, display: 'none' });

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setMarkerPosition({ display: 'none' });
  };

  const handleMouseEnter = (event, id) => {
    event.stopPropagation();

    switch (selectedTab) {
      case 'B1':
        // B1 층의 마커 위치 설정
        setMarkerPosition(getMarkerPositionForB1(id));
        break;
      case '1F':
        // 1층의 마커 위치 설정
        setMarkerPosition(getMarkerPositionFor1F(id));
        break;
      case '2F':
        // 2층의 마커 위치 설정
        setMarkerPosition(getMarkerPositionFor2F(id));
        break;
      case '3F':
        // 3층의 마커 위치 설정
        setMarkerPosition(getMarkerPositionFor3F(id));
        break;
      case '4F':
        // 4층의 마커 위치 설정
        setMarkerPosition(getMarkerPositionFor4F(id));
        break;
      case '5F':
        // 5층의 마커 위치 설정
        setMarkerPosition(getMarkerPositionFor5F(id));
        break;
      default:
        setMarkerPosition({ display: 'none' });
        break;
    }
  };

  const getMarkerPositionForB1 = (id) => {
    // B1 층의 마커 위치 설정
    switch (id) {
      case 'guidetab2-1':
        return { top: '195px', left: '680px', display: 'block' };
      case 'guidetab2-2':
        return { top: '115px', left: '810px', display: 'block' };
      case 'guidetab2-3':
        return { top: '195px', left: '840px', display: 'block' };
      case 'guidetab2-4':
        return { top: '260px', left: '845px', display: 'block' };
      case 'guidetab2-5':
        return { top: '375px', left: '830px', display: 'block' };
      default:
        return { display: 'none' };
    }
  };

  const getMarkerPositionFor1F = (id) => {
    // 1층의 마커 위치 설정
    switch (id) {
      case 'guidetab2-1':
        return { top: '80px', left: '670px', display: 'block' };
      case 'guidetab2-2':
        return { top: '265px', left: '645px', display: 'block' };
      case 'guidetab2-3':
        return { top: '180px', left: '650px', display: 'block' };
      case 'guidetab2-4':
        return { top: '400px', left: '650px', display: 'block' };
      case 'guidetab2-5':
        return { top: '115px', left: '860px', display: 'block' };
      case 'guidetab2-6':
        return { top: '160px', left: '830px', display: 'block' };
      case 'guidetab2-7':
        return { top: '180px', left: '835px', display: 'block' };
      case 'guidetab2-8':
        return { top: '260px', left: '860px', display: 'block' };
      default:
        return { display: 'none' };
    }
  };

  const getMarkerPositionFor2F = (id) => {
    // 2층의 마커 위치 설정
    switch (id) {
      case 'guidetab2-1':
        return { top: '165px', left: '670px', display: 'block' };
      case 'guidetab2-2':
        return { top: '110px', left: '800px', display: 'block' };
      case 'guidetab2-3':
        return { top: '230px', left: '780px', display: 'block' };
      case 'guidetab2-4':
        return { top: '330px', left: '790px', display: 'block' };
      case 'guidetab2-5':
        return { top: '270px', left: '920px', display: 'block' };
      case 'guidetab2-6':
        return { top: '250px', left: '980px', display: 'block' };
      case 'guidetab2-7':
        return { top: '400px', left: '845px', display: 'block' };
      case 'guidetab2-8':
        return { top: '405px', left: '650px', display: 'block' };
      default:
        return { display: 'none' };
    }
  };

  const getMarkerPositionFor3F = (id) => {
    // 3층의 마커 위치 설정
    switch (id) {
      case 'guidetab2-1':
        return { top: '125px', left: '720px', display: 'block' };
      case 'guidetab2-2':
        return { top: '310px', left: '780px', display: 'block' };
      case 'guidetab2-3':
        return { top: '245px', left: '980px', display: 'block' };
      default:
        return { display: 'none' };
    }
  };

  const getMarkerPositionFor4F = (id) => {
    // 4층의 마커 위치 설정
    switch (id) {
      case 'guidetab2-1':
        return { top: '105px', left: '675px', display: 'block' };
      case 'guidetab2-2':
        return { top: '105px', left: '815px', display: 'block' };
      case 'guidetab2-3':
        return { top: '90px', left: '890px', display: 'block' };
      case 'guidetab2-4':
        return { top: '230px', left: '670px', display: 'block' };
      case 'guidetab2-5':
        return { top: '255px', left: '990px', display: 'block' };
      default:
        return { display: 'none' };
    }
  };

  const getMarkerPositionFor5F = (id) => {
    // 5층의 마커 위치 설정
    switch (id) {
      case 'guidetab2-1':
        return { top: '250px', left: '680px', display: 'block' };
      case 'guidetab2-2':
        return { top: '300px', left: '780px', display: 'block' };
      default:
        return { display: 'none' };
    }
  };

  return (
    <Container>
      <div className='container'>
        <div className="guide">
          <div className="space-for-nav" style={{ height: "4rem" }}></div>
          <div className="space-for-nav" style={{ height: "4rem" }}></div>
          <div className="guideTab1" style={{ float: 'left' }}>
            <ul>
              <li onClick={() => handleTabClick('5F')}>5F</li>
              <li onClick={() => handleTabClick('4F')}>4F</li>
              <li onClick={() => handleTabClick('3F')}>3F</li>
              <li onClick={() => handleTabClick('2F')}>2F</li>
              <li onClick={() => handleTabClick('1F')}>1F</li>
              <li onClick={() => handleTabClick('B1')}>B1</li>
            </ul>
          </div>
          <div className="guideTab1-1" style={{ float: 'left', display: 'flex' }}>
            {selectedTab === 'B1' && (
              <div
                className="guideTab2"
                id="guideTab1-B1"
              >
                <ul>
                  <li id="guidetab2-1" className="last" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-1')}>
                    <a href="#">
                      주차장
                    </a>
                  </li>
                  <li id="guidetab2-2" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-2')}>
                    <a href="#">
                      기계실
                    </a>
                  </li>
                  <li id="guidetab2-3" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-3')}>
                    <a href="#">
                      발전기실
                    </a>
                  </li>
                  <li id="guidetab2-4" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-4')}>
                    <a href="#">
                      전기실
                    </a>
                  </li>
                  <li id="guidetab2-5" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-5')}>
                    <a href="#">
                      보존서고
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {selectedTab === '1F' && (
              <div
                className="guideTab2"
                id="guideTab1-1"
              >
                <ul>
                  <li id="guidetab2-1" className="last" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-1')}>
                    <a href="/hallymMuseum">
                      한림대학교 박물관
                    </a>
                  </li>
                  <li id="guidetab2-2" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-2')} >
                    <a href="#">
                      제 1일반 열람실
                    </a>
                  </li>
                  <li id="guidetab2-3" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-3')} >
                    <a href="#">
                      제 2일반 열람실
                    </a>
                  </li>
                  <li id="guidetab2-4" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-4')} >
                    <a href="#">
                      지식미디어 팀 사무실
                    </a>
                  </li>
                  <li id="guidetab2-5" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-5')} >
                    <a href="#">
                      휴게실
                    </a>
                  </li>
                  <li id="guidetab2-6" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-6')} >
                    <a href="#">
                      복사실
                    </a>
                  </li>
                  <li id="guidetab2-7" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-7')} >
                    <a href="/jpStudy">
                      일본학 연구소
                    </a>
                  </li>
                  <li id="guidetab2-8" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-8')} >
                    <a href="#">
                      박물관 사무실
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {selectedTab === '2F' && (
              <div
                className="guideTab2"
                id="guideTab1-2"
                style={{ float: 'left' }}
              >
                <ul>
                  <li id="guidetab2-1" className="last" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-1')} >
                    <a href="#">
                      연속간행물
                    </a>
                  </li>
                  <li id="guidetab2-2" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-2')} >
                    <a href="#">
                      참고자료실
                    </a>
                  </li>
                  <li id="guidetab2-3" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-3')} >
                    <a href="#">
                      만화코너
                    </a>
                  </li>
                  <li id="guidetab2-4" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-4')} >
                    <a href="#">
                      업무지원실
                    </a>
                  </li>
                  <li id="guidetab2-5" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-5')} >
                    <a href="#">
                      센터장실
                    </a>
                  </li>
                  <li id="guidetab2-6" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-6')} >
                    <a href="#">
                      비전관
                    </a>
                  </li>
                  <li id="guidetab2-7" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-7')} >
                    <a href="#">
                      대출반납 데스크
                    </a>
                  </li>
                  <li id="guidetab2-8" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-8')} >
                    <a href="#">
                      상상공방
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {selectedTab === '3F' && (
              <div
                className="guideTab2"
                id="guideTab1-3"
                style={{ float: 'left' }}
              >
                <ul>
                  <li id="guidetab2-1" className="last" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-1')} >
                    <a href="#">
                      사회/자연과학자료실
                    </a>
                  </li>
                  <li id="guidetab2-2" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-2')} >
                    <a href="#">
                      업무 지원실
                    </a>
                  </li>
                  <li id="guidetab2-3" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-3')} >
                    <a href="#">
                      의학 자료실
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {selectedTab === '4F' && (
              <div
                className="guideTab2"
                id="guideTab1-4"
                style={{ float: 'left' }}
              >
                <ul>
                  <li id="guidetab2-1" className="last" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-1')} >
                    <a href="#">
                      시스템실
                    </a>
                  </li>
                  <li id="guidetab2-2" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-2')} >
                    <a href="#">
                      교육실
                    </a>
                  </li>
                  <li id="guidetab2-3" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-3')} >
                    <a href="#">
                      대출반납 데스크1
                    </a>
                  </li>
                  <li id="guidetab2-4" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-4')} >
                    <a href="/csquare">
                      C.Square
                    </a>
                  </li>
                  <li id="guidetab2-5" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-5')} >
                    <a href="#">
                      창의 융합룸
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {selectedTab === '5F' && (
              <div
                className="guideTab2"
                id="guideTab1-5"
                style={{ float: 'left' }}
              >
                <ul>
                  <li id="guidetab2-1" className="last" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-1')} >
                    <a href="#">
                      인문/예술학자료실
                    </a>
                  </li>
                  <li id="guidetab2-2" onMouseEnter={(event) => handleMouseEnter(event, 'guidetab2-2')} >
                    <a href="#">
                      업무 지원실
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="floor" style={{ float: 'left', marginLeft: '30px' }} id="floor">
          <p className="floorTitle" id="floorTitle">
            <span>{selectedTab}</span>
          </p>
          <p className="floorPlan">
            <img
              id="floorImg"
              style={{ width: '500px', height: '500px' }}
              src={`https://library.hallym.ac.kr/image/ko/local/guide/${selectedTab}.jpg`}
            />
          </p>
        </div>
        <img
          src={marker}
          id="marker"
          style={{
            display: markerPosition.display,
            width: '25px',
            position: 'absolute',
            top: markerPosition.top, //120 이동
            left: markerPosition.left, // 170 이동
          }}
        />
        <div className="space-for-nav" style={{ height: "50rem" }}></div>
      </div>
    </Container>
  );
}

export default IndexPage;