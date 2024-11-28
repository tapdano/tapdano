import './home.css'

import Header from '../../Components/Header/Header'
import CaseStudySlide from '../../Components/CaseStudySlide/CaseStudySlide'
import CaseUseSlide from '../../Components/CaseUseSlide/CaseUseSlide'
import LeaderCard from '../../Components/LeaderCard/LeaderCard'
import SphereRenderer from '../../Components/Sphere/Sphere'
import Footer from '../../Components/Footer/Footer'

import thiagoPhoto from '../../assets/images/thiagoPhoto.jpg'
import lucasPhoto from '../../assets/images/lucasPhoto.jpg'
import projectCatalystLogo from '../../assets/svg/projectCatalystLogo.svg'
import encryption from '../../assets/images/encryption.png'
import WhoFundInfo from '../../Components/WhoFundInfo/WhoFundInfo'

function Home() {

  return (
    <>
      <Header/>

      <section className='stripe'>
        <a href="https://cardano.ideascale.com/c/cardano/idea/134529" target="_blank" className='branco'>VOTE FOR US -  CLICK HE TO SEE OUR FUND 13 PROPOSAL</a>
      </section>

      <main className='container hero-home'>
        <iframe width="560" height="315" src="https://youtu.be/GacSn2CCE80" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </main>

      <section className='openSource container'>
        <div className="openSourceContent">
          <h1 className='title-1 gradient-title'>Open-source development tools</h1>
          <p className='text-1'>We create tools that simplify the development of applications using NFC and NFT technologies such as NFC wallets and physical product authentication. TapDano is a project funded by the <span>Cardano Catalyst Fund 10.</span></p>
          <a href="#caseStudy" className='button'>Explore Use Cases</a>
        </div>
      </section>

      <section className='soulBound-bg'>
        <div className="soulBoundContent container">
          <p className='complement'>DISCOVER OUR</p>
          <h2 className='title-1'>Soulbound technology</h2>
          <p className='text-1'>The first unclonable  NFC Soulbound with a NFT built using only the Cardano Blockchain</p>
        </div>
      </section>

      <section className='caseStudy' id='caseStudy'>
        <h2 className='title-1 gradient-title container'>Case Study</h2>
        <div className="caseStudySlide container">
          <CaseStudySlide/>
        </div>
      </section>

      <section>
        <CaseUseSlide/>
      </section>

      <section className='projectLeaders container'>
        <h2 className='title-1 gradient-title'>Project Leaders</h2>
        <div className="containerLeaderCards">

          <LeaderCard
            role="BUSINESS DIRECTOR" 
            name="Thiago Nunes"
            photoSrc={thiagoPhoto}
            bio={`
            Cardano Ambassador | Pioneer Cardano Stakepool Operator at OUROS | Intersect | Director at Cardano Warriors
            \n
            Tech entrepreneur and a business strategist. Has a strong desire to deep dive into technological challenges, blockchain has been his favorite for over 10 years. An idealist and libertarian with a blockchain mindset. `}
          />
          
          <LeaderCard
            role="TECHNOLOGY DIRECTOR"
            name="Lucas Boemeke"
            photoSrc={lucasPhoto}
            bio="A seasoned tech innovator with expertise in software development, security, and blockchain, excelling in problem-solving and serverless solutions. He values autonomy and creative freedom, making him an ideal tech leader or co-founder."
          />

        </div>

      </section>

      <section className='whoFundUs-bg'>
        <div className="whoFundUs container">

          <div className="whoFundContent">
            <div className="whoFundImage">
              <p className='text-2 branco'>WHO FUNDS US</p>
              <img src={projectCatalystLogo} alt="Project Catalyst Logo" />
            </div>
            <div className="whoFundText">
              <h2 className='title-1 gradient-title'>Ideas. <br /> Innovation. <br /> Impact.</h2>
              <p className='text-1'>Project Catalyst is the world’s largest decentralized innovation engine for solving real-world challenges.</p>
            </div>
          </div>

          <div className="whoFundInfos">

            <WhoFundInfo
              title="$100M+"
              description="Total funding"
            />

            <WhoFundInfo
              title="1892"
              description="Proposals funded"
            />

            <WhoFundInfo
              title="69K+"
              description="Members"
            />

          </div>
        </div>
      </section>

      <section className='benefits container'>
        <h2 className='title-1 gradient-title'>The future is already here. Experience it.</h2>
        <div className="benefitsContent">

          <div className="benefitsCard benefitsCard-1">
            <p className='text-2 branco'>HAVE MORE ACCOUNTABILITY</p>
            <div className="benefitsCardImg">
              <img src={encryption} alt="Cadeado Metalico" />
            </div>
            <h3 className='title-1 gradient-title'>Stop worrying about security</h3>
            <p className='text-1'>Every signature, access, transaction, verification, vote or data is registered in the Cardano Blockchain with a physical NFC that verifys it. <br /> <br />
            That guarantees that your company’s processes are verifiable and immutable.</p>
          </div>
          
          <div className="benefitsCard benefitsCard-2">
            <p className='text-2 branco'>CREATE FOREVER APPLICATIONS </p>
            <h4 className='gradient-title'>Implement something that lasts for decades</h4>
            <p className='text-1'>And requires less maintnance.</p>
          </div>
          <div className="benefitsCard benefitsCard-3">
            <p className='text-2 branco'>HAVE MORE  TRANSPARENCY</p>
            <h4 className='gradient-title'>Make it incorruptible</h4>
            <p className='text-1'>When data is both immutable, transparent and verifiable. Corruption becomes way less likely.</p>
          </div>

        </div>
      </section>

      <section className='comunity container'>
        <div className='comunityContent'>
          <h2 className='title-1 gradient-title'>Meet our community.</h2>
          <p className='text-1'>Join a worldwide community of developers and innovators and help build the bridge between Physical and Digital products</p>
          <a href="https://discord.gg/ny9VkdSTBg" target="_blank" className='button'>Discord Server</a>
        </div>
        <div className='comunitySphere'>
          <SphereRenderer/>
        </div>
      </section>   

      <section className='newslatter container' style={{ display: 'none' }}>
        <div className="newslatterText">
          <h2 className='title-2'>Receive our updates</h2>
          <p className='text-2'>We will inform you of any future lauches</p>
        </div>

        <form action="">
          <input type="text" placeholder='Your email'/>
          <button className='button'>Subscribe</button>
        </form>
      </section>

      <Footer/>
    </>
  )
}

export default Home