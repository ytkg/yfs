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
          <p>New album "Midnight Grapefruit" coming soon!</p>
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
          <p>There are no images of the members yet. Please add them to `public/images/members`.</p>
        </section>

        <section id="discography">
          <h2>DISCOGRAPHY</h2>
          <p>There are no jacket images yet. Please add them to `public/images/jackets`.</p>
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
