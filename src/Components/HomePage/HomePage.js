import { faList, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import logo from '../../logo.svg'
import './HomePage.css';
import portfolio from '../images/portfolio.jpg';


const HomePage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [post, setPost] =useState([]);
    const [active, setActive] = useState("firstData")


    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    
    return (
        <div>
        <div className='row'>
            <div className='nav-align1 col-md-3'>
                <div className='nav-align2'>
                    <div className='sidenave-align row'>
                        <div className='col-md-2 sidenavs'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='sidenav2 col-md-6'>
                            <h6>Hi Readers,</h6>
                            <p>Here's your News!</p>
                        </div>

                    </div>
                </div>

                <div className='toggle-align'>
                    <h4>View Toggle</h4>
                    <div className=''>
                    <span style={{'borderRadius':'10px 0px 0px 10px'}}><FontAwesomeIcon onClick={() =>setActive("FirstData")} icon={faNewspaper} /></span>
                    
                    <span style={{'borderRadius':'0px 10px 10px 0px'}}><FontAwesomeIcon onClick={() => setActive("SecoundData")} icon={faList} /></span>
                    </div>
                </div>
                <div className='nav-align1'>
                <div className='feedback-button1'>
                <div className='feedback-button2'>
                    <h5>Have a Feedback?</h5>
                    <Button variant="primary" onClick={handleShow}>
                        we're Listening!
                    </Button>
                </div>
                </div>
                </div>
            </div>

            <div style={{ marginLeft: '30px' }}className='col-md-8'>
              
               
                <div className='row'>
                    
                
                {
                post.map(posts => (
                    <div className='col-md-4'>
                        {
                active === "FirstData" && <div className='card-align col-md-3'>
                <h5 style={{ fontSize: '15px' }}>{posts.title}</h5>
                <h6 style={{ fontSize: '13px' }}>{posts.body}</h6>
                <p style={{ fontSize: '11px', textAlign: 'center', marginBottom: '-1px' }}>Mon, 21 Dec 2020 14:57 GMT</p>
                <img src={portfolio} alt=""/>
                </div>
            }
                    </div>
                ))
            }
            </div >

                
            
                {
                post.map(posts => (
                    <div className='col-md-4'>
                        {
                active === "SecoundData" && <div className='card-align3'>
                    <div className='row'>
                        <div className='col-md-1'>
                        <img style={{ width: '60px', marginTop: '30px', borderRadius: '50%' }} src={logo} alt=""/>
                            
                        </div>
                        <div className='col-md-11'>
                        <h5>{posts.title}</h5>
                <h6>{posts.body}</h6>
                <p>Mon, 21 Dec 2020 14:57 GMT</p>
                        </div>
                        
                    </div>
                
                
                </div>
            }
                    </div>
                ))
            }

            

        <div className='row'>
        {
                post.map(posts => (
                    <div className='card-align2 col-md-4'>
                        <h5>{posts.title}</h5>
                <h6>{posts.body}</h6>
                <p>Mon, 21 Dec 2020 14:57 GMT</p>
                <img src={portfolio} alt=""/>
                    </div>
                ))
            }
        </div>











            </div>
        </div>

        <>

      <Offcanvas className="sidebar-align" show={show} onHide={handleClose}>
          <div className="sidebar-align2">
              <br/>

        <div className='row'>
            <div className='col-md-5'>
            <div className='body-align'>
          <div>
          <div className='nav-align2'>
                    <div className='sidenave-align row'>
                        <div className='col-md-2 sidenavs'>
                            <img src={portfolio} alt="" />
                        </div>




                        <div className='sidenav2 col-md-7'>
                            <h6>Hi Readers,</h6>
                            <p>Here's your News!</p>
                        </div>

                    </div>
                </div>
          <div className='nav-align1'>
                <div className='feedback-button1'>
                <div className='feedback-button2'>
                    <h5>Have a Feedback?</h5>
                    <Button variant="primary" onClick={handleClose}>
                        we're Listening!
                    </Button>
                </div>
                </div>
                </div>
          </div>

        </div>
                
            </div>
            <div className='details-align col-md-5'>
                <h4>Thank You so much for taking the time</h4>
                <p>Please provide the below details!</p>
                <br/>
                <p>First Name:</p>
                <input type="text" placeholder='John' name="" value=""/>

                <p>Last Name:</p>
                <input type="text" placeholder='Doe' name="" value=""/>

                <div className='address-align'>
                <p>Address:</p>
                <input type="address" placeholder='Enter your full postal address' name="" value=""/>
                </div>

                <div className='country-align'>
                <p>Country:</p>
                <input type="country" placeholder='India' name="" value=""/>
                </div>

                <p>Email ID:</p>
                <input type="email" placeholder='example@sample.com' name="" value=""/>
                <div>
                    <span><p>Phone Number:</p>
                <input style={{ width: '50px' }} type="number" placeholder='+91' name="" value="" required/> <span/>
                <input style={{ width: '131px' }} type="number" placeholder='123456789' name="" value="" required/></span>
                </div>
                <button style={{ marginTop: '18px' }} className='btn btn-success' type="">Submit Feedback</button>
            </div>
        </div>
        </div>
      </Offcanvas>
    </>
        </div>
    );
};

export default HomePage;