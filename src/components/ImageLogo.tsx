import { useEffect, useState } from "react";



const ImageLogo = () => {
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
        <div className="flex justify-start items-center my-4">
            <img src="./img/pk_logo_transparent.png" width={50} height={50} alt="logo patelot.de" />
            <div
                className="font-bold"
                style={{
                    color: isMobileDevice ? 'green' : '#232aac',
                }}>
                Software Developer
            </div>
            <span className={isMobileDevice ? "italic hover:not-italic ml-4" : "ml-4"}>PK</span>
        </div>
    );
};

export default ImageLogo;