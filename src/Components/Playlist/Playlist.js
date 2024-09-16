import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";
function Playlist(porps) {
  const handleNmaeChange = ({ target }) => {
    porps.onNameChange(target.value);
  };
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNmaeChange} />
      {/* <!-- Add a TrackList component --> */}
      <Tracklist
        userSearchResults={porps.playlistTracks}
        onRemove={porps.onRemove}
        isRemoval={true}
      />

      <button className={styles["Playlist-save"]} onClick={porps.onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
