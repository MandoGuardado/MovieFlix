import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import "mdbreact/dist/css/mdb.css";

const FooterPage = () => {
  return (
    <MDBFooter color='purple' className='font-small pt-4 mt-4'>
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='4'>
            <div className='firsttitle'>
              <ul>
                <li className='faq'>
                  <a href='#!'>FAQ</a>
                </li>
                <li className='about us'>
                  <a href='#!'>About Us</a>
                </li>
                <li className='Conact us'>
                  <a href='#!'>Contact Us</a>
                </li>
              </ul>
            </div>
          </MDBCol>
          <MDBCol md='4'>
            <div className='secondtitle'>
              <ul>
                <li className='account'>
                  <a href='#!'>Account</a>
                </li>
                <li className='Jobs'>
                  <a href='#!'>Jobs</a>
                </li>
                <li className='terms of use'>
                  <a href='#!'>Terms of Use</a>
                </li>
              </ul>
            </div>
          </MDBCol>
          <MDBCol md='4'>
            <div className='thirdtitle'>
              <ul>
                <li className='social-media'>
                  <a href='#!'>Social Media</a>
                  <div>
                    <FaFacebook /> <FaInstagramSquare /> <FaTwitterSquare />
                  </div>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: MovieFlix{" "}
          <a href='https://www.mdbootstrap.com'></a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
