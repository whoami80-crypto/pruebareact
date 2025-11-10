import React from 'react';

// Estilos en el mismo archivo
const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #141414;
    color: #fff;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4;
    overflow-x: hidden;
  }

  /* NAVBAR STYLES */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 68px;
    padding: 0 4%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, transparent);
    z-index: 1000;
    transition: all 0.3s ease;
  }

  .navbar.scrolled {
    background-color: #141414;
  }

  .navbar-container {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .navbar-left {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .navbar-logo {
    color: #e50914;
    width: 92px;
    height: 30px;
  }

  .navbar-menu {
    display: flex;
    gap: 20px;
  }

  .navbar-link {
    color: #e5e5e5;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    font-weight: 400;
  }

  .navbar-link:hover {
    color: #b3b3b3;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .navbar-search, .navbar-notifications {
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .navbar-profile {
    position: relative;
  }

  .profile-avatar {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .avatar-img {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: #333;
  }

  /* HERO STYLES */
  .hero {
    position: relative;
    height: 80vh;
    margin-top: 68px;
    display: flex;
    align-items: flex-end;
    padding: 0 4% 10%;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)),
                url('https://images.unsplash.com/photo-1489599809505-fb40ebc14d51?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .hero-meta {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    font-size: 1.1rem;
  }

  .hero-badge {
    background: #e50914;
    padding: 2px 8px;
    border-radius: 3px;
    font-weight: 600;
  }

  .hero-description {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 600px;
    color: #e5e5e5;
  }

  .hero-actions {
    display: flex;
    gap: 15px;
  }

  .hero-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 30px;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
  }

  .play-btn {
    background: white;
    color: black;
  }

  .info-btn {
    background: rgba(109,109,110,0.7);
    color: white;
  }

  /* ROW STYLES */
  .row {
    margin: 40px 0;
    padding: 0 4%;
  }

  .row-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .row-items {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding: 10px 0;
  }

  .row-item {
    min-width: 220px;
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
    flex-shrink: 0;
  }

  .row-item:hover {
    transform: scale(1.05);
  }

  .row-item-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }

  /* FOOTER STYLES */
  .footer {
    background: #141414;
    border-top: 1px solid #333;
    padding: 50px 4% 30px;
    margin-top: 50px;
  }

  .footer-social {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
  }

  .social-link {
    color: #808080;
    font-size: 1.5rem;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }

  .link-column {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .footer-link {
    color: #808080;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .footer-copyright {
    color: #808080;
    font-size: 0.8rem;
    margin-top: 20px;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .navbar-menu {
      display: none;
    }
    
    .hero-title {
      font-size: 2rem;
    }
    
    .footer-links {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .row-item {
      min-width: 150px;
    }
  }
`;

// Componente Navbar
const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <svg width="92" height="30" viewBox="0 0 111 30" fill="currentColor">
              <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c1.75-.188 3.594-.344 5.25-.344v4.593c-1.75 0-4.406 0-6.406.093V0h10.406v4.687h-6.5v5.906h4.5v4.687h-4.5v5.906h6.5V26c-1.75 0-3.594 0-5.25-.093v-4.5c1.656 0 3.5.156 5.25.344v-6.5c-1.75-.094-3.5-.156-5.25-.156v-4.5c1.75 0 4.5 0 6.25.094V10.5h-4.5V5.813h4.5V0h4.688v4.687h-4.688v5.906h4.5v4.687h-4.5v.093zM4.78 0v26.25c-1.562 0-3.125 0-4.687.062V0h4.687z"></path>
            </svg>
          </div>
          
          <div className="navbar-menu">
            <a href="#inicio" className="navbar-link">Inicio</a>
            <a href="#series" className="navbar-link">Series</a>
            <a href="#peliculas" className="navbar-link">Películas</a>
            <a href="#nuevo" className="navbar-link">Nuevo</a>
            <a href="#milista" className="navbar-link">Mi lista</a>
          </div>
        </div>

        <div className="navbar-right">
          <div className="navbar-search">
            <i className="fas fa-search"></i>
          </div>
          
          <div className="navbar-notifications">
            <i className="fas fa-bell"></i>
          </div>

          <div className="navbar-profile">
            <div className="profile-avatar">
              <div className="avatar-img"></div>
              <i className="fas fa-caret-down"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Componente Hero
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">La Casa de Papel</h1>
        <div className="hero-meta">
          <span className="hero-badge">Nueva</span>
          <span>2023</span>
          <span>16+</span>
          <span>5 Temporadas</span>
        </div>
        <p className="hero-description">
          Ocho ladrones toman rehenes en la Fábrica Nacional de Moneda y Timbre de España, 
          mientras el líder manipula a la policía para cumplir con su plan.
        </p>
        <div className="hero-actions">
          <button className="hero-btn play-btn">
            <i className="fas fa-play"></i>
            Reproducir
          </button>
          <button className="hero-btn info-btn">
            <i className="fas fa-info-circle"></i>
            Más información
          </button>
        </div>
      </div>
    </section>
  );
};

// Componente Row
const Row = ({ title }) => {
  const items = [];
  for (let i = 1; i <= 8; i++) {
    items.push({
      id: i,
      image: `https://picsum.photos/300/450?random=${i}`
    });
  }

  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-items">
        {items.map((item) => (
          <div key={item.id} className="row-item">
            <img 
              src={item.image} 
              alt={`Película ${item.id}`}
              className="row-item-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#facebook" className="social-link">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="#instagram" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#twitter" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#youtube" className="social-link">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      
      <div className="footer-links">
        <div className="link-column">
          <a href="#audio" className="footer-link">Audio descriptivo</a>
          <a href="#investors" className="footer-link">Inversionistas</a>
          <a href="#legal" className="footer-link">Avisos legales</a>
        </div>
        <div className="link-column">
          <a href="#help" className="footer-link">Centro de ayuda</a>
          <a href="#jobs" className="footer-link">Empleo</a>
          <a href="#cookies" className="footer-link">Cookies</a>
        </div>
        <div className="link-column">
          <a href="#cards" className="footer-link">Tarjetas de regalo</a>
          <a href="#terms" className="footer-link">Términos de uso</a>
          <a href="#corporate" className="footer-link">Información corporativa</a>
        </div>
        <div className="link-column">
          <a href="#media" className="footer-link">Prensa</a>
          <a href="#privacy" className="footer-link">Privacidad</a>
          <a href="#contact" className="footer-link">Contáctanos</a>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>© 2024 Netflix Clone - Proyecto educativo</p>
      </div>
    </footer>
  );
};

// Componente Principal
function App() {
  return (
    <div className="App">
      <style>{styles}</style>
      <Navbar />
      <Hero />
      <Row title="Tendencias ahora" />
      <Row title="Originales de Netflix" />
      <Row title="Top 10 en México hoy" />
      <Row title="Películas de acción" />
      <Row title="Comedias" />
      <Footer />
    </div>
  );
}

export default App;
