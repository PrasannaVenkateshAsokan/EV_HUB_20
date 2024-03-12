import { FunctionComponent } from "react";
import TextBlockNode from "./TextBlockNode";
import TextPathNode from "./TextPathNode";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.ownerParent}>
          <div className={styles.owner}>Owner</div>
          <div className={styles.aagGpc}>AAG GPC</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.image23Parent}>
            <img
              className={styles.image23Icon}
              loading="lazy"
              alt=""
              src="/image-23@2x.png"
            />
            <div className={styles.frameItem} />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.chainsParent}>
              <div className={styles.chains}>Chains</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>20</div>
              </div>
            </div>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.garagesParent}>
              <div className={styles.garages}>Garages</div>
              <div className={styles.container}>
                <div className={styles.div1}>59</div>
              </div>
            </div>
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div className={styles.norwayWrapper}>
                <div className={styles.norway}>Norway</div>
              </div>
            </div>
          </div>
          <div className={styles.lineFrame}>
            <div className={styles.frameChild1} />
          </div>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
          </div>
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-11.svg"
            />
          </div>
        </div>
        <div className={styles.image21Parent}>
          <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.noLogo}>No Logo</div>
          </div>
          <div className={styles.frameChild2} />
          <TextBlockNode
            editProfile="Preferred Language "
            propPadding="var(--padding-15xl) var(--padding-xl) var(--padding-xl) var(--padding-7xl)"
            propDisplay="inline-block"
          />
          <div className={styles.featureExtractor}>
            <div className={styles.modelBuilder}>
              <div className={styles.selectLanguageContainer}>
                <span>{`Select Language `}</span>
                <span className={styles.span}>*</span>
              </div>
              <div className={styles.trainer}>
                <div className={styles.trainerChild} />
                <div className={styles.classifier}>
                  <div className={styles.analyzer}>
                    <img
                      className={styles.analyzerChild}
                      alt=""
                      src="/group-160.svg"
                    />
                    <div className={styles.explorer}>
                      <div className={styles.englishUnitedStates}>
                        English (United States)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dataProcessor}>
                  <img
                    className={styles.linkAggregatorIcon}
                    alt=""
                    src="/vector-91.svg"
                  />
                  <img
                    className={styles.dataProcessorChild}
                    alt=""
                    src="/line-24.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <TextPathNode
            propFlexWrap="unset"
            propDisplay="inline-block"
            propDisplay1="inline-block"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
