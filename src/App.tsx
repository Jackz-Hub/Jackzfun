import JackzHero from './assets/images/jackz.png'

function App() {
  const ca = 'So1anaContractGoesHereDontForget'

  const copyCa = async () => {
    try {
      await navigator.clipboard.writeText(ca)
      alert('Contract copied!')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <header className="wrap header">
        <a className="brand" href="/">
          <img src="/favicon.png" alt="Jack logo" />
          <span>JACK.FUN</span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#links">Links</a>
          <a className="btn cta" href="#cta">Mint / Buy</a>
        </nav>
      </header>

      <main className="wrap hero">
        <div className="hero-copy">
          <h1>Jackz on Sol</h1>
          <p className="lead">
            <strong>Jackz</strong> is the dysfunctional pack of pumpkins — a degen-coded, faith-sprinkled community project built on love, chaos, and fun. Holders aren’t just in the trenches, they’re in the patches — where every <strong>Jackz</strong> has a persona, a vibe and a story. Welcome to the Patches!
          </p>
          <div className="btn-row">
            <a className="btn" href="https://t.me/jackz" target="_blank" rel="noopener">Telegram</a>
            <a className="btn" href="https://x.com/" target="_blank" rel="noopener">X / Twitter</a>
            <a className="btn primary" href="#cta">Mint / Buy</a>
          </div>
          <p className="tiny">
            CA: <span id="ca">{ca}</span> <button className="copy" onClick={copyCa} aria-label="Copy contract address">Copy</button>
          </p>
        </div>
        <div className="hero-art">
          <img src={JackzHero} alt="Jackz pixel hero" />
        </div>
      </main>

      <section id="about" className="wrap section">
        <h2>About</h2>
        <p>
          JACK is a playful, community-led project. This site is a single-file landing you can host anywhere (Vercel, GitHub Pages, Netlify). Swap links + graphics and ship.
        </p>
      </section>

      <section id="links" className="wrap cards">
        <a className="card" href="#" target="_blank" rel="noopener">
          <h3>Whitepaper / Notion</h3>
          <p>Short write-up for curious folks.</p>
        </a>
        <a className="card" href="#" target="_blank" rel="noopener">
          <h3>Dextools / Birdeye</h3>
          <p>Live chart + liquidity.</p>
        </a>
        <a className="card" href="#" target="_blank" rel="noopener">
          <h3>Jupiter</h3>
          <p>Trade on Solana in one tap.</p>
        </a>
      </section>

      <section id="cta" className="wrap section center">
        <h2>Ready?</h2>
        <p>Point your mint or DEX link here. Button updates in one line.</p>
        <p><a className="btn primary big" href="#" target="_blank" rel="noopener">Buy on Jupiter</a></p>
        <p className="tiny">Not financial advice. Do your own research.</p>
      </section>

      <footer className="wrap footer">
        <p>© <span>{new Date().getFullYear()}</span> JACK.FUN — built fast with ♥</p>
      </footer>
    </>
  )
}

export default App