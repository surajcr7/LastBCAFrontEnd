import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Footers() {
  return (
    <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Content</h5>

            <p style={{ textAlign:"justify" }}>
            Explore our vibrant marketplace where farmers and buyers come together to cultivate a thriving community of agriculture-based commerce.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>SELL WITH US</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                Become a Vendor
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                Vendor FAQ
                </a>
              </li>
              {/* <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li> */}
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>SUPPORT</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                Contact Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                FAQ
                </a>
              </li>
              {/* <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li> */}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/' style={{ textDecoration: 'none' }}>
        🌞 Suraj Poudel 🌙
        </a>
      </div>
    </MDBFooter>
  );
}