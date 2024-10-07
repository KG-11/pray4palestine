import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Volume2, VolumeOff } from "lucide-react";

const AudioFile = () => {
  const [muted, setMuted] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const videoRef = useRef<ReactPlayer>(null);

  const initSeek = () => {
    const videoDuration = 5 * 60 * 60 + 28 * 60 + 15;
    const now = new Date();
    const secondsSinceMidnight =
      now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
    const seekTime = secondsSinceMidnight % videoDuration;
    videoRef?.current?.seekTo(seekTime, "seconds");
    setLoading(false);
  };

  return (
    <>
      <Button
        disabled={loading}
        onClick={() => setMuted(!muted)}
        variant={"ghost"}
        className="hover:scale-110"
      >
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : muted ? (
          <VolumeOff />
        ) : (
          <Volume2 />
        )}
      </Button>
      <ReactPlayer
        ref={videoRef}
        style={{ display: "none" }}
        url={"https://vimeo.com/1016810491"}
        width="100%"
        height="100%"
        onReady={initSeek}
        muted={muted}
        loop
        playing
        controls
        playsinline
      />
    </>
  );
};

export default AudioFile;
