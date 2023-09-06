import React, { useState } from "react";

import logo from "../../recource/icon/Group.svg";



export const HeaderPhone = () => {

  const[open, setOpen] = useState(false)


  const handleClick =(e)=>{
    

    e.currentTarget.classList.toggle('menu-open')
   // для замены класса в стиле 

   // const btn = document.querySelector('.menu-btn');
   // const nav = document.querySelector('.nav');

   // btn.addEventListener('click', ()=> {
   //   nav.classList.toggle('menu-open')
   // })

  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav" onClick={handleClick}>
          <button className="menu-btn" type="button"  >
            <span className="btn-line"></span>
            <span className="btn-line"></span>
            <span className="btn-line"></span>
            <span className="btn-line"></span>
          </button>
          <ul className="menu">
            <li className="menu-item">
              <a className="menu-link" href="#">
                Что нового
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="#">
                Цвет
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="#">
                Заказать
              </a>
            </li>
          </ul>

          <a className="logo">
            <img className="logo-img" src={logo} alt="logo" />
          </a>

          <a className="phone" href="tel:380504565656">
          +38 050-456-56-56
          </a>
        </nav>
      </div>
    </header>
  );
};
