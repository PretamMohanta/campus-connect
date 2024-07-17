import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./Homepage.css"
import nitmas from ".././assets/nitmas.png";
import jk from ".././assets/jk.jpg";
import amazon from ".././assets/amazon.webp";
import infosys from ".././assets/infosys.webp";
import byjusicon from ".././assets/byjusicon.webp";
import reliance from ".././assets/reliance.webp";
import swiggy from ".././assets/swiggy.webp";
import tcs from ".././assets/tcs.webp";
import wipro from ".././assets/wipro.webp";
import compcapgemini from ".././assets/compcapgemini.webp";
import compcognizant from ".././assets/compcognizant.webp";
import comppwc from ".././assets/comppwc.webp";
import damilanoicon from ".././assets/damilanoicon.webp";
import nestleicon from ".././assets/nestleicon.webp";
import youtube from ".././assets/youtube.png";
import facebook from ".././assets/facebook.png";
import instagram from ".././assets/instagram.png";
import campus1 from ".././assets/campus1.png";
import campus2 from ".././assets/campus2.png";
import campus3 from ".././assets/campus3.png";
import campus4 from ".././assets/campus4.png";

import { useState } from 'react';

// import { Container, Grid, Box } from '@mui/material';
import styled from 'styled-components';
// import qw from "../assets/qw.jpg";
// import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
  const [fix , setFix]=useState(false)
  
  window.addEventListener("scroll",function(){
    if(this.window.scrollY > 100){
      setFix(true);
    }else{
      setFix(false);
    }
  })
    return (
    <>
    <div className="container">
    <div className="navbar">
      <div className="logo"><img src={nitmas} alt="lo" width={"350px"} height={"90px"}/></div>
      <ul className="nav-links">
        <li className="nav-link">
        
        <div><FontAwesomeIcon icon={faHouse} /></div>
          <a href="#">Home</a>
        </li>

        <li className="nav-link services">
        
        <div><FontAwesomeIcon icon={faBookOpen} /></div>
          About Us
        </li>

        
        <li className="nav-link">
        
        <div><FontAwesomeIcon icon={faPhone} /></div>
          <a href="tel:+91-9830378118">Contact</a>
        </li>
        <li className="nav-link">
        <StyledLink to="/choose"> <div><FontAwesomeIcon icon={faUser} /></div>
        Member's Area</StyledLink>
        </li>
      </ul>
    </div>
    <div ><img className="banner" src={jk} alt="jk" /></div>

    <div className="main-section">
    <div className="news">
    <h1>Notice Section</h1>
      {/*--CAMPUS NEWS SECTION---*/}
      <div className="event">
        <h2 className="heading">Recent Event</h2>
        <div>
          {/* <marquee direction="up" scrollamount="7" style="height:340px;"> */}
          <ul>
            <li>
              <i>01-April-2023 :</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus...
            </li>
            <li>
              <i>01-April-2023 :</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus...
            </li>
            <li>
              <i>01-April-2023 :</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus...
            </li>
            <li>
              <i>01-April-2023 :</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus...
            </li>
            <li>
              <i>01-April-2023 :</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus...
            </li>
            <li>
              <i>01-April-2023 :</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus... 
            </li>
            <li>
              <i>01-April-2023 :</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus... 
            </li>
            <li>
              <i>01-April-2023 :</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus... 
            </li>
            <li>
              <i>01-April-2023 :</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus... 
            </li>
          </ul>
          {/* </marquee> */}
        </div>
      </div>
      {/*---CAMPUS NEWS SECTION---*/}
      <div className="event campus-news">
        <h2 className="heading">Campus News</h2>
        <div>
          <ul>
            <li>
              <span className="campus-img">
              <img src={campus1} alt="campus1" />
              </span>
              <h2>There are many variations.</h2>
              <h6>Sep.04.2012</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </li>
            <li>
              <span className="event-img"><img src={campus2} alt="campus2" /></span>
              <h2>There are many variations.</h2>
              <h6>Sep.04.2012</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </li>
            <li>
              <span className="event-img">
              <img src={campus3} alt="campus3" />
              </span>
              <h2>There are many variations.</h2>
              <h6>Sep.04.2012</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </li>
            <li>
              <span className="event-img">
              <img src={campus4} alt="campus4" />
              </span>
              <h2>There are many variations.</h2>
              <h6>Sep.04.2012</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </li>
          </ul>
        </div>
      </div>
      {/*----EVENT SECTION----*/}
      <div className="event">
        <h2 className="heading">College Event Calender</h2>
        <div>
          <ul>
            <li>
              <span className="event-date">11 <br /> April </span> Lorem Ipsum is simply dummy text of the printing text printing industry...
            </li>
            <li>
              <span className="event-date">19 <br /> May </span> Lorem Ipsum is simply dummy text of the printing industry dummy text...
            </li>
            <li>
              <span className="event-date">21 <br /> June </span> Lorem Ipsum is simply dummy text of the printing industry orem Ipsum...
            </li>
            <li>
              <span className="event-date">17 <br /> July </span> Lorem Ipsum is simply dummy text of the printing industry simply dummy...
            </li>
            <li>
              <span className="event-date">31 <br /> Marc </span> Lorem Ipsum is simply dummy text of the printing industry...
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="company">
    <h1 className="text-3xl"><b>A Coveted Campus For Recruiters</b></h1><br />
    <p>NITMAS of Higher Education is a globally engaged institution with active partnership with more than 250+ leading universities around the globe. Our relations with institutions, government agencies and organisations in study, research and service provide faculty and students access to world-class institutions, experiences and resources.</p><br />
    <div className="companylist">
      <div className="companylist1">
        <h4 className="subhead">
          <marquee className="placement" direction="left" scrollamount={10}>
            <ul className="company-image">
              <li><a href /><img src={amazon} alt="amazon" /></li>
              <li><a href /><img src={infosys} alt="infosys" /></li>
              <li><a href /><img src={byjusicon} alt="byjusicon" /></li>
              <li><a href /><img src={reliance} alt="reliance" /></li>
              <li><a href /><img src={swiggy} alt="swiggy" /></li>
              <li><a href /><img src={tcs} alt="tcs" /></li>
              <li><a href /><img src={wipro} alt="wipro" /></li>
              <li><a href /><img src={compcapgemini} alt="comp-capgemini" /></li>
              <li><a href /><img src={compcognizant} alt="comp-cognizant" /></li>
              <li><a href /><img src={comppwc} alt="comp-pwc" /></li>
              <li><a href /><img src={damilanoicon} alt="damilano-icon" /></li>
              <li><a href /><img src={nestleicon} alt="nestle-icon" /></li>
            </ul>
          </marquee>
        </h4></div>
    </div><br />
  </div>

  <div className="footer">
    <a href="http://www.nitmas.edu.in/" target="_blank" className="footer-wordmark"><h1 className="text-2xl"><b>The Neotia Institute of Technology Management and Science</b></h1></a>
    <a className="BE-BOUNDLESS text-lg"><h3><b>BE BOUNDLESS</b></h3></a>
    <a>--------------</a>
    <h4><b>Get Social</b></h4>
    <div className="social-network">
    <ul className="footer-social1">
    <li><a href='https://www.facebook.com/nitmasitme144/'><img src={facebook} alt="facebook" height={"35px"} width={"35px"}/></a></li>
    <li><a href='https://www.youtube.com/channel/UCnkgECTl5NcWV_S3Fkv2aoA'><img src={youtube} alt="youtube" height={"35px"} width={"35px"}/></a></li>
    <li><a href='https://www.instagram.com/itmenitmas144/'><img src={instagram} alt="instagram" height={"35px"} width={"35px"}/></a></li>
      </ul>
    </div>
    <a>--------------</a>
    <div className="footer-nav">
      <ul className="footer-link">
        <li><a className="jj" href="#"><b>Accessibility</b></a></li>
        <li><a className="jj" href="#"><b>Contact Us</b></a></li>
        <li><a className="jj" href="#"><b>Jobs</b></a></li>
        <li><a className="jj" href="#"><b>Campus Safety</b></a></li>
        <li><a className="jj" href="#"><b>My NITMAS</b></a></li>
        <li><a className="jj" href="#"><b>Rules Docke</b></a></li>
        <li><a className="jj" href="#"><b>Privacy</b></a></li>
        <li><a className="jj" href="#"><b>Terms</b></a></li>
        <li><a className="jj" href="#"><b>Newsletter</b></a></li>
      </ul>
    </div>
    <p>Copyright ©2023 All rights reserved</p>
  </div>
  </div>

  

    </>
        // <StyledContainer>
        //     <Grid container spacing={0}>
        //         <Grid item xs={12} md={6}>
        //             <img src={qw} alt="students" style={{ width: '100%' }} />
        //         </Grid>
        //         <Grid item xs={12} md={6}>
        //             <StyledPaper elevation={3}>
        //                 <StyledTitle>
        //                     Welcome to
        //                     <br />
        //                     Management
        //                     <br />
        //                     System
        //                 </StyledTitle>
        //                 <StyledText>
        //                     Streamline school, collage, university management, class organization, and add students and faculty.
        //                     Seamlessly track attendance, assess performance, and provide feedback.
        //                     Access records, view marks, and communicate effortlessly.
        //                 </StyledText>
        //                 <StyledBox>
        //                     <StyledLink to="/choose">
        //                         <LightPurpleButton variant="contained" fullWidth>
        //                             Login
        //                         </LightPurpleButton>
        //                     </StyledLink>
        //                     <StyledText>
        //                         Don't have an account?{' '}
        //                         <Link to="/Adminregister" style={{color:"#550080"}}>
        //                             Sign up
        //                         </Link>
        //                     </StyledText>
        //                 </StyledBox>
        //             </StyledPaper>
        //         </Grid>
        //     </Grid>
        // </StyledContainer>
    );
};

export default Homepage;

// const StyledContainer = styled(Container)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const StyledPaper = styled.div`
//   padding: 24px;
//   height: 100vh;
// `;

// const StyledBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content:center;
//   gap: 16px;
//   padding: 24px;
// `;

// const StyledTitle = styled.h1`
//   font-size: 3rem;
//   color: #252525;
//   /* font-family: "Manrope"; */
//   font-weight: bold;
//   padding-top: 0;
//   letter-spacing: normal;
//   line-height: normal;
// `;

// const StyledText = styled.p`
//   /* color: #550080; */
//   margin-top: 30px;
//   margin-bottom: 30px; 
//   letter-spacing: normal;
//   line-height: normal;
// `;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
