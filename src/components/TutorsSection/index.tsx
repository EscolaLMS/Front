import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { Tutor, Title } from "@escolalms/components";
import { TutorsSectionStyles } from "./TutorsSectionStyles";
import { User } from "@escolalms/sdk/lib/types/api";

const API_URL =
  window.REACT_APP_API_URL ||
  (process && process.env && process.env.REACT_APP_PUBLIC_API_URL);

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
      {users.map((user) => (
        <section className="section-tutor with-border padding-right">
          <Link to={`/tutors/${user.id}`}>
            <Tutor
              mobile={isMobile}
              avatar={{
                alt: `${user.first_name} ${user.last_name}`,
                src: `${API_URL}/api/images/img?path=${user.path_avatar}` || "",
              }}
              // TODO: Change rating when will be available from response
              rating={{
                ratingValue: 4.1,
              }}
              title={
                <Title as="h3" level={4} className="title">
                  {title}
                </Title>
              }
              fullName={`${user.first_name} ${user.last_name}`}
              // TODO: Change courses info when will be available from response
              coursesInfo={"8 Curses"}
              description={user.bio}
            />
          </Link>
        </section>
      ))}
    </TutorsSectionStyles>
  );
};

export default TutorsSection;
