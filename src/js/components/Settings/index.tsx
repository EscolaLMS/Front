import React, { ReactElement, useEffect, useCallback, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { fetchSettings, changeSettings } from "../../redux/settings/actions";
import { ISettingsState } from "../../redux/settings/reducer";
import { IRootState } from "../../interfaces/redux";

import { Switch } from "../FormElements/Inputs/index";
import Loader from "../Loader";

import "./index.scss";

const Settings: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const settings: ISettingsState = useSelector<IRootState, ISettingsState>(
    (state) => state.Settings
  );

  const notificationEnabled = useMemo(() => {
    return settings.data.notifications_enabled === "1";
  }, [settings]);

  const loading = settings.loading;

  const onUpdateSettings = useCallback(
    (checked: boolean) => {
      dispatch(changeSettings({ notifications_enabled: checked ? "1" : "0" }));
    },
    [settings]
  );

  useEffect(() => {
    dispatch(fetchSettings());
  }, []);

  return (
    <div className="settings">
      <span className="settings__label">
        {loading ? (
          <Loader position="left" />
        ) : notificationEnabled ? (
          "ON"
        ) : (
          "OFF"
        )}
      </span>{" "}
      <Switch
        checked={notificationEnabled}
        onChange={(e) => !loading && onUpdateSettings(e)}
      />
    </div>
  );
};

export default Settings;
