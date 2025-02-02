import { Composition } from 'remotion';
import { MainComp } from './MainComp';
import { videoProps } from '../shared/constants';

export const MainVideo = () => {
    return (
        <>
            <Composition
                component={MainComp}
                durationInFrames={videoProps.durationInFrames}
                width={videoProps.videoWidth}
                height={videoProps.videoHeight}
                fps={videoProps.fps}
                id="MainComposition"
            />
        </>
    );
};
