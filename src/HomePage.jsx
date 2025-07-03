import React from 'react';
import './index.css';

function HomePage() {
  return (
    <div className="home-global">
      <div className="home-container">
        <header className="home-header">
          <div className="logo-container">
            <img src="/image/logo.png" alt="Aesop Rock" className="logo" />
          </div>
          <nav className="nav-links">
            <a href="/stream">STREAM</a>
            <a href="/actualites">ACTUALITÉS</a>
          </nav>
        </header>

        <section className="main-content">
          <div className="text-section">
            <p>
              Rappeur et producteur new-yorkais, Aesop Rock une figure majeure du hip-hop underground américain. Reconnnu pour son flow dense et son écriture labyrinthique.<br />
              Il mêle introspection, absurdité et science-fiction dans des textes singuliers et puissants.<br />
              Fidèle au label indépendant Rhymesayers, Aesop Rock revient avec un tout nouvel album qui confirme sa place à part dans le paysage rap, loin des codes mainstream.
            </p>
          </div>
          <div className="image-section">
            <img src="/image/dd.png" alt="Aesop Rock Portrait" className="artist-image" />
          </div>
        </section>

        <section className="album-section">
          <div className="album-content">
            <div className="album-text">
              <h2 className="album-title">Black Hole<br />Superette</h2>
              <p className="album-description">
                <h2>  sortie le 30 mai 2025  </h2> <br></br>
                Black Hole Superette est un album concept aussi étrange que fascinant. Aesop Rock y construit un monde parallèle, entre supermarché intersidéral et hallucination urbaine.<br /><br />
                Chaque morceau est une allée sonore, remplie d’images tordues, de mots rares, de souvenirs flous.<br />
                Musicalement, l’album mêle production lo-fi, glitches analogiques, beats rugueux et voix nasale reconnaissable entre mille.<br />
                Loin des formats commerciaux, il privilégie la densité, l’expérimentation et une narration en spirale.<br /><br />
                Black Hole Superette est une œuvre qui demande à être explorée lentement, comme un rêve récurrent.
              </p>
             
            </div>
            <div className="album-cover">
              <img src="/image/plan.png" alt="Black Hole Superette Album" className="album-image" />
            </div>
          </div>
        </section>

        <section className="ecouter-section">
        <div className="ecouter-overlay">
      <a href="/stream" className="ecouter-button">
        <span className="arrow">&#9658;</span> ÉCOUTER
       </a>
       </div>
        </section>
               
         {/* SECTION TOURNEE */}
        <section className="tour-section">
          <h2 className="tour-title">TOURNÉE</h2>

          <div className="tour-city">
            <h3>Las Vegas, Nevada</h3>
            <p>T-Mobile Arena</p>
            <ul>
              <li>16 Juillet 2025 <span>&gt;</span> <a href="/billets">BILLETS</a></li>
              <li>18 Juillet 2025 <span>&gt;</span> <a href="/billets">BILLETS</a></li>
              <li>19 Juillet 2025 <span>&gt;</span> <a href="/billets">BILLETS</a></li>
            </ul>
          </div>

          <div className="tour-city">
            <h3>Paris, France</h3>
            <p>Accor Arena</p>
            <ul>
              <li>09 Juillet 2025 <span>&gt;</span> <a href="/billets">BILLETS</a></li>
              <li>10 Juillet 2025 <span>&gt;</span> <a href="/billets">BILLETS</a></li>
              <li>12 Juillet 2025 <span>&gt;</span> <a href="/billets">BILLETS</a></li>
            </ul>
          </div>

          <div className="tour-city">
            <h3>Los Angeles, Californie</h3>
            <p>Walt Disney Concert Hall</p>
            <ul>
              <li>09 Juillet 2025 <span>&gt;</span> <a href="/billets">BILLETS</a></li>
              <li>10 Juillet 2025 <span>&gt;</span> <a href="/billets">BILLETS</a></li>
              <li>12 Juillet 2025 <span>&gt;</span> <a href="/billets">BILLETS</a></li>
            </ul>
          </div>
        </section>
        <footer className="footer">
  <div className="footer-content">
    <div className="footer-links">
      <div>
        <p>Aide et support</p>
        <p>Politique de confidentialité</p>
        <p>Conditions générales</p>
      </div>
      <div>
        <p>Cookies</p>
        <p>Ne vendez pas mes informations personnelles</p>
        <p>Inscrivez-vous à la newsletter</p>
      </div>
    </div>

    <div className="footer-socials">
      <a href="https://www.instagram.com/aesoprockwins/" target='_blank'>
        <img src="/icon/insta.png" alt="Instagram" />
      </a>
      <a href="https://www.youtube.com/@rhymesayers" target='_blank'>
        <img src="/icon/youtube.png" alt="Youtube" />
      </a>
      <a href="https://fr.wikipedia.org/wiki/Aesop_Rock" target='_blank'>
        <img src="/public/icon/wikipe.png" alt="Wikipedia" />
      </a>
      <a href="https://music.apple.com/us/artist/aesop-rock/3858833" target='_blank'>
        <img src="/public/icon/apple music.png" alt="Apple Music" />
      </a>
    </div>
  </div>
</footer>
  {/* Optionnel : fond bas ou footer */}
        <div className="fond-bas"></div>
      </div>
    </div>
    
  );
}

export default HomePage;
