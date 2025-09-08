import { memo } from "react";

function Img({bordered, width, height, side, src, bg = "bg-white"}) {
    console.log("éalksjdfél");

    let classes = bordered ? "img-bordered" : "img-borderless";
    classes += ` mw-${width} mh-${height} ${side} ${bg}`;

    if(side === "left")
        classes += ` mr-sm`;
    else 
        classes += ` mr-sm`;

    return(
        <div className={classes}>
            <img src={src}/>
        </div>
    );
}

export default memo(Img);