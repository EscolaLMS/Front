import React, { Fragment, ReactElement } from "react";
import { ICourseContent } from "../../../interfaces/course";
import SectionHeading from "../../SectionHeading";
import Accordion from "../../Accordion";
import Image from "../../Image";
import "./index.scss";

const CourseContent: React.FC<ICourseContent> = ({
  title,
  lessons,
  authorImage,
  authorName,
  authorDescription,
}): ReactElement => {
  return (
    <section className="section-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-16">
            <SectionHeading>
              <h3>{title}</h3>
            </SectionHeading>
            <div className="lessons">
              {lessons?.map(
                (lesson, index): ReactElement => (
                  <Fragment key={index}>
                    <Accordion
                      title={`${lesson.title} (${lesson.topics.length} topics)`}
                      duration={lesson?.duration}
                      // description={item?.description}
                    >
                      <ul>
                        {lesson.topics.map((topic) => (
                          <li
                            key={topic.id}
                            title={topic?.title}
                            // duration={topic?.duration}
                            // description={lesson.description}
                          >
                            {topic.title}{" "}
                            <small>
                              {topic.topicable_type?.split("\\").pop()}
                            </small>
                          </li>
                        ))}
                      </ul>
                    </Accordion>
                  </Fragment>
                )
              )}
            </div>

            <SectionHeading>
              <h3>Author</h3>
            </SectionHeading>
            <div className="author">
              <div className="author-meta">
                {authorImage && (
                  <Image src={authorImage} alt={authorName || ""} />
                )}
                {authorName && <h5>{authorName}</h5>}
              </div>
              {authorDescription && (
                <div className="description">{authorDescription}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
