import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import routes from "../../components/Routes/routes";

import "./index.scss";

const EmptyCart: React.FC = (): ReactElement => {
  return (
    <div className="empty-cart">
      <h1>Your cart is empty</h1>
      <Link to={routes.courses}>Browse courses.</Link>
    </div>
  );
};

export default EmptyCart;
