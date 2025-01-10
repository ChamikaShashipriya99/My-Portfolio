import React from 'react';

const skills = [
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'REST APIs', logo: 'https://img.icons8.com/ios-filled/50/000000/api-settings.png' },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Microsoft SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'JWT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-plain.svg' },
  { name: 'NPM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  { name: 'Apache Tomcat', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg' },
  { name: 'Nodemon', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodemon/nodemon-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Canva', logo: 'https://img.icons8.com/color/48/000000/canva.png' },
  { name: 'Cisco', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg' },
  { name: 'Trello', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
];

const Skills = () => (
  <section 
    id="skills" 
    className="py-5" 
    style={{ 
      background: 'linear-gradient(135deg, rgba(24,24,27,0.3) 60%, rgba(35,39,47,0.2) 100%)', 
      color: '#fff',
      position: 'relative',
      zIndex: 1,
    }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12">
          <div className="p-5 rounded-4 shadow-lg mx-auto" style={{ background: 'rgba(35,39,47,0.4)', maxWidth: 900 }}>
            <h2 className="fw-bold mb-4 display-5 text-info" data-aos="fade-up">Skills</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill.name}
                  className="badge bg-info text-dark fs-6 px-4 py-2 shadow-sm d-flex align-items-center gap-2"
                  style={{ fontWeight: 600, fontSize: '1.1rem', letterSpacing: '1px' }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 40}
                >
                  <img src={skill.logo} alt={skill.name} style={{ width: 24, height: 24, marginRight: 8, background: '#fff', borderRadius: 4 }} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 