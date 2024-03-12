import { FunctionComponent } from "react";
import styles from "./InputNode.module.css";

const InputNode: FunctionComponent = () => {
  return (
    <div className={styles.inputNode}>
      <header className={styles.outputNode}>
        <div className={styles.conditionNode}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className={styles.mergeNode}>
          <nav className={styles.splitNode}>
            <div className={styles.vehicles}>Vehicles</div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.functionNode}>
              <div className={styles.ifNode}>
                <div className={styles.management}>Management</div>
                <div className={styles.groupNode}>
                  <img
                    className={styles.ungroupNodeIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
              <div className={styles.textNode}>
                <img
                  className={styles.textNodeChild}
                  loading="lazy"
                  alt=""
                  src="/line-1.svg"
                />
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.shapeNode}>
          <div className={styles.lineNode}>
            <img
              className={styles.rectangleNodeIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.circleNode}>
              <div className={styles.ellipseNode}>
                <img
                  className={styles.pathNodeIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <img
                  className={styles.unsplashvlbcscnrngIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default InputNode;
