import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  propWidth,
  propPadding,
  propAlignSelf,
  propFlex,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  const wraperStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.ownerParent}>
        <div className={styles.owner}>Owner</div>
        <div className={styles.robertBoschGmbh}>Robert Bosch GmbH</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.image21Parent}>
          <img
            className={styles.image21Icon}
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
          <div className={styles.contentFrame} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.chainsParent} style={frameDivStyle}>
            <div className={styles.chains}>Chains</div>
            <div className={styles.wraperWrapper} style={frameDiv1Style}>
              <div className={styles.wraper} style={wraperStyle}>
                5
              </div>
            </div>
          </div>
        </div>
        <div className={styles.icchevrondownWrapper}>
          <div className={styles.icchevrondown} />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.garagesParent}>
            <div className={styles.garages}>Garages</div>
            <div className={styles.popularWrapper}>
              <div className={styles.popular}>20</div>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdown} />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.locationParent}>
            <div className={styles.location}>Location</div>
            <div className={styles.germanyWrapper}>
              <div className={styles.germany}>Germany</div>
            </div>
          </div>
        </div>
        <div className={styles.popular1} />
        <div className={styles.frameWrapper1}>
          <div className={styles.icmoreParent}>
            <img className={styles.icmoreIcon} alt="" src="/vector-11.svg" />
            <div className={styles.groupWrapper}>
              <img className={styles.groupIcon} alt="" src="/group-11.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
