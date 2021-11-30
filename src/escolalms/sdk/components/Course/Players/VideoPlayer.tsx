import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer: React.FC<{ topicUrl: string; onFinish: () => void }> = ({
  topicUrl,
  onFinish,
  children,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setIsVideoPlaying(false);

    setKey(key + 1);
    setVideoSrc(topicUrl);

    return () => {
      setVideoSrc(null);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicUrl]);

  return (
    <div className="topic-video-wrapper">
      {!isVideoPlaying && <div className="overlay"></div>}
      <ReactPlayer
        key={key}
        playing={isVideoPlaying}
        // @ts-ignore
        url={videoSrc}
        controls
        width="100%"
        height="100%"
        onEnded={() => {
          onFinish();
          setIsVideoPlaying(false);
        }}
        file={{
          forceVideo: true,
        }}
      />
      {!isVideoPlaying && <button onClick={() => setIsVideoPlaying(true)}>{children}</button>}
    </div>
  );
};

export default VideoPlayer;
