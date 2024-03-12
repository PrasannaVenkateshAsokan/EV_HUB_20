import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent from "../components/FrameComponent";
import styles from "./AddOwner.module.css";

const AddOwner: FunctionComponent = () => {
  return (
    <div className={styles.addOwner}>
      <div className={styles.vehicles}>Vehicles</div>
      <div className={styles.jobCards}>Job Cards</div>
      <FrameComponent6 />
      <main className={styles.sequenceNode}>
        <div className={styles.dataSeries}>
          <div className={styles.dataGrid}>
            <div className={styles.dataBlock}>
              <div className={styles.dataPool}>
                <h3 className={styles.owners}>Owner(s)</h3>
                <div className={styles.dataCache}>
                  <div className={styles.dataBuffer}>
                    <div className={styles.dataCacheMemory} />
                    <div className={styles.searchByOwner}>Search by Owner</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dataReservoir}>
              <img
                className={styles.dataWellIcon}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group.svg"
            />
          </div>
        </div>
        <div className={styles.dataSilo} />
        <FrameComponent3 propPadding="0px var(--padding-21xl) var(--padding-7xs)" />
        <FrameComponent2
          robertBoschGmbH="Robert Bosch GmbH"
          prop="5"
          prop1="20"
          germany="Germany"
          propPadding="0px var(--padding-2xl)"
          propPadding1="0px 0px 0px var(--padding-10xs)"
        />
        <FrameComponent2
          robertBoschGmbH="Steller Automotive"
          prop="12"
          prop1="28"
          germany="Italy"
          propPadding="0px var(--padding-base) 0px var(--padding-mid)"
          propPadding1="0px var(--padding-10xs)"
        />
        <FrameComponent5 />
        <FrameComponent4 />
        <FrameComponent />
        <FrameComponent3 propPadding="0px var(--padding-21xl) var(--padding-10xs)" />
        <div className={styles.dataTank}>
          <div className={styles.group} />
        </div>
        <div className={styles.dataPoolDrainer}>
          <div className={styles.dataPoolRegulator}>
            <div className={styles.dataFlowController}>
              <img
                className={styles.dataFlowControllerChild}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className={styles.dataFlowController1}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div className={styles.dataFlowController2}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-5.svg"
              />
            </div>
            <div className={styles.dataFlowController3}>
              <img
                className={styles.dataFlowControllerItem}
                loading="lazy"
                alt=""
                src="/group-2@2x.png"
              />
            </div>
            <div className={styles.dataHub}>
              <div className={styles.dataSynchronicizer}>
                <div className={styles.page}>{`Page `}</div>
                <div className={styles.of1}>1 of 1</div>
              </div>
              <div className={styles.goToPage}>{`Go to Page: `}</div>
            </div>
            <div className={styles.dataDemultiplexer}>
              <div className={styles.dataCompressor}>
                <div className={styles.dataExpander} />
                <div className={styles.dataShifter}>1</div>
              </div>
            </div>
            <div className={styles.dataMirror}>
              <div className={styles.dataSwapper} />
              <div className={styles.go}>Go!</div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.textParser} />
    </div>
  );
};

export default AddOwner;
