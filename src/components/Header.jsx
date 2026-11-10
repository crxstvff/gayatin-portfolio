import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>My Portfolio</h2>
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}