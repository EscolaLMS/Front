import { API } from '@escolalms/sdk/lib';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const LmsTag: React.FC<{
  tag: API.Tag;
  param?: string | undefined;
  toggleTag?: (tag: API.Tag) => void;
}> = ({ tag, param, toggleTag }) => {
  return (
    <Link to={`/courses?tag=${tag.title}`} key={tag.title}>
      <a
        href={`!#tag-${tag.title}`}
        onClick={(e) => {
          toggleTag && e.preventDefault();
          toggleTag && toggleTag(tag);
        }}
        className={param ? (param === tag.title ? 'lms-tag active' : 'lms-tag') : 'lms-tag'}
      >
        {tag.title}
      </a>
    </Link>
  );
};

export default LmsTag;
