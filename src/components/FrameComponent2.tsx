import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  robertBoschGmbH?: string;
  prop?: string;
  prop1?: string;
  germany?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  robertBoschGmbH,
  prop,
  prop1,
  germany,
  propPadding,
  propPadding1,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <section className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.ownerParent}>
          <div className={styles.owner}>Owner</div>
          <div className={styles.robertBoschGmbh}>{robertBoschGmbH}</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.lineWrapper}>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.chainsParent}>
              <div className={styles.chains}>Chains</div>
              <div className={styles.wrapper} style={frameDiv4Style}>
                <div className={styles.div}>{prop}</div>
              </div>
            </div>
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.garagesParent}>
              <div className={styles.garages}>Garages</div>
              <div className={styles.container}>
                <div className={styles.div1}>{prop1}</div>
              </div>
            </div>
          </div>
          <div className={styles.lineFrame}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div className={styles.germanyWrapper} style={frameDiv5Style}>
                <div className={styles.germany}>{germany}</div>
              </div>
            </div>
          </div>
          <div className={styles.linkTrackOrderWrapper}>
            <div className={styles.linkTrackOrder} />
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
      </div>
    </section>
  );
};

export default FrameComponent2;
