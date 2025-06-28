import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const YOUR_AVATAR = '/src/assets/profile.jpg'; // Update this path if needed

const defaultTestimonials = [
  {
    quote: "Chamika is a dedicated and talented developer. His attention to detail and passion for learning are truly impressive!",
    author: "Jane Doe",
    role: "Project Manager, ABC Tech",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Working with Chamika was a pleasure. He always delivers on time and exceeds expectations.",
    author: "John Smith",
    role: "Team Lead, Freelance Client",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "A quick learner and a great team player. Highly recommended for any software project!",
    author: "Emily Lee",
    role: "Senior Developer, XYZ Solutions",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    quote: "Chamika's creativity and professionalism made our project a success!",
    author: "Michael Brown",
    role: "CEO, Startup Inc.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    quote: "He communicates clearly and is always willing to help others.",
    author: "Sara White",
    role: "Designer, Creative Studio",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  }
];

const LOCAL_KEY = 'user_testimonials';

function getVisibleCount() {
  if (window.innerWidth < 700) return 1;
  if (window.innerWidth < 1000) return 2;
  return 3;
}

const Testimonials = () => {
  const [userTestimonials, setUserTestimonials] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', quote: '', avatarUrl: '' });
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(YOUR_AVATAR);
  const [error, setError] = useState('');
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const fileInputRef = useRef();

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) setUserTestimonials(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(userTestimonials));
  }, [userTestimonials]);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (avatarFile) {
      const reader = new FileReader();
      reader.onload = e => setAvatarPreview(e.target.result);
      reader.readAsDataURL(avatarFile);
    } else if (form.avatarUrl) {
      setAvatarPreview(form.avatarUrl);
    } else {
      setAvatarPreview(YOUR_AVATAR);
    }
  }, [avatarFile, form.avatarUrl]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    setAvatarFile(file);
    setForm({ ...form, avatarUrl: '' });
    setError('');
  };

  const handleAvatarUrlChange = e => {
    setForm({ ...form, avatarUrl: e.target.value });
    setAvatarFile(null);
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.role.trim() || !form.quote.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    let avatar = YOUR_AVATAR;
    if (avatarFile) {
      avatar = avatarPreview;
    } else if (form.avatarUrl) {
      avatar = form.avatarUrl;
    }
    setUserTestimonials([
      ...userTestimonials,
      {
        quote: form.quote,
        author: form.name,
        role: form.role,
        avatar,
      }
    ]);
    setForm({ name: '', role: '', quote: '', avatarUrl: '' });
    setAvatarFile(null);
    setAvatarPreview(YOUR_AVATAR);
    setError('');
    setCurrent(defaultTestimonials.length + userTestimonials.length); // Show the new testimonial
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const allTestimonials = [...defaultTestimonials, ...userTestimonials];
  const total = allTestimonials.length;

  // Carousel logic for multi-item
  const half = Math.floor(visibleCount / 2);
  let slides = [];
  for (let i = 0; i < visibleCount; i++) {
    let idx = (current - half + i + total) % total;
    slides.push(allTestimonials[idx]);
  }

  const goTo = idx => setCurrent((idx + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title" data-aos="fade-up">
          <span className="title-accent">Testimonials</span>
        </h2>
        <p className="testimonials-subtitle" data-aos="fade-up" data-aos-delay="100">
          What people say about working with me
        </p>
        <div className="testimonials-carousel multi">
          <button className="carousel-arrow left" onClick={prev} aria-label="Previous testimonial">&#8592;</button>
          <div className="carousel-track multi">
            {slides.map((t, i) => {
              const isCenter = i === Math.floor(visibleCount / 2);
              return (
                <div
                  className={`carousel-slide multi${isCenter ? ' active' : ''}`}
                  key={i + '-' + t.author}
                  style={{ transition: 'transform 0.5s cubic-bezier(.4,2,.6,1), opacity 0.5s', opacity: isCenter ? 1 : 0.7 }}
                  aria-hidden={!isCenter && visibleCount === 1}
                >
                  <div className={`testimonial-card${isCenter ? ' highlight' : ''}`}>
                    <div className="testimonial-quote">“{t.quote}”</div>
                    <div className="testimonial-author-row">
                      <img className="testimonial-avatar" src={t.avatar} alt={t.author} />
                      <div>
                        <div className="testimonial-author">{t.author}</div>
                        <div className="testimonial-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="carousel-arrow right" onClick={next} aria-label="Next testimonial">&#8594;</button>
        </div>
        <div className="carousel-dots">
          {allTestimonials.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot${idx === current ? ' active' : ''}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
        <form className="testimonial-form" onSubmit={handleSubmit} autoComplete="off">
          <h3 className="testimonial-form-title">Add Your Testimonial</h3>
          <div className="testimonial-avatar-upload-row">
            <div className="testimonial-avatar-preview">
              <img src={avatarPreview} alt="Avatar Preview" />
            </div>
            <div className="testimonial-avatar-inputs">
              <label className="testimonial-avatar-upload-btn">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleAvatarChange}
                  ref={fileInputRef}
                />
              </label>
              <span className="testimonial-avatar-or">or</span>
              <div className="form-group">
                <input
                  type="url"
                  name="avatarUrl"
                  className="form-input"
                  value={form.avatarUrl}
                  onChange={handleAvatarUrlChange}
                  autoComplete="off"
                  required={false}
                />
                <label className="form-label">Avatar Image URL (optional)</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-input"
              value={form.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label className="form-label">Your Name*</label>
            {error && !form.name.trim() && <div className="form-error">Name is required.</div>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="role"
              className="form-input"
              value={form.role}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label className="form-label">Your Role / Company*</label>
            {error && !form.role.trim() && <div className="form-error">Role is required.</div>}
          </div>
          <div className="form-group">
            <textarea
              name="quote"
              className="form-input textarea"
              value={form.quote}
              onChange={handleChange}
              autoComplete="off"
              required
              rows={3}
            />
            <label className="form-label">Your Testimonial*</label>
            {error && !form.quote.trim() && <div className="form-error">Testimonial is required.</div>}
          </div>
          {error && <div className="form-error" style={{textAlign:'center'}}>{error}</div>}
          <button type="submit" className="testimonial-send-btn">Submit Testimonial</button>
        </form>
      </div>
    </section>
  );
};

export default Testimonials; 