import React, { ReactElement } from "react";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { IAuthState } from "../../../redux/auth/reducer";
import { IRootState } from "../../../interfaces/redux";

import routes from "./../../Routes/routes";

import "./index.scss";

const Nav: React.FC = (): ReactElement => {
  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state) => state.Auth
  );

  const { courses, dashboard } = routes;

  return (
    <nav className="nav">
      <ul>
        {auth.token && (
          <li>
            <NavLink to={dashboard}>Dashboard</NavLink>
          </li>
        )}

        <li>
          <NavLink to={courses}>Courses</NavLink>
        </li>
      </ul>
      {/* <NavLink to="tags">Tags</NavLink>
      <NavLink to="categories">Categories</NavLink>
      <NavLink to="h5p">h5p</NavLink> */}
    </nav>
  );
};

export default Nav;
