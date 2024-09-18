import React, { useEffect } from 'react';
import './Main.css';
import featureImg from './Image/fahreenAward.jpeg';
import founer from './Image/fahreen-apu-2.png';
import chairman from './Image/montasir-islam2.png';
import techLead from './Image/Al-Ferdous.png';
import chiefConsultant from './Image/kiron.png';


export default function About() {

    // Scroll to the top when the component mounts
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []); // Empty dependency array means it runs only on mount

    
  return (
    <div>
      {/* Header Section */}
      <div className="header-section">
        <div className="overlay"></div>
        <div className="container text-center">
          <h1>About Dhaka Cast</h1>
          {/* <p className="lead">Dhaka Cast is a healthcare startup exclusively focused on providing comprehensive diabetic care solutions in Bangladesh.</p> */}
        </div>
      </div>

      {/* About Dhaka Cast Section */}
      <div className="container about-section">
        <div className="row">
          <div className="col-md-6">
            <p className = "text-style"> <strong>Dhaka Cast: A healthy life for Millions!</strong></p>
            <p className = "text-style">
            Dhaka Cast is one of the healthcare startups in Bangladesh to provide the best quality healthcare service for each and ensure a healthy and happy life for citizens. <br /> 
            We have introduced a universal platform where anyone can get every type of healthcare support including doctors’ consultation, lab support, home care for health checkups and nursing as well as medicine delivery within the shortest possible time at the most affordable cost. 
            </p >
            <p className = "text-style"> <strong>We provide—</strong></p>
            <p className = "text-style">
            Specialist doctors’ consultation for 24/7 (both in offline and online) <br/>
            Regular health checkup by qualified doctors at home <br />
            Dietician and lifestyle modification sessions with specialists <br />
            Nurse and caregiver services at home <br />
            Lab sample collection at home <br />
            Medicine delivery at home <br />
            Individualized monitoring and track records for best therapeutic adjustment <br />
            </p>
            <p className = "text-style"> <strong>Our journey</strong></p>
            <p className = "text-style">
            Dhaka Cast ltd. was established in December 2019 by Dr. Fahreen Hannan, a prominent health care entrepreneur and woman influencer of Bangladesh. She was in her clinical practice for more than nine years and then initiated the startup for the betterment of a broader community and social impact. She is accompanied by other two doctors, Professor Dr. Mohammed Montasir Islam, who is a specialist physician working for more than two decades in clinical practice and Dr. Abdur Rafi, who is a physician and public health and health system research enthusiast. 
            Mr. Al Ferdous Rana, who is looking after the technology part. <br />
            Since the starting Dhaka Cast has never looked behind and day by day new feathers have been added to its crown. <br />
            During the COVID-19 pandemic Dhaka Cast affiliated with the government of Bangladesh to provide primary healthcare support to the COVID as well as regular patients and achieved the honorable mention in the ‘Call for Nation’ contest arranged by the government of Bangladesh as a token of recognition for the dedicated service during this critical situation. <br /><br />

            For the very first time from Bangladesh Dhaka Cast attended in ‘She Loves Tech’, a global convention for women tech entrepreneurs held at Beijing, China in 2019. <br />
            Dhaka Cast already served 7000+ diabetic patients in Bangladesh and not only in capital but also in rural areas. <br />
            Dhaka Cast received National Award – Digital Bangladesh 2021 for the excellent services from Honorable State Minister Mr. Zunaid Ahmed Palak on behalf of  Honourable Prime Minister Sheikh Hasina. <br /><br />
            The vision of this startup is to ensure a complication-free healthy life for all citizens. With this vision we are serving more than 7000+ patients and the number is increasing exponentially till it started in 2019. Besides, it has conducted several health camps serving more than 1000 patients from all socioeconomic classes for free as a social responsibility. <br /><br />
            
            Access to basic health care services are limited by certain socio-economic barriers such as distance transportation and costs. Medical education and training focused on chronic diseases is often lacking in the primary health care sectors. With Dhaka Cast’s platform, we are aiming to reach these communities with video consultations by pairing them with urban medical expertise via our curated platform. <br /><br />

            More than 80% of the services/products on the platform are lower than average prices which are available in the market and are affordable for the low-income communities in the rural areas. <br /><br />

            As we are partnering with diagnostic centers, we are able to provide rural patients from Bishwanath Upazilla, Meherpur,  Chuadanga, Bandarban,  Manikganj, and Ramganj with video consultation services from the urban doctors. We are also partnering with the rural pharmacies to provide our video consultation services.  <br /><br />
            </p>
            <p className = "text-style"> <strong>Mission</strong></p>
            <p className = "text-style">
            The mission is to provide the best quality healthcare for each and every diabete patient of Bangladesh and ensure them a healthy and happy life.
            </p>
            <p className = "text-style"> <strong>Vision</strong></p>
            <p className = "text-style">
            Establish a 360-degree solution to provide healthy lifestyle education and the best service and products at affordable cost for diabetic patients at their doorsteps.
            </p>
          </div>
          <div className="col-md-6">
            <img src={featureImg} alt="Dhaka Cast National Award" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container team-section">
        <h2>Meet Our Team</h2>
        <div className="row pt-5 pb-3 mb-5" style={{backgroundColor: "#f2f2f2", borderRadius:"20px"}}>
          <div className="col-md-3 team-member">
            <img src={founer} alt="Dr. Fahreen Hannan"  className="rectanguler" style={{border: "2px solid #A4449D", borderRadius:"10%"}}/>
            <h5>Dr. Fahreen Hannan</h5>
            <p>Founder and CEO</p>
          </div>
          <div className="col-md-3 team-member">
            <img src={chairman} alt="Dr. Mohammed Montasir Islam" className="rectanguler"style={{border: "2px solid #A4449D", borderRadius:"10%"}} />
            <h5>Dr. Mohammed Montasir Islam</h5>
            <p>Chairman, Dhaka Cast</p>
          </div>
          <div className="col-md-3 team-member">
            <img src={chiefConsultant} alt="Dr. Shekh Ahmedul Haque" className="rectanguler" style={{border: "2px solid #A4449D", borderRadius:"10%"}}/>
            <h5>Dr. Shekh Ahmedul Haque</h5>
            <p>Cheif Consultant,Dhaka Cast</p>
          </div>
          <div className="col-md-3 team-member">
            <img src={techLead} alt="Md. Al Ferdous Rana" className="rectanguler" style={{border: "2px solid #A4449D", borderRadius:"10%"}} />
            <h5>Md. Al Ferdous Rana</h5>
            <p>Technology Lead</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}


