import { FC, useEffect } from "react";
import { Bubble } from "./Bubble";

type Props = {
    bubblePosition: {
        left: string;
        top: string;
    };
    markerPosition: {
        left: string;
        top: string;
    };
};

export const SpeachBubble: FC<Props> = ({ bubblePosition, markerPosition }) => {
    const bubbleElement = document.getElementsByClassName("bubble");
    const canvas = [0, 1].map(() => document.createElement("canvas"));
    const bubble = new Bubble(2, 20, 0.05, -15);

    useEffect(() => {
        for (var el of bubbleElement as any)
            (function (el) {
                var x: any, y: any;

                el.addEventListener("mousedown", function (e: any) {
                    y = el.offsetTop - e.clientY;
                    x = el.offsetLeft - e.clientX;
                    window.addEventListener("mousemove", refresh);
                });

                function refresh(e: any) {
                    if (e.clientX && e.clientY) {
                        el.style.left = x + e.clientX + "px";
                        el.style.top = y + e.clientY + "px";
                    }

                    bubble.bulleConnect(bubbleElement[0], bubbleElement[1], canvas[1]);
                }

                window.addEventListener("mouseup", function () {
                    window.removeEventListener("mousemove", refresh);
                });
                window.addEventListener("load", refresh);
            })(el);
    }, [window]);

    return (
        <>
            <div className='bubble' style={bubblePosition} />
            <div className='bubble bubble-hidden' style={markerPosition} />
        </>
    );
};
