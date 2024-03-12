import { FunctionComponent } from "react";
import styles from "./LineOwner.module.css";

const LineOwner: FunctionComponent = () => {
  return (
    <div className={styles.lineOwner}>
      <div className={styles.frame}>
        <div className={styles.chainsFrame} />
        <div className={styles.garagesFrame} />
        <div className={styles.locationFrame} />
        <div className={styles.groupNorwayLoc} />
      </div>
      <div className={styles.frame1}>
        <div className={styles.aagGpc}>AAG GPC</div>
        <div className={styles.chains}>Chains</div>
        <div className={styles.garages}>Garages</div>
        <div className={styles.location}>Location</div>
        <div className={styles.frame2}>20</div>
        <div className={styles.div}>59</div>
        <div className={styles.norway}>Norway</div>
        <div className={styles.owner}>Owner</div>
        <img className={styles.groupParentIcon} alt="" src="/group-11.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
        <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
      </div>
      <div className={styles.lineOwnerChild} />
    </div>
  );
};

export default LineOwner;
