import React, { useState } from 'react';
import { useCallback } from 'react';
import Lightbox from 'react-image-lightbox';
import Image from '@escolalms/sdk/lib/react/components/Image';
import { API } from '@escolalms/sdk/lib';
import './index.scss';

const ImagePlayer: React.FC<{ topic: API.TopicImage; onLoad: () => void }> = ({
  topic,
  onLoad,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const onCloseRequest = useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // TODO: REMOVE FROM SDK
  return (
    <div className="image-player">
      <Image
        path={topic.topicable.value}
        srcSizes={[500, 750, 1000]}
        onClick={() => setOpen(true)}
      />

      {open && <Lightbox mainSrc={topic.topicable.url} onCloseRequest={onCloseRequest} />}
    </div>
  );
};

export default ImagePlayer;
