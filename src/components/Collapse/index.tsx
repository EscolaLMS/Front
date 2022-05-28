import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { Checkbox } from "@escolalms/components/lib/components/atoms/Option/Checkbox";

type Props = {
  title: string;
  children: ReactNode;
};

const CollapseStyled = styled.div`
  padding: 15px;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.gray1 : theme.gray5};
  .collapse-title {
  }
  .collapse-content {
    padding: 0 30px;
    padding-top: 22px;
    margin-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.gray1};
  }
`;

const Collapse: React.FC<Props> = ({ title, children }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <CollapseStyled>
      <div className="collapse-title">
        <Checkbox
          name={title}
          label={<strong>{title}</strong>}
          onChange={() => setIsOpened(!isOpened)}
        />
      </div>
      {isOpened && <div className="collapse-content">{children}</div>}
    </CollapseStyled>
  );
};

export default Collapse;
