import React from 'react';

const timeline = [
  {
    type: 'Education',
    year: 'July 2023 - Present',
    title: 'BSc (Hons) in Information Technology',
    place: 'Sri Lanka Institute of Information Technology (SLIIT)',
    iconUrl: 'https://img.icons8.com/color/48/000000/graduation-cap.png',
  },
  {
    type: 'Education',
    year: '2019 - 2022',
    title: 'Automobile Motor Mechanic Course',
    place: 'Automobile Engineering Training Institute - Orugodawatta',
    iconUrl: 'https://img.icons8.com/color/48/000000/car--v1.png',
  },
  {
    type: 'Education',
    year: '2016',
    title: 'Information & Communication Technology (MS Office Package) Course',
    place: 'The Open University Sri Lanka, Ambalangoda',
    iconUrl: 'https://img.icons8.com/color/48/000000/laptop--v1.png',
  },
  {
    type: 'Education',
    year: '2022',
    title: 'Short Course in Listening and Speaking',
    place: 'The Open University Sri Lanka, Ambalangoda',
    iconUrl: 'https://img.icons8.com/color/48/000000/microphone.png',
  },
];

const Resume = () => (
  <section 
    id="resume" 
    className="py-20 relative z-10"
    style={{ 
      background: 'linear-gradient(135deg, rgba(24,24,27,0.3) 60%, rgba(35,39,47,0.2) 100%)',
    }}
  >
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-black text-4xl lg:text-5xl gradient-text mb-6 text-shadow" data-aos="fade-up">
          My Resume
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Download my resume or explore my journey below
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row glass-card overflow-hidden max-w-6xl mx-auto min-h-[420px]">
        {/* Left: Info & Roadmap */}
        <div className="lg:w-1/2 p-12 bg-dark-800/55 border-r border-primary-500/20">
          <a
            href="https://drive.google.com/file/d/1TyhpkBU6cNPi3uqAojoDZknd57lGbcTz/view?usp=sharing"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-lg px-8 py-4 rounded-3xl shadow-lg shadow-primary-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/30 mb-6"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="text-xl">⬇️</span> 
            Download Resume (PDF)
          </a>
          
          <div className="text-gray-400 text-lg mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Passionate about building impactful software and always eager to learn new technologies. Here's a quick look at my journey so far:
          </div>
          
          <div className="space-y-10 relative" data-aos="fade-up" data-aos-delay="400">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex items-start relative">
                <div className="relative flex-shrink-0 w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/20 border-4 border-dark-700 mr-6">
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-dark-700 text-primary-500 text-sm font-bold rounded-2xl px-3 py-1 shadow-lg">
                    {idx + 1}
                  </span>
                  <img src={item.iconUrl} alt={item.title + ' icon'} className="w-8 h-8" />
                </div>
                
                <div className="flex-1 pt-1">
                  <div className="text-sm text-primary-500 font-semibold mb-1">{item.type}</div>
                  <div className="text-lg font-bold text-white mb-1">{item.title}</div>
                  <div className="text-gray-400 mb-1">{item.place}</div>
                  <div className="text-sm text-primary-500 font-semibold">{item.year}</div>
                </div>
                
                {idx !== timeline.length - 1 && (
                  <div className="absolute left-7 top-14 w-1 h-10 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Right: PDF Preview */}
        <div className="lg:w-1/2 p-12 flex items-center justify-center" data-aos="fade-left" data-aos-delay="600">
          <div className="w-full max-w-sm glass-card overflow-hidden">
            <iframe
              src="https://drive.google.com/file/d/1TyhpkBU6cNPi3uqAojoDZknd57lGbcTz/preview"
              title="Resume Preview"
              className="w-full h-96 border-0 rounded-2xl"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;