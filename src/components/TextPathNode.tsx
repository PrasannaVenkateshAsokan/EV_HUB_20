import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TextPathNode.module.css";

export type TextPathNodeType = {
  /** Style props */
  propFlexWrap?: CSSProperties["flexWrap"];
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];
};

const TextPathNode: FunctionComponent<TextPathNodeType> = ({
  propFlexWrap,
  propDisplay,
  propDisplay1,
}) => {
  const waveShapeNodeStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const saveStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const closeStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  return (
    <div className={styles.textPathNode}>
      <div className={styles.letsFindAnOfficeNearYou} />
      <div className={styles.spiralShapeNode}>
        <div className={styles.waveShapeNode} style={waveShapeNodeStyle}>
          <div className={styles.complexShapeNode}>
            <div className={styles.complexShapeNodeChild} />
            <div className={styles.save} style={saveStyle}>
              Save
            </div>
          </div>
          <div className={styles.complexShapeNode1}>
            <div className={styles.complexShapeNodeItem} />
            <div className={styles.close} style={closeStyle}>
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPathNode;
