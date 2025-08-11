import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>YOKOGAWA FRUIT STORE</h1>
        <nav>
          <a href="#news">NEWS</a>
          <a href="#live">LIVE</a>
          <a href="#bio">BIOGRAPHY</a>
          <a href="#discography">DISCOGRAPHY</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <main>
        <section id="news">
          <h2>NEWS</h2>
          <p>New album "SILLY HIKES" will be released on 2025/09/01!</p>
        </section>

        <section id="live">
          <h2>LIVE</h2>
          <p>Next live: 2025/12/24 at Shibuya WWW</p>
        </section>

        <section id="bio">
          <h2>BIOGRAPHY</h2>
          <p>
            YOKOGAWA FRUIT STORE is a rock band formed in 2023.
            We deliver fresh and juicy music from Yokogawa.
          </p>
          <div className="members">
            <div className="member">
              <img src="/images/members/kaoru_vocal.PNG" alt="Kaoru" />
              <p>Kaoru (Vocal)</p>
            </div>
            <div className="member">
              <img src="/images/members/yui_vocal.PNG" alt="Yui" />
              <p>Yui (Vocal)</p>
            </div>
            <div className="member">
              <img src="/images/members/charlie_guitar.PNG" alt="Charlie" />
              <p>Charlie (Guitar)</p>
            </div>
            <div className="member">
              <img src="/images/members/yuki_base.PNG" alt="Yuki" />
              <p>Yuki (Base)</p>
            </div>
            <div className="member">
              <img src="/images/members/gordon_drum.PNG" alt="Gordon" />
              <p>Gordon (Drum)</p>
            </div>
          </div>
        </section>

        <section id="discography">
          <h2>DISCOGRAPHY</h2>
          <div className="album">
            <img src="/images/jackets/silly_hikes.PNG" alt="SILLY HIKES album jacket" />
            <h3>SILLY HIKES</h3>
            <p>Release Date: 2025/09/01</p>
          </div>
        </section>

        <section id="contact">
            <h2>CONTACT</h2>
            <p>For booking and inquiries, please email: contact@yokogawa-fruit.store</p>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} YOKOGAWA FRUIT STORE. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
