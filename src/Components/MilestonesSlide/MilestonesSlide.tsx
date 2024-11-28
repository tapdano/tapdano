import { useState } from 'react';
import './milestonesSlide.css';

const slides = [
    {
        title: 'Planning and Requirement Analysis',
        months: '1-2',
        activities: [
            {activity: 'Initiate meetings between TapDano and Petrobras to align on project objectives and expectations.'},
            {activity: 'Define the detailed scope of the project and identify specific processes at Petrobras to be improved using blockchain solutions.'},
            {activity: "Conduct a thorough analysis of technical, operational, and security requirements for integrating TapDano's solution with Petrobras's existing systems."},
            {activity: 'Identify legal, compliance, and regulatory considerations, including data protection and privacy laws.'}
        ],
        deliverables: [
            {deliverable: 'Project scope and requirements specification document.'},
            {deliverable: 'Project plan outlining timelines, resources, and responsibilities.'},
            {deliverable: 'Operational Setup'},

        ]
    },
    {
        title: 'Firmware customization & Smart Contracts validation',
        months: '3-4',
        activities: [
            {activity: "Customize TapDano's NFC smart card firmware to meet Petrobras's specific requirements"},
            {activity: 'Develop smart contracts on the Cardano blockchain to handle cryptographic signatures and data validation.'},
            {activity: "Research and validation if we can implement zero-knowledge proofs to enhance security and privacy."},
        ],
        deliverables: [
            {deliverable: 'Customized firmware for NFC smart cards'},
            {deliverable: 'Developed and tested smart contracts in a controlled environment.'},
            {deliverable: 'Report about ZK research'},

        ]
    },
    {
        title: 'Pilot Development and Design',
        months: '5-6',
        activities: [
            {activity: "Design an intuitive user interface."},
            {activity: 'Develop a responsive front-end integrated with NFC smartcard functionality.'},
            {activity: "Implement API services and dApp integrated with SmartContracts."},
        ],
        deliverables: [
            {deliverable: 'Completed UX/UI prototypes;'},
            {deliverable: 'Front-end and back-end implementation;'},
        ]
    },
    {
        title: 'Pilot Deployment, Testing and Validation',
        months: '7-8',
        activities: [
            {activity: "Conduct initial training sessions for Petrobras employees and gather feedback."},
            {activity: 'Launch a pilot program in a selected department within Petrobras.'},
            {activity: "Monitor system performance, user engagement, and collect data."},
            {activity: "Hold meetings to assess progress and begin developing a strategy for implementation."},
        ],
        deliverables: [
            {deliverable: 'Refined solution incorporating feedback and resolving identified issues.'},
            {deliverable: 'Live pilot implementation of the solution.'},
            {deliverable: 'Updated project documentation.'},
        ]
    },
    {
        title: 'Production / Mainnet Deployment',
        months: '9-10',
        activities: [
            {activity: "Finalizing small improvements and optimizations identified during the pilot phase."},
            {activity: 'Expand the pilot to additional departments or operational areas within Petrobras.'},
            {activity: "Evaluate scalability, performance, and user adoption in a broader context. Continue employee training programs to prepare for wider rollout."},
        ],
        deliverables: [
            {deliverable: 'Optimized solution with enhanced features and performance.'},
            {deliverable: 'User adoption metrics and engagement statistics.'},
            {deliverable: 'Revised scalability plan and training materials.'},
        ]
    },
    {
        title: 'Full Implementation and Project Closure',
        months: '11-12',
        activities: [
            {activity: "Deploy the solution across Petrobras as per the agreed-upon scope."},
            {activity: 'Complete comprehensive training sessions for all relevant employees.'},
            {activity: "Finalize all project documentation, technical guides and user manuals."},
        ],
        deliverables: [
            {deliverable: 'Fully operational solution implemented company-wide'},
            {deliverable: 'Complete set of documentation and training resources.'},
            {deliverable: 'Final project report summarizing achievements, benefits, and lessons learned.'},
            {deliverable: 'In-person training session at Petrobras.'},
        ]
    },
]
const MilestonesSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6; 

  return (
    <div className="milestone-slider">
        {slides.map((slide, index) => (
        <div
          key={index}
          className={`milestone-slide ${currentIndex === index ? 'active' : ''}`}
        >
          <h2 className='title-1'>Milestones</h2>      
          <div className="milestone-content">
            <div className="number-slide title-1">
                {[...Array(totalSlides)].map((_, index) => (
                <p key={index} className={currentIndex === index ? 'active-number' : 'inactive-number'}>
                    {index + 1}
                </p>
                ))}
            </div>
            <div className="milestone-text">
                <h3>{slide.title} <span className='text-1'>(Months {slide.months})</span></h3>
                {slide.activities && slide.activities.length > 0 && (
                <div className="milestone-activities text-1">
                    <h4>Activities:</h4>
                    <ul>
                    {slide.activities.map((item, idx) => (
                        <li key={idx}>{item.activity}</li>
                    ))}
                    </ul>
                </div>
                )}
                {slide.deliverables && slide.deliverables.length > 0 && (
                <div className="milestone-deliverables text-1">
                    <h4>Deliverables:</h4>
                    <ul>
                    {slide.deliverables.map((item, idx) => (
                        <li key={idx}>{item.deliverable}</li>
                    ))}
                    </ul>
                </div>
                )}
            </div>
          </div>
        </div>
      ))}

      <div className="milestone-navigation-dots">
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

export default MilestonesSlide;