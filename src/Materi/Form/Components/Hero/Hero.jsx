import Nav from '../Nav/Nav';
import './index.css';

const Hero = ({ text }) => {
  return (
    <div className="hero">
      <h1>{text}</h1>
      <Nav />
    </div>
  );
};

export default Hero;
