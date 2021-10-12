import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';

const VideoPlayer: React.FC<{ topicUrl: string; onFinish: () => void }> = ({
    topicUrl,
    onFinish,
}) => {
    const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
    const { t } = useTranslation();

    return (
        <div className="topic-video-wrapper">
            {!isVideoPlaying && <div className="overlay"></div>}
            <ReactPlayer
                playing={isVideoPlaying}
                url={topicUrl}
                controls
                width="100%"
                height="80vh"
                onEnded={() => {
                    onFinish();
                }}
            />
            {!isVideoPlaying && (
                <button className="default-btn" onClick={() => setIsVideoPlaying(true)}>
                    {t('playVideo')}
                </button>
            )}
        </div>
    );
};

export default VideoPlayer;
