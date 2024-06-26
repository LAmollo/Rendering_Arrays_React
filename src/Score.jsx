import React from 'react';

const Score = ({ score }) => {
  return (
    <li>
      Date: {score.date} - Score: {score.score}
    </li>
  );
}

export default Score;
