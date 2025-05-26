import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-us-container-blue">
      <h1 className="about-us-heading-blue">About Us</h1>
      <div className="about-us-content-blue">
        <div className="about-text-blue">
          <h2 className="about-subheading-blue">Who We Are</h2>
          <p className="about-paragraph-blue">
            We are a team of passionate developers, designers, and thinkers, driven by our goal to create innovative solutions that solve real-world problems. 
            Our mission is to deliver high-quality products that bring value to our users.
          </p>
          <h2 className="about-subheading-blue">Our Vision</h2>
          <p className="about-paragraph-blue">
            Our vision is to be leaders in technology innovation by creating products that make a positive impact in the world. 
            We strive to maintain a balance between creativity, sustainability, and technology.
          </p>
          <h2 className="about-subheading-blue">Our Values</h2>
          <p className="about-paragraph-blue">
            Integrity, collaboration, and innovation form the core of everything we do. We believe in building products that not only function well but also enhance the lives of those who use them.
          </p>
          <h2 className="about-subheading-blue">Our Team</h2>
          <p className="about-paragraph-blue">
           <ul>
            {/* <li>Abhishek Srivastava</li> */}
            <li>Ankit Saini</li>
            {/* <li>Anoushka Gautam</li> */}
            {/* <li>Manish Vishwakarma</li> */}
           </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
