import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Tutor } from "@escolalms/components/lib/components/molecules/Tutor/Tutor";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { TutorsSectionStyles } from "./TutorsSectionStyles";
import { User } from "@escolalms/sdk/lib/types";
import { API_URL } from "@/config/index";

const TutorStyled = styled(Tutor)`
  margin-bottom: 20px;
`;

type CustomUser = User & {
  bio?: string;
};

interface TutorsSectionProps {
  users: CustomUser[];
  title: React.ReactElement | React.ReactElement[];
}

const TutorsSection = ({ users, title }: TutorsSectionProps) => {
  if (!users?.length) {
    return null;
  }
  return (
    <TutorsSectionStyles>
      <section className="section-tutor with-border padding-right">
        <Title as="h3" level={4} className="title">
          {title}
        </Title>
        {users.map((user) => (
          <TutorStyled
            mobile={isMobile}
            avatar={{
              alt: `${user.first_name} ${user.last_name}`,
              src: `${API_URL}/api/images/img?path=${user.path_avatar}` || "",
            }}
            // TODO: Change rating when will be available from response
            rating={{
              ratingValue: 4.1,
            }}
            title={<></>}
            fullName={
              <Link to={`/tutors/${user.id}`}>
                {`${user.first_name} ${user.last_name}`}
              </Link>
            }
            // TODO: Change courses info when will be available from response
            coursesInfo={"8 Curses"}
            description={user.bio}
          />
        ))}
      </section>
    </TutorsSectionStyles>
  );
};

export default TutorsSection;
