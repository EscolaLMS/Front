import { Col, Row } from "react-grid-system";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  position: relative;
  .tutors {
    display: flex;
    > div {
      margin-left: 10px;
    }
  }
`;

const ConsultationPageContentSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton width={"20px"} style={{ marginBottom: "5px" }} />
      <Row>
        <Col style={{ marginTop: "120px" }} md={7}>
          <Skeleton height={45} style={{ marginBottom: "10px" }} />
        </Col>
        <Col>
          <Skeleton height={300} style={{ marginBottom: "10px" }} />
        </Col>
      </Row>
      <div style={{ marginBottom: "40px" }}>
        <Skeleton
          width={"100%"}
          height={20}
          count={12}
          style={{ marginBottom: "5px" }}
        />
      </div>{" "}
      <div className="tutors">
        <Skeleton circle width={"112px"} height={"112px"} />
        <div>
          <Skeleton width={"140px"} style={{ marginBottom: "20px" }} />
          <Skeleton width={"140px"} count={2} />
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default ConsultationPageContentSkeleton;
