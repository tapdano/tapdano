import './proposal.css'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

import proposalImage from '../../assets/images/proposal-image.jpg';

function Proposal() {

  return (
    <>
        <Header/>

        <section className="banner-bg">
            <div className="banner-content container">
                <div className="banner-text">
                    <p className='complement'>CATALYST PROPOSAL</p>
                    <h1 className='title-1 gradient-title'>
                        Fortune 500 Petrobras & Cardano
                    </h1>                
                </div>
            </div>
        </section>

        <section className="project-overview container">
            <div className="problem-solution">
                <div className="problem text-1">
                    <h2 className='title-1'>Problem</h2>
                    <p><span className='text-highlight'>Enterprises like Petrobras struggle to adopt blockchain</span> due to bureaucracy, compliance, security challenges and education, hindering Cardano's integration into large corporate environments.</p>
                </div>
                <div className="solution">
                    <div className="solution-texts text-1">
                        <h2 className='title-1'>Solution</h2>
                        <p>Work with Petrobras to <span className='text-highlight'>create</span> compliant <span className='text-highlight'>Cardano blockchain solutions</span>, overcoming bureaucracy, security hurdles, enabling corporate adoption facilitating user experience through custom applications.</p>
                    </div>
                    <div className="solution-links text-1">
                        <p>GitHub: <a href="https://github.com/tapdano/applet" className='branco'>https://github.com/tapdano/applet</a></p>
                        <p>Petrobras: <a href="https://petrobras.com.br" className='branco'>https://petrobras.com.br</a></p>
                    </div>
                </div>
            </div>
            <div className="details">
                <div>
                    <h2 className='title-1'>Details</h2>
                    <p className='text-1'>Cardano Partners: <span className='text-highlight'>Enterprise R&D</span></p>
                </div>
                <div className='text-1'>
                    <p>Main Applicant: <b>Thiago Nunes</b></p>
                    <p>Delivery by: <b>Entity (not incorporated)</b></p>
                </div>
                <div className='text-1'>
                    <p>Requested funds: <span className='text-highlight'>2 000 000</span></p>
                    <p>DeDuration: <span className='text-highlight'>12 months</span></p>
                </div>
                <p className='text-1'>No dependencies  on other organizations</p>
                <div className='text-1'>
                    <h3 className='text-highlight azul'>Fully open source project</h3>
                    <p>Open source status of project outputs:</p>
                    <p><b>MIT License</b></p>
                </div>
                <p className='text-1'>Horizons: <b>Authentication</b></p>
            </div>
        </section>

        <section className="proposal container text-1">
            <h2 className='title-1'>Proposal</h2>
            <p>
                <span className='text-highlight'>Petrobras</span>, one of the largest energy companies in the world with <span className='text-highlight'>annual revenues exceeding $100 billion</span> , is a strategic player in the global energy market and holds a dominant position in Brazil and Latin America. Its engagement with blockchain technology marks a pivotal step in the corporate adoption of this innovation, especially in Latin America.
            </p>

            <p>
                The first contact between Petrobras and the Cardano ecosystem began in 2022 during the Cardano Rio event. In 2023 Thiago Nunes introduced Petrobras to Rafael Fraga from the Cardano Foundation. <span className='text-highlight'>The joint efforts resulted in the launch of the Petrobras UP Cardano Academy</span>, a large-scale blockchain educational initiative aimed to be part of the oil and gas state owned company as <span className='text-highlight'>its official internal course for all 40,000 Petrobras employees.</span>
            </p>

            <p>
                <span className='azul text-highlight'>Petrobras's collaboration with Cardano has significantly impacted the platform's visibility across Latin America</span>, particularly drawing attention in Brazil, Paraguay and Argentina. The ongoing work with Petrobras has opened crucial reputational doors in the region, positioning Cardano for potential partnerships with other major corporations and nations.
            </p>

            <p>
                The journey to integrate Petrobras into the Cardano ecosystem has been a long process, requiring years of dedication and effort—and it will continue to require time to fully realize its potential. Identifying strategic opportunities and navigating the required pathways is essential to achieving success. This partnership establishes a precedent, demonstrating how large corporations in Latin America can engage with Cardano and blockchain technology.
            </p>

            <p>
                We recognize that large enterprises like Petrobras face significant challenges when adopting blockchain technology due to bureaucratic hurdles, compliance requirements, and security concerns—particularly around the custody of private keys and secure use of decentralized applications (dApps) by employees. These issues impede the integration of Cardano's blockchain solutions into corporate environments, limiting the platform's potential impact and adoption at scale.
            </p>

            <div className="proposal-image-content">
                <div className='proposal-image'>
                    <img src={proposalImage} alt="TapDano Cards"/>
                </div>
                <div className='proposal-text'>
                    <p>
                        <span className='text-highlight'>What makes our solution unique is the combination of TapDano's expertise in secure smart card technology and the robust, scalable infrastructure of the Cardano blockchain</span>. By ensuring that private keys are stored securely on NFC cards without ever leaving the device, we directly address critical security concerns that are paramount for enterprise adoption.
                    </p>
                </div>
            </div>

            <p>
                Successfully integrating Cardano's technology within a global energy leader like Petrobras will enhance the platform's visibility in the corporate sector, open doors for future partnerships with other industry giants, and accelerate adoption, driving innovation and growth within the Cardano ecosystem.
            </p>

            <p>
                To address this problem, we propose a strategic technical collaboration between TapDano and Petrobras to develop secure, compliant, and scalable blockchain solutions tailored to the needs of large enterprises.
            </p>
        </section>
        
        <Footer/>
    </>
  )
}

export default Proposal