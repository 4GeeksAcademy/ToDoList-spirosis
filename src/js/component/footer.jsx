import React from 'react';

const Footer = ({ remainingTasks }) => {
  return (
    <div className="footer">
      <p>{`${remainingTasks} task${remainingTasks !== 1 ? 's' : ''} remaining`}</p>
    </div>
  );
};

export default Footer;