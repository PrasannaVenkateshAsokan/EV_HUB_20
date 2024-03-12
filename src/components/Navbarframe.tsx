import { FunctionComponent } from "react";
import styles from "./Navbarframe.module.css";

const Navbarframe: FunctionComponent = () => {
  return (
    <div className={styles.navbarframe}>
      <div className={styles.aagGpc}>AAG GPC</div>
      <div className={styles.chains}>Chains</div>
      <div className={styles.garages}>Garages</div>
      <div className={styles.location}>Location</div>
      <div className={styles.earn}>20</div>
      <div className={styles.referral}>59</div>
      <div className={styles.norway}>Norway</div>
      <div className={styles.giveaways} />
      <div className={styles.btnPrimaryLg} />
      <div className={styles.star} />
      <div className={styles.star1} />
      <div className={styles.owner}>Owner</div>
      <div className={styles.vectorList}>
        <img className={styles.frameListIcon} alt="" />
        <img className={styles.vectorElementsIcon} alt="" src="/vector-9.svg" />
      </div>
      <img
        className={styles.imageElementsIcon}
        alt=""
        src="/vector-10@2x.png"
      />
      <img
        className={styles.image23Icon}
        loading="lazy"
        alt=""
        src="/image-23@2x.png"
      />
    </div>
  );
};

export default Navbarframe;
