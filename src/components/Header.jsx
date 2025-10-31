import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="main-bar-wraper">
        <div className="main-bar">
          <div className="container">
            {/* Website Logo */}
            <div className="logo-header">
              <a href="/">
                <img src="/images/logo.webp" alt="Family Raksha Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

