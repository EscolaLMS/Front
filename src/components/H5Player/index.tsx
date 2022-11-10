import React, { useEffect, useContext } from "react";

import { Player, XAPIEvent } from "@escolalms/h5p-react";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

const H5Player: React.FC<{ id: string; onXAPI?: (e: XAPIEvent) => void }> = ({
  id,
  onXAPI,
}) => {
  const { fetchH5P, h5p } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchH5P(id);
  }, [id, fetchH5P]);


  return (
    <React.Fragment>
      {h5p.value && (
        <Player
          h5pObject={h5p.value}
          id={id}
          onXAPI={(event: XAPIEvent) => onXAPI && onXAPI(event)}
          styles={[`${window.location.origin}/h5p_overwrite.css`]}
        />
      )}
    </React.Fragment>
  );
};

export default H5Player;
