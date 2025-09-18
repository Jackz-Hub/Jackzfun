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
                    <span>JACKZ.FUN</span>
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
                    <strong>Jackz?</strong> Oh, he’s not <i>just</i> a pumpkin.
                    He’s your chaotic digital twin with better fashion sense.
                    Loves lattes, trolling adults, and holding crypto like it’s candy.

                    Born from memes, raised on sass, and minted to mess with you.
                    Welcome to the family… whether you like it or not. 😈🎃
                </p>
            </section>

            <section id="links" className="wrap cards">
                <a className="card" href="#" target="_blank" rel="noopener">
                    <h3>🧻 Whitepaper (lol)</h3>
                    <p>No PDF flex here — the “plan” is vibes, memes, and an NFT drop cooking in the back room. Collect Jackz pixels, flex them in the chat, and maybe unlock some degen perks down the line. Roadmap? More like road-ish… but we’re building.</p>
                </a>
                <a className="card" href="#" target="_blank" rel="noopener">
                    <h3>📈 DexTools / Birdeye</h3>
                    <p>Live chart, liquidity, and volume. See who’s dumping, who’s coping, and where support really is. Useful for tracking entries/exits without pretending you “don’t look at price.”
                        👉 Open DexTools | Open Birdeye
                    </p>
                </a>
                <a className="card" href="#" target="_blank" rel="noopener">
                    <h3>🚀 Jupyter</h3>
                    <p>Buy JACKZ in one tap with SOL. Slippage tips included so you don’t fumble the bag. Fast, simple, and you keep custody — moon or rug, your choice, your wallet.
                        👉 Swap on Jupyter</p>
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