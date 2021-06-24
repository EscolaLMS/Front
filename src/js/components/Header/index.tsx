import React, { ReactElement, useState, useCallback } from "react";
import Logo from "../../../images/logo.svg";
import Nav from "./Nav";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth/actions";
import Icon from "../Icon";
import routes from "../Routes/routes";
import Button from "../FormElements/Button/Button";
import { IAuthState } from "../../redux/auth/reducer";
import { IRootState } from "../../interfaces/redux";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./index.scss";

const Header: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const { login, register } = routes;
  const [, setPrevLocation] = useLocalStorage("prevLocation");

  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state) => state.Auth
  );

  const logoutHander = useCallback(() => {
    setPrevLocation("");
    dispatch(logout());
  }, []);

  return (
    <header className="header">
      <div>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" width={200} height={50} />
          </Link>
        </div>
        <div className="header__nav">
          <Nav />
        </div>
      </div>
      {auth.token ? (
        <div className="header__user-info">
          <div className="header__user-name">
            <button onClick={() => setOpenMenu(!openMenu)}>
              <Icon name="user" />
              <div>
                <small>Logged</small>
                <span>{auth?.user?.name}</span>
              </div>
            </button>
            <div
              className={["sub-menu-wrapper", openMenu && "active"].join(" ")}
            >
              <nav>
                <ul>
                  <li>
                    <Button
                      className="primary"
                      type="submit"
                      onClick={() => logoutHander()}
                    >
                      Logout
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className="auth__nav">
          <ul>
            <li>
              <Link to={login}>Login</Link>
            </li>
            <li>
              <Link to={register}>Register</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
