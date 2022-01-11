import React from 'react';

import './index.scss';

const LmsBoxHeader: React.FC<{ text: string }> = ({ text }) => {
  return <h3 className="title">{text}</h3>;
};

export default LmsBoxHeader;
