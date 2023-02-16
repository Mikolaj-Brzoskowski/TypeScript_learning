import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    return ( 
      <footer>
        <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1' href='' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Mikolaj-Brzoskowski' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol md='4' className='mb-3 mb-md-0'>
              <h5 className='text-uppercase'>Features</h5>
              
            <ListGroup variant="flush">
              <Link to="/journal"><ListGroup.Item variant="dark">Dreams Journal</ListGroup.Item></Link>
              <Link to="/music"><ListGroup.Item variant="dark">Music</ListGroup.Item></Link>
              <Link to="/summary"><ListGroup.Item variant="dark">Sleep Summary</ListGroup.Item></Link>
            </ListGroup>

            </MDBCol>

            <MDBCol md='4' className='mb-3 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol md='4' className='mb-3 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Drimiral.com
      </div>

    </MDBFooter>
    </footer>
    );
}

export default Footer;