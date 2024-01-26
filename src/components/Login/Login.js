import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <section>
      <Container fluid className="home-section">
        <Container className="home-content">
          <Row>
            <form onSubmit={handleSubmit} action="/auth/register" method="POST">
              <div className="loginInput">
                <label htmlFor="name-reg" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name-reg"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="loginInput">
                <label htmlFor="email-reg" className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email-reg"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="loginInput">
                <label htmlFor="password-reg" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-reg"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="loginInput">
                <label htmlFor="password-conf-reg" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-conf-reg"
                  name="passwordConfirm"
                  value={formData.passwordConfirm}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn loginBtn">Submit</button>
            </form>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Login;