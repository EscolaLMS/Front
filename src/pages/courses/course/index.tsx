import React, { useContext, useEffect, useMemo, useState } from 'react';
import PageBanner from '@/components/SingleCoursesTwo/PageBanner';
import CoursesDetailsSidebar from '@/components/SingleCoursesTwo/CoursesDetailsSidebar/index';
import { Link, useParams } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import Loader from '@/components/Preloader';
import { format } from 'date-fns';
import MarkdownReader from '@/escolalms/sdk/components/Markdown/MarkdownReader';
import Image from '@escolalms/sdk/lib/react/components/Image';
import { API } from '@escolalms/sdk/lib';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/_App/Layout';
import CourseProgramPreview from '@/escolalms/sdk/components/Course/CourseProgramPreview';
import CourseProgramList from '@/escolalms/sdk/components/Course/CourseProgramList';
import './index.scss';

const CoursePriceButton: React.FC<{ course: API.Course }> = ({ course }) => {
  const { t } = useTranslation();

  const { settings, addToCart, cart, user, progress, fetchProgress } = useContext(EscolaLMSContext);

  const { id } = course;

  const courseInCart = useMemo(() => {
    return cart?.value?.items.some((item: API.Course) => Number(item.id) === Number(id));
  }, [id, cart]);

  useEffect(() => {
    user && user.value && fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const userOwnThisCourse = useMemo(() => {
    return (
      progress.value &&
      progress.value.findIndex((item: API.CourseProgressItem) => item.course.id === id) !== -1
    );
  }, [progress, id]);

  const priceLiteral = useMemo(() => {
    return course.base_price === 0 || course.base_price === undefined
      ? t('FREE')
      : `${settings?.currencies?.default} ${(course.base_price / 100).toFixed(2)}`;
  }, [course, settings, t]);

  return (
    <div className="courses-price">
      {!courseInCart && <div className="price">{priceLiteral}</div>}

      {userOwnThisCourse ? (
        <Link to={`/course/${course.id}`} className="default-btn">
          <i className="flaticon-user"></i> {t('Attend to Course')} <span></span>
        </Link>
      ) : courseInCart ? (
        <Link to={`/cart`} className="default-btn full-width">
          <i className="flaticon-shopping-cart"></i>
          {t('Checkout Course')} <small>{priceLiteral}</small> <span></span>
        </Link>
      ) : user.value ? (
        <button
          className="default-btn"
          disabled={cart.loading}
          onClick={() => addToCart(Number(course.id))}
        >
          <i className="flaticon-shopping-cart"></i> {t('Buy Course')} <span></span>
        </button>
      ) : (
        <Link to={`/authentication`} className="default-btn">
          <i className="flaticon-shopping-cart"></i> <small>{t('Login to buy')}</small>{' '}
          <span></span>
        </Link>
      )}

      {course.base_price === 0 && (
        <Link to={`/courses/preview/${course.id}`} className="default-btn full-width">
          <i className="flaticon-user"></i> {t('Preview course for free')} <span></span>
        </Link>
      )}
    </div>
  );
};

const CoursePage = () => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const { course, fetchCourse, fetchCart, user } = useContext(EscolaLMSContext);

  const [previewTopic, setPreviewTopic] = useState<API.Topic>();

  useEffect(() => {
    if (id) {
      fetchCourse(Number(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    user.value && fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (course.loading || !course.value) {
    return <Loader />;
  }

  if (course.error) {
    return <pre>{course.error.message}</pre>;
  }

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={course.value.title || ''}
          subtitle={course.value.subtitle}
          homePageUrl="/"
          homePageText={t('Home')}
          innerPageUrl={`/courses`}
          innerPageText={t('Courses')}
          activePageText={course.value.title || ''}
        />

        {previewTopic && (
          <CourseProgramPreview
            topic={previewTopic}
            onClose={() => {
              setPreviewTopic(undefined);
            }}
          />
        )}

        <div className="course-page">
          <div className="container">
            <div className="courses-details-header">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="courses-meta">
                    <ul>
                      {course.value.categories && course.value.categories.length > 0 && (
                        <li>
                          <i className="bx bx-folder-open"></i>
                          <span>{t('Category')}</span>

                          {course.value.categories.map(
                            (category: API.CategoryListItem | (number | string)) => {
                              const cat =
                                typeof category === 'object'
                                  ? {
                                      id: category.id,
                                      name: category.name,
                                    }
                                  : {
                                      id: category,
                                      name: category,
                                    };
                              return (
                                <Link to={`/courses?category_id=${cat.id}`} key={cat.id}>
                                  {cat.name}
                                </Link>
                              );
                            },
                          )}
                        </li>
                      )}
                      {course.value.users_count && course.value.users_count > 0 && (
                        <li>
                          <i className="bx bx-group"></i>
                          <span>
                            {t('StudentsEnrolled', {
                              count: course.value.users_count,
                            })}
                          </span>
                          <Link to="#">{course.value.users_count}</Link>
                        </li>
                      )}
                      <li>
                        <i className="bx bx-calendar"></i>
                        <span>{t('Last Updated')}</span>
                        <Link to="#">
                          {course.value.updated_at &&
                            format(new Date(course.value.updated_at), 'dd/MM/yyyy')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12">
                  <CoursePriceButton course={course.value} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-md-12">
                {course.value.image_path && (
                  <div className="courses-details-image-style-two text-center">
                    <Image path={course.value.image_path} srcSizes={[790 * 0.5, 790, 2 * 790]} />
                  </div>
                )}

                <div className="courses-details-desc-style-two">
                  <h3>{t('Summary')}</h3>
                  {course.value.summary && <MarkdownReader>{course.value.summary}</MarkdownReader>}

                  <h3>{t('Course Program')}</h3>
                  {course.value.lessons && (
                    <CourseProgramList
                      program={course.value.lessons}
                      onPreview={(topic) => setPreviewTopic(topic)}
                    />
                  )}

                  <h3>{t('Description')}</h3>
                  {course.value.description && (
                    <MarkdownReader>{course.value.description}</MarkdownReader>
                  )}

                  <h3>{t('Meet your instructor')}</h3>
                  {course.value.author && (
                    <div className="courses-author">
                      <div className="author-profile-header"></div>
                      <div className="author-profile">
                        <Link to={`/tutors/${course.value.author.id}`}>
                          <div className="author-profile-title">
                            {course.value.author?.path_avatar && (
                              <Image
                                path={course.value.author?.path_avatar}
                                className="shadow-sm rounded-circle"
                                srcSizes={[94, 94 * 2]}
                              />
                            )}
                            <div className="author-profile-title-details">
                              <div className="author-profile-details">
                                <h4>
                                  {course.value.author.first_name} {course.value.author.last_name}
                                </h4>
                                <span className="d-block">Tutor</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="bio">
                          <MarkdownReader>{course.value.author?.bio || ''}</MarkdownReader>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <CoursesDetailsSidebar course={course.value} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default CoursePage;
