import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CoursesCurriculum: React.FC<{
  videos: {
    id: string | number;
    name: string;
  }[];
}> = ({ videos }) => {
  const { t } = useTranslation();

  return (
    <div className="courses-curriculum">
      <h3>{t('Video Coursers')}</h3>
      {videos ? (
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <Link
                to="/courses"
                className="d-flex justify-content-between align-items-center"
                onClick={(e) => e.preventDefault()}
              >
                <span className="courses-name">{video.name}</span>
                <div className="courses-meta">
                  <span className="status locked">
                    <i className="flaticon-password"></i>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h3>{t('No Videos')}</h3>
      )}
    </div>
  );
};

export default CoursesCurriculum;
