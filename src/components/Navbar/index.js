import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { Button } from '@mui/material'

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
              <NavLinks to="financiamento">Financiamento</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="simulacoes">Simulações</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="transparencia">Transparência</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="solucoes">Soluções</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ajuda">Ajuda</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="cadastro">Cadastre-se</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Button component={Link} to="/entrar" color='success' variant='contained'>Entrar</Button>
          </NavBtn>
        </NavbarContainer>
      </Nav>


    </>
  )
}

export default Navbar
