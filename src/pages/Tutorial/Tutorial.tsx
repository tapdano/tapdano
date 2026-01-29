import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './tutorial.css'

function Tutorial() {
  return (
    <>
      <Header />

      <section className='tutorialHero container'>
        <h1 className='title-1 gradient-title'>Tutorials</h1>
        <p className='text-1'>
          Learn how to use TapDano with our step-by-step video guides.
          Master the essentials and unlock the full potential of secure NFC authentication.
        </p>
      </section>

      <section className='tutorialVideos container'>
        <div className='tutorialGrid'>

          <div className='tutorialCard'>
            <video
              src="https://tapdano-public.s3.sa-east-1.amazonaws.com/tutorial-password.mp4"
              controls
              playsInline
              preload="metadata"
            />
            <div className='tutorialCardContent'>
              <span className='tutorialCardBadge'>Tutorial</span>
              <h2 className='gradient-title'>Password</h2>
              <p>
                Learn how to set up and manage your TapDano password for secure authentication and access control.
              </p>
            </div>
          </div>

          <div className='tutorialCard'>
            <video
              src="https://tapdano-public.s3.sa-east-1.amazonaws.com/tutorial-seedvault.mp4"
              controls
              playsInline
              preload="metadata"
            />
            <div className='tutorialCardContent'>
              <span className='tutorialCardBadge'>Tutorial</span>
              <h2 className='gradient-title'>Seed Vault</h2>
              <p>
                Discover how to securely store and recover your seed phrase using the Seed Vault feature.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Tutorial
