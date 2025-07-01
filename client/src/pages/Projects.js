import React, { useEffect, useState } from 'react';
import './Projects.css';

const GITHUB_USERNAME = 'ChamikaShashipriya99';
const REPO_COUNT = 100; // Fetch up to 100 repos
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const headers = GITHUB_TOKEN
  ? { Authorization: `token ${GITHUB_TOKEN}`, Accept: 'application/vnd.github.mercy-preview+json' }
  : { Accept: 'application/vnd.github.mercy-preview+json' };

const techStackFromTopics = topics =>
  topics && topics.length > 0 ? (
    <div className="tech-stack">
      {topics.slice(0, 4).map(topic => (
        <span key={topic} className="tech-tag">{topic}</span>
      ))}
      {topics.length > 4 && <span className="tech-tag more">+{topics.length - 4}</span>}
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

const Projects = ({ initialFilter = 'all' }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(initialFilter);

  // Update filter when initialFilter prop changes
  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

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

  // Get unique languages (excluding null/empty), sorted alphabetically
  const allLanguages = [...new Set(repos.map(repo => repo.language).filter(Boolean))].sort();

  // Filtered repos by language
  const filteredRepos = filter === 'all' 
    ? repos 
    : repos.filter(repo => repo.language === filter);

  return (
    <section 
      id="projects" 
      className="projects-section"
    >
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title" data-aos="fade-up">
            <span className="title-accent">My</span> Projects
          </h2>
          <p className="projects-subtitle" data-aos="fade-up" data-aos-delay="100">
            Explore my latest work and contributions to the developer community
          </p>
        </div>

        {/* Filter Tabs by Language */}
        <div className="filter-tabs" data-aos="fade-up" data-aos-delay="200">
          <button 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          {allLanguages.map(language => (
            <button 
              key={language}
              className={`filter-tab ${filter === language ? 'active' : ''}`}
              onClick={() => setFilter(language)}
            >
              {language}
            </button>
          ))}
        </div>

        {loading && (
          <div className="loading-container" data-aos="fade-up">
            <div className="loading-spinner"></div>
            <p>Loading amazing projects...</p>
          </div>
        )}

        {error && (
          <div className="error-container" data-aos="fade-up">
            <div className="error-message">{error}</div>
          </div>
        )}

              {!loading && !error && (
          <div className="projects-grid">
            {filteredRepos.map((repo, index) => {
                    const imageUrl = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;
                    return (
                <div 
                  className="project-card" 
                  key={repo.id} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 50}
                >
                  <div className="project-image-container">
                          <img
                            src={imageUrl}
                            alt={repo.name}
                      className="project-image"
                            onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                          />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={repo.html_url} 
                          className="project-link github-link" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                        {repo.homepage && (
                          <a 
                            href={repo.homepage} 
                            className="project-link demo-link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            Live Demo
                          </a>
                        )}
                          </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{repo.name}</h3>
                    <p className="project-description">{repo.readmeDesc}</p>
                    {techStackFromTopics(repo.topics)}
                    
                    <div className="project-meta">
                      <div className="meta-item">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>{repo.language || 'Other'}</span>
                      </div>
                      <div className="meta-item">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>{repo.stargazers_count} stars</span>
                      </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

        {!loading && !error && filteredRepos.length === 0 && (
          <div className="no-projects" data-aos="fade-up">
            <p>No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 