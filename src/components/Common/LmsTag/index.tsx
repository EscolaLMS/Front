import { API } from '@escolalms/sdk/lib';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const LmsTag: React.FC<{
  tag: API.Tag;
  to?: string;
  onClick?: (tag: API.Tag) => void;
  className?: string;
  isActive?: boolean;
}> = ({ tag, to, onClick, className = '', isActive = false }) => {
  const TagElement = useMemo(
    () => (to ? Link : onClick ? 'button' : 'span') as keyof JSX.IntrinsicElements,
    [to, onClick],
  );
  const buttonType = useMemo(() => (TagElement === 'button' ? 'button' : undefined), [TagElement]);
  const isNonInteractive = useMemo(() => TagElement === 'span', [TagElement]);
  return (
    <TagElement
      // @ts-ignore
      type={buttonType}
      to={to}
      onClick={() => {
        onClick && onClick(tag);
      }}
      className={`lms-tag${isActive ? ' active' : ''}${
        isNonInteractive ? ' noninteractive' : ''
      } ${className}`.trim()}
    >
      {tag.title}
    </TagElement>
  );
};

export default LmsTag;
