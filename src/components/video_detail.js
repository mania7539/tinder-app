import React from "react";

const VideoDetail = ({video, onVideoSelect}) => {
    if (!video) {
        return <div>Loading...</div>;
        /* handle value undefined situation when the object haven't loaded yet. */
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    // the above code is the same as below which is called template string:
    // const url = "https://www.youtube.com/embed" + videoId;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;