import React from "react";
import phone from "../../recource/img/phone.png";
import newPhone from "../../recource/img/Apple.jpg";
import silver from "../../recource/img/silver.jpg";
import purple from "../../recource/img/purple.jpg";
import gold from "../../recource/img/gold.jpg";
import black from "../../recource/img/black.jpg";
import contact from "../../recource/img/contacts.jpg";
export const MainPhone = () => {

    const handleClick =(e)=>{
        e.preventDefault(console.log('click'));
      }
  return (
    <div className="main">
      <section className="headline">
        <div className="container">
          <h1 className="title">IPHONE 14 PRO</h1>
          <img className="headline-img" src={phone} />
        </div>
      </section>
      <section className="new">
        <div className="container">
          <h2 className="new-title">WHAT'S NEWS</h2>
          <div className="new-info">
            <div className="new-text">
              <p>
                Все модели оснащены однокристальной системой A16 Bionic,
                48-мегапиксельной основной камерой и экранами ProMotion с
                защитой Ceramic Shield и частотным диапазоном 1 — 120 Гц, а
                также ускоренной памятью LPDDR5. Дизайн линейки обновлен, на
                фронтальной панели смартфонов два выреза.{" "}
              </p>
              <p>
                Все iPhone 14 в США будут продаваться без лотка для SIM-карт:
                производитель заявляет, что улучшенная технология eSIM позволит
                перенести старые электронные сим-карты на новые смартфоны.
              </p>
              <p>
                Обновлены фронтальная камера (она снабжена автофокусом и быстрее
                распознает пользователя в условиях недостаточной освещенности) и
                сенсор основной камеры.
              </p>
              <b>
                iPhone 14 Pro вышел в новом дизайне — без фирменной «челки».
                Также в ассортименте появился новый цвет. В смартфоне, в отличие
                от «обычных» 14-х айфонов, установлен процессор A16 Bionic,
                который может за секунду производить 4 трлн операций с фото.
              </b>
            </div>
            <img className="new-img" src={newPhone} alt='iphone'/>
          </div>
        </div>
      </section>

      <section className="color">
        <div className="container">
            <h2 className="color-title">CHOOSE YOUR COLOR</h2>
            <ul className="color-list">
                <li className="color-item">
                    <img src={silver} alt='phones'/>
                    <h3>Silver</h3>
                    <p>Silver</p>
                </li>
                <li className="color-item">
                    <img src={purple} alt='phones'/>
                    <h3>Purple</h3>
                    <p>Purple</p>
                </li>
                <li className="color-item">
                    <img src={gold} alt='phones'/>
                    <h3>Gold</h3>
                    <p>Gold</p>
                </li>
                <li className="color-item">
                    <img src={black} alt='phones'/>
                    <h3>Black</h3>
                    <p>Black</p>
                </li>
            </ul>
        </div>
      </section>
      <section className="contacts">
        <div className="container">
            <div className="contacts-inner">
                <form action="#" className="contacts-form">
                    <h2 className="contacts-title"> Хочешь IPHONE 14 PRO?</h2>
                    <input className="contacts-input" type='text' placeholder="Your Name"/>
                    <input className="contacts-input" type='number' placeholder="Your number"/>
                    <p>We will call you</p>
                    <button type="submit" onClick={handleClick}>SEND</button>
                </form>
                <img className="contacts-img" src={contact} alt='phone'></img>
            </div>
        </div>
      </section>

    </div>
  );
};
