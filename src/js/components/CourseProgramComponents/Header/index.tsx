import React, { ReactElement } from "react";

import { useHistory, Link } from "react-router-dom";

import { IProgramHeader } from "../../../interfaces/course/program";

import Logo from "../../../../images/logo_small.svg";
import Image from "../../Image";
import Icon from "../../Icon";
import Loader from "../../Loader";

import "./index.scss";

const Header: React.FC<IProgramHeader> = ({
  lesson,
  topic,
  title,
  loading,
}): ReactElement => {
  const history = useHistory();

  const onExitCourse = () => {
    history.push("/my-courses");
  };

  return (
    <header className="program-header">
      <div>
        <Link to="/">
          <Image contain src={Logo} alt="logo" height={31} width={31} />
        </Link>

        <div>
          <h3>{title}</h3>
          <p>
            {lesson}
            {topic && ` - ${topic}`}
          </p>
          {loading && <Loader position="right" />}
        </div>
      </div>

      <button onClick={() => onExitCourse()}>
        <span>Stop and exit</span> <Icon name="close-with-background" />
      </button>
    </header>
  );
};

export default Header;
