import React, { useEffect, useState } from "react";

export const NavbarParallax = ({ style, image, children, ...rest }) => {

    // state
    let windowScrollTop;

    const [transform, setTransform] = useState(
        "translate3d(0," + windowScrollTop + "px,0)"
    );

    useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });

    // comportement
    if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 3;
    } else {
        windowScrollTop = 0;
    }

    const resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };


    // render
    return (
        <div
            className=""
            style={{
                ...style,
                backgroundImage: "url(" + image + ")",
                transform: transform
            }}
            {...rest}
        >
            {children}
        </div>
    );
};

{/* <NavbarParallax image={require("../img/stage_pk.jpg")}>

</NavbarParallax> */}
