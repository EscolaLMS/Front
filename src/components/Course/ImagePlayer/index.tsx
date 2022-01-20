import React, { useContext, useState } from 'react';
import { useCallback } from 'react';
import Lightbox from 'react-image-lightbox';
import Image from '@escolalms/sdk/lib/react/components/Image';
import { API } from '@escolalms/sdk/lib';
import './index.scss';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react';

const ImagePlayer: React.FC<{ topic: API.TopicImage; onLoad: () => void }> = ({
  topic,
  onLoad,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const onCloseRequest = useCallback(() => setOpen(false), []);
  const { apiUrl } = useContext(EscolaLMSContext);

  React.useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          mainSrc={`${apiUrl}/api/images/img?path=${topic.topicable.value}`}
          onCloseRequest={onCloseRequest}
        />
      )}
    </div>
  );
};

export default ImagePlayer;
