import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const menuItems = ['home', 'about', 'work', 'experiences', 'skills', 'contact']


  useEffect(() => {
    const handleScroll = (e) => {
      const scrollY = window.scrollY
      const menuItems = ['home', 'about', 'work', 'experiences', 'skills', 'contact']

      if (scrollY >= 0 && scrollY <= window.innerHeight / 2) {
        setActive("home")
      } else {
        menuItems.forEach((current) => {
          const item = document.getElementById(current)
          const itemHeight = item.offsetHeight;
          const itemTop = item.offsetTop - 50;
          if (
            scrollY > itemTop &&
            scrollY <= itemTop + itemHeight
          ) {
            setActive(current)
            return
          }
        })
      }
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href={"#home"}><img src={images.logo} alt="logo" /></a>
      </div>
      <ul className="app__navbar-links">
        {menuItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}
              style={active === item ? { color: '#313bac' } : {}}
            >{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'experiences', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}
                    style={active === item ? { color: '#313bac' } : {}}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
