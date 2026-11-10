export default function Projects() {
  const sampleProjects = [
    { id: 1, title: "Project 1", description: "Isang simpleng web application gamit ang JavaScript." },
    { id: 2, title: "Project 2", description: "Isang weather app project gamit ang external API." },
    { id: 3, title: "Project 3", description: "Isang responsive landing page gamit ang CSS grid." }
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {sampleProjects.map((project) => (
          <div key={project.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ height: '100px', background: '#eee', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Placeholder Image
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}