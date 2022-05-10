import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useLocation  } from 'react-router-dom'
//style={active === item ? { backgroundColor: '#313BAC' } : {}}
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const menuItems = ['home', 'about', 'work', 'experiences','skills', 'contact']
  const location = useLocation();

  useEffect(() => {
    if(location.hash){
      setActive(location.hash.substring(1))
    } else {
      setActive("home")
    }
    console.log(active);
  }, [location])
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
