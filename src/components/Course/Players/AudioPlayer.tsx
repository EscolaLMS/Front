import React, { ReactElement, FunctionComponent } from 'react';

const AudioPlayer: FunctionComponent<{
  url?: string;
  onFinish: () => void;
}> = ({ url, onFinish }): ReactElement => {
  if (!url) {
    return <p>No lesson data.</p>;
  }

  return (
    <>
      {url && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio
          className={`audio }`}
          onEnded={(): void => {
            onFinish();
          }}
          controls
          controlsList="nodownload noremoteplayback"
        >
          <source src={url} />
        </audio>
      )}
    </>
  );
};

export default AudioPlayer;
