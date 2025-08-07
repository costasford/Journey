import React from 'react';
import { getDemoNotice } from '../../utils/apiWrapper';
import './DemoNotice.css';

const DemoNotice = () => {
  const demoNotice = getDemoNotice();

  if (!demoNotice.show) return null;

  return (
    <div className="demo-notice">
      <div className="demo-notice-content">
        <span className="demo-notice-icon">📊</span>
        <span className="demo-notice-text">{demoNotice.message}</span>
        <a 
          href="https://github.com/mantezana/Journey" 
          target="_blank" 
          rel="noopener noreferrer"
          className="demo-notice-link"
        >
          View Full App →
        </a>
      </div>
    </div>
  );
};

export default DemoNotice;