import React from "react";
import YouTube from "react-youtube";

export default function Media() {
    const opts = {
        height: '200',
        width: '328',
    }

    return (
        <div>
            <div className="flex flex-col gap-5 items-center m-5 ">
                <YouTube videoId="W0SCNNUysjA" opts={opts}/>
                <YouTube videoId="vq1BQqn9bBE" opts={opts}/>
                <YouTube videoId="QfcOW6ZbVfw" opts={opts}/>
                <YouTube videoId="bEp_cF3K23I" opts={opts}/>
            </div>
        </div>
    )
}