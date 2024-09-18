import React, { useState, useEffect, useRef } from 'react';
import { FaUsers, FaDollarSign, FaSmile, FaChartLine } from 'react-icons/fa'; // Importing icons
import CountUp from 'react-countup';
import './Home.css'; // Import custom styles

export default function Statistic() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: <FaUsers size={50} />, label: 'Number of Users', value: 10000 },
    { icon: <FaDollarSign size={50} />, label: 'Cost less than', value: 40, suffix: '%' },
    { icon: <FaSmile size={50} />, label: 'Satisfactory Clients', value: 5000 },
    { icon: <FaChartLine size={50} />, label: 'Growth Rate', value: 50, suffix: '%' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="statistic-section" ref={sectionRef}>
      <div className="overlay">
        <div className="container mt-5">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3"> {/* 4 columns */}
                <div className="icon" style={{ color: 'white' }}>{stat.icon}</div>
                <h2 className="mt-2" style={{ color: 'white', fontFamily: 'Roboto' }}>
                  {inView && (
                    <CountUp start={0} end={stat.value} duration={2} suffix={stat.suffix || ''} />
                  )}
                </h2>
                <p style={{ color: 'white' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
