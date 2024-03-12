import { FunctionComponent } from "react";
import styles from "./ConditionChecker.module.css";

const ConditionChecker: FunctionComponent = () => {
  return (
    <header className={styles.conditionChecker}>
      <div className={styles.inputCollector}>
        <div className={styles.outputGenerator}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className={styles.decisionMaker}>
          <nav className={styles.errorHandler}>
            <div className={styles.vehicles}>Vehicles</div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.sequenceManager}>
              <div className={styles.branchingStructure}>
                <div className={styles.management}>Management</div>
                <div className={styles.connectionHandler}>
                  <img
                    className={styles.divfixedIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
              <div className={styles.sortingNode}>
                <img
                  className={styles.sortingNodeChild}
                  loading="lazy"
                  alt=""
                  src="/line-1.svg"
                />
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.container}>
          <div className={styles.accessPoint}>
            <img
              className={styles.signalEmitterIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.timingController}>
              <div className={styles.priorityManager}>
                <img
                  className={styles.linkHome}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ConditionChecker;
