import React from "react";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Badge } from "@escolalms/components/lib/components/atoms/Badge/Badge";
import { Course, Tag } from "@escolalms/sdk/lib/types/api";
import styled from "styled-components";
import { Title } from "@escolalms/components";

type Props = {
  course: Course;
  variant: "small" | "medium" | "big";
};

const CourseCardWrapper = styled.div`
  position: relative;
  min-height: 590px;

  .tags-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    column-gap: 15px;
  }

  .card-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  img {
    display: block;
    margin: 0 auto;
  }
`;

const CourseCardNew: React.FC<Props> = ({ course, variant }) => {
  console.log(course);
  return (
    <CourseCardWrapper>
      {course && (
        <>
          <img src={course.image_url || ""} className="main-image" alt="" />
          <div className="tags-container">
            {course.tags &&
              course.tags.length > 0 &&
              course.tags?.map((item) => (
                //@ts-ignore
                <Badge>{item.title}</Badge>
              ))}
          </div>
          <div className="card-wrapper">
            <CourseCard
              hideImage
              id={Number(course.id)}
              title={<Title style={{ fontSize: 32 }}>{course.title}</Title>}
              tags={course.tags as Tag[]}
              lessonCount={5}
              onButtonClick={() => console.log("clicked")}
              subtitle=""
              categories={{
                categoryElements: course.categories || [],
                onCategoryClick: () => console.log("clicked"),
              }}
            />
          </div>
        </>
      )}
    </CourseCardWrapper>
  );
};

export default CourseCardNew;
