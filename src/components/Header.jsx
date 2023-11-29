import React from 'react'
import { Container } from 'react-bootstrap'
import { Image } from "react-bootstrap"
import logo from "../assets/nba-logo.png"

const Header = () => {
  return (
   <Container>
    <Image src={logo} width="200px" />
    <h1 className='my-2'>NBA <span>LEGENDS</span></h1>
   </Container>
  )
}

export default Header