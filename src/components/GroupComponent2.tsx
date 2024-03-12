import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent2.module.css";

export type GroupComponent2Type = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
  propBottom?: CSSProperties["bottom"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];
  propDisplay2?: CSSProperties["display"];
  propDisplay3?: CSSProperties["display"];
  propDisplay4?: CSSProperties["display"];
  propDisplay5?: CSSProperties["display"];
  propDisplay6?: CSSProperties["display"];
  propDisplay7?: CSSProperties["display"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propRight,
  propLeft,
  propBottom,
  propAlignSelf,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propDisplay5,
  propDisplay6,
  propDisplay7,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      right: propRight,
      left: propLeft,
      bottom: propBottom,
      alignSelf: propAlignSelf,
    };
  }, [
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propRight,
    propLeft,
    propBottom,
    propAlignSelf,
  ]);

  const ownerStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const aAGGPCStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const chainsStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const iccheckBoxStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const garagesStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  const topbarStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay5,
    };
  }, [propDisplay5]);

  const locationStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay6,
    };
  }, [propDisplay6]);

  const norwayStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay7,
    };
  }, [propDisplay7]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.frameChild} />
      <div className={styles.locationGroup}>
        <div className={styles.owner} style={ownerStyle}>
          Owner
        </div>
        <div className={styles.aagGpc} style={aAGGPCStyle}>
          AAG GPC
        </div>
      </div>
      <div className={styles.goToLocationPage}>
        <div className={styles.rectanglePageBackground}>
          <img
            className={styles.image23Icon}
            loading="lazy"
            alt=""
            src="/image-23@2x.png"
          />
          <div className={styles.menusContainer} />
        </div>
        <div className={styles.textInputField}>
          <div className={styles.labelText}>
            <div className={styles.chains} style={chainsStyle}>
              Chains
            </div>
            <div className={styles.frameForm}>
              <div className={styles.iccheckBox} style={iccheckBoxStyle}>
                20
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textInputField1}>
          <div className={styles.icchevrondown} />
        </div>
        <div className={styles.goButtonLabel}>
          <div className={styles.garagesList}>
            <div className={styles.garages} style={garagesStyle}>
              Garages
            </div>
            <div className={styles.countryDropdown}>
              <div className={styles.topbar} style={topbarStyle}>
                59
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameSearchBox}>
          <div className={styles.theme} />
        </div>
        <div className={styles.lineSeparator}>
          <div className={styles.frameMapBackground}>
            <div className={styles.location} style={locationStyle}>
              Location
            </div>
            <div className={styles.countryFlags}>
              <div className={styles.norway} style={norwayStyle}>
                Norway
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameNavigationBar}>
          <div className={styles.text} />
        </div>
        <div className={styles.vectorArrowNavigation}>
          <img className={styles.headerIcon} alt="" src="/vector-11.svg" />
        </div>
        <div className={styles.groupWrapper}>
          <img className={styles.groupIcon} alt="" src="/group-11.svg" />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
