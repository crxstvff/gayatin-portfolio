export default function Projects() {
  const sampleProjects = [
    { id: 1, title: "Project 1", description: "A simple web application built with JavaScript." },
    { id: 2, title: "Project 2", description: "A weather app project built with an external API." },
    { id: 3, title: "Project 3", description: "A responsive landing page built with CSS grid." }
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