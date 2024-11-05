import { useState } from 'react';
import './caseStudySlide.css';

const CaseStudySlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; 

  return (
    <div className="card-slider">
      <div
        className={`slide slide-1 ${currentIndex === 0 ? 'active' : ''}`}
      >
        <div className="content">
          <h3>Petrobras & Cardano Foundation Partnership</h3>
          <p className='text-2'>
            Petrobras, one of the world’s leading energy companies with annual revenues exceeding $100 billion, plays a crucial role in the global energy sector and holds a significant presence in Brazil. Its exploration of blockchain technology signals a major milestone in corporate adoption, particularly within Latin America.
          </p>
          <p className='text-2'>The collaboration between Petrobras and the Cardano ecosystem began in 2022 at the Cardano Rio event.</p>
        </div>
      </div>

      <div
        className={`slide slide-2 ${currentIndex === 1 ? 'active' : ''}`}
      >
        <div className="content">
          <p className='text-2'>
            In 2023, Petrobras's engagement with the Cardano Foundation expanded, leading to the establishment of a Latam division within the Foundation to further develop strategic initiatives.
          </p>
          <p className='text-2'>As part of this partnership, the Cardano Foundation will conduct blockchain education workshops for Petrobras  employees, with Cardano Academy content integrated into Petrobras University. To launch the program, two workshops were held in the Metaverse, one of which focused on regulatory insights both globally and within Brazil.
          </p>
        </div>
      </div>

      <div
        className={`slide slide-3 ${currentIndex === 2 ? 'active' : ''}`}
      >
        <div className="content">
          <h3>Proof of Attendance with TapDano at ExpamdLAB 2024</h3>
          <p className='text-2'>In collaboration with the Cardano Foundation, TapDano introduced a Proof of Attendance solution at Petrobras's <b>ExpamdLAB 2024</b> event.</p>
          <p className='text-2'>
            Participants tapped their mobile phones near kiosks equipped with TapDano’s firmware, enabling them to request proof of attendance and receive an exclusive NFT. This marked Petrobras’s first utilization of Cardano’s mainnet, showcasing the platform’s capability to support the needs of large-scale corporations.
          </p>
        </div>
      </div>

      <div className="navigation-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={index === currentIndex ? 'active' : ''}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CaseStudySlide;