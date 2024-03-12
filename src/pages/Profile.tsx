import { FunctionComponent } from "react";
import FrameSet from "../components/FrameSet";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import styles from "./Profile.module.css";

const Profile: FunctionComponent = () => {
  return (
    <div className={styles.profile}>
      <FrameSet />
      <div className={styles.profileChild} />
      <main className={styles.groupFrameOwnerWrapper}>
        <div className={styles.groupFrameOwner}>
          <GroupComponent2 />
          <GroupComponent1 />
          <GroupComponent
            stellerAutomotive="Steller Automotive"
            text="12"
            icchevrondown="28"
            italy="Italy"
          />
          <GroupComponent2
            propWidth="1359px"
            propMargin="unset"
            propPosition="unset"
            propTop="unset"
            propRight="unset"
            propLeft="unset"
            propBottom="unset"
            propAlignSelf="unset"
            propDisplay="inline-block"
            propDisplay1="inline-block"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
            propDisplay6="inline-block"
            propDisplay7="inline-block"
          />
          <GroupComponent1
            propWidth="52px"
            propPadding="0px var(--padding-xs) 0px var(--padding-2xl)"
            propAlignSelf="stretch"
            propFlex="1"
          />
          <GroupComponent
            stellerAutomotive="Steller Automotive"
            text="12"
            icchevrondown="28"
            italy="Italy"
            propWidth="1359px"
            propMargin="unset"
            propPosition="unset"
            propTop="unset"
            propRight="unset"
            propLeft="unset"
            propDisplay="inline-block"
            propDisplay1="inline-block"
            propDisplay2="inline-block"
            propPadding="0px var(--padding-base) 0px var(--padding-mid)"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
            propDisplay6="inline-block"
            propPadding1="0px var(--padding-10xs)"
            propDisplay7="inline-block"
          />
          <GroupComponent2
            propWidth="1359px"
            propMargin="unset"
            propPosition="unset"
            propTop="unset"
            propRight="unset"
            propLeft="unset"
            propBottom="unset"
            propAlignSelf="unset"
            propDisplay="inline-block"
            propDisplay1="inline-block"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
            propDisplay6="inline-block"
            propDisplay7="inline-block"
          />
        </div>
      </main>
      <div className={styles.profileInner}>
        <div className={styles.frameChild} />
      </div>
      <footer className={styles.frameFooter}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div className={styles.icchevrondownWrapper}>
            <img
              className={styles.icchevrondownIcon}
              alt=""
              src="/vector-4.svg"
            />
          </div>
          <div className={styles.textStackWrapper}>
            <img className={styles.textStackIcon} alt="" src="/vector-5.svg" />
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.pageParent}>
              <div className={styles.page}>{`Page `}</div>
              <div className={styles.of1}>1 of 1</div>
            </div>
          </div>
          <div className={styles.goToNextPageButton}>
            <div className={styles.goToPageBtn}>
              <div className={styles.goToPage}>{`Go to Page: `}</div>
            </div>
            <div className={styles.textGoToPage}>
              <div className={styles.textGoToPageChild} />
              <div className={styles.text}>1</div>
            </div>
          </div>
          <div className={styles.rectangle}>
            <div className={styles.iccheckBox} />
            <div className={styles.go}>Go!</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
