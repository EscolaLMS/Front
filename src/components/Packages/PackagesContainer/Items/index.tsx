import { useContext } from "react";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { useTheme } from "styled-components";
import { Col, Row } from "react-grid-system";
import Pagination from "@/components/Pagination";
import { PackagesContext } from "../../PackagesContext";
import PackagesContainerItem from "./Item";

const PackagesContainerItems = () => {
  const { params, setParams, packages } = useContext(PackagesContext);
  const packagesLoading = packages?.loading;
  const packagesMeta = packages?.list?.meta;
  const theme = useTheme();

  if (packagesLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spin color={theme.primaryColor} />
      </div>
    );
  }

  return (
    <Row
      style={{
        gap: "30px 0",
      }}
    >
      {packages?.list?.data.map((product) => (
        <Col md={6} lg={4} xl={3} key={product.id}>
          <PackagesContainerItem product={product} />
        </Col>
      ))}
      {packagesMeta &&
        (Number(packages?.list?.meta?.total) || 0) >
          (Number(packages?.list?.meta?.per_page) || 0) && (
          <Pagination
            total={packagesMeta.total}
            perPage={Number(packagesMeta.per_page)}
            currentPage={packagesMeta.current_page}
            onPage={(i) =>
              setParams &&
              setParams({
                ...params,
                page: i,
                per_page: 8,
              })
            }
          />
        )}
    </Row>
  );
};

export default PackagesContainerItems;
