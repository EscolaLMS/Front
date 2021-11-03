import React from 'react';
import './index.scss';

const GoTop: React.FC<{ scrollStepInPx: number | string; delayInMs: number }> = ({
  scrollStepInPx,
  delayInMs,
}) => {
  const [thePosition, setThePosition] = React.useState(false);
  const timeoutRef: { current: NodeJS.Timeout | null } = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 84) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      timeoutRef.current && clearInterval(timeoutRef.current);
    }
    window.scroll(0, window.pageYOffset - Number(scrollStepInPx));
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  };

  const renderGoTopIcon = () => {
    return (
      <div
        className={`go-top ${thePosition ? 'active' : ''}`}
        onClick={scrollToTop}
        onKeyDown={scrollToTop}
        role="button"
        tabIndex={-1}
      >
        <i className="bx bx-chevron-up"></i>
      </div>
    );
  };

  return <React.Fragment>{renderGoTopIcon()}</React.Fragment>;
};

export default GoTop;
