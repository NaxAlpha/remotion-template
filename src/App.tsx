import { Player } from '@remotion/player';
import { MainComp } from './MainComp';
import { videoProps } from './constants';


export const App = () => {
  const compositionWidth = videoProps.videoWidth;
  const compositionHeight = videoProps.videoHeight;

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'gray',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 'auto',
          aspectRatio: `${compositionWidth} / ${compositionHeight}`,
          maxHeight: '100%',
          maxWidth: '100%',
        }}
      >
        <Player
          autoPlay
          loop
          durationInFrames={videoProps.durationInFrames}
          component={MainComp}
          compositionWidth={compositionWidth}
          compositionHeight={compositionHeight}
          fps={videoProps.fps}
          style={{
            width: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default App
