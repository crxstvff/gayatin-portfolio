import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// 1. SHARED LAYOUT (Header + Content + Footer)
function Layout() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <header style={{ display: 'flex', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </header>

      <main style={{ minHeight: '200px', padding: '20px 0' }}>
        <Outlet />
      </main>

      <footer style={{ borderTop: '1px solid #ccc', paddingTop: '15px' }}>
        <p>© Gayatin Portfolio</p>
      </footer>
    </div>
  );
}

// 2. THE 4 PAGES
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my portfolio foundation!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Me</h1>
      {/* PALITAN MO RIN DITO KUNG GUSTO MO NG IBANG PANGALAN */}
      <p>I am James Cristoffer L. Gayatin, an aspiring web developer learning React.</p>
      <h3>Skills</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
        <h3>Bouncing Ball</h3>
        <p> A 2D Arcade Game with Levels </p>
      </div>
      <div style={{ border: '1px solid #ddd', padding: '10px' }}>
        <h3>Boom Spaceship</h3>
        <p>A Fast Shooting Game </p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Email: jamesgayatin0@gmail.com</p>
    </div>
  );
}

// 3. MAIN ROUTING SETUP
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}