import logo from '../../assets/svg/logo.svg'
import './footer.css'

function Footer() {

  return (
    <>
        <footer className='container'>
            <div className='footer-border'></div>
            <img src={logo} width={74} alt="Logo Tapdano" draggable="false" />
        </footer>
    </>
  )
}

export default Footer