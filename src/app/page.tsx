"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import '../style.css';

import LandingPage from '../components/LandingPage';


const Home = () => (
  <main>
    <Container fluid id="footer">
      <LandingPage />
    </Container>
  </main>
);

export default Home;