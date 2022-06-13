import React, { useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "../../components/_App/Layout";
import { API } from "@escolalms/sdk/lib";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { useTranslation } from "react-i18next";

import styled, { useTheme } from "styled-components";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import Image from "@escolalms/sdk/lib/react/components/Image";
import { Link } from "react-router-dom";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

const StyledTitleWrapper = styled.div`
  margin-bottom: 10px;
`;

const TutorsPage = () => {
  const { tutors, fetchTutors } = useContext(EscolaLMSContext);

  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    fetchTutors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="advisor-area">
        <div className="container">
          <StyledTitleWrapper>
            <Title level={1}> {t("Tutors")}</Title>
          </StyledTitleWrapper>

          <div className="row">
            {tutors.loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  minHeight: "500px",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="loader-wrapper"
              >
                <Spin color={theme.primaryColor} />
              </div>
            )}
            {!tutors.loading &&
              (tutors.list || []).map((tutor: API.UserItem) => (
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <CourseCard
                    id={Number(tutor.id)}
                    title={tutor.name}
                    image={
                      <Link to={`/tutors/${tutor.id}`}>
                        {tutor.path_avatar ? (
                          <Image
                            path={tutor.path_avatar}
                            srcSizes={[380, 380 * 2]}
                          />
                        ) : (
                          <img
                            className="tutor-card__avatar"
                            src={`/images/tutorblind.png`}
                            alt="tutor_avatar"
                          />
                        )}
                      </Link>
                    }
                    subtitle={
                      <Link to={`/tutors/${tutor.id}`}>
                        <Text size="16">
                          <strong>
                            {tutor.first_name} {tutor.last_name}
                          </strong>
                        </Text>
                      </Link>
                    }
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TutorsPage;
