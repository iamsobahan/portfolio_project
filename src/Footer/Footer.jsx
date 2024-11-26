import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import contactImage from '../assets/footer.jpg';
import './footer.css';
import Particles, { initParticlesEngine } from '@tsparticles/react';

import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';
import { particlesConfig } from '../Components/Banner/config/particlesConfig ';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const clickhandler = (event) => {
    event.preventDefault();
    Swal.fire({
      title: `Submitted! ${name}`,
      text: 'I will contact you',
      icon: 'success',
    });
    setName('');
    setEmail('');
    setSubject('');
    setText('');
  };

  return (
    <div id="contact" className="footer-section">
      {init && <Particles id="tsparticles" options={particlesConfig} />}
      <Container>
        <Row>
          <Col xs={12} md={6} className="contact-info text-white">
            <h4 className="font-weight-bold">Hire Me.</h4>
            <p className="contact-description">
              I am available for full-time, part-time, and freelance work.
              Connect with me via email:{' '}
              <span className="highlight-text">iamsobahan@gmail.com</span>
            </p>
            <p className="contact-description">
              or Call us directly :-{' '}
              <span className="highlight-text">+8801999498887</span>
            </p>
            <Form onSubmit={clickhandler} className="contact-form mt-3">
              <Row>
                <Col xs={12} sm={6} className="mb-2">
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    className="form-control-custom"
                    required
                  />
                </Col>
                <Col xs={12} sm={6} className="mb-2">
                  <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    className="form-control-custom"
                    required
                  />
                </Col>
                <Col xs={12} className="mb-2">
                  <Form.Control
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    className="form-control-custom"
                  />
                </Col>
                <Col xs={12} className="mb-2">
                  <Form.Control
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    as="textarea"
                    name="text"
                    placeholder="Your Message"
                    rows="5"
                    className="form-control-custom"
                    required
                  />
                </Col>
              </Row>
              <Button
                type="submit"
                className="submit-btn mt-3"
                variant="outline-danger"
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img className="contact-image" src={contactImage} alt="Contact" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
