import Skeleton from "react-loading-skeleton";

const StaticPageSkeleton = () => {
  return (
    <>
      <div style={{ marginBottom: "27px" }}>
        <Skeleton count={5} style={{ marginBottom: "11px", height: "20px" }} />
      </div>
      <div style={{ marginBottom: "27px" }}>
        <Skeleton count={12} style={{ marginBottom: "11px", height: "20px" }} />
      </div>
      <div style={{ marginBottom: "27px" }}>
        <Skeleton count={6} style={{ marginBottom: "11px", height: "20px" }} />
      </div>
    </>
  );
};
export default StaticPageSkeleton;
