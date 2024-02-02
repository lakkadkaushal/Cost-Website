import React from 'react';

import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import h from './img/24.jpeg';
import n10 from './img/10.jpeg'
import n11 from './img/11.jpeg'
import n30 from './img/30.jpg'
import n31 from './img/31.jpg'



function Blog() {
    return (
        <div>
          
            {/* --------------------img start------------------- */}

            <div className='kk'>
                <div className='img-1'>
                    <img src={h}></img>
                    <div className='img-contain'>
                        <h4>GRID BLOG</h4>
                        <h1>Grid Blog</h1>
                    </div>
                </div>
            </div>

            {/* -----------------img and---------------------- */}

             {/* ------------------Latest start------------------ */}

      <div className='w-70'>
        <Container>
          <div className='hading'>
            <h1>Latest Blog Posts</h1>
          </div>
          <Row className='d-flex hh'>
            <Col xs={12} md={6} lang={6}>
              <div className='main_box-4 p-0 m-0'>
                <img src={n10}></img>
                <div className='box-4-contain'>
                  <h2>Managing Your Finances</h2>
                  <p>by Theresa Barnes<span>Apr 21, 2023 at 12:05 pm</span>News</p>
                  <p className='ll'>Personal financial management is a subject that is not taught in many schools,
                    but is something that nearly everyone has to deal with in their lives later on. Here are some statistics...</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lang={6}>
              <div className='main_box-4 p-0 m-0'>
                <img src={n11}></img>
                <div className='box-4-contain'>
                  <h2>Managing Your Finances</h2>
                  <p>by Theresa Barnes<span>Apr 21, 2023 at 12:05 pm</span>News</p>
                  <p className='ll'>Personal financial management is a subject that is not taught in many schools,
                    but is something that nearly everyone has to deal with in their lives later on. Here are some statistics...</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='d-flex hh'>
            <Col xs={12} md={6} lang={6}>
              <div className='main_box-4 p-0 m-0'>
                <img src={n30}></img>
                <div className='box-4-contain'>
                  <h2>Managing Your Finances</h2>
                  <p>by Theresa Barnes<span>Apr 21, 2023 at 12:05 pm</span>News</p>
                  <p className='ll'>Personal financial management is a subject that is not taught in many schools,
                    but is something that nearly everyone has to deal with in their lives later on. Here are some statistics...</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lang={6}>
              <div className='main_box-4 p-0 m-0'>
                <img src={n31}></img>
                <div className='box-4-contain'>
                  <h2>Managing Your Finances</h2>
                  <p>by Theresa Barnes<span>Apr 21, 2023 at 12:05 pm</span>News</p>
                  <p className='ll'>Personal financial management is a subject that is not taught in many schools,
                    but is something that nearly everyone has to deal with in their lives later on. Here are some statistics...</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ----------------Latest and------------------ */}
        </div>
    );

}
export default Blog; 