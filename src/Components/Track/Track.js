import React from "react";
import styles from "./Track.module.css";
function Track() {
  const renderAction = () => {
    return (
      <button className="Track-action">
        {PaymentResponse.isRemoval ? "-" : "+"}
      </button>
    );
  };
  return (
    <div className={styles.Track}>
      <div className={styles["Track-information"]}>
        {/* <h3><!-- track name will go here --></h3> */}

        {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
      </div>
      {/* <button class="Track-action"><!-- + or - will go here --></button> */}
    </div>
  );
}

export default Track;
