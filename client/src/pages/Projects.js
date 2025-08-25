import React, { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'ChamikaShashipriya99';
const REPO_COUNT = 100;
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const headers = GITHUB_TOKEN
  ? { Authorization: `token ${GITHUB_TOKEN}`, Accept: 'application/vnd.github.mercy-preview+json' }
  : { Accept: 'application/vnd.github.mercy-preview+json' };

const techStackFromTopics = topics =>
  topics && topics.length > 0 ? (
    <div className="flex flex-wrap gap-2 mb-6">
      {topics.slice(0, 4).map(topic => (
        <span key={topic} className="px-4 py-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 text-primary-500 rounded-full text-sm font-semibold border border-primary-500/30 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-500/25 hover:to-secondary-500/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/30">
          {topic}
        </span>
      ))}
      {topics.length > 4 && (
        <span className="px-4 py-2 bg-gradient-to-r from-gray-500/15 to-gray-500/10 text-gray-500 rounded-full text-sm font-semibold border border-gray-500/30">
          +{topics.length - 4}
        </span>
      )}
    </div>
  ) : null;

function extractFirstParagraph(markdown) {
  if (!markdown) return '';
  const cleaned = markdown.replace(/!\[.*?\]\(.*?\)/g, '').replace(/<img[^>]*>/g, '');
  const paragraphs = cleaned.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  return paragraphs[0] || '';
}

const Projects = ({ initialFilter = 'all' }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(initialFilter);

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
        const reposWithDetails = await Promise.all(
          data.map(async repo => {
            const topicsRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/topics`, { headers });
            const topicsData = await topicsRes.json();
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

  const allLanguages = [...new Set(repos.map(repo => repo.language).filter(Boolean))].sort();
  const filteredRepos = filter === 'all' ? repos : repos.filter(repo => repo.language === filter);

  return (
    <section 
      id="projects" 
      className="py-20 relative z-10 min-h-screen"
      style={{ 
        background: 'linear-gradient(135deg, rgba(35,39,47,0.3) 0%, rgba(24,24,27,0.4) 100%)',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl lg:text-6xl gradient-text mb-6 text-shadow" data-aos="fade-up">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Explore my latest work and contributions to the developer community
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="200">
          <button 
            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-md ${
              filter === 'all' 
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30' 
                : 'bg-primary-500/10 text-primary-500 border-2 border-primary-500/30 hover:bg-primary-500/20 hover:border-primary-500/50 hover:-translate-y-0.5'
            }`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          {allLanguages.map(language => (
            <button 
              key={language}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-md ${
                filter === language 
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30' 
                  : 'bg-primary-500/10 text-primary-500 border-2 border-primary-500/30 hover:bg-primary-500/20 hover:border-primary-500/50 hover:-translate-y-0.5'
              }`}
              onClick={() => setFilter(language)}
            >
              {language}
            </button>
          ))}
        </div>

        {loading && (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="w-12 h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">Loading amazing projects...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="glass-card p-8 max-w-md mx-auto">
              <p className="text-red-400 text-lg">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((repo, index) => {
              const imageUrl = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;
              return (
                <div 
                  key={repo.id} 
                  className="glass-card overflow-hidden group relative transition-all duration-700 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary-500/30 hover:border-primary-500/50 animate-float"
                  data-aos="fade-up" 
                  data-aos-delay={index * 50}
                  style={{
                    animationDelay: `${index % 3 * 2}s`,
                  }}
                >
                  {/* Gradient border on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 animate-gradient-shift" />
                  
                  <div className="relative h-60 overflow-hidden bg-gradient-to-br from-primary-500/10 to-secondary-500/10">
                    <img
                      src={imageUrl}
                      alt={repo.name}
                      className="w-full h-full object-cover transition-all duration-800 group-hover:scale-115 group-hover:rotate-2 filter brightness-90 contrast-110 group-hover:brightness-110 group-hover:contrast-120 group-hover:saturate-120"
                      onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                    />
                    
                    {/* Floating elements */}
                    <div className="absolute top-2.5 right-2.5 w-5 h-5 bg-primary-500/60 rounded-full animate-float" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-secondary-500/40 rounded-full animate-bounce-slow" />
                    
                    {/* Enhanced overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-secondary-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                      <div className="flex gap-4 transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <a 
                          href={repo.html_url} 
                          className="flex items-center gap-2 px-6 py-3 bg-white/95 text-secondary-500 rounded-full font-bold text-sm transition-all duration-400 hover:bg-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg backdrop-blur-md relative overflow-hidden group/btn"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-600" />
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-120" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                        {repo.homepage && (
                          <a 
                            href={repo.homepage} 
                            className="flex items-center gap-2 px-6 py-3 bg-green-600/95 text-white rounded-full font-bold text-sm transition-all duration-400 hover:bg-green-600 hover:-translate-y-1 hover:scale-105 hover:shadow-lg backdrop-blur-md"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-7 bg-gradient-to-br from-dark-700/90 to-dark-800/80 relative">
                    <h3 className="text-2xl font-black gradient-text mb-4 relative">
                      {repo.name}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-600 group-hover:w-full" />
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                      {repo.readmeDesc}
                    </p>
                    {techStackFromTopics(repo.topics)}
                    
                    <div className="flex justify-between items-center pt-6 border-t border-primary-500/20 relative">
                      <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-600 group-hover:w-full" />
                      <div className="flex items-center gap-2 text-gray-500 text-sm font-medium group-hover:text-gray-400 transition-colors duration-300">
                        <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>{repo.language || 'Other'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm font-medium group-hover:text-gray-400 transition-colors duration-300">
                        <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
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
          <div className="text-center py-16" data-aos="fade-up">
            <div className="glass-card p-12 max-w-md mx-auto">
              <p className="text-gray-400 text-xl">No projects found for this filter.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;