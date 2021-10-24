import React from 'react';
import Image from '@escolalms/sdk/lib/react/components/Image';
import { API } from '@escolalms/sdk/lib';

import "./index.scss";

export const CourseAuthor: React.FC<{ author: API.UserItem, className?: string }> = ({
  author,
  className = ''
}) => {
  return (
    <div className={`course-author ${className}`}>
      {author.path_avatar && (
          <Image
              path={author.path_avatar}
              srcSizes={[35, 35 * 2]}
              className="course-author__image rounded-circle"
          />
      )}
      <span className="course-author__name">{author.first_name} {author.last_name}</span>
    </div>
  );
};

export default CourseAuthor;
