import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

export default function MusicPlayer({ autoPlay }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (autoPlay && audioRef.current && !playing) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) => console.log(err));
    }
  }, [autoPlay]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/music-track.mp3" type="audio/mpeg" />
      </audio>

      <button
        className={`music-btn ${playing ? "playing" : ""}`}
        onClick={toggleMusic}
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>
    </>
  );
}
