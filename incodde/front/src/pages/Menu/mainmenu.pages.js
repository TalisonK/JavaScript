import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from 'reactstrap';

export const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home">Coworking</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Mettings
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  create Metting
                </DropdownItem>
                <DropdownItem>
                  subscribe in Metting
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  List Mettings
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
			<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Workstations
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  create Workstations
                </DropdownItem>
                <DropdownItem>
                  subscribe in Workstations
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  List Workstations
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink href="/home/editProfile">Kenin</NavLink>
		  <span className="p"> | </span>
		  <NavLink href="/home/editProfile">Log out</NavLink>
        </Collapse>
      </Navbar>
	  <div>
	  <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
	  </div>
    </div>
  );
}