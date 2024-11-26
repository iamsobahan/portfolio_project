import './About.css';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';

import { loadSlim } from '@tsparticles/slim';
import about_user from '../../assets/about_user.jpg';
import { Tab, Tabs } from 'react-bootstrap';
import { particlesConfig } from '../Banner/config/particlesConfig ';

const About = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div id="about">
      {init && <Particles id="tsparticles" options={particlesConfig} />}
      <div className="about__overlay">
        <div className="container">
          <div className="about__content row align-items-center pb-5">
            <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
              <img
                src={about_user}
                alt=""
                className="img-fluid rounded-circle about__img"
              />
            </div>
            <div className="col-12 col-md-8">
              <div className="about__text">
                <p>
                  As a dedicated data analyst and business intelligence (BI)
                  analyst, I specialize in transforming raw data into meaningful
                  insights that drive decision-making. With expertise in data
                  collection, analysis, and visualization, I excel at
                  identifying trends, patterns, and actionable insights that
                  align with business goals. My deep understanding of database
                  management, SQL, and advanced data analytics tools enables me
                  to provide reliable and timely data-driven recommendations to
                  enhance operational efficiency and strategic planning.
                </p>
                <p>
                  In addition, as a Power BI analyst and business analyst, I am
                  adept at creating interactive dashboards and reports that
                  facilitate data interpretation for stakeholders. I possess a
                  strong ability to communicate complex data in a visually
                  appealing and easy-to-understand manner. My analytical
                  mindset, coupled with strong business acumen, allows me to
                  collaborate with cross-functional teams to identify key
                  performance indicators, optimize business processes, and drive
                  sustainable growth.
                </p>
              </div>
            </div>
          </div>
          <div className="about__professions mt-4">
            <Tabs
              defaultActiveKey="home"
              id="justify-tab-example"
              className="mb-3 position-static"
              justify
            >
              <Tab eventKey="home" title="Academic Education">
                <ul className="list-unstyled">
                  <li className="text-white fs-6 mb-3">
                    <strong>University:</strong> Govt. Titumir College <br />
                    <strong>Program:</strong> BBA(Hons) <br />
                    <strong>Department:</strong> Management <br />
                    <strong>Session:</strong> 2015-16 <br />
                    <strong>Passing year:</strong> 2021
                  </li>
                  <li className="text-white fs-6 mb-3">
                    <strong>College:</strong> Birshreshthe Munshi Abdur Rouf
                    Public College <br />
                    <strong>Program:</strong> HSC (Higher Secondary Certificate){' '}
                    <br />
                    <strong>Department:</strong> Business Studies <br />
                    <strong>Passing year:</strong> 2015
                  </li>
                  <li className="text-white fs-6 mb-3">
                    <strong>College:</strong> Birshreshthe Munshi Abdur Rouf
                    Public College <br />
                    <strong>Program:</strong> SSC (Secondary School Certificate){' '}
                    <br />
                    <strong>Department:</strong> Business Studies <br />
                    <strong>Passing year:</strong> 2013
                  </li>
                </ul>
              </Tab>
              <Tab eventKey="Professional Courses" title="Professional Courses">
                <ul className="list-unstyled">
                  <li className="text-white fs-6 mb-3">
                    <strong>Course Title:</strong> Complete Data Analytics
                    Bootcamp <br />
                    <strong>Institute Name:</strong> Data Solution 360 <br />
                    <strong>Mode:</strong> Online
                  </li>
                  <li className="text-white fs-6 mb-3">
                    <strong>Course Title:</strong> Microsoft Office Program{' '}
                    <br />
                    <strong>Institute Name:</strong> Al-hera Computer Center{' '}
                    <br />
                    <strong>Mode:</strong> Offline
                  </li>
                </ul>
              </Tab>
              <Tab eventKey="Job Experience" title="Job Experience">
                <ul className="list-unstyled">
                  <li className="text-white fs-6 mb-3">
                    <strong>Company:</strong> Remote Marketplace <br />
                    <strong>Position:</strong> Freelancer (Project-Based) <br />
                    <strong>Time Period:</strong> Jul 2024 - Present
                  </li>
                  <li className="text-white fs-6 mb-3">
                    <strong>Company:</strong> Smart Fluid Tech <br />
                    <strong>Position:</strong> Data Analyst <br />
                    <strong>Time Period:</strong> Dec 2022 - Feb 2024
                  </li>
                  <li className="text-white fs-6">
                    <strong>Company:</strong> Robin Store <br />
                    <strong>Position:</strong> Data Entry Operator <br />
                    <strong>Time Period:</strong> Oct 2021 - Nov 2022
                  </li>
                </ul>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
