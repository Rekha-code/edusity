import React, { useRef } from "react";
import "./VedioPlayer.css";
import video from "../../assets/college-vedio.mp4";

const VedioPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`vedio-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video width="100%" autoPlay muted controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VedioPlayer;
