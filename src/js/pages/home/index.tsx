import React, { ReactElement } from "react";
import Icon from "../../components/Icon";
import MainLayout from "../../layouts/MainLayout";

const HomePage: React.FC = (): ReactElement => {
  return (
    <MainLayout>
      <article>
        <div className="container">
          <div style={{ backgroundColor: "black" }}>
            <Icon name="google" />
            <Icon name="facebook" />
            <Icon name="checkmark-after" />
            <Icon name="checkmark-before" />
            <Icon name="user" />
            <Icon name="notify" />
            <Icon name="task" />
            <Icon name="search" />
          </div>
        </div>
      </article>
    </MainLayout>
  );
};

export default HomePage;
