import './proposal.css'

import { Link } from 'react-router-dom';
import UseCases from '../../Components/UseCases/UseCases';
import LeaderCard from '../../Components/LeaderCard/LeaderCard';
import Footer from '../../Components/Footer/Footer'

import logo from '../../assets/svg/logo.svg'
import fundsIcon from '../../assets/images/funds.png';
import proposalImage from '../../assets/images/proposal-image.jpg';
import proofConcept from  '../../assets/images/proofConcept.jpg';
import gallery1 from '../../assets/images/gallery/image-gallery1.jpg';
import gallery2 from '../../assets/images/gallery/image-gallery2.jpg';
import gallery3 from '../../assets/images/gallery/image-galerry3.jpg';
import gallery4 from '../../assets/images/gallery/image-gallery4.jpg';
import expamdLab from '../../assets/images/petrobrasExpamdLab.jpg';
import corporateBadges from '../../assets/svg/useCases/corporateBadges.svg'
import votingSystem from '../../assets/svg/useCases/votingSystem.svg'
import certificates from '../../assets/svg/useCases/certificates.svg'
import petrobrasLogo from '../../assets/images/companysLogo/petrobrasLogo.png';
import tapdanoLogo from  '../../assets/images/companysLogo/tapdanoLogo.png';
import cardanoLogo from  '../../assets/images/companysLogo/cardanoLogo.png';
import thiagoPhoto from '../../assets/images/thiagoPhoto.jpg'
import lucasPhoto from '../../assets/images/lucasPhoto.jpg'
import budgetAndCosts from '../../assets/images/budgetAndCosts.jpg'

