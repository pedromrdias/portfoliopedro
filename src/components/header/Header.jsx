import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Pedro Dias</h1>
        <h5 className="text-light">Application Security Engineer</h5>
        <CTA />
        <HeaderSocial />
        <a href="#contact" classname='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}


export default Header