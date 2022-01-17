import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Image from '@escolalms/sdk/lib/react/components/Image';
import { API } from '@escolalms/sdk/lib';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { Spinner } from 'reactstrap';
//@ts-ignore
import ModalVideo from 'react-modal-video'; // TODO: seems type is missing heere
import './index.scss';

const CoursesDetailsSidebar: React.FC<{ course: API.Course }> = ({ course }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation();

  const { cart, addToCart } = useContext(EscolaLMSContext);

  return (
    <div className="courses-sidebar-sticky">
      {course.video_url && (
        <ModalVideo
          channel="custom"
          isOpen={!isOpen}
          url={course.video_url}
          onClose={() => setIsOpen(!isOpen)}
        />
      )}

      <div className="courses-details-info">
        <div className="image">
          {course.image_path && <Image path={course.image_path} srcSizes={[356, 356 * 2]} />}

          {course.video_url && (
            <React.Fragment>
              <div
                onKeyDown={(e) => {
                  e.preventDefault();
                  openModal();
                }}
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
                className="link-btn popup-youtube"
                role="button"
                tabIndex={-1}
              />

              <div className="content">
                <i className="flaticon-play" />
                <span>{t('Course Preview')}</span>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>

      <div className="courses-sidebar-information">
        <ul className="info">
          {course.author && (
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <i className="flaticon-teacher" /> {t('Tutor')}
                </span>
                <Link to={`/tutors/${course.author.id}`}>
                  {course.author?.first_name} {course.author?.last_name}
                </Link>
              </div>
            </li>
          )}
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-time" /> {t('Duration')}
              </span>
              {course.duration}
            </div>
          </li>
          {!!course.lessons?.length && (
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <i className="flaticon-distance-learning" />{' '}
                  {t('Lesson', { count: course.lessons.length })}
                </span>
                {course.lessons.length}
              </div>
            </li>
          )}
          {!!course.users_count && (
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <i className="flaticon-web" /> {t('Student', { count: course.users_count })}
                </span>
                {course.users_count}
              </div>
            </li>
          )}
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-html" /> {t('Language')}
              </span>
              {course.language}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-caption" /> {t('Level')}
              </span>
              {course.level}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-lock" /> {t('Access')}
              </span>
              {t('Lifetime')}
            </div>
          </li>
          {!!course.users_count && (
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <i className="flaticon-lock" /> {t('group_access')}
                </span>

                {course.target_group}
              </div>
            </li>
          )}
        </ul>

        <div className="btn-box">
          {course.base_price === 0 ? (
            <Link to={`/course/${course.id}`} className="default-btn">
              <i className="flaticon-user" /> {t('Attend to Course')} <span />
            </Link>
          ) : (
            <button onClick={() => addToCart(Number(course.id))} className="default-btn">
              <i className="flaticon-shopping-cart" /> {t('Add to Cart')} <span />
              {cart.loading ? <Spinner color="success" /> : ''}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailsSidebar;
