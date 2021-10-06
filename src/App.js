import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { LandingPage } from './Components/LandingPage';
import { Section1 } from './Components/Section1';
import { Section2 } from './Components/Section2';
import { Courses } from './Components/Courses';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import Image1 from './Images/2.png';
import Image2 from './Images/3.png';
import Image3 from './Images/4.png';
import Image4 from './Images/5.png';
import {Element} from 'react-scroll';


function App() {
   

  return (
    <div className="App">
       <Navbar />
       <LandingPage />
       <Element name="About">
       <div className="Section-contain">
       <Section1 title="Online Learning at it's best!" Image={Image1} desc="SomethingSmart revolutionizing the process of E-learning with quality teaching and up-to-date learning resources" />
       <Section2 title="Learn from the best!" Image={Image2} desc="Quality Teaching from the best in the scene. Teachers here having a passion for teaching and education" />
       <Section1 title="Industrial Guidance" Image={Image3} desc="Enjoy a boost in your learning with weekly guidance sessions and monthly guest lectures from the top competitors in the industry."/>
       <Section2 title="Loved by Thousands of Students" Image={Image4} desc="With over 300K downloads from Play store and 100K downloads from Apple store , SomethingSmart has became really popular among students!" />
       </div>
       </Element>
       <Element name="Courses">
       <Courses />
       </Element>
       <Element name="Contact">
       <Contact />
       </Element>
       <Footer />
    </div>
  );
}

export default App;
