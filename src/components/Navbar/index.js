import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">FINANÇAS</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">FINANCIAMENTO</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">SIMULAÇÕES</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">TRANSPARÊNCIA</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">SOLUÇÕES</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">AJUDA</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">CADASTRE-SE</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/entrar">ENTRAR</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>


    </>
  )
}

export default Navbar
