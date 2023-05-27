import React, { Component } from 'react';

import { FiX, FiMenu } from 'react-icons/fi';
import Scrollspy from 'react-scrollspy';
import movieLogo from '../assets/images/logo/logo-symbol-dark.png';
function HeaderThree({ logo, color = 'default-color', homeLink }) {
  const menuTrigger = () => {
    document.querySelector('.header-wrapper').classList.toggle('menu-open');
  };
  const CLoseMenuTrigger = () => {
    document.querySelector('.header-wrapper').classList.remove('menu-open');
  };

  const stickyHeader = () => {};

  window.addEventListener('load', function () {
    console.log('All assets are loaded');
  });

  window.addEventListener('scroll', function () {
    var value = window.scrollY;
    if (value > 100) {
      document.querySelector('.header--fixed').classList.add('sticky');
    } else {
      document.querySelector('.header--fixed').classList.remove('sticky');
    }
  });

  var elements = document.querySelectorAll('.has-droupdown > a');
  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector('.submenu').classList.toggle('active');
        this.classList.toggle('open');
      };
    }
  }

  let logoUrl;
  if (logo === 'light') {
    logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
  } else if (logo === 'dark') {
    logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
  } else if (logo === 'symbol-dark') {
    logoUrl = <img src={movieLogo} alt="Digital Agency" />;
  } else if (logo === 'symbol-light') {
    logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
  } else {
    logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
  }

  return (
    <header className={`header-area header-style-two header--fixed ${color}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <a href={homeLink}>{logoUrl}</a>
          </div>
          <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy className="mainmenu" items={['home', 'about', 'portfolio']} currentClassName="is-current" offset={-50}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
            </Scrollspy>
          </nav>
        </div>
        <div className="header-right">
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={CLoseMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderThree;
