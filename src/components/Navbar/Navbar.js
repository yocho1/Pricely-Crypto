import React from 'react'
import { IconContext } from 'react-icons/lib'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.elements'

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              Pricely
            </NavLogo>
            <MobileIcon></MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='/'>Alerts</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/pricing'>Pricing</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/privacy'>Privacy</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact'>Contacts</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
