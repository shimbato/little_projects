import React from 'react'
import { CTA } from './CTA'
import "./header.css"
import Me from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header>
       <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Symbat Kali</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
            <img src={Me} alt="Me"/>
        </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
       
        </div>
    </header>
  )
}
