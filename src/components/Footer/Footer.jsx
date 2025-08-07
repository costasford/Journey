import './Footer.css';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function Footer (){
  return (
    <MDBFooter id="footer" className='text-center' color='white' bgColor='dark'>
    <MDBContainer className='p-4'>
      <section className='mb-4'>
         <a className='btn btn-outline-light btn-floating m-1' href="mailto: costa@example.com" role='button'>
          <MDBIcon fab icon='google' />
        </a>
        <a className='btn btn-outline-light btn-floating m-1' href='https://instagram.com/costasford' target='_blank' rel='noopener noreferrer' role='button'>
          <MDBIcon fab icon='instagram' />
        </a>
        <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/in/costasford/' target='_blank' rel='noopener noreferrer' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </a>
        <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/costasford' target='_blank' rel='noopener noreferrer' role='button'>
          <MDBIcon fab icon='github' />
        </a>
      </section>

      <section className=''>
        <form action=''>
          <div className='row d-flex justify-content-center'>
            <div className='col-auto'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter!</strong>
              </p>
            </div>

            <MDBCol md='5' start='12'>
              <MDBInput contrast type='email' label='Email address' className='mb-4' />
            </MDBCol>

            <div className='col-auto'>
              <MDBBtn outline color='light' type='submit' className='mb-4'>
                Subscribe
              </MDBBtn>
            </div>
          </div>
        </form>
      </section>

      <section className='mb-4'>
        <p>
          Listed below are helpful external organizations that give you a better understanding of applied behavior analysis (ABA) and what steps you can take to help your loved ones. These websites include helpful articles, steps to seeking ABA therapy, and at home training and plans. 
        </p>
      </section>

      <section className=''>
        <MDBRow>
          <MDBCol md='4' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Autism Speaks</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://www.autismspeaks.org/what-autism' className='text-white'>
                  What Is Autism?
                </a>
              </li>
              <li>
                <a href='https://www.autismspeaks.org/events' className='text-white'>
                  Events
                </a>
              </li>
              <li>
                <a href='https://www.autismspeaks.org/autism-help-and-information' className='text-white'>
                  Help And Information
                </a>
              </li>
              <li>
                <a href='https://www.autismspeaks.org/que-es-el-autismo-espanol' className='text-white'>
                  Que Es El Autismo?
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md='4' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>ABAI</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://www.abainternational.org/welcome.aspx' className='text-white'>
                  Autism International
                </a>
              </li>
              <li>
                <a href='https://www.abainternational.org/about-us.aspx' className='text-white'>
                  About Us
                </a>
              </li>
              <li>
                <a href='https://www.abainternational.org/events.aspx' className='text-white'>
                  Events
                </a>
              </li>
              <li>
                <a href='https://www.abainternational.org/higher-education.aspx' className='text-white'>
                  Higher Education
                </a>
              </li>
            </ul>
          </MDBCol>

          {/* <MDBCol md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Helpful Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://www.disabilityrightsca.org/publications/access-to-aba-therapy' className='text-white'>
                  Access to ABA Therapy (CA)
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
          </MDBCol> */}

          <MDBCol md='4' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Articles</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://www.verywellhealth.com/aba-applied-behavioral-analysis-therapy-autism-259913' className='text-white'>
                  What is ABA Therapy?
                </a>
              </li>
              <li>
                <a href='https://www.healthline.com/health/aba-therapy' className='text-white'>
                  Is ABA right for your child?
                </a>
              </li>
              <li>
                <a href='https://www.healthcentral.com/article/pros-and-cons-of-applied-behavior-analysis-aba' className='text-white'>
                  Pros and Cons of ABA
                </a>
              </li>
              <li>
                <a href='https://www.autismparentingmagazine.com/aba-therapy-for-autism/' className='text-white'>
                  Parents Magazine
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2024 Copyright: 
      <a className='text-white' href='https://costasford.github.io/Journey'>
        Journey ABA Tracker
      </a>
    </div>
  </MDBFooter>
  )
}