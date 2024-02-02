// import './App.css'
import './Style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import n from './img/1.png';
import n12 from './img/12.jpeg'
import n13 from './img/13.jpeg'
import n14 from './img/14.jpeg'
import n15 from './img/15.jpeg'
import n16 from './img/16.jpeg'
import n17 from './img/17.jpeg'
import n18 from './img/18.jpeg'
import n19 from './img/19.jpeg'
import { MdPhone } from "react-icons/md";

import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import Services from './Services';
import Home from './Home';
import Blog from './Blog';
import Careers from './Careers';
import Portfolio from './Portfolio'




// import Fouter from './Fouter.js';




function Heder() {
  return (
    <div>
      {/* -----------heder start----------- */}
      <header className=' mt-3 mb-3 mt-lg-4 mb-lg-4 d-none d-lg-block' >
        <Container >
          <Row className='top_info'>
            <Col className='d-flex'>

              <div>
                <img src={n}></img>

              </div>
            </Col>
            <Col className='m-0 p-0 c-1  d-none d-lg-block '>
              <div className='d-flex'>
                <div className='i-co2'>
                  <MdPhone className='i-co'></MdPhone>
                </div>
                <div className='m-0 p-0 ps-3'>
                  <h2>1-800-1234-567</h2>
                  <h2>1-800-8763-765</h2>
                </div>
              </div>
            </Col>
            <Col xs={3} className='m-0 p-0 c-1 d-flex d-none d-lg-block'>
              <div className='d-flex'>
                <div className='i-co2'>
                  <MdPhone className='i-co'></MdPhone>
                </div>
                <div className='m-0 p-0 ps-3'>
                  <h2>2130 Fulton Street </h2>
                  <h2> San Diego, CA 94117-1080</h2>
                </div>
              </div>
            </Col>
            <Col className='btn text-end d-none d-lg-block'>
              <button>Request a call</button>
            </Col>
          </Row>
        </Container>
      </header >


      <Navbar expand="lg" className="bg-body-tertiary  navbar-expand-lg navbar-light ">
        <Container>

          <div className="d-lg-none">

            <Navbar.Brand href="#home"><img src={n}></img></Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto py-1 ">
              <Nav.Link href="#home"><Link to="/">HOME</Link></Nav.Link>
              {/* <Nav.Link href="#home">ABOUT</Nav.Link> */}
              <Nav.Link href="#link"><Link to="/Blog" >BLOG</Link></Nav.Link>

              <Nav.Link href="#home"><Link to="/Services">SERVICES</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/Careers">CAREERS</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="Portfolio">PORTFOLIO</Link></Nav.Link>

              {/* <NavDropdown title="CONTACTS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
     

      {/* ------------heder and-------------- */}
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/Services" element={ <Services/> } />
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Careers' element={<Careers/>}></Route>
        <Route path='/Portfolio' element={<Portfolio/>}></Route>
     
      </Routes>

       {/* -----------------fouter start----------------- */}

       <div className='main_fouter w-70'>
        <Container>
          <Row >
            <Col xs={12} sm={12} md={12} lg={4} xl>
              <div className='fouter-1'>
                <h1>About Us</h1>
                <p>Our firm is one of the leading accounting firms in the area. By
                  combining our expertise, experience and the energy of our staff, each
                  client receives close personal and professional attention. Our high
                  standards, service and specialized staff spell
                  the difference between our outstanding performance and other firms.</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl>
              <div className='fouter-2'>
                <h1>Recent Blog Posts</h1>
                <div className='pp'>
                  <div className='box-5'>
                    <p className='p-0 m-0'>Top Tips from Accountants: How To Handle IRS Scams</p>
                    <span>by Theresa Barnes 2 days ago</span>
                  </div>
                  <div className='box-5'>
                    <p className='p-0 m-0' >Top Tips from Accountants: How To Handle IRS Scams</p>
                    <span>by Theresa Barnes 2 days ago</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl >
              <div className='fouter-3' >
                <h1>Gallery</h1>
                <Row >
                  <Col className='p-1'>
                    <div>
                      <img src={n12}></img>
                    </div>
                  </Col>
                  <Col className='p-1'>
                    <div>
                      <img src={n13}></img>
                    </div>
                  </Col>
                  <Col className='p-1'>
                    <div>
                      <img src={n14}></img>
                    </div>
                  </Col>
                  <Col className='p-1'>
                    <div>
                      <img src={n15}></img>
                    </div>
                  </Col>
                </Row>

                <Row >
                  <Col className='p-1'>
                    <div>
                      <img src={n16}></img>
                    </div>
                  </Col>
                  <Col className='p-1'>
                    <div>
                      <img src={n17}></img>
                    </div>
                  </Col>
                  <Col className='p-1'>
                    <div>
                      <img src={n18}></img>
                    </div>
                  </Col>
                  <Col className='p-1'>
                    <div>
                      <img src={n19}></img>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col >
              <div className='d-flex left_class'>
                  <p>HOME</p>
                  <p>ABOUT  </p>
                  <p>SERVICES</p>
                  <p>GALLERY</p>
                  <p>BLOG</p>
                  <p className='p-0' >CONTACTS</p>
              </div>
            </Col>
            <Col  >
              <div className='right_class'>
                  <FaFacebook className='l-1'></FaFacebook>
                  <FaFacebook className='l-1'></FaFacebook>
                  <FaFacebook className='l-1'></FaFacebook>
                  <FaFacebook className='l-1'></FaFacebook>
                  <FaFacebook className='l-1'></FaFacebook>
              </div>
            </Col>
          </Row> */}

        </Container>
      </div>


      {/* -----------------fouter and---------------- */}
      
    </div>
  );
}

export default Heder;