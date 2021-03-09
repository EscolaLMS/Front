import React, { ReactElement, ReactNode } from "react";

import { useSelector } from "react-redux";
import { IRootState } from "../../interfaces/redux";
import { IAuthState } from "../../redux/auth/reducer";

import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";
import SidebarMenu from "../../components/DashboardComponenets/SidebarMenu";
import MainLayout from "../../layouts/MainLayout";

import "./index.scss";

const UserLayout: React.FC<{
  children: ReactNode[] | ReactNode;
  title: string;
}> = ({ children, title }): ReactElement => {
  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state): IAuthState => state.Auth
  );

  return (
    <div className="user-layout">
      <MainLayout>
        <div>
          <PageHeader title={`Hello, ${auth.user.first_name}`} />
          <div className="container">
            <div className="row">
              <aside className="col-lg-6">
                <SidebarMenu />
              </aside>
              <article className="col-lg-18">
                <SectionHeading>
                  <h2>{title}</h2>
                </SectionHeading>

                {children}
              </article>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default UserLayout;
