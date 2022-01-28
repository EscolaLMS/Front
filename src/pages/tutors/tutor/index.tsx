import React, { useContext, useEffect } from 'react';

import PageBanner from '../../../components/Common/PageBanner';

import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { useParams } from 'react-router-dom';
import Preloader from '@/components/Preloader';
import Image from '@escolalms/sdk/lib/react/components/Image';
import MarkdownReader from '@/escolalms/sdk/components/Markdown/MarkdownReader';
import CourseCard from '../../../components/CourseCard';
import Layout from '../../../components/_App/Layout';
import { API } from '@escolalms/sdk/lib';
import './index.scss';
import { useTranslation } from 'react-i18next';

const TutorPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const { tutor, fetchTutor, courses, fetchCourses } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchTutor(Number(id));
    fetchCourses({ author_id: Number(id) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Layout>
      <React.Fragment>
        {/* <Navbar /> */}
        <PageBanner
          pageTitle={t('Tutor')}
          homePageUrl="/"
          homePageText={t('Home')}
          activePageText={t('Tutor')}
        />

        <div className="profile-area">
          <div className="container">
            {tutor.loading && <Preloader />}

            {tutor.value && (
              <div className="profile-box">
                <div className="row align-items-start">
                  <div className="col-lg-4 col-md-4">
                    {tutor.value.path_avatar && (
                      <div className="image">
                        <Image path={tutor.value.path_avatar} srcSizes={[355, 355 * 2]} />
                      </div>
                    )}
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="content">
                      <h3>
                        {tutor.value.first_name} {tutor.value.last_name}
                      </h3>
                      <span className="sub-title">{t('Tutor')}</span>
                      <div>
                        <MarkdownReader>{tutor.value.bio || ''}</MarkdownReader>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="tutor-courses">
              <h3 className="tutor-courses__title">{t('TutorPage.Courses')}</h3>
              <div className="row">
                {courses.list?.data.map((course: API.Course) => (
                  <div className="col-lg-4 col-md-6">
                    <CourseCard course={course} key={course.id} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default TutorPage;
