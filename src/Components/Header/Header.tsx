import logo from '../../assets/logo.svg'

function Header() {
  return (
    <>
      <header>
        <nav className='container'>
            <div className='logoHeader'>
                <img src={logo} width={43.13} alt="Logo Tapdano" draggable="false" />
                <p className='textLogoTapdano'>tapdano</p>
            </div>

            <ul>
                <li><a href="#" className='branco'>Learn</a></li>
                <li><a href="#" className='branco'>Explore</a></li>
                <li><a href="#" className='branco'>Build</a></li>
            </ul>

            <button className='button'>Contact Us</button>
        </nav>
      </header>

      <style>{`
        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }
        .logoHeader{
            display: flex;
            align-items: center;
            gap: 12px
        }
        .logoHeader .textLogoTapdano{
            font-size: 35px;
            line-height: 40.22px;
            user-select: none;
        }
        nav ul{
            list-style: none;
            display: flex;
            gap: 80px;
        }
        nav ul a{
            text-decoration: none;
            font-weight: 500;
            font-size: 20px;
            line-height: 26.04px;
            transition: 0.3s
        }
        nav ul a:hover{
            color: #c9c9c9;
        }
        nav .button{
            padding: 8px 32px;
            border: none;
            outline: none;
        }
      `}</style>
    </>
  )
}

export default Header