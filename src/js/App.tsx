import React, { ReactElement, useEffect, useMemo } from "react";

import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { IRootState } from "./interfaces/redux";
import { IAuthState } from "./redux/auth/reducer";

import { getMe, socialLogin } from "./redux/auth/actions";

import Routes from "./components/Routes";
import routes from "./components/Routes/routes";

import queryString from "query-string";
import useLocalStorage from "./hooks/useLocalStorage";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./../scss/app.scss";
import "react-markdown-editor-lite/lib/index.css";
const App: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state): IAuthState => state.Auth
  );

  const { login, home, register, resetPassword, loginSocial } = routes;

  const exceptions = `${login}${register}$${loginSocial}`;

  const history = useHistory();
  const { pathname, search } = useLocation();

  const [prevLocation, setPrevLocation] = useLocalStorage("prevLocation");

  const qData = useMemo(() => {
    return queryString?.parse(search);
  }, [search]);

  useEffect(() => {
    auth.token && !pathname.includes(resetPassword) && dispatch(getMe());
  }, [auth.token]);

  useEffect(() => {
    if (pathname.includes(register)) {
      if (auth.isAccountCreated) {
        history.push(login);
      }
    }
  }, [auth.isAccountCreated]);

  useEffect(() => {
    if (!auth.token && !exceptions.includes(pathname)) {
      setPrevLocation(`${pathname}${search}`);
    }
  }, [pathname, auth.token]);

  useEffect(() => {
    if (auth?.user?.id) {
      if (exceptions.includes(pathname)) {
        prevLocation
          ? [history.push(prevLocation), setPrevLocation("")]
          : history.push(home);
      }
    }
  }, [auth.user]);

  useEffect(() => {
    if (
      qData?.token &&
      typeof qData.token === "string" &&
      exceptions.includes(pathname)
    ) {
      dispatch(socialLogin(qData.token));
    }
  }, [qData]);

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return (
    <main className="App typography">
      <Routes />
      <ToastContainer hideProgressBar={false} />
    </main>
  );
};

export default App;
