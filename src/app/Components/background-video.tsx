import { useEffect } from "react";

const BackgroundVideo = () => {
  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.style.pointerEvents = "none";
    }
  }, []);

  return (
    <div className="video-background absolute inset-0 w-full h-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="zoomed-video w-full h-full object-cover"
      >
        <source src="/main-bg.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
