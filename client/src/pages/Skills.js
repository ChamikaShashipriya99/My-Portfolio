import React from 'react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Microsoft SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    ],
  },
  {
    title: "Tools and IDE's",
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'NPM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Canva', logo: 'https://img.icons8.com/color/48/000000/canva.png' },
      { name: 'Cisco', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg' },
      { name: 'Trello', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
      { name: 'Nodemon', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodemon/nodemon-original.svg' },
      { name: 'Apache Tomcat', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg' },
    ],
  },
  {
    title: "Frameworks & Platforms",
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
      { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'JWT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-plain.svg' },
    ],
  },
];

const handleMouseMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const mx = ((x / rect.width) - 0.5) * 2;
  const my = ((y / rect.height) - 0.5) * 2;
  card.style.setProperty('--mx', mx.toFixed(2));
  card.style.setProperty('--my', my.toFixed(2));
};

const handleMouseLeave = (e) => {
  const card = e.currentTarget;
  card.style.setProperty('--mx', 0);
  card.style.setProperty('--my', 0);
};

const Skills = () => (
  <section 
    id="skills" 
    className="py-20 relative z-10"
    style={{ 
      background: 'linear-gradient(135deg, rgba(24,24,27,0.3) 60%, rgba(35,39,47,0.2) 100%)',
    }}
  >
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-black text-4xl lg:text-5xl gradient-text mb-6 text-shadow" data-aos="fade-up">
          My Skills
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Technologies, languages, and tools I work with
        </p>
      </div>
      
      <div className="space-y-16">
        {skillCategories.map((category, catIdx) => (
          <div key={category.title} className="space-y-8">
            <h3 
              className="text-2xl font-bold text-primary-500 text-left tracking-wide" 
              data-aos="fade-up" 
              data-aos-delay={150 + catIdx * 50}
            >
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
              {category.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass-card p-8 flex flex-col items-center min-w-[120px] min-h-[150px] cursor-pointer group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/20 hover:border-primary-500"
                  data-aos="zoom-in"
                  data-aos-delay={index * 30}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: 'rotateY(calc(var(--mx, 0) * 10deg)) rotateX(calc(var(--my, 0) * 10deg))',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Radial gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at calc(50% + var(--mx, 0) * 40%) calc(50% + var(--my, 0) * 40%), rgba(13,202,240,0.18), transparent 70%)',
                    }}
                  />
                  
                  <div className="w-12 h-12 bg-white/85 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/10 relative z-10">
                    <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-lg font-semibold text-primary-500 text-center tracking-wide relative z-10">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;