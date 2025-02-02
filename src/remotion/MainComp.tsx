import '../index.css';
import React from "react";
import { AbsoluteFill } from "remotion";

export const MainComp: React.FC = () => {
    return <AbsoluteFill style={{ backgroundColor: 'black' }} >
        <h1 className="text-3xl font-bold underline" style={{ color: 'white' }}>
            Hello world!
        </h1>
    </AbsoluteFill>;
};
