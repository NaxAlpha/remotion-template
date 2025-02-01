import { registerRoot } from 'remotion';
import { Composition } from 'remotion';
import { MainComp } from './MainComp';
import { videoProps } from './constants';

export const MainVideo = () => {
    return (
        <>
            <Composition 
                component={MainComp} 
                durationInFrames={videoProps.durationInFrames}
                width={videoProps.videoWidth}
                height={videoProps.videoHeight}
                fps={videoProps.fps} 
                id="main-composition" 
            />
        </>
    );
};

registerRoot(MainVideo);
