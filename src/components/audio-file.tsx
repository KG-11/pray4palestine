import { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeOff } from "lucide-react";

const AudioFile = () => {
  const [muted, setMuted] = useState<boolean>(true);
  return (
    <>
      <Button
        onClick={() => setMuted(!muted)}
        variant={"ghost"}
        className="hover:scale-110"
      >
        {muted ? <VolumeOff /> : <Volume2 />}
      </Button>
      <ReactPlayer
        style={{ display: "none" }}
        url={"https://vimeo.com/1016810491"}
        controls={true}
        width="100%"
        height="100%"
        loop
        muted={muted}
        playing={true}
      />
    </>
  );
};

export default AudioFile;
