import { useId } from "react";
import Skeleton from "react-loading-skeleton";

const OrdersSkeleton = () => {
  const id = useId();
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={`${id}-${index}-header`}
              style={{
                marginBottom: "11px",
                display: "flex",
                width: "100px",
                height: "28px",
              }}
            />
          ))}
        </div>
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={`${id}-${index}-row`}
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "22px",
            }}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={`${id}-${index}-cell`}
                style={{ marginBottom: "11px", width: "100px", height: "28px" }}
              />
            ))}

            <Skeleton
              style={{
                marginBottom: "11px",
                width: "90px",
                borderRadius: "5px",
                height: "44px",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default OrdersSkeleton;
