import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/connector/lib/context';
import Image from '@escolalms/connector/lib/components/Image';

import ReactMarkdown from 'react-markdown';
import StripMarkdown from 'strip-markdown';
import OwlCarousel from 'react-owl-carousel';

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 1,
    },
    992: {
      items: 2,
    },
  },
};

const CourseAdvisor = () => {
  const [display, setDisplay] = React.useState(false);

  const { tutors, fetchTutors } = useContext(EscolaLMSContext);

  React.useEffect(() => {
    setDisplay(true);
    fetchTutors();
  }, []);

  return (
    <div className="advisor-area bg-f9f9f9 pt-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Instructor</span>
          <h2>Course Advisor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {display ? (
          <OwlCarousel
            //@ts-ignore
            className="advisor-slides owl-carousel owl-theme"
            {...options}
          >
            {tutors?.list?.map((tutor) => (
              <div className="single-advisor-box" key={tutor.id}>
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    {tutor.path_avatar && (
                      <div className="advisor-image">
                        <Image path={tutor.path_avatar} srcSizes={[195, 2 * 195]} />
                      </div>
                    )}
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="advisor-content">
                      <h3>
                        <Link to={`/tutors/${tutor.id}`}>
                          <span>
                            {tutor.first_name} {tutor.last_name}
                          </span>
                        </Link>
                      </h3>
                      <span className="sub-title">Tutor</span>
                      {tutor.bio && (
                        <div className="profile-bio-summary">
                          <ReactMarkdown plugins={[StripMarkdown]}>{tutor.bio}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CourseAdvisor;
