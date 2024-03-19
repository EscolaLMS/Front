import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { Checkbox } from "@escolalms/components/lib/components/atoms/Option/Checkbox";

type Props = {
  title: string;
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const CollapseStyled = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.gray1 : theme.white};
  .collapse-title {
  }
  .collapse-content {
    padding-top: 22px;
    margin-top: 16px;

    @media (max-width: 991px) {
      padding: 30px 0 0 0;
    }
  }
`;

const Collapse: React.FC<Props> = ({ title, children, active, onClick }) => {
  const [isOpened, setIsOpened] = useState(active || false);
  return (
    <CollapseStyled>
      <div className="collapse-title">
        <Checkbox
          name={title}
          label={<strong>{title}</strong>}
          checked={active || isOpened}
          onChange={() => [setIsOpened(!isOpened), onClick && onClick()]}
        />
      </div>
      {(active || isOpened) && (
        <div className="collapse-content">{children}</div>
      )}
    </CollapseStyled>
  );
};

export default Collapse;
