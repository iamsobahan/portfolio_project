import './Banner.css';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';

import { IoLogoLinkedin } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { loadSlim } from '@tsparticles/slim';

import { Button } from 'react-bootstrap';
import { particlesConfig } from './config/particlesConfig ';

const Banner = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div id="banner">
      {init && <Particles id="tsparticles" options={particlesConfig} />}
      <div className="container">
        <div className=" banner__content">
          <h1 className="text-uppercase fw-lighter">Welcome to my world</h1>
          <h2 className="fw-normal">
            Hi, I'm <span className="text-uppercase">Md Sobahan Mia</span>
          </h2>
          <TypeAnimation
            sequence={[
              'Data Analyst',
              1000,
              'Business Analyst',
              1000,
              'Bi Analyst',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: '2em',
              display: 'inline-block',
              color: '#DC143C',
              fontWeight: '600',
            }}
            repeat={Infinity}
          />
          <br />
          <a
            className="textDecoration"
            href="https://www.linkedin.com/in/md-sobahan-mia/"
            target="_blank"
          >
            <Button className="text-uppercase mt-2" variant="outline-danger">
              Know More
            </Button>
          </a>
        </div>
      </div>
      <div className="banner__icon text-white ">
        <a href="https://www.linkedin.com/in/md-sobahan-mia/" target="_blank">
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/iamsobahan" target="_blank">
          <FaGithub />
        </a>
        <a href="https://x.com/iamsobahan" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Banner;
