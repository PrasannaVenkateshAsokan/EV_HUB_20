import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.ownerParent}>
            <div className={styles.owner}>Owner</div>
            <div className={styles.stellerAutomotive}>Steller Automotive</div>
          </div>
          <div className={styles.dataAggregatorParent}>
            <div className={styles.dataAggregator}>
              <div className={styles.dataAggregatorChild} />
            </div>
            <div className={styles.dataAggregator1}>
              <div className={styles.chainsParent}>
                <div className={styles.chains}>Chains</div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>12</div>
                </div>
              </div>
            </div>
            <div className={styles.dataAggregator2}>
              <div className={styles.dataAggregatorItem} />
            </div>
            <div className={styles.dataAggregator3}>
              <div className={styles.garagesParent}>
                <div className={styles.garages}>Garages</div>
                <div className={styles.container}>
                  <div className={styles.div1}>28</div>
                </div>
              </div>
            </div>
            <div className={styles.dataAggregator4}>
              <div className={styles.dataAggregatorInner} />
            </div>
            <div className={styles.dataAggregator5}>
              <div className={styles.locationParent}>
                <div className={styles.location}>Location</div>
                <div className={styles.checkpoint}>
                  <div className={styles.italy}>Italy</div>
                </div>
              </div>
            </div>
            <div className={styles.dataAggregator6}>
              <div className={styles.conditionSplitter} />
            </div>
            <div className={styles.inputFilter}>
              <img
                className={styles.outputCombinerIcon}
                loading="lazy"
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <div className={styles.errorHandler}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-11.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.noLogo}>No Logo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
