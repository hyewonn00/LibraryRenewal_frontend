import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
.box{
 
  height: 700px;
}
li{
  list-style-type: none;
  width: 120px;
  height: 150px;
  background-color: #394867;
  border-radius: 28px;
  text-align: center;
  color: #9BA4B5;
  margin-left: 60px;
  margin-right: 20px;
}
li>a{
  text-decoration: none;
}
.thin{
  box-sizing: border-box;
  width: 40px;
  height: 150px;
  border-radius: 10px;
  margin-left: 2px;
  transform: rotate(-11deg);
  writing-mode: vertical-rl;
  padding-right: 12px;
}
.thin:hover{
  transform: rotate(0deg);
  width: 40px;
  height: 150px;
  transition: all 0.35s;
}
ul{
  display: flex;
}
.book{
  background-image: url(https://www.hanbit.co.kr/data/books/B8371709349_l.jpg);
  background-size: cover;
  box-sizing: border-box;
  line-height: 25vh;
  transform: scale(1);
 
}
.book > p{
  opacity: 0;
  
}
.book:hover{
  background-image: none;
  transition: transform 0.4s linear;
  transform: scale(1.1);

}
.book:hover p{
  opacity: 1;
  padding-top: 65px;

}
.new{
  margin-top: 90px;
}
`;


const Books = () => {
  return (
    <Container>
      <div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className='box'>
          <header className='home-header'>
            <h1>
              <span></span> 신착/인기도서 <span></span>
            </h1>
          </header>
          <div className="new">
            <h4>신착도서</h4>
            <ul>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="thin"><p>책 제목</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="thin"><p>책 제목</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
            </ul>
          </div>
          <div className="best">
            <h4>인기도서</h4>
            <ul>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="thin"><p>책 제목</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="thin"><p>책 제목</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>
              <li class="book"><p>책 제목 및 저자</p></li>

            </ul>
          </div>
          <div className="space-for-nav" style={{ height: "4rem" }}></div>
          <div className="space-for-nav" style={{ height: "4rem" }}></div>
          <div className="space-for-nav" style={{ height: "4rem" }}></div>
          <div className="space-for-nav" style={{ height: "4rem" }}></div>
          <div className="space-for-nav" style={{ height: "4rem" }}></div>
          <div className="space-for-nav" style={{ height: "4rem" }}></div>
          <div className="space-for-nav" style={{ height: "4rem" }}></div>
          <div className="space-for-nav" style={{ height: "4rem" }}></div>
        </div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
      </div>
    </Container>
  );
};

export default Books;
