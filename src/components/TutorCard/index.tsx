import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '@escolalms/sdk/lib';
import { useTranslation } from 'react-i18next';
import LmsBox from '@/components/Common/LmsBox';
import Image from '@escolalms/sdk/lib/react/components/Image';
import './index.scss';

export const TutorCard: React.FC<{ tutor: API.UserItem }> = ({ tutor }) => {
  const { t } = useTranslation();

  return (
    <LmsBox className="tutor-card">
      <div className="tutor-card__header">
        <Link to={`/tutors/${tutor.id}`} className="tutor-card__image d-block">
          {tutor.path_avatar ? (
            <Image path={tutor.path_avatar} srcSizes={[380, 380 * 2]} />
          ) : (
            <img
              className="tutor-card__avatar"
              src={`${process.env.PUBLIC_URL}/images/tutorblind.png`}
              alt="tutor_avatar"
            />
          )}
        </Link>
      </div>

      <LmsBox.Content className="tutor-card__content">
        <LmsBox.Title className="tutor-card__title">
          <Link to={`/tutors/${tutor.id}`}>
            {tutor.first_name} {tutor.last_name}
          </Link>
        </LmsBox.Title>

        <LmsBox.SubTitle className="tutor-card__subtitle">{t('Tutor')}</LmsBox.SubTitle>
      </LmsBox.Content>
    </LmsBox>
  );
};

export default TutorCard;
