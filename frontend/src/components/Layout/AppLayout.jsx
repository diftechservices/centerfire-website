import React from 'react';
import Navigation from './Navigation';

const AppLayout = ({ children }) => {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;