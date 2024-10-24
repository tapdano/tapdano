import './home.css'
import logo from '../../assets/logo.svg'
import Header from '../../components/Header/Header'

function Home() {

  return (
    <>
      <Header/>

      <main className='container'>
        <div className='logoMain'>
          <img src={logo} alt="Logo Tapdano" width={300}/>
          <p className='textLogoTapdano'>tapdano</p>
        </div>
        <p className='text gradient-text'>Simplifying the integration between NFC and NFT technologies in the <span >Cardano Blockchain</span></p>
      </main>

      <section className='openSource container'>
        <div className="openSourceContent">
          <h1 className='title gradient-title'>Open-source development tools</h1>
          <p className='text'>We create tools that simplify the development of applications using NFC and NFT technologies such as NFC wallets and physical product authentication. TapDano is a project funded by the <span>Cardano Catalyst Fund 10.</span></p>
          <a href="#" className='button'>Explore Use Cases</a>
        </div>
      </section>
    </>
  )
}

export default Home