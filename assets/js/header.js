import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const MenuItem = ({ link, text }) => {
  return (
    <a className="button-menu" href={link}>
      <div className="square-1-1-1">
        <div className="square-1-1">
          <div className="square-1">
            <div className="square">
              <span>{text}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const Menu = () => {
  const menuItems = [
    { link: '/home', text: 'Home' },
    { link: '/about', text: 'About' },
    { link: 'https://github.com/mozgovma', text: 'myGit' },
    { link: 'https://t.me/Goru_01', text: 'Contact' }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerIcon, setIsBurgerIcon] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsBurgerIcon(!isBurgerIcon);
  };

  return (
    <div className="Mainnavmenu">
      <div className="logo">
        <h1 className="Mainlogo">MY.<p className="Mainlogo-2">RESUME</p></h1>
      </div>
      <br />
      <div className='button'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} link={item.link} text={item.text} />
        ))}
      </div>
      <div id="burgerMenu">
        <button onClick={toggleMenu} className={`burger-menu-button ${isBurgerIcon ? 'burger' : 'close'}`}>
          {isBurgerIcon ? '☰' : '✕'}
        </button>
        <ul className={`menu-list ${isMenuOpen ? 'open' : 'close'}`}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} link={item.link} text={item.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  return <Menu />;
};

ReactDOM.render(<Header />, document.getElementById('root'));
