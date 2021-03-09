import React, { ReactElement } from "react";

import { Link } from "react-router-dom";

import Image from "../Image";

import "./index.scss";

interface ICategoryBox {
  src: string;
  name: string;
  id: number;
}

const CategoryBox: React.FC<ICategoryBox> = ({
  src,
  name,
  id,
}): ReactElement => {
  return (
    <Link className="category" to={`career-planner/${id}`}>
      <Image src={src} alt={name} />
      <div className="category__name">
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default CategoryBox;
