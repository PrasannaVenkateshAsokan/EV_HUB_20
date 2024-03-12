import { FunctionComponent } from "react";
import ConditionChecker from "../components/ConditionChecker";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent from "../components/FrameComponent";
import styles from "./LanguagePreference.module.css";

const LanguagePreference: FunctionComponent = () => {
  return (
    <div className={styles.languagePreference}>
      <ConditionChecker />
      <footer className={styles.dataSourceParent}>
        <div className={styles.dataSource}>
          <div className={styles.signalProcessor}>
            <div className={styles.responseGenerator}>
              <div className={styles.thresholdChecker}>
                <h3 className={styles.owners}>Owner(s)</h3>
                <div className={styles.stateManager}>
                  <div className={styles.ruleApplier}>
                    <div className={styles.conditionEvaluator} />
                    <div className={styles.searchByName}>
                      Search by Name, Email
                    </div>
                  </div>
                </div>
                <div className={styles.signalRouter}>
                  <img
                    className={styles.trackOrderIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group.svg"
            />
          </div>
        </div>
        <div className={styles.linkFaqs} />
        <FrameComponent3 />
        <FrameComponent2
          robertBoschGmbH="Robert Bosch GmbH"
          prop="5"
          prop1="20"
          germany="Germany"
        />
        <FrameComponent2
          robertBoschGmbH="Steller Automotive"
          prop="12"
          prop1="28"
          germany="Italy"
          propPadding="0px var(--padding-base) 0px var(--padding-mid)"
          propPadding1="0px var(--padding-10xs)"
        />
        <FrameComponent1 />
        <FrameComponent4 />
        <FrameComponent />
        <FrameComponent3 propPadding="0px var(--padding-21xl) var(--padding-10xs)" />
        <div className={styles.inputTransformerPlus}>
          <div className={styles.linkAboutUs} />
        </div>
        <div className={styles.decisionMakerPlus}>
          <div className={styles.dataProcessorComplex}>
            <div className={styles.errorHandlerPlus}>
              <img
                className={styles.errorHandlerPlusChild}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className={styles.errorHandlerPlus1}>
              <img
                className={styles.emailIdIcon}
                loading="lazy"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div className={styles.errorHandlerPlus2}>
              <img
                className={styles.linkLogoxwebppng}
                loading="lazy"
                alt=""
                src="/vector-5.svg"
              />
            </div>
            <div className={styles.errorHandlerPlus3}>
              <img
                className={styles.errorHandlerPlusItem}
                loading="lazy"
                alt=""
                src="/group-2@2x.png"
              />
            </div>
            <div className={styles.valueCalculatorPlus}>
              <div className={styles.dataFilterPlus}>
                <div className={styles.page}>{`Page `}</div>
                <div className={styles.of1}>1 of 1</div>
              </div>
              <div className={styles.goToPage}>{`Go to Page: `}</div>
            </div>
            <div className={styles.dataSourcePlus}>
              <div className={styles.signalProcessorPlus}>
                <div className={styles.menu} />
                <div className={styles.linkTerms}>1</div>
              </div>
            </div>
            <div className={styles.patternRecognizerPlus}>
              <div className={styles.linkPrivacy} />
              <div className={styles.go}>Go!</div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.conditionEvaluatorPlus} />
    </div>
  );
};

export default LanguagePreference;
