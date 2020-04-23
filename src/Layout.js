import React from 'react';
import LayoutStyle from './Layout.style';

function Layout({ children }) {
  return (
    <LayoutStyle className="layout">
      <header>
        <div className="content-section">
          <div className="name">Crab Girl</div>
        </div>
      </header>
      {children}
    </LayoutStyle>
  );
}

export default Layout;
