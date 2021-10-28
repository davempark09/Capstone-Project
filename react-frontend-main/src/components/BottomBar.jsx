import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBAnimation } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="unique-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <MDBAnimation type="tada" infinite duration="3s">
              <h5 className="title">Web Application Links</h5>
            </MDBAnimation>
            <ul>
              <li className="list-unstyled">
                <a href="/about-page">About App</a>
              </li>
              <li className="list-unstyled">
                <a href="/expenses">Entries List</a>
              </li>
              <li className="list-unstyled">
                <a href="/add-expenses">Add Entry</a>
              </li>
              <li className="list-unstyled">
                <a href="/contact-form">Contact Form</a>
              </li>
              <li className="list-unstyled">
                <a href="/user-login">User Login</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <MDBAnimation type="shake" infinite duration="3s">
              <h5 className="title">Social Media Links</h5>
            </MDBAnimation>
            <ul>
              <li className="list-unstyled">
                <a href="https://twitter.com/?lang=en">Twitter <i class="fab fa-twitter"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/">Facebook <i class="fab fa-facebook"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.snapchat.com/">Snapchat <i class="fab fa-snapchat-ghost"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/">Instagram <i class="fab fa-instagram"></i></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <MDBAnimation type="bounce" infinite duration="1s">
            &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/davempark09"> DavidPark Inc. </a>
          </MDBAnimation>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;