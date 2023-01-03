import React from "react";
const gradients = [
    "linear-gradient(120deg, rgb(151 151 151) 0%, rgb(2 0 69) 100%)",
    "linear-gradient(to right, #8360c3, #2ebf91)",
    "linear-gradient(to right, #fffbd5, #b20a2c)",
    "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)",
    "linear-gradient(147deg, #000000 0%, #04619f 74%)",
    "linear-gradient(315deg, #000000 0%, #a29bfe 74%)",
];

export const BGGradient = (props: { children?: React.ReactChild }) => {
    const overlayId = "myOverlay";
    const [height, setHeight] = React.useState(false)
    const [activeGradient, setGradient] = React.useState(gradients[0]);
    const setOpacity = (opacity: string) => {
        const overlay = document.getElementById(overlayId) || {
            style: { opacity: "" },
        };
        overlay.style.opacity = opacity;
    };

    const isMobile = () => {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }

    return <div className="gradient">
        <div className={height ? "gradient-selector  mobile-height" : 'gradient-selector  mobile-touch'} onClick={() => setHeight(!height)} >
            {isMobile() && <div
                title="Click to change background gradient"
                className={`gradient-type active`}
                style={{
                    backgroundImage: activeGradient,
                }}
            />}
            {isMobile() && gradients.filter(x => isMobile() && x !== activeGradient).map((gradient, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => {
                            setOpacity("0");
                            setTimeout(() => {
                                setGradient(gradient);
                                setOpacity("1");
                            }, 100);
                        }}
                        title="Click to change background gradient"
                        className={` gradient-type${activeGradient === gradient ? " active" : ""
                            }`}
                        style={{
                            backgroundImage: gradient,
                        }}
                    />
                );
            })}
        </div>

        <div
            style={{
                backgroundImage: activeGradient,
            }}
            id={overlayId}
            className="overlay"
        >
            {props.children}
        </div>
    </div>
}