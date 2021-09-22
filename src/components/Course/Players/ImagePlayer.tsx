import React, { useState } from "react";
import { useCallback } from "react";
import Lightbox from "react-image-lightbox";
import Image from "@escolalms/connector/lib/components/Image";
import { API } from "@escolalms/connector/lib";

const ImagePlayer: React.FC<{ topic: API.TopicImage; onLoad: () => void }> = ({
  topic,
  onLoad,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const onCloseRequest = useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="image-player">
      <Image
        path={topic.topicable.value}
        srcSizes={[500, 750, 1000]}
        onClick={() => setOpen(true)}
      />
      {open && (
        <Lightbox
          mainSrc={topic.topicable.url}
          onCloseRequest={onCloseRequest}
        />
      )}
    </div>
  );
};

export default ImagePlayer;
