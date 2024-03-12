import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TextBlockNode.module.css";

export type TextBlockNodeType = {
  editProfile?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
};

const TextBlockNode: FunctionComponent<TextBlockNodeType> = ({
  editProfile,
  propPadding,
  propDisplay,
}) => {
  const frameNodeStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const editProfileStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.textBlockNode}>
      <div className={styles.frameNode} style={frameNodeStyle}>
        <div className={styles.frameNodeChild} />
        <div className={styles.editProfile} style={editProfileStyle}>
          {editProfile}
        </div>
      </div>
    </div>
  );
};

export default TextBlockNode;
