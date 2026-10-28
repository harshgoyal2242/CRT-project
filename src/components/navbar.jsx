export default function Navbar({ currentPage }) {
  function navigate(path) {
    window.location.hash = path
  }

  return (
    <header className="navbar">
      <button className="brand" type="button" onClick={() => navigate('#/home')}>
        Clear Day
      </button>
      <nav aria-label="Main navigation">
        <button
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          type="button"
          onClick={() => navigate('#/home')}
        >
          Today
        </button>
        <button
          className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
          type="button"
          onClick={() => navigate('#/about')}
        >
          About
        </button>
      </nav>
    </header>
  )
}
