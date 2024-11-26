import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import './Skill.css';

import { ProgressBar, Badge, Row, Col, Container } from 'react-bootstrap';
import { particlesConfig } from '../Banner/config/particlesConfig ';

const Skill = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const skills = {
    microsoftExcel: 90,
    powerBi: 80,
    sql: 60,
    python: 80,
    numpy: 80,
    pandas: 90,
    matplotlib: 90,
    plotly: 70,
  };

  return (
    <div id="skill">
      {init && <Particles id="tsparticles" options={particlesConfig} />}
      <div className="skill__overlay">
        <Container>
          <Row className="align-items-center">
            {/* Skill Progress Section */}
            <Col xs={12} md={8}>
              <div className="skill-header">
                <h2 style={{ color: 'whitesmoke', fontWeight: 'bold' }}>
                  My Skills
                </h2>
                <p
                  style={{
                    color: 'lightgray',
                    maxWidth: '600px',
                  }}
                >
                  I am proficient with the following tools and libraries and am
                  continually learning new technologies. I’m a dedicated learner
                  who’s passionate about gaining new skills and improving my
                  expertise.
                </p>
              </div>
              <hr style={{ color: 'whitesmoke' }} />
              <div className="skill__progress">
                {Object.keys(skills).map((skill, index) => (
                  <div key={index} className="skill-item">
                    <small
                      style={{
                        color: 'whitesmoke',
                        textTransform: 'capitalize',
                      }}
                    >
                      {skill.replace(/([A-Z])/g, ' $1')}
                    </small>
                    <ProgressBar
                      striped
                      variant={index % 2 === 0 ? 'info' : 'success'}
                      now={skills[skill]}
                      label={`${skills[skill]}%`}
                    />
                  </div>
                ))}
              </div>
            </Col>

            {/* Skill Categories Section */}
            <Col xs={12} md={4}>
              <div className="skill-categories">
                <h5 style={{ color: 'whitesmoke', marginBottom: '10px' }}>
                  Programming Languages
                </h5>
                <Badge bg="primary" className="m-1">
                  JavaScript
                </Badge>
                <Badge bg="primary" className="m-1">
                  Python
                </Badge>

                <h5 style={{ color: 'whitesmoke', margin: '15px 0 10px' }}>
                  Business Intelligence Tools
                </h5>
                <Badge bg="info" className="m-1">
                  Microsoft Excel
                </Badge>
                <Badge bg="info" className="m-1">
                  Power BI
                </Badge>

                <h5 style={{ color: 'whitesmoke', margin: '15px 0 10px' }}>
                  Query Language
                </h5>
                <Badge bg="secondary" className="m-1">
                  SQL
                </Badge>

                <h5 style={{ color: 'whitesmoke', margin: '15px 0 10px' }}>
                  Database
                </h5>
                <Badge bg="success" className="m-1">
                  PostgreSQL
                </Badge>

                <h5 style={{ color: 'whitesmoke', margin: '15px 0 10px' }}>
                  Data Manipulation
                </h5>
                <Badge bg="warning" className="m-1">
                  Pandas
                </Badge>
                <Badge bg="warning" className="m-1">
                  NumPy
                </Badge>

                <h5 style={{ color: 'whitesmoke', margin: '15px 0 10px' }}>
                  Data Visualization
                </h5>
                <Badge bg="danger" className="m-1">
                  Matplotlib
                </Badge>
                <Badge bg="danger" className="m-1">
                  Plotly
                </Badge>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skill;
