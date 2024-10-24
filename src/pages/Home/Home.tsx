import './home.css'
import logo from '../../logo.svg'
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
    </>
  )
}

export default Home