import React from 'react'
import JackzHero from "./assets/jackz.png"
import Jupiter from "./assets/jup_ag.png"
import ChiefJackz from "./assets/chief_jackz.png"
import { FaDiscord, FaTwitter } from 'react-icons/fa'

function App() {
    console.log('JackzHero import:', JackzHero);
    const ca = 'ea11r8Nzg8cj2jUNBiq9Xv3tJojJDUjVdvp3uFaLu3q'

    const nftData = [
        { image: ChiefJackz, title: "$JACKZ Alpha Mint 🍳🎃", description: "The chef is here. First drop, first recipe. Cook this Alpha and claim your spot at the table.", status: "available", mintText: "Cook Now 🔥", mintLink: "https://launchmynft.io/sol/20256" },
        { image: JackzHero, title: "Jackz #002", description: "The original chaotic pumpkin with latte addiction and better fashion sense.", status: "coming_soon", mintText: "Coming Soon", mintLink: "#" },
        { image: JackzHero, title: "Jackz #003", description: "Sassy digital twin ready to troll the adults.", status: "coming_soon", mintText: "Coming Soon", mintLink: "#" },
        { image: JackzHero, title: "Jackz #004", description: "Fashion-forward pumpkin with crypto dreams.", status: "coming_soon", mintText: "Coming Soon", mintLink: "#" }
    ];

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
                    <a className="btn cta" href="#cta">Buy</a>
                </nav>
            </header>

            <main className="wrap hero">
                <div className="hero-copy">
                    <h1>Jackz on Sol</h1>
                    <p className="lead">
                        <strong>Jackz</strong> is the dysfunctional pack of pumpkins — a degen-coded, faith-sprinkled community project built on love, chaos, and fun. Holders aren’t just in the trenches, they’re in the patches — where every <strong>Jackz</strong> has a persona, a vibe and a story. Welcome to the Patches!
                    </p>
                    <div className="btn-row">
                        <a className="btn flex items-center space-x-2" href="https://discord.gg/xv6zk3ze8v" target="_blank" rel="noopener">
                            <FaDiscord className="w-5 h-5" />
                        </a>
                        <a className="btn flex items-center space-x-2" href="https://x.com/" target="_blank" rel="noopener">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                        <a className="btn primary" href="#cta">Buy</a>
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
                    <h3>📜 Whitepaper</h3>
                    <p>No PDF flex here — the “plan” is vibes, memes, and an NFT drop cooking in the back room. Collect Jackz pixels, flex them in the chat, and maybe unlock some degen perks down the line. Roadmap? More like road-ish… but we’re building.</p>
                </a>
                <a className="card" href="#" target="_blank" rel="noopener">
                    <h3>📈 DexTools / Birdeye</h3>
                    <p>Live chart, liquidity, and volume. See who’s dumping, who’s coping, and where support really is. Useful for tracking entries/exits without pretending you “don’t look at price.”
                        <br /> 👉 <a href="https://dextools.io" target="_blank">Open DexTools</a> | <a href="https://birdeye.so" target="_blank">Open Birdeye</a>
                    </p>
                </a>
                <a className="card" href="#" target="_blank" rel="noopener">
                    <div className="flex">
                        <img src={Jupiter} className="w-[32px] h-[32px]" alt="Jupiter logo" />
                        <h3>Jupiter</h3>
                    </div>
                    <p>Buy JACKZ in one tap with SOL. Slippage tips included so you don’t fumble the bag. Fast, simple, and you keep custody — moon or rug, your choice, your wallet.
                        👉 Swap on Jupiter</p>
                </a>
            </section>
            <section className="wrap section nft-preview">
                <h2>NFT Preview</h2>
                <div className="overflow-x-auto">
                    <div className="flex space-x-6 pb-4">
                        {nftData.map((nft, index) => (
                            <div key={index} className="flex-shrink-0 w-64">
                                <div className="relative">
                                    <img src={nft.image} alt={nft.title} className={`w-full h-48 object-cover rounded-lg mb-4 ${nft.status === 'coming_soon' ? 'blur-sm' : ''}`} />
                                    {nft.status === 'coming_soon' && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-lg font-bold">Coming Soon</span>
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{nft.title}</h3>
                                <p className="text-sm mb-4">{nft.description}</p>
                                <a href={nft.mintLink} className={`btn ${nft.status === 'available' ? 'primary' : 'disabled'}`} target="_blank" rel="noopener" onClick={nft.mintLink === "#" ? (e) => e.preventDefault() : undefined}>
                                    {nft.mintText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="wrap section social-links">
                <h2>Join the Community</h2>
                <div className="flex justify-center space-x-12">
                    <a className="white" href="https://x.com/jackzonsol?s=21" target="_blank" rel="noopener">
                        <FaTwitter className="w-12 h-12" />
                    </a>
                    <a className="white" href="https://discord.gg/xv6zk3ze8v" target="_blank" rel="noopener">
                        <FaDiscord className="w-12 h-12" />
                    </a>
                </div>
            </section>

            <section id="cta" className="wrap section center">
                <h2>Ready?</h2>
                <p>Point your mint or DEX link here. Button updates in one line.</p>
                <p><a className="btn primary big" href="#" target="_blank" rel="noopener">Buy on Jupiter</a></p>
                <p className="tiny">Not financial advice. Do your own research.</p>
            </section>

            <footer className="wrap footer">
                <p>© <span>{new Date().getFullYear()}</span> JACKZ.FUN — built fast with ♥</p>
            </footer>
        </>
    )
}

export default App