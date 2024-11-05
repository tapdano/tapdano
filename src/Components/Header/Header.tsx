import { useRef, useState } from 'react';
import logo from '../../assets/svg/logo.svg'
import './header.css'

function Header() {

  const [isNavActive, setIsNavActive] = useState(false);
  const hamburguerRef = useRef(null);

  const toggleNav = () => {
      setIsNavActive(!isNavActive);
  };

  return (
    <>
      <header>
        <nav className={`nav container ${isNavActive ? 'active' : ''}`}>
            <div className='logoHeader'>
                <img src={logo} width={43.13} alt="Logo Tapdano" draggable="false" />
                <p className='textLogoTapdano'>tapdano</p>
            </div>
            <button 
                    className='hamburguer'
                    onClick={toggleNav}
                    ref={hamburguerRef}
            ></button>
            <ul className='navList'>
                <li><a href="https://github.com/tapdano" target="_blank" className='branco'>Learn</a></li>
                <li><a href="https://github.com/tapdano" target="_blank" className='branco'>Explore</a></li>
                <li><a href="https://github.com/tapdano" target="_blank" className='branco'>Build</a></li>
                {isNavActive && (
              <li>
                <a className='button' href='mailto:boemeke@tapdano.com'>Contact Us</a>
              </li>
            )}
          </ul>
          {!isNavActive && <a className='button contact-us' href='mailto:boemeke@tapdano.com'>Contact Us</a>}
        </nav>
      </header>
    </>
  )
}

export default Header