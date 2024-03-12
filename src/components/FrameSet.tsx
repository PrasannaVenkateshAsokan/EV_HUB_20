import { FunctionComponent } from "react";
import styles from "./FrameSet.module.css";

const FrameSet: FunctionComponent = () => {
  return (
    <div className={styles.frameSet}>
      <header className={styles.childFrames}>
        <div className={styles.locationGroup}>
          <div className={styles.garageLabel}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <div className={styles.textBox}>
              <div className={styles.vehicles}>Vehicles</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.pageIndicator}>
              <div className={styles.goButton}>
                <h3 className={styles.owners}>Owner(s)</h3>
              </div>
              <div className={styles.frameRow}>
                <div className={styles.frameRowChild} />
                <div className={styles.frameColumn}>
                  <div className={styles.searchByOwner}>Search by Owner</div>
                </div>
                <img
                  className={styles.cardIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerLabel}>
          <img className={styles.cardIcon1} alt="" src="/vector-2.svg" />
          <div className={styles.germanyFlag}>
            <div className={styles.italyFlag}>
              <div className={styles.jobCards}>Job Cards</div>
              <div className={styles.frameAnchor}>
                <div className={styles.management}>Management</div>
                <div className={styles.pageTitle}>
                  <img
                    className={styles.pageTitleChild}
                    alt=""
                    src="/line-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameRowContainer}>
          <div className={styles.frameColumnContainer}>
            <div className={styles.frameWithChildren}>
              <img
                className={styles.groupContainerIcon}
                alt=""
                src="/vector.svg"
              />
              <div className={styles.customVector}>
                <div className={styles.childVector}>
                  <img
                    className={styles.wraperIcon}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.cardsIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.rectangleCorner}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group.svg"
                />
                <div className={styles.frameChild} />
                <div className={styles.lineStartCap}>
                  <div className={styles.pageNumber}>
                    <div className={styles.frameWithText}>
                      <div className={styles.groupTitle}>
                        <img
                          className={styles.groupIcon}
                          alt=""
                          src="/group.svg"
                        />
                        <div className={styles.profile}>Profile</div>
                      </div>
                    </div>
                    <div className={styles.frameWithShape} />
                  </div>
                </div>
                <div className={styles.lineDivider}>
                  <div className={styles.customShape}>
                    <img
                      className={styles.customShapeChild}
                      loading="lazy"
                      alt=""
                      src="/group-160.svg"
                    />
                  </div>
                  <div className={styles.language}>Language</div>
                </div>
                <div className={styles.lineRoundedCorners}>
                  <div className={styles.textAlignLeft} />
                </div>
                <div className={styles.textAlignCenter}>
                  <div className={styles.textAlignRight}>
                    <div className={styles.frameWithSpacing}>
                      <img
                        className={styles.ownerDetailsIcon}
                        alt=""
                        src="/vector-51.svg"
                      />
                    </div>
                    <div className={styles.logout}>Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameSet;
