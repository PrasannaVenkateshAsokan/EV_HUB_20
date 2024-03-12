import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LineOwner2.module.css";

export type LineOwner2Type = {
  robertBoschGmbH?: string;
  prop?: string;
  prop1?: string;
  germany?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const LineOwner2: FunctionComponent<LineOwner2Type> = ({
  robertBoschGmbH,
  prop,
  prop1,
  germany,
  propTop,
  propLeft,
  propWidth,
}) => {
  const lineOwnerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className={styles.lineOwner} style={lineOwnerStyle}>
      <div className={styles.robertBoschGmbh}>{robertBoschGmbH}</div>
      <div className={styles.chains}>Chains</div>
      <div className={styles.garages}>Garages</div>
      <div className={styles.location}>Location</div>
      <div className={styles.div} style={divStyle}>
        {prop}
      </div>
      <div className={styles.div1}>{prop1}</div>
      <div className={styles.germany}>{germany}</div>
      <div className={styles.lineOwnerChild} />
      <div className={styles.lineOwnerItem} />
      <div className={styles.lineOwnerInner} />
      <div className={styles.lineDiv} />
      <div className={styles.owner}>Owner</div>
      <img className={styles.groupIcon} alt="" src="/group-11.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
    </div>
  );
};

export default LineOwner2;
