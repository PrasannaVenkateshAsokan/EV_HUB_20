import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  propPadding,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <section className={styles.frameWrapper} style={frameSectionStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.ownerParent}>
          <div className={styles.owner}>Owner</div>
          <div className={styles.aagGpc}>AAG GPC</div>
        </div>
        <div className={styles.textParser}>
          <div className={styles.listProcessor}>
            <img
              className={styles.image23Icon}
              loading="lazy"
              alt=""
              src="/image-23@2x.png"
            />
            <div className={styles.loopManager} />
          </div>
          <div className={styles.functionCaller}>
            <div className={styles.dataComparer}>
              <div className={styles.chains}>Chains</div>
              <div className={styles.timer}>
                <div className={styles.sequencer}>20</div>
              </div>
            </div>
          </div>
          <div className={styles.collator}>
            <div className={styles.more} />
          </div>
          <div className={styles.finder}>
            <div className={styles.merger}>
              <div className={styles.garages}>Garages</div>
              <div className={styles.converter}>
                <div className={styles.mapper}>59</div>
              </div>
            </div>
          </div>
          <div className={styles.transform}>
            <div className={styles.lchevronffsvg} />
          </div>
          <div className={styles.accumulator}>
            <div className={styles.aggregator}>
              <div className={styles.location}>Location</div>
              <div className={styles.validator}>
                <div className={styles.norway}>Norway</div>
              </div>
            </div>
          </div>
          <div className={styles.switcher}>
            <div className={styles.joiner} />
          </div>
          <div className={styles.mixer}>
            <img
              className={styles.compressorIcon}
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
          </div>
          <div className={styles.reduceChain}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-11.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
