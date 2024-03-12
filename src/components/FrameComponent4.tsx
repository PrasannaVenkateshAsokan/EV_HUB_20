import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.algorithmNode}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.ownerParent}>
          <div className={styles.owner}>Owner</div>
          <div className={styles.robertBoschGmbh}>Robert Bosch GmbH</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.image21Parent}>
            <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
            <div className={styles.frameItem} />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.chainsParent}>
              <div className={styles.chains}>Chains</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>5</div>
              </div>
            </div>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.garagesParent}>
              <div className={styles.garages}>Garages</div>
              <div className={styles.container}>
                <div className={styles.div1}>20</div>
              </div>
            </div>
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div className={styles.germanyWrapper}>
                <div className={styles.germany}>Germany</div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild1} />
          <div className={styles.frameWrapper1}>
            <div className={styles.tableOfFormsParent}>
              <img
                className={styles.tableOfForms}
                loading="lazy"
                alt=""
                src="/vector-11.svg"
              />
              <div className={styles.dataMap}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
