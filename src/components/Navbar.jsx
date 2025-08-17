import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '20px' }}>Packages</Link>
      <Link to="/services" style={{ marginRight: '20px' }}>Treatments</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
}

export default Navbar;
