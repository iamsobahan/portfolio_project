import Particles, { initParticlesEngine } from '@tsparticles/react';

import { MdOutlinePreview } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';
import './Project.css'


import { Tab, Tabs } from 'react-bootstrap';
import { powerBiProjects, projects, pythonProjects, SqlProjects } from './data';
import { RiH5 } from 'react-icons/ri';
import { particlesConfig } from '../Banner/config/particlesConfig ';

const ProjectSection = () => {

     const [init, setInit] = useState(false);
     useEffect(() => {
       initParticlesEngine(async (engine) => {
         await loadSlim(engine);
       }).then(() => {
         setInit(true);
       });
     }, []);
 


  

    

   

  return (
    <div id="project">
      {init && <Particles id="tsparticles" options={particlesConfig} />}
      <div className="project__overlay">
        <div className="container">
          <Tabs
            defaultActiveKey="home"
            id="justify-tab-example"
            className="mb-3 position-static"
            justify
          >
            <Tab eventKey="home" title="Microsoft Excel">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Tab>
            <Tab eventKey="Power Bi" title="Power Bi">
              {powerBiProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Tab>
            <Tab eventKey="SQL" title="SQL">
              {SqlProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Tab>

            <Tab eventKey="Python" title="Python">
              {pythonProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortDescription = (text) => {
    return text.length > 100 ? text.substring(0, 100) + '...' : text;
  };

  return (
    <div className="row mb-5">
      <div className="col-12">
        <h2 style={{ color: 'whitesmoke' }}>{project.title}</h2>
        <h5 style={{ color: 'whitesmoke' }}>{project.title2}</h5>

        <p style={{ color: 'whitesmoke', textAlign: 'justify' }}>
          {isExpanded
            ? project.description
            : getShortDescription(project.description)}
          {project.description.length > 100 && (
            <button onClick={toggleReadMore} className="btn btn-link p-0 ms-2">
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </p>
        {project.github && (
          <a href={project.github} target="_blank">
            <span class="badge text-bg-danger py-2 me-3 mb-3">
              Github Link
              <FaGithub />
            </span>
          </a>
        )}
        {project.url && (
          <a href={project.url} target="_blank">
            <span class="badge text-bg-success py-2 me-3 mb-3">
              Live Preview <MdOutlinePreview />
            </span>
          </a>
        )}
        <img
          style={{ width: '100%' }}
          src={project.imageUrl}
          alt={`${project.title} Project`}
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
