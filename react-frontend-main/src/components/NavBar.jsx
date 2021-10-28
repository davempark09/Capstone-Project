import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavStuff = (props) => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="info" light>
        <NavbarBrand href="/" className="navBrand">Money Management Application</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="navTog" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Homepage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/expenses">Entries List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/add-expenses">Add Entry</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="contact-form">Contact Form</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/user-login">User Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavStuff;