import React from "react"
import styled from "styled-components"
import { useNavigate, useLocation } from "react-router-dom"

const Container = styled.header`
  width: 100%;
  max-width: 1100px;
  min-height: 90px;

  background: rgba(142, 197, 252, 0.7);
  backdrop-filter: blur(10px);

  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 25px;
`

const Logo = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: white;
  letter-spacing: 1px;
`

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`

const NavItem = styled.button`
  background: ${(props) => (props.active ? "white" : "transparent")};
  color: ${(props) => (props.active ? "#5a9bd5" : "white")};

  border: none;
  padding: 8px 14px;
  border-radius: 10px;

  font-size: 17px;
  font-weight: 600;
  cursor: pointer;

  transition: 0.25s ease;

  &:hover {
    background: white;
    color: #5a9bd5;
    transform: translateY(-2px);
  }
`

export default function Header(props) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Container>
      <Logo>{props.title}</Logo>

      <Nav>
        <NavItem
          active={location.pathname === "/"}
          onClick={() => navigate("/")}
        >
          Home
        </NavItem>

        <NavItem
          active={location.pathname === "/personal"}
          onClick={() => navigate("/personal")}
        >
          Personal
        </NavItem>

    
        <NavItem
          active={location.pathname === "/address"}
          onClick={() => navigate("/address")}
        >
          Address
        </NavItem>

        <NavItem
          active={location.pathname === "/finish"}
          onClick={() => navigate("/finish")}
        >
          Finish
        </NavItem>

      </Nav>
    </Container>
  )
}