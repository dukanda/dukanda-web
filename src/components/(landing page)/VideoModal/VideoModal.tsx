import React from "react";
 import ModalVideo from "react-modal-video";
// import YouTube from 'react-youtube';
import "react-modal-video/css/modal-video.min.css";

//@ts-ignore
const VideoModal = ({ isOpen, setOpen, id }) => {
  return (
    <>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          ratio="16:9"
          isOpen={isOpen}
          videoId={id}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default VideoModal;
