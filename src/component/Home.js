
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
  




// -------images File start----------


import n2 from './img/2.jpeg'
import n3 from './img/3.jpeg'
import n4 from './img/4.jpeg'
import n5 from './img/5.jpeg'
import n6 from './img/6.jpeg'
import n7 from './img/7.jpeg'
import n8 from './img/8.jpeg'
import n9 from './img/9.jpeg'
import n10 from './img/10.jpeg'
import n11 from './img/11.jpeg'

import n20 from './img/20.jpeg'
import n21 from './img/21.jpeg'
import n22 from './img/22.jpeg'
import n23 from './img/23.jpeg'


// ----------images File and------------

// ------------icone start-----------

// import { FaRegUser  } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";

// --------------incon and-----------
function Home() {
  
  return (

    <div className='main_web'>

      {/* ------------------silder start------------ */}

      <OwlCarousel className='owl-theme' id='kaushal-1' loop margin={10} items='1' >
        <div class='item p-0 m-0'>
          <img src={n2}></img>
          <div className='silder_contain'>
            <h1>Do You Need</h1>
            <h2>an Accountant?</h2>
            <div className='btn-1'>
              <button className=' m-0'>free Consultation</button>

            </div>
          </div>
        </div>
        <div class='item p-0 m-0'>
          <img src={n3}></img>
          <div className='silder_contain'>
            <h1>Do You Need</h1>
            <h2>an Accountant?</h2>
            <div className='btn-1'>
              <button className=' m-0'>free Consultation</button>

            </div>
          </div>
        </div>
        <div class='item p-0 m-0'>
          <img src={n4}></img>
          <div className='silder_contain'>
            <h1>Do You Need</h1>
            <h2>an Accountant?</h2>
            <div className='btn-1'>
              <button className=' m-0'>free Consultation</button>

            </div>
          </div>

        </div>

      </OwlCarousel>;


      {/* ------------------silder and------------------ */}

      {/* -------------cepstion start------------- */}

      <Container className='w-70'>
        <Row className='main_box'>
          <Col md={12} lg className='left_info p-3 m-0 '>
            <img src={n5}></img>
          </Col>
          <Col className='right_info p-3 m-0 '>
            <div className='jj'>
              <h1>A Few Words About Us</h1>
              <p>COST Accountant was founded in 1995 and since that time has grown into the largest CPA firm in the
                area. We are an assertive firm providing our clients a full range of services.</p>
              <p>Our offices are located in the Intermountain West because this is where we chose to live. However, we serve a wide variety
                of clients located throughout the United States and even some European countries.
              </p>
              <button>learn more</button>
            </div>
          </Col>
        </Row>
      </Container>



      {/* -------------cepstion and-------------- */}

      {/* -----------box start------------- */}

      <div className='main_box-2 '>
        <Container className='w-55 '>

          <Row className='main-2' >
            <Col xm={12} sm={6} md={6} lg >
              <div className='d-flex  hh'>
                <div className='left_box'>
                  <FaRegUser className='i-cone'></FaRegUser >
                </div>
                <div className='right_box'>
                  <h2>Qualified Employees</h2>
                  <p>Our team consists of more than 20 qualified and experienced accountants, marketers, and managers.</p>
                </div>
              </div>
            </Col >
            <Col xm={12} sm={6} md={6} lg >
              <div className='d-flex hh'>
                <div className='left_box'>
                  <FaRegUser className='i-cone'></FaRegUser >
                </div>
                <div className='right_box'>
                  <h2>Free Consultations</h2>
                  <p>Our acquaintance with a client always begins
                    with a free consultation to find out possible solutions to their problems.</p>
                </div>
              </div>
            </Col>
            <Col xm={12} sm={6} md={6} lg >
              <div className='d-flex hh'>
                <div className='left_box'>
                  <FaRegUser className='i-cone'></FaRegUser >
                </div>
                <div className='right_box'>
                  <h2>100% Guaranteed</h2>
                  <p>All results that you get from us are 100%
                    guaranteed to bring you to a whole new level of profitability and financial success.</p>
                </div>
              </div>
            </Col>

          </Row>

        </Container>
      </div>

      {/* --------------box and-------------- */}

      {/* ---------------------------------------- */}

      {/* <Row className='team w-55'>

        <Col className=' hh'>
          <div className='l-1 d-flex'>
            <p className='p-0 m-0'>Learn the Cost of your <span>Accounting Solutions</span> Right Now!</p>
            <button>View all pricing</button>
          </div>
        </Col>


      </Row> */}


      {/* ---------------------------------------------- */}


      {/* -----------------Services start----------------- */}

      <div className='w-70'>
        <Container>
          <div className='hading'>
            <h1>Services</h1>
            <div className='h-k'>
              <p>As the most qualified accounting services provider, we offer an amazing variety of financial solutions
                designed to help you solve all bookkeeping issues, no matter big or small.</p>
            </div>
          </div>

          <Row className='Services'>
            <Col xs={12} sm={6} md={6} lg >
              <div className='img-1' >
                <img src={n6}></img>
                <div className='img_contain'>
                  <h4>Cash Management</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg >
              <div className='img-1'>
                <img src={n7}></img>
                <div className='img_contain'>
                  <h4>Payments</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg >
              <div className='img-1' >
                <img src={n8}></img>
                <div className='img_contain'>
                  <h4>M&A Assistance  </h4>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg >
              <div className='img-1' >
                <img src={n9}></img>
                <div className='img_contain'>
                  <h4>CLocal Expertise</h4>
                </div>
              </div>
            </Col>

          </Row>

          <div className='btu'>
            <button>view all services</button>
          </div>

        </Container>
      </div>


      {/* ------------------Services and----------------- */}

      {/* ---------------------Pricing start------------------ */}

      <div className='Pricing-info w-70'>
        <Container>
          <div className='hading'>
            <h1>Pricing</h1>
          </div>

          <Row className='qq'>
            <Col lg={4} xl={4} md={6} sm={6} className='kk' >
              <div className='m-2 pr-contain p-4'>
                <p className='p-0 m-0'>Basic</p>
                <h1>$49.00</h1>
                <h2></h2>
                <p className='ww'>This package will suit you if you are a
                  private entrepreneur or a small business
                  owner looking for some advice in accounting.</p>
                <button>order service</button>
              </div>
            </Col>
            <Col lg={4} xl={4} md={6} sm={6} className='kk' >
              <div className='m-2 pr-contain p-4'>
                <p className='p-0 m-0'>Basic</p>
                <h1>$49.00</h1>
                <h2></h2>
                <p className='ww'>This package will suit you if you are a
                  private entrepreneur or a small business
                  owner looking for some advice in accounting.</p>
                <button>order service</button>
              </div>
            </Col>
            <Col lg={4} xl={4} md={6} sm={6} className='kk' >
              <div className='m-2 pr-contain p-4'>
                <p className='p-0 m-0'>Basic</p>
                <h1>$49.00</h1>
                <h2></h2>
                <p className='ww'>This package will suit you if you are a
                  private entrepreneur or a small business
                  owner looking for some advice in accounting.</p>
                <button>order service</button>
              </div>
            </Col>

          </Row>
        </Container>
      </div>


      {/* --------------------Pricing and------------------- */}

      {/* ----------------Testimonials start---------------- */}

      <div className='Tes w-70'>
        <div className='hading'>
          <h1>Testimonials</h1>
        </div>
        <OwlCarousel className='owl-theme ss' id='kaushal-2' loop margin={10} items='3' >
          <div class='item'>
            <div className='tes-1 d-flex'>
              <div className='tes-1-img'>
                <img src={n20}></img>
              </div>
              <div className='tes-1-contaion'>
                <h2>Kelly McMillan</h2>
                <p className='p-0 m-0'>Private Entrepreneur</p>
              </div>
            </div>
            <div className='tes-2'>
              <p>
                With COST Accountant, I am getting the same high degree
                of competence and experience as before,
                but with a much higher level of service.
                At much more reasonable fees, too!
              </p>
            </div>
            <div>

            </div>
          </div>
          <div class='item'>
            <div className='tes-1 d-flex'>
              <div className='tes-1-img'>
                <img src={n21}></img>
              </div>
              <div className='tes-1-contaion'>
                <h2>Harold Barnett</h2>
                <p className='p-0 m-0'>Regional Manager</p>
              </div>
            </div>
            <div className='tes-2'>
              <p>
                I’m personally and financially healthier because of your
                company’s expertise and dedication. My partners at COST Accountant provide
                great value with clear, honest accounting strategies.
              </p>
            </div>
            <div>

            </div>
          </div>
          <div class='item'>
            <div className='tes-1 d-flex'>
              <div className='tes-1-img'>
                <img src={n22}></img>
              </div>
              <div className='tes-1-contaion'>
                <h2>Bill Warner</h2>
                <p className='p-0 m-0'>Private Entrepreneur</p>
              </div>
            </div>
            <div className='tes-2'>
              <p>
                We have been working with COST Accountant for three years.
                Their team is very professional, and always gives clear advice
                and guidance in a prompt and efficient manner.
              </p>
            </div>
            <div>

            </div>
          </div>
          <div class='item'>
            <div className='tes-1 d-flex'>
              <div className='tes-1-img'>
                <img src={n23}></img>
              </div>
              <div className='tes-1-contaion'>
                <h2>Albert Webb</h2>
                <p className='p-0 m-0'>CEO at Majestic</p>
              </div>
            </div>
            <div className='tes-2'>
              <p>
                Making the switch to COST Accountant was the best business
                decision I could have made. They are on top of everything for me, always with an
                eye toward helping me make the most profit.
              </p>
            </div>
            <div>

            </div>
          </div>










        </OwlCarousel>

      </div>

      {/* ----------------Testimonials and------------------- */}
      {/* -------------------------------------------- */}

      <div className='main-box-3 w-70 '>
        <Container>
          <Row >
            <Col className='box-3'>
              <div className='box-3-contain'>
                <h1>Choose the Best</h1>
                <h2>Accountant</h2>
                <p>With a variety of accountants available at our
                  company, you can always choose one that fits your corporate requirements.</p>
                <button>Free consultation</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>



      {/* -------------------------------------------------- */}

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
        </Container>
      </div>

      {/* ----------------Latest and------------------ */}
     













    </div>



  );
}

export default Home;