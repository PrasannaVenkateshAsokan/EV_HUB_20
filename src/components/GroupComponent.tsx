import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  stellerAutomotive?: string;
  text?: string;
  icchevrondown?: string;
  italy?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];
  propDisplay2?: CSSProperties["display"];
  propPadding?: CSSProperties["padding"];
  propDisplay3?: CSSProperties["display"];
  propDisplay4?: CSSProperties["display"];
  propDisplay5?: CSSProperties["display"];
  propDisplay6?: CSSProperties["display"];
  propPadding1?: CSSProperties["padding"];
  propDisplay7?: CSSProperties["display"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  stellerAutomotive,
  text,
  icchevrondown,
  italy,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propRight,
  propLeft,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propPadding,
  propDisplay3,
  propDisplay4,
  propDisplay5,
  propDisplay6,
  propPadding1,
  propDisplay7,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      right: propRight,
      left: propLeft,
    };
  }, [propWidth, propMargin, propPosition, propTop, propRight, propLeft]);

  const owner1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const stellerAutomotiveStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const chains1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const garages1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  const icchevrondownStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay5,
    };
  }, [propDisplay5]);

  const location1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay6,
    };
  }, [propDisplay6]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const italyStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay7,
    };
  }, [propDisplay7]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.frameChild} />
      <div className={styles.ownerParent}>
        <div className={styles.owner} style={owner1Style}>
          Owner
        </div>
        <div
          className={styles.stellerAutomotive}
          style={stellerAutomotiveStyle}
        >
          {stellerAutomotive}
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.chainsParent}>
            <div className={styles.chains} style={chains1Style}>
              Chains
            </div>
            <div className={styles.textWrapper} style={frameDiv2Style}>
              <div className={styles.text} style={textStyle}>
                {text}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bigMusicLibraryWrapper}>
          <div className={styles.bigMusicLibrary} />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.garagesParent}>
            <div className={styles.garages} style={garages1Style}>
              Garages
            </div>
            <div className={styles.icchevrondownWrapper}>
              <div className={styles.icchevrondown} style={icchevrondownStyle}>
                {icchevrondown}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.weHaveThePerfectMusicWithWrapper}>
          <div className={styles.weHaveThePerfectMusicWith} />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.locationParent}>
            <div className={styles.location} style={location1Style}>
              Location
            </div>
            <div className={styles.italyWrapper} style={frameDiv3Style}>
              <div className={styles.italy} style={italyStyle}>
                {italy}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.logoWrapper}>
          <div className={styles.logo} />
        </div>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
        </div>
        <div className={styles.groupWrapper}>
          <img className={styles.groupIcon} alt="" src="/group-11.svg" />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
