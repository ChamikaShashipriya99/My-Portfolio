import React, { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'ChamikaShashipriya99';
const REPO_COUNT = 100; // Fetch up to 100 repos
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const headers = GITHUB_TOKEN
  ? { Authorization: `token ${GITHUB_TOKEN}`, Accept: 'application/vnd.github.mercy-preview+json' }
  : { Accept: 'application/vnd.github.mercy-preview+json' };

const techStackFromTopics = topics =>
  topics && topics.length > 0 ? (
    <div className="mt-2">
      {topics.map(topic => (
        <span key={topic} className="badge bg-info text-dark me-2 mb-1" style={{ fontWeight: 600 }}>{topic}</span>
      ))}
    </div>
  ) : null;

function extractFirstParagraph(markdown) {
  if (!markdown) return '';
  // Remove badges and images
  const cleaned = markdown.replace(/!\[.*?\]\(.*?\)/g, '').replace(/<img[^>]*>/g, '');
  // Find the first non-empty paragraph
  const paragraphs = cleaned.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  return paragraphs[0] || '';
}

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPO_COUNT}`, { headers })
      .then(res => res.json())
      .then(async data => {
        if (!Array.isArray(data)) {
          setError('Failed to load projects from GitHub.');
          setLoading(false);
          return;
        }
        // For each repo, fetch topics (technologies) and README
        const reposWithDetails = await Promise.all(
          data.map(async repo => {
            // Fetch topics
            const topicsRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/topics`, { headers });
            const topicsData = await topicsRes.json();
            // Fetch README
            let readmeDesc = '';
            try {
              const readmeRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`, { headers });
              if (readmeRes.ok) {
                const readmeData = await readmeRes.json();
                if (readmeData.content) {
                  const decoded = atob(readmeData.content.replace(/\n/g, ''));
                  readmeDesc = extractFirstParagraph(decoded);
                }
              }
            } catch (e) {}
            return {
              ...repo,
              topics: topicsData.names || [],
              readmeDesc: readmeDesc || repo.description || 'No description provided.',
            };
          })
        );
        setRepos(reposWithDetails);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load projects from GitHub.');
        setLoading(false);
      });
  }, []);

  return (
    <section 
      id="projects" 
      className="py-5" 
      style={{ 
        background: 'linear-gradient(135deg, rgba(35,39,47,0.2) 60%, rgba(24,24,27,0.3) 100%)', 
        color: '#fff',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12">
            <div className="p-5 rounded-4 shadow-lg mx-auto" style={{ background: 'rgba(24,24,27,0.4)', maxWidth: 900 }}>
              <h2 className="fw-bold mb-4 display-5 text-info" data-aos="fade-up">Projects</h2>
              {loading && <div data-aos="fade-up">Loading projects...</div>}
              {error && <div className="alert alert-danger" data-aos="fade-up">{error}</div>}
              {!loading && !error && (
                <div className="row g-4">
                  {repos.map((repo, index) => {
                    const imageUrl = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;
                    return (
                      <div className="col-md-6 col-lg-4" key={repo.id} data-aos="flip-left" data-aos-delay={index * 100}>
                        <div className="card h-100 shadow-lg border-0" 
                          style={{ 
                            background: 'rgba(35,39,47,0.6)', 
                            transition: 'transform 0.22s cubic-bezier(.4,2,.6,1), box-shadow 0.22s cubic-bezier(.4,2,.6,1)',
                            boxShadow: '0 4px 20px rgba(13,202,240,0.1), 0 2px 8px rgba(0,0,0,0.2)',
                          }}
                          onMouseOver={e => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(13,202,240,0.32), 0 4px 24px 0 rgba(0,0,0,0.22)';
                          }}
                          onMouseOut={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(13,202,240,0.1), 0 2px 8px rgba(0,0,0,0.2)';
                          }}
                        >
                          <img
                            src={imageUrl}
                            alt={repo.name}
                            className="card-img-top"
                            style={{ height: 180, objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                            onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                          />
                          <div className="card-body text-start">
                            <h5 className="card-title text-info fw-bold">{repo.name}</h5>
                            <p className="card-text text-light" style={{ minHeight: 60 }}>{repo.readmeDesc}</p>
                            {techStackFromTopics(repo.topics)}
                          </div>
                          <div className="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center">
                            <a href={repo.html_url} className="btn btn-outline-info btn-sm fw-bold" target="_blank" rel="noopener noreferrer">GitHub</a>
                            {repo.homepage && <a href={repo.homepage} className="btn btn-outline-light btn-sm fw-bold" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 