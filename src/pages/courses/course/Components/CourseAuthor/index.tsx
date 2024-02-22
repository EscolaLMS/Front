import { FC } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Tutor } from "@escolalms/components/lib/components/molecules/Tutor/Tutor";
import { API } from "@escolalms/sdk/lib";
import { APP_CONFIG } from "@/config/app";
import { API_URL } from "@/config/index";
import { Col } from "react-grid-system";

interface CourseAuthorProps {
  author: API.UserItem;
}

export const CourseAuthor: FC<CourseAuthorProps> = ({ author }) => {
  return (
    <Col lg={6}>
      <Link to={`/tutors/${author.id}`}>
        <Tutor
          mobile={isMobile}
          avatar={{
            alt: `${author.first_name} ${author.last_name}`,
            src: author.path_avatar
              ? `${API_URL}/api/images/img?path=${author.path_avatar}`
              : APP_CONFIG.tutorPlaceholderPath,
          }}
          fullName={`${author.first_name} ${author.last_name}`}
          description={author.bio}
        />
      </Link>
    </Col>
  );
};
