import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { MDBAnimation } from "mdbreact";

const NavStuff = (props) => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="info" light>
        <NavbarBrand href="/" className="navBrand">
        <MDBAnimation type="zoomIn" duration="3s" delay="0s">
            <b>Money Management Application</b>
        </MDBAnimation>
          </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="navTog" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
                <NavLink href="/"><b>Homepage</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/expenses"><b>Entries List</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/add-expenses"><b>Add Entry</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="contact-form"><b>Contact Form</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/user-login"><b>User Login</b></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavStuff;