import classNames from "classnames";
import { useEffect, useState } from "react";



const ImageLogo = ({ altName, width, height, ...rest }) => {
    // state
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [])

    // comportement
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobileDevice(true);
        } else {
            setIsMobileDevice(false);
        }
    }

    // render
    return (
        <div className={classNames('flex justify-start items-center', `${isMobileDevice ? 'w-4/6' : 'w-2/6'}`)}>
            <img src="./img/pk_logo_transparent.png" width={width} height={height} alt={altName} {...rest} />
            <div
                className={classNames("font-bold")}
                style={{
                    color: isMobileDevice ? 'green' : '#232aac',
                }}>
                Frontend Developer
            </div>
            <span className={classNames(`${isMobileDevice ? "italic hover:not-italic ml-4" : "ml-4"}`)}></span>
        </div>
    );
};

export default ImageLogo;