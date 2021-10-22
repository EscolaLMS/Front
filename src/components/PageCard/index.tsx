import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '@escolalms/sdk/lib';
import LmsBox from "@/components/Common/LmsBox";
export const PageCard: React.FC<{ page: API.Page }> = ({ page }) => {
  return (
    <LmsBox className="page-card">
      <LmsBox.Content className="page-card__content">
        <LmsBox.Title className="page-card__title">
          <Link to={`/page/${page.slug}`}>{page.title}</Link>
        </LmsBox.Title>
      </LmsBox.Content>
    </LmsBox>
  );
};

export default PageCard;
