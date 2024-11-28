import { Col, Row } from "react-grid-system";
import { Consultation, PaginatedMetaList } from "@escolalms/sdk/lib/types/api";
import ConsultationsContainerItem from "./Item";
import Pagination from "@/components/Common/Pagination";
import EntitySkeletonList from "@/components/Skeletons/EntityList";

type Props = {
  consultations: PaginatedMetaList<Consultation>;
  handlePageChange: (page: number) => void;
  loading?: boolean;
};

const ConsultationsContainerItems: React.FC<Props> = ({
  consultations,
  loading,
  handlePageChange,
}) => {
  const consultationsMeta = consultations?.meta;

  if (loading) {
    return <EntitySkeletonList />;
  }

  return (
    <>
      <Row
        style={{
          gap: "30px 0",
          marginBottom: "30px",
        }}
      >
        {!loading &&
          consultations?.data.map((consultation) => (
            <Col md={6} lg={4} xl={3} key={consultation.id}>
              <ConsultationsContainerItem consultation={consultation} />
            </Col>
          ))}
      </Row>
      {consultationsMeta &&
        (Number(consultationsMeta?.total) || 0) >
          (Number(consultationsMeta?.per_page) || 0) && (
          <Pagination
            total={consultationsMeta.total}
            perPage={Number(consultationsMeta.per_page)}
            currentPage={consultationsMeta.current_page}
            onPage={(i) => handlePageChange(i)}
          />
        )}
    </>
  );
};

export default ConsultationsContainerItems;
