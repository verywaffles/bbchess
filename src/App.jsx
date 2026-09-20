import "./App.css";

const members = [
  {
    name: "Shaan",
    username: "@very_waffles",
    url: "https://lichess.org/@/very_waffles",
    label: "Shaan on Lichess",
  },
  {
    name: "Aryan",
    username: "@Supertable418",
    url: "https://lichess.org/@/Supertable418",
    label: "Aryan on Lichess",
  },
  {
    name: "Ranveer",
    username: "@ranveer2913",
    url: "https://www.chess.com/member/ranveer2913",
    label: "Ranveer on Chess.com",
  },
  {
    name: "Salih",
    username: "@XEntityx404",
    url: "https://lichess.org/@/XEntityx404",
    label: "Salih on Lichess",
  },
];

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#home">
          Boston Bishops
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#members">Members</a>
          <a href="#tournaments">Tournaments</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <p className="eyebrow">Boston, Massachusetts</p>

              <h1>The Boston Bishops of Chess</h1>

              <p className="hero-description">
                The Boston Bishops is a student chess club built around
                competition, community, and a shared love of the game. Whether
                you&apos;re here to sharpen your skills, challenge new opponents,
                or simply enjoy a game of chess, there&apos;s a place for you on
                the board.
              </p>

              <a className="hero-button" href="#join">
                Join the Club
              </a>
            </div>
          </div>
        </section>

        <section id="members" className="section">
          <div className="section-inner">
            <p className="section-label">The Club</p>
            <h2>Members</h2>
            <p className="section-description">
              Meet the players who make up the Boston Bishops.
            </p>

            <div className="members-list">
              {members.map(({ name, username, url, label }) => (
                <div className="member" key={name}>
                  <div className="member-name">{name}</div>

                  <a
                    className="member-platform"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                  >
                    <span className="lichess-icon">♞</span>
                    <span>{username}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tournaments" className="section section-light">
          <div className="section-inner">
            <p className="section-label">Compete</p>
            <h2>Tournaments</h2>
            <p className="section-description">
              Find upcoming tournaments, club events, and opportunities to
              compete with other players.
            </p>

            <div className="tournaments-placeholder">
              <p>Upcoming tournaments will be added here.</p>
            </div>
          </div>
        </section>

        <section id="join" className="join-section">
          <div className="join-content">
            <p className="section-label">Become a Bishop</p>
            <h2>Join the Boston Bishops</h2>

            <p>
              Ready to play? Join the Boston Bishops on Lichess and become part
              of the club.
            </p>

            <a
              className="join-button"
              href="https://lichess.org/team/boston-bishops-of-chess"
              target="_blank"
              rel="noreferrer"
            >
              Join on Lichess
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Boston Bishops of Chess</p>
      </footer>
    </div>
  );
}

export default App;
