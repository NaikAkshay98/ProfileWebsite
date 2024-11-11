import React from 'react';

function Footer() {
  return (
    <footer>
      {/* Update the name */}
      <p>© 2024 Akshay Naik - All Rights Reserved</p>
      {/* Update GitHub and LinkedIn links */}
      <p>
        Connect with me on{' '}
        <a href="https://github.com/akshaynaik" className="text-blue-600 hover:underline">
          GitHub
        </a>{' '}
        |{' '}
        <a href="https://www.linkedin.com/in/akshaynaik" className="text-blue-600 hover:underline">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;

