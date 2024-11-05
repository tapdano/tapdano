import { useState, useEffect } from 'react';
import './caseUseSlide.css';

const CaseStudySlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 5500);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="caseUseSlider ">
      <div
        className={`caseUseSlide useSlide-1 ${currentIndex === 0 ? 'active' : ''}`}>
        <div className="caseUseContent">
          <div className='caseUseText'>
            <p className='title-2 gradient-title'>Develop your own</p>
            <h3 className='title-1 gradient-title'>Product <br></br>Validation</h3>
          </div>
          <a href="https://github.com/tapdano" target="_blank" className='button'>Our Github</a>
        </div>
      </div>

      <div
        className={`caseUseSlide useSlide-2 ${currentIndex === 1 ? 'active' : ''}`}
      >
        <div className="caseUseContent">
          <div className='caseUseText'>
            <p className='title-2 gradient-title'>Develop your own</p>
            <h3 className='title-1 gradient-title'>NFC <br></br>Authentication</h3>
          </div>
          <a href="https://github.com/tapdano" target="_blank" className='button'>Our Github</a>
        </div>
      </div>

      <div
        className={`caseUseSlide useSlide-3 ${currentIndex === 2 ? 'active' : ''}`}
      >
        <div className="caseUseContent">
          <div className='caseUseText'>
            <p className='title-2 gradient-title'>Develop your own</p>
            <h3 className='title-1 gradient-title'>Smart ID</h3>
          </div>
          <a href="https://github.com/tapdano" target="_blank" className='button'>Our Github</a>
        </div>
      </div>

      <div
        className={`caseUseSlide useSlide-4 ${currentIndex === 3 ? 'active' : ''}`}
      >
        <div className="caseUseContent">
          <div className='caseUseText'>
            <p className='title-2 gradient-title'>Develop your own</p>
            <h3 className='title-1 gradient-title'>Tokenization</h3>
          </div>
          <a href="https://github.com/tapdano" target="_blank" className='button'>Our Github</a>
        </div>
      </div>

      <div
        className={`caseUseSlide useSlide-5 ${currentIndex === 4 ? 'active' : ''}`}
      >
        <div className="caseUseContent">
          <div className='caseUseText'>
            <p className='title-2 gradient-title'>Develop your own</p>
            <h3 className='title-1 gradient-title'>Cardano Wallet</h3>
          </div> 
          <a href="https://github.com/tapdano" target="_blank" className='button'>Our Github</a>
        </div>
      </div>

      <div
        className={`caseUseSlide useSlide-6 ${currentIndex === 5 ? 'active' : ''}`}
      >
        <div className="caseUseContent">
          <div className='caseUseText'>
            <p className='title-2 gradient-title'>Develop your own</p>
            <h3 className='title-1 gradient-title'>Bridge from <br></br>Physical to Digital</h3>
          </div>
          <a href="https://github.com/tapdano" target="_blank" className='button'>Our Github</a>
        </div>
      </div>

      <div className="caseUseNavigation-dots">
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