function Proposal() {

  return (
    <>
        <header>
            <nav className='nav container'>
                <div className='logoHeader'>
                    <img src={logo} width={43.13} alt="Logo Tapdano" draggable="false" />
                    <p className='textLogoTapdano'>tapdano</p>
                </div>
                <Link to="/" className='button'>Home</Link>
            </nav>
        </header>

        <section className='container hero-proposal'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yyBN4hGU-uc?si=ZBXYW1gELiCThimg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>

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
                    <div className="requestfund">
                        <p>Requested funds: <span className='text-highlight'>2 000 000</span></p>
                        <img src={fundsIcon} alt="Funds icon" />
                    </div>
                    <p>Duration: <span className='text-highlight'>12 months</span></p>
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
        
        <section className="proofConcept container text-1">
            <div className="proofConceptHeader">
                <div className="proofConcept-text">
                    <h2 className='title-3'>Proof of Concept</h2>
                    <p>
                        On the scope of the partnership between Cardano Foundation and Petrobras, TapDano developed a proof of concept, <span className='text-highlight'>Proof of Attendance solution implemented at Petrobras's ExpamdLAB 2024 event</span>. Participants could, by tapping their mobile phones near a kiosk equipped with a smart card using TapDano's firmware, request their proof of participation in the event and receive an exclusive NFT bounded to a specific NFC and a certificate of attendance tailored for the event in their registered emails. <span className='text-highlight azul'>This was Petrobras's first use of Cardano's mainnet</span>, highlighting the platform's ability to meet the demands of large corporations.
                    </p>
                </div>
                <div className='proofConcept-image'>
                    <img src={proofConcept} alt="Proof Concept"/>
                </div>
            </div>

            <div className="proofConcept-gallery">
                <img src={gallery1} alt="Gallery 1"/>
                <img src={gallery2} alt="Gallery 2"/>
                <img src={gallery3} alt="Gallery 3"/>
                <img src={gallery4} alt="Gallery 4" className='image-gallery4'/>   
            </div>

            <img src={expamdLab} alt="Petrobras Expamd Lab" />

            <p>
                Our approach involves expanding the use cases upon the successful implementation of our Proof of Attendance solution at Petrobras's ExpamdLAB 2024 event. This will serve as a foundation for exploring and leading to <span className='text-highlight'>additional use cases</span> in the future, including:
            </p>

            <div className="useCasesContainer">
                <UseCases 
                    img={corporateBadges}
                    title='Corporate Badges'
                    text='Integrating NFC smart cards (JavaCard technology) for secure employee authentication and access control, ensuring private keys are securely stored and never leave the device.'
                />
                <UseCases 
                    img={votingSystem}
                    title='Voting System'
                    text='Developing a secure and transparent blockchain-based system for participation in corporate decisions, improving governance and stakeholder engagement.'
                />
                <UseCases 
                    img={certificates}
                    title='Course Certificates'
                    text='Issuing immutable and verifiable digital certificates on the Cardano blockchain to enhance trust and transparency in employee training and development programs.'
                />

           
            </div>

            <p>
                Our project will engage Petrobras's employees, stakeholders, and event participants, providing them with hands-on experience using <span className='text-highlight'>blockchain technology in a secure and user-friendly manner.</span>
            </p>

            <p>
                By collaborating closely with Petrobras, we aim to navigate bureaucratic and compliance challenges effectively, customizing our solutions to meet regulatory requirements and habilitating internal policies.
            </p>

            <p className='text-highlight azul'>
                At the end of this project, we expect Petrobras to use Cardano mainnet in compliance with their needs and adopt TapDano technology to solve their problems.
            </p>

            <p>
                For TapDano this opportunity also represents a way to refine our product and platform, having Petrobras as a design partner. Furthermore, our development will be 100% open-source.
            </p>
        </section>

        <section className="positiveImpact container text-1">
            <div>
                <h2 className='title-1'>Positive impact</h2>
                <p className='text-highlight'>
                    Our project positively impacts the wider Cardano community by demonstrating the blockchain's viability and effectiveness within a large corporate environment.
                </p>
            </div>

            <p>
                This partnership will showcase the scalability, security, and compliance of Cardano's blockchain solutions, enhancing its appeal and credibility among large enterprises. By developing one of the applications such as secure corporate badges, immutable certificates, or transparent voting systems, we’ll diversify Cardano’s use cases, fostering ecosystem growth and opening new opportunities.
            </p>

            <p>
                We'll have TapDano, a <span className='text-highlight'> 100% oen-source, community product refined during the process</span>, enhancing our ability to deliver a better experience for our ecosystem.
            </p>

            <p className='text-highlight azul'>
                Cardano will have a Fortune 500 success case with the biggest company in South America.
            </p>

            <div className="companys">
                <img src={petrobrasLogo} alt="Pretrobras Logo" className='petrobrasLogo'/>
                <img src={tapdanoLogo} alt="TapDano Logo" className='tapdanoLogo'/>
                <img src={cardanoLogo} alt="Cardano Foundation Logo" className='cardanoLogo'/>
            </div>

            <p>
                We help to create the blockchain culture inside the company, allowing them to expand and gain confidence during the process. <span className='text-highlight'>This will open more doors into the future of possibilities.</span>
            </p>

            <p>
                To measure the impact of our project, <span className='text-highlight'>we’ll use a combination of quantitative and qualitative metrics. On the quantitative side, we’ll track adoption rates, such as the number of Petrobras employees utilizing the system and transaction volumes on the Cardano blockchain.</span>
            </p>

            <p>
                For partnership expansion, <span className='text-highlight'>we’ll record new enterprise partners gained due to the project’s success. On the qualitative side, we’ll gather feedback from stakeholders, as well as evaluate the Cardano community’s interest and engagement with the project.</span>
            </p>

            <p>
                To share our results and opportunities, <span className='text-highlight'>we’ll publish reports and case studies, making them available to the Cardano community and the public</span>. We also plan to present our findings at Cardano community events and collaborate with Catalyst and Intersect committees to align our project with the ecosystem’s goals. Additionally, <span className='text-highlight'>we’ll create educational materials, such as tutorials and guides, to facilitate the adoption of TapDano solutions by other companies.</span>
            </p>
        </section>

        <section className="ourTeam container">
            <h2 className='title-1'>Our Team</h2>
            <div className="teamContainer">

                <LeaderCard
                role="BUSINESS DIRECTOR" 
                name="Thiago Nunes"
                photoSrc={thiagoPhoto}
                bio={`I have several years of experience in developing digital products and managing teams. I runned a marketing agency for more than seven years in Brazil, working with several clients and managing a team with more than 30 contributors, providing services for small businesses, to national and international corporations. I’ve been a Cardano Ambassador for more than five years together with the Cardano Foundation, one of the pioneers in several initiatives in Cardano, including being one of the ITN SPOs running under Ouros ticker, one of the organizers at Cardano Rio/Cardano Summit, and also the Director of Operations at Cardano Warriors. I also contributed to Intersect for over a year, was part of the MCC, and now at ISC.
                \n\n
                You can read a short story about myself here: A short story about myself:
                `}
                link1='https://docs.google.com/document/d/1-Cb0RYFrMqwQpvMOXvp7GRz66TAl0ai9kRYuI4lEU_o/edit'
                titleLink1='A short story about myself'
                link2='https://www.linkedin.com/in/thiago-s-nunes/'
                />

                <LeaderCard
                role="TECHNOLOGY DIRECTOR"
                name="Lucas Boemeke"
                photoSrc={lucasPhoto}
                bio="Experienced CTO and Software Developer with over 20 years in digital product development, specializing in blockchain, digital security, and serverless technologies. Founder of a software house providing solutions for financial institutions, and co-founder of TapDano, an innovative blockchain-based authentication platform leveraging NFC smartcard technology on the Cardano blockchain. Known for creating secure, scalable systems that meet the demands of modern digital infrastructure and edge computing. Highly skilled in product innovation, with a proven ability to lead technical projects from concept through execution."
                link2='https://www.linkedin.com/in/lucas-boemeke/'
                />

                <LeaderCard
                role="DESIGN" 
                name="Ana Paula Petry"
                photoSrc=''
                bio={`I'm a Digital Product Designer and Entrepreneur passionate about decentralized technologies, committed to creating solutions that can transform industries globally. With a background that spans consulting for major companies to co-founding Bohr.io—an innovative developer tool that achieved 2nd place on Product Hunt’s Product of the Day and participated in the Cloudflare's Workers Launchpad program as the only Latin America Startup —I bring comprehensive expertise in business strategy, team management, design, branding, social media and fundraising.
                As a crypto enthusiast since 2020, I have actively contributed to the blockchain ecosystem, including organizing the Cardano Summit Curitiba 2023 alongside Thiago Nunes and submitting proposals within the Cardano Community. As a member of Intersect, I am dedicated to democratizing web3. My skill set encompasses understanding user challenges, resolving complex system issues, and crafting impactful, seamless user experiences that drive engagement and adoption. `}
                link2='https://www.linkedin.com/in/anapaulaspetry'
                link1='https://drive.google.com/file/d/1UZMy57tWO3l-88ckzM5B4VNZrrmVoGG0/view'
                titleLink1='Ana Paula Petry`s Portifolio.pdf'
                />

                <LeaderCard
                role="DEVELOPMENT"
                name="Igor Wendt"
                photoSrc=''
                bio={`Software engineer, Bachelor's Degree in Systems Analysis and Development and has a masters degree in Natural Language Processing.
                \n
                Igor has been acting in the development industry for about 10 years, and has experience with PHP, Javascript, Python, NodeJs, Docker, Kubernetes, Terraform, Kafka, Mysql, Postgres and Mongo
                \n
                Throughout this period, he has acted in national and international projects, such as Embraer, Quem disse Berenice, Mala e Cuia, Collective Liberty, United Healthcare and Twism. He believes we are able to change the world we live in through technology.
                `}

                link2='https://www.linkedin.com/in/igorwendt/'
                />

            </div>
        </section>

        <section className="proven">
            <div className="provenBanner">
                <div className="provenBannerContent container">
                    <div className="provenBanner-text">
                        <h2 className='title-1 azul'>Proven capability to deliver with high levels of trust and accountability</h2>              
                    </div>
                </div>
            </div>
            <div className="provenContent container text-1">
                <p>
                    <span className='text-highlight'>TapDano (Fund 10)</span>, led by experienced founders Thiago and Lucas, is well-equipped to deliver this project with high levels of trust and accountability. We have a strong background in blockchain technology, smart contract development, and already developed a NFC firmware, along with a <span className='text-highlight'>proven track record of executing the funded proposal before and establishing a collaboration for a successful Proof of Attendance solution.</span>
                </p>

                <p>
                    TapDano is a blockchain-based authentication solution that uses NFC smart cards (JavaCard) to ensure the security and authenticity of digital and physical assets. TapDano combines strong authentication and immutable records for applications such as digital wallets, product authentication, and corporate audits.
                </p>

                <p>
                    <span className='text-highlight'>As founders, Thiago and Lucas, have developed smart contracts, SDKs for web and mobile, and open-source firmware for NFC cards.</span> Validating our capability in researching, coordinating, and developing complex projects.
                </p>
            </div>
        </section>

        <section className="budgetAndCost container">
            <h2 className='title-1'>Budget & Costs</h2>
            <img src={budgetAndCosts} alt="Budget & Costs" />
        </section>

        <section className="voteForUs container">
            <h2 className='text-highlight'><span className='title-3'>To Vote for Us</span> Search the words <span className='title-3 azul'>Petrobras</span> or <span className='title-3 azul'>Fortune 500</span> on the Catalyst Voting App.</h2>
            <div>
                <a href="" className='text-highlight branco'>LEARN MORE</a>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Proposal