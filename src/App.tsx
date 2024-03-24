import { FC } from "react";
import { SpeachBubble } from "./SpeachBubble";

export const App: FC = () => {
    const onClickX = () => {
        console.log("X");
    };

    const onClickTG = () => {
        console.log("TG");
    };

    const onClickDS = () => {
        console.log("DS");
    };

    const onClickDT = () => {
        console.log("DT");
    };

    return (
        <>
            <SpeachBubble
                bubblePosition={{ left: "40%", top: "10%" }}
                markerPosition={{ left: "50%", top: "50%" }}
            />

            <div className='content'>
                <div className='header'>
                    <a className='rbutton' href='#' onClick={onClickX}>
                        X
                    </a>
                    <a className='rbutton' href='#' onClick={onClickTG}>
                        TG
                    </a>
                </div>

                <div className='how-to-buy'>
                    <div className='how-to-buy-text'>How to buy</div>
                    <div className='how-to-buy-buttons'>
                        <a className='rbutton' href='#' onClick={onClickDS}>
                            DS
                        </a>
                        <a className='rbutton' href='#' onClick={onClickDT}>
                            DT
                        </a>
                    </div>
                </div>

                <div className='disclaimer'>
                    Disclaimer Disclaimer Disclaimer Disclaimer Disclaimer Disclaimer Disclaimer
                    Disclaimer Disclaimer Disclaimer Disclaimer Disclaimer Disclaimer Disclaimer
                </div>
            </div>
        </>
    );
};
