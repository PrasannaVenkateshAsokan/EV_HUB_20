import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LineOwner1.module.css";

export type LineOwner1Type = {
  robertBoschGmbH?: string;
  prop?: string;
  prop1?: string;
  germany?: string;
  image21?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propWidth?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propLeft1?: CSSProperties["left"];
  propWidth3?: CSSProperties["width"];
};

const LineOwner1: FunctionComponent<LineOwner1Type> = ({
  robertBoschGmbH,
  prop,
  prop1,
  germany,
  image21,
  propTop,
  propWidth,
  propLeft,
  propWidth1,
  propWidth2,
  propLeft1,
  propWidth3,
}) => {
  const lineOwner1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const robertBoschGmbHStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const germanyStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const image21IconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth3,
    };
  }, [propLeft1, propWidth3]);

  return (
    <div className={styles.lineOwner} style={lineOwner1Style}>
      <div className={styles.robertBoschGmbh} style={robertBoschGmbHStyle}>
        {robertBoschGmbH}
      </div>
      <div className={styles.chains}>Chains</div>
      <div className={styles.garages}>Garages</div>
      <div className={styles.location}>Location</div>
      <div className={styles.div} style={div1Style}>
        {prop}
      </div>
      <div className={styles.div1} style={div2Style}>
        {prop1}
      </div>
      <div className={styles.germany} style={germanyStyle}>
        {germany}
      </div>
      <div className={styles.lineOwnerChild} />
      <div className={styles.lineOwnerItem} />
      <div className={styles.lineOwnerInner} />
      <div className={styles.lineDiv} />
      <div className={styles.owner}>Owner</div>
      <img className={styles.groupIcon} alt="" src="/group-11.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
      <img
        className={styles.image21Icon}
        loading="lazy"
        alt=""
        src={image21}
        style={image21IconStyle}
      />
    </div>
  );
};

export default LineOwner1;
