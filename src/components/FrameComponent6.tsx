import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <header className={styles.leafNode}>
      <div className={styles.connectNode}>
        <div className={styles.rootNode}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className={styles.containerNode}>
          <nav className={styles.inputNode}>
            <div className={styles.vehicles}>Vehicles</div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.loopNode}>
              <div className={styles.conditionalNode}>
                <div className={styles.functionNode}>
                  <img
                    className={styles.functionNodeChild}
                    alt=""
                    src="/line-1.svg"
                  />
                  <div className={styles.management}>Management</div>
                  <img
                    className={styles.functionNodeItem}
                    alt=""
                    src="/line-1.svg"
                  />
                </div>
                <div className={styles.functionNode1}>
                  <div className={styles.management1}>Management</div>
                </div>
              </div>
              <div className={styles.variableNode}>
                <div className={styles.operatorNode}>
                  <img
                    className={styles.comparisonNodeIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className={styles.comparisonNodeIcon1}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.assignmentNode}>
          <div className={styles.logicNode}>
            <img
              className={styles.laagIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.statementNode}>
              <div className={styles.expressionNode}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <img
                  className={styles.groupIcon}
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

export default FrameComponent6;
