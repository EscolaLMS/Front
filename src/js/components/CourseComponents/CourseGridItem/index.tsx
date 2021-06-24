import React, { ReactElement, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";
import { ICourseGridItem } from "../../../interfaces/course";

import "./index.scss";
import Image from "../../Image";

const CourseGridItem: React.FC<ICourseGridItem> = ({
  id,
  image,
  title,
  tags,
  overview,
  price,
  type = "dark",
  withRemoveBtn = false,
  strikePrice,
}): ReactElement => {
  return (
    <div className={`course-grid-item ${type}`}>
      {!withRemoveBtn && strikePrice && <span className="strike-mark">%</span>}
      <Link to={`/course/${id}`}>
        <Image src={image} alt={title} />

        <div className="content">
          <h5>{title}</h5>
          <div className="tags">
            {tags?.map((item: API.Tag | string) =>
              typeof item === "string" ? (
                <span key={item}>{item},</span>
              ) : (
                <span key={item.id}>{item.title},</span>
              )
            )}
            {overview && <span>{overview}</span>}
          </div>
          {price && (
            <div className="price">
              {strikePrice && (
                <span className="strike-price">£{strikePrice}</span>
              )}
              £{price}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CourseGridItem;
