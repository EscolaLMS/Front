import React from 'react';

const GoTop: React.FC<{ scrollStepInPx: number | string; delayInMs: number | string }> = ({
  scrollStepInPx,
  delayInMs,
}) => {
  const [thePosition, setThePosition] = React.useState(false);
  const timeoutRef = React.useRef<number>(null);

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      //@ts-ignore
      clearInterval(timeoutRef.current);
    }
    window.scroll(0, window.pageYOffset - Number(scrollStepInPx));
  };

  const scrollToTop = () => {
    //@ts-ignore
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
