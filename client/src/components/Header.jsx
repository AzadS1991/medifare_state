import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpModal from './SignUpModal';

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <header className="new-header">
      <div className="logo-center">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="logo-icon" />
        </Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/saved">Your Hospitals</Link>
      </nav>
      <div className="auth-buttons">
          {/* Log In removed */}
          <button className="signup" onClick={() => setShowModal(true)}>Sign Up</button>
        </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7476347318351805"
     crossorigin="anonymous"></script>
      </header>
      <SignUpModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Header;
