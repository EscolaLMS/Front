import { FC, PropsWithChildren } from "react";
import { DetailsSidebarStyles } from "./styles";

export const DetailsSidebarContainer: FC<PropsWithChildren> = ({
  children,
}) => <DetailsSidebarStyles>{children}</DetailsSidebarStyles>;
