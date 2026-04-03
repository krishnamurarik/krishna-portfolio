import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Coding Brains</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Worked as a React Developer, developing and enhancing dynamic web applications using React and JavaScript. Built responsive user interfaces based on client requirements and collaborated with the development team to follow best practices and maintain high code quality. Participated in code reviews and design discussions to improve the overall product experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack React Developer</h4>
                <h5>Airlinq</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a Global Connectivity Management Platform for Mobile Network
              Operators (MNO) and connected cars, enabling efficient management of subscriptions, devices, and
              network services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior React Developer</h4>
                <h5>Airlinq</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
             Developed and implemented the SIM lifecycle management module for DU and AMX clients to handle device management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
