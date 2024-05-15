// import { MOBILE_DEVICE } from "@/config/index";

type Props = {
  children: React.ReactNode;
};

const MobileGuard: React.FC<Props> = ({ children }) => {
  // const isMobile = MOBILE_DEVICE === "false";
  // return <>{isMobile ? children : null}</>;
  return <>{children}</>;
};

export default MobileGuard;
